import { useRef, useEffect, useCallback } from 'react';

// --- Types ---
interface Node {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    cluster: number; // 0 = validation, 1 = compliance, 2 = infrastructure, 3 = generic
    opacity: number;
    pulsePhase: number;
}

interface Edge {
    from: number;
    to: number;
    opacity: number;
}

interface Pulse {
    edgeIndex: number;
    progress: number; // 0 → 1
    speed: number;
    opacity: number;
}

// --- Cluster definitions ---
const CLUSTER_COLORS = [
    { r: 59, g: 130, b: 246 },   // blue - Validation Systems
    { r: 34, g: 197, b: 94 },    // green - Compliance Automation
    { r: 139, g: 92, b: 246 },   // purple - Applied AI Infrastructure
    { r: 148, g: 163, b: 184 },  // slate - generic / future
];

const CLUSTER_LABELS = [
    'Validation Systems',
    'Compliance Automation',
    'Applied AI Infrastructure',
];

// Cluster center positions (as fractions of canvas width/height)
const CLUSTER_CENTERS = [
    { x: 0.25, y: 0.30 },
    { x: 0.70, y: 0.25 },
    { x: 0.50, y: 0.72 },
];

// --- Helpers ---
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function generateNodes(w: number, h: number): Node[] {
    const nodes: Node[] = [];
    const padding = 40;

    // Generate cluster nodes
    for (let c = 0; c < 3; c++) {
        const cx = CLUSTER_CENTERS[c].x * w;
        const cy = CLUSTER_CENTERS[c].y * h;
        const count = 6 + Math.floor(Math.random() * 4); // 6-9 nodes per cluster

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
            const dist = 30 + Math.random() * 60;
            const x = cx + Math.cos(angle) * dist;
            const y = cy + Math.sin(angle) * dist;
            nodes.push({
                x, y, baseX: x, baseY: y,
                radius: 2 + Math.random() * 1.5,
                cluster: c,
                opacity: 0.3 + Math.random() * 0.4,
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }
    }

    // Generate scattered generic nodes to fill the grid
    const cols = 8;
    const rows = 6;
    const cellW = (w - padding * 2) / cols;
    const cellH = (h - padding * 2) / rows;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (Math.random() > 0.45) continue; // sparse
            const x = padding + col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.6;
            const y = padding + row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.6;

            // Skip if too close to a cluster center
            const tooClose = CLUSTER_CENTERS.some(
                (cc) => distance({ x, y }, { x: cc.x * w, y: cc.y * h }) < 100
            );
            if (tooClose) continue;

            nodes.push({
                x, y, baseX: x, baseY: y,
                radius: 1.5 + Math.random(),
                cluster: 3,
                opacity: 0.15 + Math.random() * 0.2,
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }
    }

    return nodes;
}

function generateEdges(nodes: Node[]): Edge[] {
    const edges: Edge[] = [];
    const maxDist = 120;

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const d = distance(nodes[i], nodes[j]);
            if (d > maxDist) continue;

            // Higher chance for same-cluster connections
            const sameCluster = nodes[i].cluster === nodes[j].cluster;
            const chance = sameCluster ? 0.7 : 0.15;
            if (Math.random() > chance) continue;

            edges.push({
                from: i,
                to: j,
                opacity: sameCluster
                    ? 0.08 + (1 - d / maxDist) * 0.07
                    : 0.03 + (1 - d / maxDist) * 0.04,
            });
        }
    }

    // Connect clusters to each other with a few bridge edges
    for (let c1 = 0; c1 < 3; c1++) {
        for (let c2 = c1 + 1; c2 < 3; c2++) {
            const c1Nodes = nodes.map((n, i) => ({ n, i })).filter((x) => x.n.cluster === c1);
            const c2Nodes = nodes.map((n, i) => ({ n, i })).filter((x) => x.n.cluster === c2);

            // Find closest pair
            let minD = Infinity;
            let bestI = 0;
            let bestJ = 0;
            for (const a of c1Nodes) {
                for (const b of c2Nodes) {
                    const d = distance(a.n, b.n);
                    if (d < minD) {
                        minD = d;
                        bestI = a.i;
                        bestJ = b.i;
                    }
                }
            }
            edges.push({ from: bestI, to: bestJ, opacity: 0.06 });
        }
    }

    return edges;
}

function generatePulses(edges: Edge[]): Pulse[] {
    const pulses: Pulse[] = [];
    const count = Math.min(6, Math.floor(edges.length * 0.08));
    const used = new Set<number>();

    for (let i = 0; i < count; i++) {
        let idx: number;
        do {
            idx = Math.floor(Math.random() * edges.length);
        } while (used.has(idx));
        used.add(idx);

        pulses.push({
            edgeIndex: idx,
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.004, // slow 6-10s traversal
            opacity: 0.4 + Math.random() * 0.3,
        });
    }

    return pulses;
}

// --- Component ---
export function ValidationGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const stateRef = useRef<{
        nodes: Node[];
        edges: Edge[];
        pulses: Pulse[];
        animId: number;
        time: number;
    } | null>(null);

    const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
        const state = stateRef.current;
        if (!state) return;

        const { nodes, edges, pulses } = state;
        state.time += 1;
        const t = state.time;

        ctx.clearRect(0, 0, w, h);

        // Subtle node breathing
        for (const node of nodes) {
            const breathe = Math.sin(t * 0.015 + node.pulsePhase) * 1.5;
            node.x = node.baseX + breathe * 0.3;
            node.y = node.baseY + Math.cos(t * 0.012 + node.pulsePhase) * 0.3;
        }

        // Draw edges
        for (const edge of edges) {
            const a = nodes[edge.from];
            const b = nodes[edge.to];
            const color = CLUSTER_COLORS[a.cluster] || CLUSTER_COLORS[3];

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${edge.opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
        }

        // Draw pulses
        for (const pulse of pulses) {
            const edge = edges[pulse.edgeIndex];
            if (!edge) continue;

            const a = nodes[edge.from];
            const b = nodes[edge.to];
            const px = a.x + (b.x - a.x) * pulse.progress;
            const py = a.y + (b.y - a.y) * pulse.progress;
            const color = CLUSTER_COLORS[a.cluster] || CLUSTER_COLORS[3];

            // Glowing pulse dot
            const gradient = ctx.createRadialGradient(px, py, 0, px, py, 8);
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${pulse.opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Advance pulse
            pulse.progress += pulse.speed;
            if (pulse.progress > 1) {
                pulse.progress = 0;
                // Occasionally jump to a different edge
                if (Math.random() > 0.6) {
                    pulse.edgeIndex = Math.floor(Math.random() * edges.length);
                }
            }
        }

        // Draw nodes
        for (const node of nodes) {
            const color = CLUSTER_COLORS[node.cluster] || CLUSTER_COLORS[3];
            const pulse = 1 + Math.sin(t * 0.02 + node.pulsePhase) * 0.15;

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${node.opacity})`;
            ctx.fill();

            // Subtle glow for cluster nodes
            if (node.cluster < 3) {
                const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
                glow.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${node.opacity * 0.15})`);
                glow.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();
            }
        }

        // Draw cluster labels
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.letterSpacing = '0.5px';
        for (let c = 0; c < 3; c++) {
            const cx = CLUSTER_CENTERS[c].x * w;
            const cy = CLUSTER_CENTERS[c].y * h;
            const color = CLUSTER_COLORS[c];

            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.18)`;
            ctx.textAlign = 'center';
            ctx.fillText(CLUSTER_LABELS[c], cx, cy - 80);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';

            const ctx = canvas.getContext('2d');
            if (ctx) ctx.scale(dpr, dpr);

            // Regenerate on resize
            const w = rect.width;
            const h = rect.height;
            const nodes = generateNodes(w, h);
            const edges = generateEdges(nodes);
            const pulses = generatePulses(edges);

            stateRef.current = { nodes, edges, pulses, animId: 0, time: 0 };
        };

        resizeCanvas();

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = container.getBoundingClientRect();

        const animate = () => {
            draw(ctx, rect.width, rect.height);
            stateRef.current!.animId = requestAnimationFrame(animate);
        };

        stateRef.current!.animId = requestAnimationFrame(animate);

        const resizeObserver = new ResizeObserver(() => {
            if (stateRef.current) cancelAnimationFrame(stateRef.current.animId);
            resizeCanvas();
            const newRect = container.getBoundingClientRect();
            const newCtx = canvas.getContext('2d');
            if (!newCtx) return;

            const animateAfterResize = () => {
                draw(newCtx, newRect.width, newRect.height);
                stateRef.current!.animId = requestAnimationFrame(animateAfterResize);
            };
            stateRef.current!.animId = requestAnimationFrame(animateAfterResize);
        });

        resizeObserver.observe(container);

        return () => {
            if (stateRef.current) cancelAnimationFrame(stateRef.current.animId);
            resizeObserver.disconnect();
        };
    }, [draw]);

    return (
        <div ref={containerRef} className="w-full h-full min-h-[400px] relative">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            {/* Fade overlay at edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            linear-gradient(to right, white 0%, transparent 8%, transparent 92%, white 100%),
            linear-gradient(to bottom, white 0%, transparent 8%, transparent 92%, white 100%)
          `,
                }}
            />
        </div>
    );
}

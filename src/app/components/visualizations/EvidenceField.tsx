import { useEffect, useId, useRef, useState } from "react";
import { useSiteMotion } from "../SiteMotion";
import type { createEvidenceRenderer, EvidenceMode } from "./evidenceRenderer";
import "./evidence-field.css";

type EvidenceRenderer = ReturnType<typeof createEvidenceRenderer>;

function EvidenceFallback({ active }: { active: EvidenceMode }) {
  const id = useId().replace(/:/g, "");
  const arrangements = [
    [
      [380, 386, 1],
      [380, 286, 1],
      [380, 186, 1],
    ],
    [
      [232, 350, 0.76],
      [380, 285, 0.76],
      [528, 220, 0.76],
    ],
    [
      [190, 360, 0.6],
      [380, 285, 0.6],
      [570, 210, 0.6],
    ],
  ];
  return (
    <svg
      className="evidence-field__fallback"
      viewBox="0 0 760 620"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {["#243b50", "#2c445c", "#385168"].map((color, index) => (
          <linearGradient
            key={index}
            id={`${id}-plate-${index}`}
            x1="-170"
            y1="-135"
            x2="170"
            y2="135"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color} />
            <stop offset="0.64" stopColor="#16283b" />
            <stop offset="1" stopColor="#0a1726" />
          </linearGradient>
        ))}
        <radialGradient id={`${id}-halo`}>
          <stop stopColor="#176bd4" stopOpacity="0.15" />
          <stop offset="1" stopColor="#176bd4" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`${id}-dots`}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="0.8" fill="#659ed7" opacity="0.25" />
        </pattern>
      </defs>
      <ellipse cx="380" cy="370" rx="350" ry="230" fill={`url(#${id}-halo)`} />
      <path d="M40 380 380 530 720 380 380 230Z" fill={`url(#${id}-dots)`} />
      {arrangements[active].map(([x, y, scale], index) => (
        <g key={index}>
          <path
            d={`M 22 ${y + 35} H ${x - 160 * scale} L ${x - 80 * scale} ${y}`}
            stroke="#3a7cbd"
            strokeOpacity="0.7"
          />
          <path
            d={`M ${x + 80 * scale} ${y} L ${x + 160 * scale} ${y - 35} H 738`}
            stroke="#4c8ac8"
            strokeOpacity="0.7"
          />
          <g
            transform={`translate(${x} ${y}) scale(${scale}) matrix(0.92 0.35 -0.72 0.45 0 0)`}
          >
            <rect
              x="-170"
              y="-129"
              width="340"
              height="270"
              rx="11"
              fill="#08172d"
              stroke="#306ead"
              strokeWidth="2"
            />
            <rect
              x="-170"
              y="-135"
              width="340"
              height="270"
              rx="11"
              fill={`url(#${id}-plate-${index})`}
              stroke="#a3d4ff"
              strokeWidth="2"
            />
            <rect
              x="-167"
              y="-132"
              width="334"
              height="264"
              rx="9"
              stroke="#1a70da"
              strokeWidth="7"
              strokeOpacity="0.16"
            />
            <path
              d="M-135-91H-12M-135-73H-71M83-91H134M108-73H134"
              stroke="#c2d8ed"
              strokeWidth="2"
            />
            {active === 0 && index === 0 && (
              <g stroke="#aac5de" strokeWidth="2">
                <path d="M-135-51H135M30-35V88M84-35V88M-135-24H-9M-135-3H-30M-135 18H-18M-135 39H-42M-135 60H-10M-135 81H-38M-135 107H-51M53 107H135" />
                {[0, 1, 2, 3, 4, 5].map((row) => (
                  <path
                    key={row}
                    d={`M44 ${-24 + row * 21}H68M98 ${-24 + row * 21}H131`}
                  />
                ))}
              </g>
            )}
            {active === 0 && index === 1 && (
              <g stroke="#aac5de" strokeWidth="2">
                <rect x="-135" y="-45" width="270" height="72" />
                <path d="M-125-8H125M-125-5H-97V-26H-64V-1H-39V-32H-2V8H34V-19H73V-3H125" />
                {[0, 1, 2].map((row) => (
                  <g key={row}>
                    <rect x="-135" y={48 + row * 24} width="10" height="10" />
                    <path
                      d={`M-111 ${53 + row * 24}H${row === 1 ? 36 : 12}M69 ${53 + row * 24}H131`}
                    />
                  </g>
                ))}
              </g>
            )}
            {active === 0 && index === 2 && (
              <g stroke="#aac5de" strokeWidth="2">
                {[0, 1, 2, 3].map((row) => (
                  <g key={row}>
                    <rect x="-135" y={-39 + row * 35} width="17" height="17" />
                    <path
                      d={`M-132 ${-31 + row * 35}l4 4 6-8M-103 ${-34 + row * 35}H21M-103 ${-21 + row * 35}H${row % 2 === 0 ? -15 : -34}`}
                    />
                  </g>
                ))}
                <rect x="57" y="-39" width="78" height="123" />
                <path d="M83-39V84M109-39V84M57-8H135M57 22H135M57 53H135" />
              </g>
            )}
            {active === 1 && (
              <g stroke="#8bb8e8" strokeWidth="2">
                <path d="M-135 86H135" />
                {[50, 89, 65, 120, 91, 145].map((height, column) => (
                  <rect
                    key={column}
                    x={-124 + column * 44}
                    y={86 - height}
                    width="24"
                    height={height}
                  />
                ))}
              </g>
            )}
            {active === 2 && (
              <g stroke="#8bb8e8" strokeWidth="2">
                <rect x="-134" y="21" width="56" height="44" rx="3" />
                <rect x="-28" y="-28" width="56" height="44" rx="3" />
                <rect x="78" y="21" width="56" height="44" rx="3" />
                <path d="M-78 43H-54V-6H-28M28-6H54V43H78M-128 104H128" />
              </g>
            )}
          </g>
        </g>
      ))}
    </svg>
  );
}

/** Decorative illustration; its meaning and mode controls remain in hero HTML. */
export function EvidenceField({
  active,
  className = "",
}: {
  active: EvidenceMode;
  className?: string;
}) {
  const { stopped, reduced } = useSiteMotion();
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<EvidenceRenderer>();
  const settingsRef = useRef({ active, stopped });
  settingsRef.current = { active, stopped };
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || reduced) {
      setReady(false);
      return;
    }
    let cancelled = false;
    let started = false;
    const initialize = () => {
      if (started) return;
      started = true;
      // Keep the Three.js runtime out of the initial page bundle.
      void import("./evidenceRenderer")
        .then(({ createEvidenceRenderer }) => {
          if (cancelled) return;
          try {
            rendererRef.current = createEvidenceRenderer({
              host,
              canvas,
              ...settingsRef.current,
              onReady: () => {
                if (!cancelled) setReady(true);
              },
              onUnavailable: () => {
                if (!cancelled) setReady(false);
              },
            });
          } catch {
            // The full illustration stays available without WebGL.
            setReady(false);
          }
        })
        .catch(() => {
          if (!cancelled) setReady(false);
        });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          initialize();
        }
      },
      { rootMargin: "160px" },
    );
    observer.observe(host);
    return () => {
      cancelled = true;
      observer.disconnect();
      rendererRef.current?.dispose();
      rendererRef.current = undefined;
    };
  }, [reduced]);

  useEffect(() => {
    rendererRef.current?.setActive(active);
  }, [active]);
  useEffect(() => {
    rendererRef.current?.setStopped(stopped);
  }, [stopped]);

  return (
    <div
      ref={hostRef}
      className={`evidence-field ${className}`}
      data-renderer={ready && !reduced ? "webgl" : "static"}
      data-active={active}
      aria-hidden="true"
    >
      <EvidenceFallback active={active} />
      <canvas ref={canvasRef} className="evidence-field__canvas" />
    </div>
  );
}

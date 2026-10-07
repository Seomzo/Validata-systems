export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="m5 6 7 13L19 6M8.5 6l3.5 6.5L15.5 6"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span>
        validata<span className="brand-dot">.</span>
        <small>SYSTEMS</small>
      </span>
    </span>
  );
}

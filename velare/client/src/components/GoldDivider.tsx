/*
 * GoldDivider — Signature gold accent line
 * Thin horizontal rule with gradient fade, used between sections.
 */
export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full max-w-xs mx-auto ${className}`}
      style={{
        background: "linear-gradient(90deg, transparent, #C4A265, transparent)",
      }}
    />
  );
}

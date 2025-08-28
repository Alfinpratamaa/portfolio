"use client";

import { useState } from "react";

export default function CursorBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen bg-neutral-900/50 verflow-hidden"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Layer gradasi mengikuti mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px at ${pos.x}px ${pos.y}px,
            rgba(147, 51, 234, 0.35),   /* purple-600 */
            rgba(251, 146, 60, 0.15),   /* orange-400 */
            transparent 80%
          )`,
          transition: "background 0.1s ease",
        }}
      />

      {/* Konten utama di atas */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

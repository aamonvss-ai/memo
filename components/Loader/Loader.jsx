import React from "react";

export default function BlueBuffCoreLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]">
      <div className="relative w-40 h-40">

        {/* ========= OUTER AURA ========= */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-40 animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, var(--accent), transparent, #22d3ee, transparent)",
            animationDuration: "10s",
          }}
        />

        {/* ========= ENERGY RING ========= */}
        <div
          className="absolute inset-4 rounded-full border"
          style={{
            borderColor: "rgba(34,211,238,0.4)",
            boxShadow: "0 0 25px rgba(34,211,238,0.35)",
          }}
        />

        {/* ========= SCAN SWEEP ========= */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <div
            className="absolute inset-0 animate-spin"
            style={{
              background:
                "linear-gradient(120deg, transparent 40%, rgba(34,211,238,.6), transparent 60%)",
              animationDuration: "3.5s",
            }}
          />
        </div>

        {/* ========= CORE ========= */}
        <div className="absolute inset-10 flex items-center justify-center">
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-2xl animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,.9), transparent 65%)",
            }}
          />

          {/* Core body */}
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #67e8f9, var(--accent))",
              boxShadow:
                "0 0 30px rgba(34,211,238,.9), inset 0 0 12px rgba(255,255,255,.3)",
            }}
          >
            <span
              className="text-2xl font-black tracking-tight"
              style={{
                color: "var(--foreground)",
                textShadow: "0 0 12px rgba(0,0,0,.7)",
              }}
            >
              mM
            </span>
          </div>
        </div>

        {/* ========= ORBIT ========= */}
        {[0, 120, 240].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 animate-spin"
            style={{
              animationDuration: `${6 + i}s`,
              animationDirection: i % 2 ? "reverse" : "normal",
            }}
          >
            <div
              className="absolute w-2.5 h-2.5 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(72px) translateY(-50%)`,
                background: "#67e8f9",
                boxShadow: "0 0 12px #67e8f9",
              }}
            />
          </div>
        ))}
      </div>

      {/* ========= TEXT ========= */}
      <div className="absolute bottom-24 text-center">
        <p className="text-sm tracking-widest uppercase text-[var(--muted)]">
          Blue Buff Charging
        </p>
        <p className="text-xs opacity-60 mt-1">
          Synchronizing energy core…
        </p>
      </div>
    </div>
  );
}

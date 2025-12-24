import {
  FaBolt,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
  FaUsers,
  FaRobot,
} from "react-icons/fa";

export default function TrustHighlights() {
  const items = [
    {
      title: "24/7",
      subtitle: "Instant Delivery",
      icon: FaBolt,
      ring: "ring-yellow-400/30",
      text: "text-yellow-400",
      glow: "shadow-yellow-400/20",
    },
    {
      title: "100%",
      subtitle: "Safe & Legit",
      icon: FaShieldAlt,
      ring: "ring-green-400/30",
      text: "text-green-400",
      glow: "shadow-green-400/20",
    },
    {
      title: "Easy",
      subtitle: "Secure Payments",
      icon: FaCreditCard,
      ring: "ring-blue-400/30",
      text: "text-blue-400",
      glow: "shadow-blue-400/20",
    },
    {
      title: "24/7",
      subtitle: "Live Support",
      icon: FaHeadset,
      ring: "ring-purple-400/30",
      text: "text-purple-400",
      glow: "shadow-purple-400/20",
    },
    {
      title: "Trusted",
      subtitle: "By Thousands",
      icon: FaUsers,
      ring: "ring-amber-400/30",
      text: "text-amber-400",
      glow: "shadow-amber-400/20",
    },
    {
      title: "Fast",
      subtitle: "Auto Topups",
      icon: FaRobot,
      ring: "ring-cyan-400/30",
      text: "text-cyan-400",
      glow: "shadow-cyan-400/20",
    },
  ];

  return (
    <section className="py-14 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto">

        {/* Heading (optional but recommended) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Why Players Trust Us
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            Secure • Fast • Verified MLBB Topups
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  group relative
                  bg-[var(--card)]
                  border border-[var(--border)]
                  rounded-2xl p-6
                  flex flex-col items-center text-center
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                "
              >
                {/* Animated accent ring */}
                <div
                  className={`
                    absolute -inset-px rounded-2xl opacity-0
                    group-hover:opacity-100 transition
                    ring-2 ${item.ring}
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    relative z-10
                    w-14 h-14 rounded-xl
                    flex items-center justify-center
                    bg-black/40
                    ring-1 ring-white/10
                    ${item.text}
                    shadow-lg ${item.glow}
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon className="text-xl" />
                </div>

                {/* Text */}
                <p
                  className={`mt-4 text-xl font-extrabold tracking-tight ${item.text}`}
                >
                  {item.title}
                </p>

                <p className="text-sm text-[var(--muted)] mt-1">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

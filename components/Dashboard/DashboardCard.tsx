interface DashboardCardProps {
  tab: {
    key: string;
    label: string;
    value: string | number;
  };
  activeTab: string;
  onClick: () => void;
}

export default function DashboardCard({
  tab,
  activeTab,
  onClick,
}: DashboardCardProps) {
  return (
    <div
      onClick={onClick}
      className={`w-full max-w-full min-w-0
                  p-4 sm:p-5 rounded-2xl cursor-pointer
                  border transition-all duration-300
                  shadow-sm hover:shadow-lg
                  overflow-hidden
        ${
          activeTab === tab.key
            ? "border-[var(--accent)] bg-[var(--card)]"
            : "border-[var(--border)] bg-[var(--card)]/60 hover:bg-[var(--card)]"
        }`}
    >
      <p className="text-sm text-[var(--muted)] truncate">
        {tab.label}
      </p>

      <h2 className="text-xl sm:text-2xl font-bold mt-1
                     break-all leading-tight">
        {tab.value}
      </h2>
    </div>
  );
}

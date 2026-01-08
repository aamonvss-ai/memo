"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type OrderType = {
  orderId: string;
  gameSlug: string;
  itemName: string;
  playerId: string;
  zoneId: string;
  paymentMethod: string;
  price: number;
  status: string;
  topupStatus?: string;
  createdAt: string;
};

interface OrderItemProps {
  order: OrderType;
}

export default function OrderItem({ order }: OrderItemProps) {
  const [open, setOpen] = useState(false);

  const finalStatus = order.topupStatus || order.status;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500/10 text-green-400 border border-green-500/30";
      case "failed":
        return "bg-red-500/10 text-red-400 border border-red-500/30";
      default:
        return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30";
    }
  };

  const getGameName = (slug: string) => {
    if (slug.toLowerCase().includes("mlbb")) {
      return "Mobile Legends";
    }
    return slug;
  };

  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-full max-w-full overflow-hidden
                 p-4 sm:p-5 rounded-2xl
                 border border-[var(--border)]
                 bg-[var(--card)] shadow-sm
                 cursor-pointer transition-all
                 hover:shadow-lg hover:border-[var(--accent)]/40"
    >
      {/* ================= TOP ================= */}
      <div className="flex items-start justify-between gap-3 min-w-0">
        <div className="min-w-0">
          <p className="font-mono text-sm font-semibold break-all">
            {order.orderId}
          </p>

          <p className="text-xs text-[var(--muted)] mt-1">
            {new Date(order.createdAt).toLocaleString()}
          </p>

          <p className="text-lg sm:text-xl font-semibold mt-1">
            ₹{order.price}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <span
            className={`px-3 py-1 text-xs rounded-lg font-semibold whitespace-nowrap ${getStatusStyle(
              finalStatus
            )}`}
          >
            {finalStatus.toUpperCase()}
          </span>

          <FiChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {/* ================= EXPANDED ================= */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="pt-4 border-t border-[var(--border)] text-sm space-y-2 min-w-0">

          <Row label="Game" value={getGameName(order.gameSlug)} />
          <Row label="Player ID" value={order.playerId} />
          <Row label="Zone ID" value={order.zoneId} />
          <Row
            label="Payment"
            value={order.paymentMethod.toUpperCase()}
          />

          <div className="p-3 rounded-xl bg-[var(--background)]/40 border border-[var(--border)] mt-2">
            <p className="text-[var(--muted)] text-xs mb-1">
              Item Details
            </p>
            <p className="font-medium break-words">
              {order.itemName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= ROW ================= */

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 min-w-0">
      <span className="text-[var(--muted)] shrink-0">
        {label}:
      </span>
      <span className="font-medium break-all min-w-0">
        {value}
      </span>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  FiCreditCard,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

interface WalletTabProps {
  walletBalance: number;
  setWalletBalance: (balance: number) => void;
}

export default function WalletTab({
  walletBalance,
  setWalletBalance,
}: WalletTabProps) {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [storedPhone, setStoredPhone] = useState("");

  // Load phone
  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (phone) setStoredPhone(phone);
  }, []);

  const handleProceed = async () => {
    if (!amount || Number(amount) < 1) {
      setAmountError("Minimum amount is ₹1");
      return;
    }

    if (!method) {
      alert("Please select a payment method");
      return;
    }

    if (!storedPhone) {
      alert("Phone number not found. Please log in again.");
      return;
    }

    setLoading(true);
    const userId = localStorage.getItem("userId");

    const res = await fetch("/api/wallet/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: Number(amount),
        mobile: storedPhone,
        userId,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      alert(data.message);
      return;
    }

    localStorage.setItem("pending_order", data.orderId);
    window.location.href = data.paymentUrl;
  };

  return (
    <div className="w-full max-w-xl mx-auto px-3 sm:px-0 space-y-6 overflow-hidden">

      {/* ================= HEADER ================= */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <FiCreditCard />
        Wallet Balance
      </h2>

      {/* ================= BALANCE ================= */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]
                      p-4 sm:p-5 shadow-sm flex items-center gap-3 overflow-hidden">
        <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] shrink-0">
          <FiDollarSign size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-[var(--muted)]">
            Current Balance
          </p>
          <p className="text-xl sm:text-2xl font-bold break-all">
            ₹{walletBalance}
          </p>
        </div>
      </div>

      {/* ================= ADD MONEY ================= */}
      <div className="rounded-2xl bg-[var(--background)]
                      border border-[var(--border)]
                      p-4 sm:p-6 shadow-lg overflow-hidden">
        <div className="space-y-4">

          {/* Amount */}
          <div className="min-w-0">
            <label className="font-semibold text-sm flex items-center gap-2">
              <FiDollarSign size={14} />
              Enter Amount
            </label>

            <input
              type="number"
              value={amount}
              placeholder="Minimum ₹1"
              onChange={(e) => {
                setAmount(e.target.value);
                setAmountError("");
              }}
              className="w-full max-w-full p-3 mt-1 rounded-xl
                         border bg-[var(--card)]
                         border-[var(--border)]
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--accent)]"
            />

            {amountError && (
              <p className="text-red-500 text-sm mt-1">
                {amountError}
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div className="min-w-0">
            <label className="font-semibold text-sm flex items-center gap-2">
              <FiCreditCard size={14} />
              Select Payment Method
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 min-w-0">

              <button
                type="button"
                onClick={() => setMethod("upi")}
                className={`w-full p-3 rounded-xl border text-sm font-medium
                  transition flex items-center justify-center gap-2 ${
                    method === "upi"
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--border)] hover:bg-[var(--card)]"
                  }`}
              >
                <FiCreditCard />
                UPI
              </button>

              <button
                type="button"
                onClick={() => setMethod("usdt")}
                className={`w-full p-3 rounded-xl border text-sm font-medium
                  transition flex items-center justify-center gap-2 ${
                    method === "usdt"
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--border)] hover:bg-[var(--card)]"
                  }`}
              >
                <FiCreditCard />
                USDT (TRC20)
              </button>

            </div>
          </div>

          {/* Proceed */}
          <button
            onClick={handleProceed}
            // disabled={loading}
                        disabled={true}

            className="w-full p-3 mt-2 rounded-xl
                       bg-[var(--accent)]
                       text-white font-semibold
                       flex items-center justify-center gap-2
                       disabled:opacity-50"
          >
            {loading ? "Processing..." : "Proceed to Pay"}
            {!loading && <FiArrowRight />}
          </button>

        </div>
      </div>
    </div>
  );
}

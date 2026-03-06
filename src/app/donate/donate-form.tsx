"use client";

import { useState } from "react";

const amounts = [
  { value: 500, label: "\u20B9500" },
  { value: 1000, label: "\u20B91,000" },
  { value: 2500, label: "\u20B92,500" },
  { value: 5000, label: "\u20B95,000" },
];

const frequencyOptions = ["Monthly", "One-time", "Annual"];

const designationOptions = [
  "Where needed most",
  "Education",
  "Healthcare",
  "Women & Children",
  "Disaster Relief",
  "Village Outreach",
];

const inputClass =
  "w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition";
const labelClass =
  "font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5";

export function DonateForm() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");

  function handleAmountClick(value: number) {
    setSelectedAmount(value);
    setCustomAmount("");
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
        <span className="block w-8 h-[2px] bg-red" />
        Make a Gift
      </p>
      <h2 className="font-garamond text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight mb-10">
        Choose an <em>amount</em>
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Amount grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amounts.map((amt) => (
            <button
              key={amt.value}
              type="button"
              onClick={() => handleAmountClick(amt.value)}
              className={`py-5 px-4 text-center border border-border cursor-pointer transition-colors duration-200 ${
                selectedAmount === amt.value
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy hover:bg-navy hover:text-white hover:border-navy"
              }`}
            >
              <span className="font-garamond text-[1.35rem] block">
                {amt.label}
              </span>
              <span className="font-mono-dm text-[0.5rem] tracking-[0.15em] uppercase opacity-50 block mt-1">
                Monthly
              </span>
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div>
          <label className={labelClass}>Custom Amount</label>
          <input
            type="number"
            name="customAmount"
            placeholder="Enter amount in \u20B9"
            value={customAmount}
            onChange={handleCustomChange}
            className={inputClass}
          />
        </div>

        {/* Frequency */}
        <div>
          <label className={labelClass}>Frequency</label>
          <select name="frequency" className={inputClass}>
            {frequencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Designation */}
        <div>
          <label className={labelClass}>Designate To</label>
          <select name="designation" className={inputClass}>
            {designationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-3" />

        {/* Your Details */}
        <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3">
          <span className="block w-8 h-[2px] bg-red" />
          Your Details
        </p>

        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              name="firstName"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Email & Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" name="phone" className={inputClass} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red text-white font-mono-dm text-[0.7rem] uppercase tracking-[0.15em] py-4 px-8 border-none cursor-pointer transition-colors duration-200 hover:bg-red-light mt-2"
        >
          Proceed to Secure Payment
        </button>

        {/* Note */}
        <p className="font-mono-dm text-[0.55rem] tracking-[0.1em] text-muted text-center">
          80G tax receipt issued for all donations. FCRA compliant.
        </p>
      </form>
    </div>
  );
}

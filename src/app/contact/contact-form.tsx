"use client";

import { useState } from "react";

const interestOptions = [
  "Donating / Supporting",
  "Volunteering",
  "Partnership",
  "Learning More",
  "Media / Press",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border p-10 text-center">
        <p className="font-garamond text-[1.45rem] mb-2">Thank you!</p>
        <p className="font-mulish text-[0.9rem] font-light text-muted">
          We have received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition"
          />
        </div>
        <div>
          <label className="font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition"
        />
      </div>

      {/* Interest */}
      <div>
        <label className="font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5">
          I am interested in
        </label>
        <select
          name="interest"
          required
          className="w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition"
        >
          <option value="">Select an option</option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="font-mono-dm text-[0.58rem] tracking-[0.18em] uppercase text-navy block mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full py-3 px-3.5 border border-border bg-white font-mulish text-[0.9rem] font-light text-navy outline-none focus:border-navy transition resize-y min-h-[130px]"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-red text-white font-mono-dm text-[0.7rem] uppercase tracking-[0.15em] py-4 px-8 border-none cursor-pointer transition-colors duration-200 hover:bg-red-light"
      >
        Send Message
      </button>
    </form>
  );
}

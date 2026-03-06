export const metadata = {
  title: "Aenon Ministries and Trust — Coming Soon",
  description:
    "Our website is being refreshed. We'll be back shortly.",
};

export default function MaintenancePage() {
  return (
    <div
      style={{
        position: "fixed" as const,
        inset: 0,
        zIndex: 9999,
        fontFamily: "'Mulish', sans-serif",
        color: "#1B2A4A",
        backgroundColor: "#111D33",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        overflowX: "hidden" as const,
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none" as const,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.2rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          <span
            className="font-garamond"
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.01em",
            }}
          >
            Aenon Ministries and Trust
          </span>
          <span
            className="font-mono-dm"
            style={{
              fontSize: "0.55rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 300,
            }}
          >
            Serving India · Est. 1989
          </span>
        </div>
        <div
          style={{
            width: 6,
            height: 6,
            background: "#C0282A",
            borderRadius: "50%",
          }}
        />
      </nav>

      {/* Main */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
          textAlign: "center" as const,
        }}
      >
        {/* Icon */}
        <div
          className="animate-fade-up"
          style={{
            width: 80,
            height: 80,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            style={{ width: 32, height: 32, color: "#C0282A", opacity: 0.8 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
            />
          </svg>
        </div>

        {/* Label */}
        <div
          className="font-mono-dm animate-fade-up-delay-1"
          style={{
            fontSize: "0.6rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.18em",
            color: "#C0282A",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: "#C0282A",
              opacity: 0.4,
              display: "block",
            }}
          />
          Under Maintenance
          <span
            style={{
              width: 20,
              height: 1,
              background: "#C0282A",
              opacity: 0.4,
              display: "block",
            }}
          />
        </div>

        {/* Heading */}
        <h1
          className="font-garamond animate-fade-up-delay-2"
          style={{
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.15,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            marginBottom: "1.2rem",
          }}
        >
         Our new website
          <br />
          is <em style={{ color: "#D93A3C" }}>coming soon</em>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up-delay-3"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: "2.5rem",
          }}
        >
          Our website is currently being updated to better serve our community. 
          We appreciate your patience while we complete this work.
        </p>

        {/* Divider */}
        <div
          className="animate-fade-up-delay-4"
          style={{
            width: 40,
            height: 1,
            background: "rgba(255,255,255,0.1)",
            marginBottom: "2.5rem",
          }}
        />

        {/* Contact */}
        <p
          className="font-mono-dm animate-fade-up-delay-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Reach us at{" "}
          <a
            href="mailto:aenonchurch@gmail.com"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: 1,
            }}
          >
            info.aenonministries.org
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center" as const,
          padding: "1.5rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          className="font-mono-dm"
          style={{
            fontSize: "0.58rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          &copy; 2026 Aenon Ministries and Trust. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

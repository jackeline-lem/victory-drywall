import React, { useState } from "react";

const inputStyle = {
  padding: "14px 16px",
  border: "1px solid #ddd",
  borderRadius: 8,
  fontSize: 16,
  width: "100%",
  fontFamily: "Arial, sans-serif"
};

export default function App() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const yellow = "#f2c400";
  const black = "#101116";

  return (
      <main style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#111" }}>        
        {/* NAV */}
      <header
        className="site-header"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 30px",
          background: "#0b0f1a"
        }}
      >
        {/* LOGO */}
        <img
          src="/victory_drywall_logo.jpg"
          alt="Victory Drywall Systems LLC"
          style={{
            height: 140,
            objectFit: "contain"
          }}
        />

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginLeft: "auto" // 🔥 pushes it to the far right
          }}
        >
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/share/18Xob9pnGW/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              style={{
                width: 32,
                height: 32,
                filter: "invert(100%) sepia(100%) grayscale(200%) brightness(150%)"
              }}
            />
          </a>

          {/* PHONE */}
        <a
          href="tel:+19715333695"
          style={{
            color: "#f4c400",
            fontWeight: 800,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 18,
            marginLeft: 6 // subtle separation from Facebook
          }}
        >
          ☎ (971) 533-3695
        </a>
        </div>
      </header>
        {/* HERO */}
        <section className="hero" 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "600px"
          }}
        >
          {/* LEFT SIDE (TEXT) */}
          <div style={{ padding: "80px 60px", background: "#f4f1ea" }}>
            <p style={{ color: "#e0b000", fontWeight: 700 }}>
              EXPERT DRYWALL SERVICES IN MOLALLA, OR
            </p>

            <h1 style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1
            }}>
              SMOOTH<br />WALLS.<br />STRONG <br />SPACES.
              
            </h1>
            <p style={{ fontSize: 23, color: "#222", marginBottom: 30, fontWeight: 650 }}>
              No cracks. No mess. Done right the first time.
            </p>
            <p style={{ fontSize: 18, marginBottom: 20 }}>
              Quality craftsmanship. Honest service.<br />
              Walls and ceilings that stand the test of time.
            </p>

            <div style={{ marginBottom: 25 }}>
              ✓ Reliable & On Time &nbsp;&nbsp;
              ✓ Clean & Respectful &nbsp;&nbsp;
              ✓ Built to Last
            </div>
            {/* CONTACT FORM (HERO) */}
      <p style={{ fontWeight: 600, marginTop: 20 }}>
        Get a free estimate — no pressure.
      </p>
      <form
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const phone = form.phone.value;
      const message = form.message.value;

      const text = `Hi, this is ${name}. My number is ${phone}. ${message}`;

      window.location.href = `sms:+19715333695?body=${encodeURIComponent(text)}`;
    }}
    style={{
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      maxWidth: 400
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      style={inputStyle}
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Your Phone Number"
      style={inputStyle}
      required
    />

    <textarea
      name="message"
      placeholder="Tell us about your project..."
      rows={3}
      style={inputStyle}
      required
    />

    <button
      style={{
        background: "#f4c400",
        color: "#000",
        padding: "14px 22px",
        fontWeight: 800,
        fontSize: 16,
        border: "none",
        width: "100%",
        maxWidth: 400,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
      }}
    >
      💬 TEXT US
    </button>
  
  </form>
        <a
          href="tel:+19715333695"
          style={{
            background: "#f4c400",
            color: "#000",
            padding: "14px 22px",
            fontWeight: 800,
            textDecoration: "none",
            display: "inline-block",
            borderRadius: 0,
            marginTop: 10,
            textAlign: "center",
            width: "100%",
            maxWidth: 400
          }}
        >
          ☎ CALL (971) 533-3695
        </a>

            <p style={{ marginTop: 25 }}>Let’s bring your space to life.</p>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div
            style={{
              backgroundImage: "url('/drywall-5.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </section>

        {/* SERVICES */}
        <section className="services" style={{ background: "#fbfaf5", padding: "45px 58px", textAlign: "center" }}>
          <h2 style={{ fontSize: 35, fontWeight: 900, textTransform: "uppercase", margin: 0, color: "#000" }}>
            Our Drywall Services
          </h2>

          <div style={{ width: 70, height: 4, background: yellow, margin: "10px auto 18px" }} />

          <p style={{ color: "#000" }}>
            From new builds to repairs, we deliver flawless results<br />
            with attention to every detail.
          </p>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(240px, 300px))",
              gap: 24,
              marginTop: 35,
              justifyContent: "center"
            }}
          >
        {[
        ["⌂", "Drywall Installation", "Precise and efficient installation for new construction or renovations.", "/drywall-1.jpeg"],
        ["✎", "Drywall Repair", "We fix cracks, holes, and water damage — restoring your walls like it never happened.", "/drywall-2.jpeg"],
        ["✹", "Custom Drywall Designs", "Unique ceilings, accent walls, and custom details to match your style and vision.", "/drywall-3.jpeg"],
        ["▰", "Drywall Finishing", "Expert taping, mudding, and sanding for a smooth, paint-ready finish.", "/drywall-4.jpeg"]
      ].map(([icon, title, text, image]) => (
        <div
          key={title}
          style={{
            background: "#f4f4f4",
            border: "1px solid #ccc",
            boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          {/* WHITE TEXT AREA */}
            <div
              style={{
                background: "#fff",
                padding: "24px 20px",
                minHeight: "auto",
                textAlign: "center"
              }}
            >
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: "50%",
                background: yellow,
                margin: "0 auto 18px",
                display: "grid",
                placeItems: "center",
                fontSize: 30
              }}
            >
              {icon}
            </div>

            <h3
              style={{
                fontSize: 19,
                lineHeight: 1.05,
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#000",
                marginBottom: 20
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.45,
                color: "#222",
                maxWidth: 270,
                margin: "0 auto"
              }}
            >
              {text}
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div
            style={{
              height: 280,
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center-top",
              transform: "scale(1.09)"

            }}
          />
        </div>
    ))}
            
          </div>
        </section>

        {/* REVIEWS */}
          <section className="reviews-section" style={{ background: "#fbfaf5", padding: "45px 58px", color: "#000" }}>          <h2 style={{ textAlign: "center", fontSize: 35, fontWeight: 900, textTransform: "uppercase", margin: 0, color: "#000"}}>
            What Our Clients Say
          </h2>
          <div style={{ width: 70, height: 4, background: yellow, margin: "10px auto 35px" }} />

        <div
          className="reviews-grid"
            style={{ display: "grid", gap: 35 }}        >            
          {[
              ["Kendra Strunk", "Victor did a huge job for us and it looks so nice. A lot of contractors commented on what a great job of texturing Victor did."],
              ["Iris Bonillo", "So impressed with the work this company did for us! Victory Drywall made rain damage look like nothing happened."],
              ["Angela Donley", "Responsive, communicative, and genuinely friendly. The whole process was quick, smooth, and fairly priced."]
            ].map(([name, quote]) => (
              <div key={name} style={{ borderLeft: "1px solid #ccc", paddingLeft: 24 }}>
                <div style={{ color: yellow, fontSize: 35 }}>“</div>
                <div style={{ color: yellow }}>★★★★★</div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "#222" }}>{quote}</p>                <p>— {name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section 
          className="cta-section"
          style={{ background: yellow, padding: "35px 58px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 38, fontWeight: 900, textTransform: "uppercase", margin: 0 }}>Ready To Get Started?</h2>
            <p>Let’s build something beautiful together.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "black", color: yellow, display: "grid", placeItems: "center", fontSize: 35 }}>☎</div>
            <div style={{ borderLeft: "1px solid #0006", paddingLeft: 25 }}>
              <div style={{ fontSize: 38, fontWeight: 900, textTransform: "uppercase" }}>Call (971) 533-3695</div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>for a free estimate</div>
            </div>
          </div>
          
        </section>
      
        {/* FOOTER */}
      <footer className="footer-grid"
        style={{
          background: black,
          color: "white",
          padding: "35px 58px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 30,
          fontSize: 14,
          textAlign: "center",
          alignItems: "center"
        
        }}
      >
        <p>
          <b>📍 Molalla, OR</b><br />
          Proudly serving Clackamas County<br />
          and surrounding areas
        </p>

        <p>
          <b>🛡️ Licensed & Insured</b><br />
          Professional. Dependable.<br />
          CCB #245312<br />
        </p>

        <p>
          <b>👪 Family-Owned</b><br />
          Built on hard work, honesty,<br />
          and integrity.
        </p>

     <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 16
        }}>
          <div style={{
            textAlign: "right",
            fontWeight: 700,
            lineHeight: 1.3
          }}>
            VICTORY<br />
            DRYWALL <br />
            SYSTEMS <br />
            LLC
          </div>

          <img
            src="/victory_drywall_logo.jpg"
            alt="Victory Drywall Systems LLC"
            style={{
              width: 110
            }}
          />
        </div>
      </footer>
      {showQuoteForm && (
        <div>
          {/* quote form modal */}
        </div>
      )}

      <a
        className="sticky-call"
        href="tel:+19715333695"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#f4c400",
          color: "#000",
          padding: "14px 18px",
          fontWeight: 800,
          textDecoration: "none",
          borderRadius: 6,
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 1000
        }}
      >
        ☎ Call Now
      </a>
    </main>
  );
}

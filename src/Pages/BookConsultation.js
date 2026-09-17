import React, { useState } from "react";

function BookConsultation() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    // YOUR WHATSAPP NUMBER
    // Country code + number
    // No +, spaces or brackets

    const whatsappNumber = "919876543210";


    const whatsappMessage = `
🚀 *NEW FREE CONSULTATION REQUEST*

👤 *Name:* ${formData.name}

📞 *Phone:* ${formData.phone}

📧 *Email:* ${formData.email}

🏢 *Company:* ${formData.company || "Not provided"}

🎯 *Service:* ${formData.service}

📝 *Project Details:*
${formData.message || "Not provided"}

━━━━━━━━━━━━━━━━━━
*Rohil Digital Spark Media*
Free Consultation Request
━━━━━━━━━━━━━━━━━━
`;


    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  };


 return (
  <>
    <style>{`
      .consultation-page {
        min-height: 100vh;
        padding: 120px 6% 70px;
        background: #030307;
        color: white;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      /* LIGHT THEME */
      body.light-theme .consultation-page {
        background: #f6f7ff;
        color: #171725;
      }

      body.light-theme .consultation-content h1 {
        color: #171725;
      }

      body.light-theme .consultation-content > p {
        color: #606174;
      }

      body.light-theme .consultation-benefit {
        color: #55566a;
      }

      body.light-theme .consultation-card {
        background: rgba(255, 255, 255, 0.95);
        border-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 25px 70px rgba(50, 50, 100, 0.15);
      }

      body.light-theme .consultation-card h2 {
        color: #171725;
      }

      body.light-theme .consultation-card > p {
        color: #6b6c7d;
      }

      body.light-theme .consultation-field label {
        color: #55566a;
      }

      body.light-theme .consultation-field input,
      body.light-theme .consultation-field select,
      body.light-theme .consultation-field textarea {
        background: #ffffff;
        color: #171725;
        border-color: rgba(0, 0, 0, 0.15);
      }

      body.light-theme .consultation-field input::placeholder,
      body.light-theme .consultation-field textarea::placeholder {
        color: #8a8b99;
      }

      body.light-theme .consultation-field select {
        background: #ffffff;
        color: #171725;
      }

      body.light-theme .consultation-field select option {
        background: #ffffff;
        color: #171725;
      }

      /* BACKGROUND GLOW */
      .consultation-page::before {
        content: "";
        position: absolute;
        width: 450px;
        height: 450px;
        top: -180px;
        left: -150px;
        border-radius: 50%;
        background: #8b5cf6;
        filter: blur(160px);
        opacity: 0.16;
        animation: consultationGlow 7s infinite alternate;
        pointer-events: none;
      }

      .consultation-page::after {
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        right: -150px;
        bottom: -150px;
        border-radius: 50%;
        background: #2563eb;
        filter: blur(160px);
        opacity: 0.13;
        animation: consultationGlow2 8s infinite alternate;
        pointer-events: none;
      }

      @keyframes consultationGlow {
        to {
          transform: translate(120px, 100px);
        }
      }

      @keyframes consultationGlow2 {
        to {
          transform: translate(-100px, -100px);
        }
      }

      .consultation-container {
        max-width: 1100px;
        margin: auto;
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 70px;
        align-items: center;
      }

      .consultation-content h1 {
        margin: 22px 0 18px;
        font-size: clamp(42px, 5vw, 68px);
        line-height: 1.05;
        color: white;
      }

      .consultation-content h1 span {
        background: linear-gradient(
          90deg,
          #a855f7,
          #6366f1,
          #22d3ee
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .consultation-content > p {
        color: #858592;
        font-size: 14px;
        line-height: 1.9;
        max-width: 500px;
      }

      .consultation-badge {
        display: inline-block;
        padding: 8px 15px;
        border-radius: 30px;
        color: #c084fc;
        background: rgba(139, 92, 246, 0.08);
        border: 1px solid rgba(139, 92, 246, 0.25);
        font-size: 9px;
        font-weight: 700;
        letter-spacing: 2px;
      }

      .consultation-benefits {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 13px;
      }

      .consultation-benefit {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #aaaab5;
        font-size: 12px;
      }

      .consultation-check {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9px;
        background: rgba(139, 92, 246, 0.1);
        color: #c084fc;
      }

      .consultation-card {
        padding: 38px;
        border-radius: 26px;
        background: linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.07),
          rgba(255, 255, 255, 0.025)
        );
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;
      }

      .consultation-card h2 {
        margin-bottom: 7px;
        font-size: 26px;
        color: white;
      }

      .consultation-card > p {
        color: #777784;
        font-size: 11px;
        margin-bottom: 25px;
      }

      .consultation-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .consultation-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .consultation-field {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .consultation-field label {
        color: #aaaab5;
        font-size: 10px;
        font-weight: 600;
      }

      .consultation-field input,
      .consultation-field select,
      .consultation-field textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 13px 14px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.035);
        color: white;
        outline: none;
        font-size: 11px;
        transition: 0.3s;
      }

      .consultation-field input:focus,
      .consultation-field select:focus,
      .consultation-field textarea:focus {
        border-color: rgba(168, 85, 247, 0.6);
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.08);
      }

      .consultation-field select {
        appearance: none;
        -webkit-appearance: none;
        background: #0b0b12;
      }

      .consultation-field select option {
        background: #0b0b12;
        color: white;
      }

      .consultation-field textarea {
        height: 100px;
        resize: none;
      }

      .consultation-field input::placeholder,
      .consultation-field textarea::placeholder {
        color: #555560;
      }

      .consultation-submit {
        margin-top: 8px;
        border: none;
        padding: 15px;
        border-radius: 11px;
        color: white;
        font-weight: 700;
        font-size: 12px;
        cursor: pointer;
        background: linear-gradient(
          100deg,
          #a52df4,
          #614cff,
          #176df5
        );
        box-shadow: 0 0 30px rgba(120, 50, 255, 0.25);
        transition: 0.3s;
      }

      .consultation-submit:hover {
        transform: translateY(-3px);
        box-shadow: 0 0 40px rgba(120, 50, 255, 0.45);
      }

      @media (max-width: 800px) {
        .consultation-page {
          padding: 100px 5% 50px;
        }

        .consultation-container {
          grid-template-columns: 1fr;
          gap: 45px;
        }

        .consultation-content {
          text-align: center;
        }

        .consultation-content > p {
          margin: auto;
        }

        .consultation-benefits {
          text-align: left;
        }
      }

      @media (max-width: 500px) {
        .consultation-content h1 {
          font-size: 42px;
        }

        .consultation-card {
          padding: 25px 18px;
        }

        .consultation-row {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <section className="consultation-page">
      <div className="consultation-container">
        <div className="consultation-content">
          <span className="consultation-badge">
            FREE CONSULTATION
          </span>

          <h1>
            Let's Build
            <br />
            <span>Something Great.</span>
          </h1>

          <p>
            Tell us about your business, your goals, and the challenges
            you're facing. Our digital marketing experts will help you
            discover the right strategy for growth.
          </p>

          <div className="consultation-benefits">
            <div className="consultation-benefit">
              <span className="consultation-check">✓</span>
              Free 30-minute strategy discussion
            </div>

            <div className="consultation-benefit">
              <span className="consultation-check">✓</span>
              Personalized marketing recommendations
            </div>

            <div className="consultation-benefit">
              <span className="consultation-check">✓</span>
              No obligation — completely free
            </div>

            <div className="consultation-benefit">
              <span className="consultation-check">✓</span>
              Expert advice for your business
            </div>
          </div>
        </div>

        <div className="consultation-card">
          <h2>Book Your Free Consultation</h2>

          <p>
            Fill in your details and send your request directly to WhatsApp.
          </p>

          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >
            <div className="consultation-row">
              <div className="consultation-field">
                <label>YOUR NAME</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="consultation-field">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="consultation-field">
              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-field">
              <label>BUSINESS / COMPANY</label>

              <input
                type="text"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="consultation-field">
              <label>SERVICE YOU NEED</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="SEO">SEO</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Branding">Branding</option>
                <option value="Website Development">
                  Website Development
                </option>
              </select>
            </div>

            <div className="consultation-field">
              <label>TELL US ABOUT YOUR PROJECT</label>

              <textarea
                name="message"
                placeholder="Tell us about your goals..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="consultation-submit"
            >
              Send Consultation to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  </>
);
}

export default BookConsultation;
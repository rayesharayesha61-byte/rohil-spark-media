import React, { useState } from "react";

function AI() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const suggestions = [
    "How can I improve my SEO?",
    "Which ads are best for my business?",
    "How can I grow on social media?",
    "How do I build my brand?"
  ];

  const askAI = (text) => {

    const userMessage = text || message;

    if (!userMessage.trim()) return;

    setMessages([
      ...messages,
      {
        type: "user",
        text: userMessage
      },
      {
        type: "ai",
        text:
          "Thanks for your question! Our AI marketing assistant can help you explore SEO, Google Ads, Meta Ads, Social Media and Branding strategies."
      }
    ]);

    setMessage("");
  };


  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }


        .ai-page {

          min-height: 100vh;

          color: white;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(110, 70, 255, .20),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 25%,
              rgba(0, 220, 200, .14),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;

          position: relative;
        }


        /* BACKGROUND ORBS */

        .ai-orb {

          position: absolute;

          width: 280px;
          height: 280px;

          border-radius: 50%;

          filter: blur(100px);

          opacity: .18;

          pointer-events: none;
        }


        .ai-orb-one {

          top: 10%;
          left: -100px;

          background: #765cff;

          animation:
            aiFloat 7s
            ease-in-out
            infinite alternate;
        }


        .ai-orb-two {

          right: -100px;
          top: 45%;

          background: #00d8c5;

          animation:
            aiFloatTwo 8s
            ease-in-out
            infinite alternate;
        }


        @keyframes aiFloat {

          from {
            transform:
              translateY(0)
              scale(.8);
          }

          to {
            transform:
              translateY(120px)
              scale(1.2);
          }

        }


        @keyframes aiFloatTwo {

          from {
            transform:
              translateY(80px)
              scale(1);
          }

          to {
            transform:
              translateY(-100px)
              scale(.8);
          }

        }


        /* MAIN */

        .ai-container {

          position: relative;

          z-index: 2;

          max-width: 1100px;

          min-height: 100vh;

          margin: auto;

          padding:
            120px 25px 60px;

          display: flex;

          flex-direction: column;

          align-items: center;
        }


        /* HEADER */

        .ai-header {

          text-align: center;

          max-width: 700px;

          animation:
            aiFade .8s ease;
        }


        @keyframes aiFade {

          from {

            opacity: 0;

            transform:
              translateY(30px);
          }

          to {

            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .ai-badge {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            8px 16px;

          border-radius: 50px;

          background:
            rgba(120,90,255,.09);

          border:
            1px solid
            rgba(130,100,255,.25);

          color: #a79aff;

          font-size: 11px;

          letter-spacing: 2px;
        }


        .ai-header h1 {

          margin:
            25px 0 15px;

          font-size:
            clamp(45px, 7vw, 78px);

          line-height: 1;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #ffffff,
              #8e7cff,
              #42dcd0,
              #ffffff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          animation:
            aiGradient 5s
            linear
            infinite;
        }


        @keyframes aiGradient {

          to {
            background-position:
              300% center;
          }

        }


        .ai-header p {

          margin: 0;

          color: #858592;

          line-height: 1.8;

          font-size: 14px;
        }


        /* AI ICON */

        .ai-big-icon {

          width: 85px;
          height: 85px;

          margin:
            35px auto 25px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 25px;

          font-size: 42px;

          background:
            linear-gradient(
              135deg,
              rgba(120,90,255,.18),
              rgba(0,210,190,.12)
            );

          border:
            1px solid
            rgba(140,120,255,.25);

          box-shadow:
            0 0 45px
            rgba(100,80,255,.15);

          animation:
            aiPulse 3s
            ease-in-out
            infinite;
        }


        @keyframes aiPulse {

          0%, 100% {

            transform:
              translateY(0)
              rotate(0deg);

          }

          50% {

            transform:
              translateY(-10px)
              rotate(3deg);

          }

        }


        /* CHAT BOX */

        .ai-chat {

          width: 100%;

          max-width: 800px;

          margin-top: 20px;

          border-radius: 24px;

          background:
            rgba(255,255,255,.035);

          border:
            1px solid
            rgba(255,255,255,.09);

          backdrop-filter:
            blur(20px);

          box-shadow:
            0 30px 80px
            rgba(0,0,0,.35);

          overflow: hidden;

          animation:
            aiChatIn 1s ease;
        }


        @keyframes aiChatIn {

          from {

            opacity: 0;

            transform:
              scale(.96)
              translateY(25px);
          }

          to {

            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }

        }


        .ai-chat-top {

          padding:
            18px 22px;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);

          display: flex;

          align-items: center;

          gap: 12px;
        }


        .ai-status {

          width: 9px;
          height: 9px;

          border-radius: 50%;

          background: #31dfc9;

          box-shadow:
            0 0 12px
            #31dfc9;
        }


        .ai-chat-top strong {

          font-size: 13px;
        }


        .ai-chat-top span {

          margin-left: auto;

          color: #656572;

          font-size: 11px;
        }


        /* MESSAGES */

        .ai-messages {

          min-height: 260px;

          max-height: 350px;

          overflow-y: auto;

          padding: 25px;

          display: flex;

          flex-direction: column;

          gap: 15px;
        }


        .ai-welcome {

          text-align: center;

          color: #777783;

          padding:
            30px 10px;
        }


        .ai-welcome strong {

          display: block;

          color: #b3adff;

          margin-bottom: 8px;

          font-size: 15px;
        }


        .ai-message {

          max-width: 75%;

          padding:
            12px 16px;

          border-radius: 14px;

          font-size: 13px;

          line-height: 1.7;

          animation:
            messageIn .35s ease;
        }


        @keyframes messageIn {

          from {

            opacity: 0;

            transform:
              translateY(10px);
          }

          to {

            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .ai-message.user {

          align-self: flex-end;

          background:
            linear-gradient(
              100deg,
              #6958ff,
              #4c9aff
            );
        }


        .ai-message.ai {

          align-self: flex-start;

          background:
            rgba(255,255,255,.06);

          border:
            1px solid
            rgba(255,255,255,.07);

          color: #b4b4c0;
        }


        /* SUGGESTIONS */

        .ai-suggestions {

          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          padding:
            0 25px 20px;
        }


        .ai-suggestion {

          padding:
            9px 13px;

          border-radius: 30px;

          border:
            1px solid
            rgba(255,255,255,.09);

          background:
            rgba(255,255,255,.025);

          color: #92929f;

          font-size: 11px;

          cursor: pointer;

          transition: .3s ease;
        }


        .ai-suggestion:hover {

          color: white;

          border-color:
            rgba(110,100,255,.45);

          transform:
            translateY(-2px);
        }


        /* INPUT */

        .ai-input-area {

          display: flex;

          gap: 10px;

          padding:
            15px;

          border-top:
            1px solid
            rgba(255,255,255,.07);
        }


        .ai-input {

          flex: 1;

          min-width: 0;

          padding:
            14px 17px;

          border-radius: 12px;

          outline: none;

          border:
            1px solid
            rgba(255,255,255,.09);

          background:
            rgba(0,0,0,.25);

          color: white;

          font-size: 13px;
        }


        .ai-input::placeholder {

          color: #62626d;
        }


        .ai-input:focus {

          border-color:
            rgba(110,100,255,.5);
        }


        .ai-send {

          border: none;

          padding:
            0 20px;

          border-radius: 12px;

          color: white;

          background:
            linear-gradient(
              100deg,
              #6958ff,
              #20cfc0
            );

          cursor: pointer;

          font-size: 13px;

          transition: .3s ease;
        }


        .ai-send:hover {

          transform:
            translateY(-2px);

          box-shadow:
            0 0 25px
            rgba(100,90,255,.3);
        }


        /* FEATURES */

        .ai-features {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;

          width: 100%;

          max-width: 800px;

          margin-top: 25px;
        }


        .ai-feature {

          padding:
            20px;

          text-align: center;

          border-radius: 16px;

          background:
            rgba(255,255,255,.025);

          border:
            1px solid
            rgba(255,255,255,.06);

          transition: .3s ease;
        }


        .ai-feature:hover {

          transform:
            translateY(-5px);

          border-color:
            rgba(100,100,255,.25);
        }


        .ai-feature-icon {

          font-size: 23px;

          margin-bottom: 8px;
        }


        .ai-feature strong {

          display: block;

          font-size: 13px;

          margin-bottom: 5px;
        }


        .ai-feature span {

          color: #6f6f7b;

          font-size: 10px;

        }


        /* MOBILE */

        @media (max-width: 600px) {

          .ai-container {

            padding:
              95px 15px 40px;
          }


          .ai-header h1 {

            font-size: 48px;
          }


          .ai-header p {

            font-size: 13px;
          }


          .ai-big-icon {

            width: 70px;
            height: 70px;

            font-size: 34px;

            border-radius: 20px;

            margin:
              28px auto 18px;
          }


          .ai-chat {

            border-radius: 18px;
          }


          .ai-messages {

            min-height: 250px;

            padding: 18px;
          }


          .ai-message {

            max-width: 88%;

            font-size: 12px;
          }


          .ai-suggestions {

            padding:
              0 15px 15px;
          }


          .ai-suggestion {

            font-size: 10px;
          }


          .ai-input-area {

            padding: 10px;
          }


          .ai-input {

            padding:
              12px;

            font-size: 12px;
          }


          .ai-send {

            padding:
              0 15px;
          }


          .ai-features {

            grid-template-columns:
              1fr;

            gap: 10px;
          }

        }

      `}</style>


      <section className="ai-page">

        <div className="ai-orb ai-orb-one"></div>

        <div className="ai-orb ai-orb-two"></div>


        <div className="ai-container">


          {/* HEADER */}

          <div className="ai-header">

            <div className="ai-badge">
              ✦ AI MARKETING ASSISTANT
            </div>


            <div className="ai-big-icon">
              🤖
            </div>


            <h1>
              Ask AI
            </h1>


            <p>
              Your intelligent marketing assistant.
              Ask questions about SEO, Google Ads,
              Meta Ads, Social Media and Branding.
            </p>

          </div>


          {/* CHAT */}

          <div className="ai-chat">


            <div className="ai-chat-top">

              <div className="ai-status"></div>

              <strong>
                Rohil AI Assistant
              </strong>

              <span>
                Online
              </span>

            </div>


            <div className="ai-messages">

              {messages.length === 0 ? (

                <div className="ai-welcome">

                  <strong>
                    👋 Hello! How can I help you?
                  </strong>

                  Ask me anything about
                  digital marketing.

                </div>

              ) : (

                messages.map((item, index) => (

                  <div
                    key={index}
                    className={`ai-message ${item.type}`}
                  >
                    {item.text}
                  </div>

                ))

              )}

            </div>


            {/* SUGGESTIONS */}

            <div className="ai-suggestions">

              {suggestions.map((item) => (

                <button
                  key={item}
                  className="ai-suggestion"
                  onClick={() => askAI(item)}
                >
                  {item}
                </button>

              ))}

            </div>


            {/* INPUT */}

            <div className="ai-input-area">

              <input
                className="ai-input"
                type="text"
                placeholder="Ask something..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    askAI();
                  }

                }}
              />


              <button
                className="ai-send"
                onClick={() => askAI()}
              >
                Send →
              </button>

            </div>

          </div>


          {/* FEATURES */}

          <div className="ai-features">

            <div className="ai-feature">

              <div className="ai-feature-icon">
                🚀
              </div>

              <strong>
                SEO Guidance
              </strong>

              <span>
                Improve organic visibility
              </span>

            </div>


            <div className="ai-feature">

              <div className="ai-feature-icon">
                🎯
              </div>

              <strong>
                Ads Strategy
              </strong>

              <span>
                Better campaign ideas
              </span>

            </div>


            <div className="ai-feature">

              <div className="ai-feature-icon">
                ✨
              </div>

              <strong>
                Brand Ideas
              </strong>

              <span>
                Build a stronger identity
              </span>

            </div>

          </div>


        </div>

      </section>
    </>
  );
}

export default AI;
import "../App.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mldnowww", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className="page contact-grid" data-aos="fade-up">
      {/* Left Side – Invite Message */}
      <div className="contact-left" data-aos="fade-right">
        <h1 className="section-title">Let's Talk.</h1>
        <p className="section-text">
          Whether you have a project in mind, a question, or just want to say hi
          — I'm always open to meaningful conversations. Drop me a message and
          I'll get back to you soon.
        </p>
      </div>

      {/* Right Side – Contact Form */}
      <div className="contact-right" data-aos="fade-left" data-aos-delay="200">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name (optional)"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {formStatus === "success" ? (
              <p className="section-text success-message">
                Thanks! I'll be in touch soon. 📨
              </p>
            ) : (
              <button type="submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
            )}
            <input type="text" name="_gotcha" style={{ display: "none" }} />
          </form>
        ) : (
          <p className="section-text">Thanks! I'll get back to you soon. 📨</p>
        )}
      </div>
    </div>
  );
}
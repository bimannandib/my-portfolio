import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactData from '../Data/ContactData.jsx'

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // your Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <section id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p style={{ marginBottom: "5rem" }}>
          {ContactData.section_description}
        </p>
      </div>


      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>{ContactData.description}</p>

          {ContactData.contactLink.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              {item.icon}
              <div className="contact-description">
                <h4>{item.label}</h4>
                <p>{item.linkShow}</p>
              </div>
            </a>
          ))}
        </div>


        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="Your name"
                id="Name"
                name="from_name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                placeholder="your.email@example.com"
                id="Email"
                name="from_email"
              />
            </div>


            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea
                id="Message"
                placeholder="Your message..."
                name="message"
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "2rem" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

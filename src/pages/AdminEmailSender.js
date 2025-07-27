import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const AdminEmailSender = () => {
  const [passcode, setPasscode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    to_email: "",
    custom_message: "",
    sender_name: "",
    sender_role: "",
    sender_email: "",
    sender_phone: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    email_subject: "Access to Finance Program – Official Communication",
    cta_text: "Visit Our Website",
    cta_link: "https://accesstofinance.com.ng",
  });

  const correctPasscode = "a2fteam2025";

  const handleUnlock = () => {
    if (passcode === correctPasscode) {
      setUnlocked(true);
    } else {
      toast.error("❌ Wrong passcode");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_etmaeu5u",
        "template_ouc8qip",
        formData,
        "OoZgk-OC0OfwrnGQu"
      )
      .then(() => {
        toast.success("✅ Email sent successfully!");
        setFormData({
          ...formData,
          user_name: "",
          to_email: "",
          custom_message: "",
          sender_name: "",
          sender_role: "",
          sender_email: "",
          sender_phone: "",
          facebook: "",
          twitter: "",
          linkedin: "",
        });
        setStatus("");
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to send email");
        setStatus("");
      });
  };

  if (!unlocked) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center text-primary">🔐 Enter Passcode</h2>
        <input
          type="password"
          className="inputStyle w-full mb-4"
          placeholder="Enter passcode..."
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
        />
        <button
          onClick={handleUnlock}
          className="w-full bg-primary text-white py-2 rounded hover:bg-accent transition"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary">📨 Admin Email Sender</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="user_name" placeholder="Recipient Name" value={formData.user_name} onChange={handleChange} className="inputStyle" />
        <input name="to_email" type="email" placeholder="Recipient Email" value={formData.to_email} onChange={handleChange} className="inputStyle" />
        <textarea name="custom_message" placeholder="Custom Message" value={formData.custom_message} onChange={handleChange} className="inputStyle" />

        <h3 className="text-lg font-semibold text-primary mt-6">✍️ Footer Info</h3>
        <input name="sender_name" placeholder="Your Name" value={formData.sender_name} onChange={handleChange} className="inputStyle" />
        <input name="sender_role" placeholder="Your Role" value={formData.sender_role} onChange={handleChange} className="inputStyle" />
        <input name="sender_email" type="email" placeholder="Your Email" value={formData.sender_email} onChange={handleChange} className="inputStyle" />
        <input name="sender_phone" placeholder="Your Phone Number" value={formData.sender_phone} onChange={handleChange} className="inputStyle" />

        <h3 className="text-lg font-semibold text-primary mt-6">🔗 Social Media Links (Optional)</h3>
        <input name="facebook" placeholder="Facebook URL" value={formData.facebook} onChange={handleChange} className="inputStyle" />
        <input name="twitter" placeholder="Twitter URL" value={formData.twitter} onChange={handleChange} className="inputStyle" />
        <input name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} className="inputStyle" />

        <h3 className="text-lg font-semibold text-primary mt-6">📌 CTA</h3>
        <input name="email_subject" placeholder="Email Subject" value={formData.email_subject} onChange={handleChange} className="inputStyle" />
        <input name="cta_text" placeholder="Button Text" value={formData.cta_text} onChange={handleChange} className="inputStyle" />
        <input name="cta_link" placeholder="CTA Link" value={formData.cta_link} onChange={handleChange} className="inputStyle" />

        <button type="submit" className="w-full bg-primary text-white py-3 rounded hover:bg-green-700 transition">
          ✉️ Send Email
        </button>
        {status && <p className="text-center text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default AdminEmailSender;
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "general",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // WhatsApp bot state
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hello 👋, welcome to Educatalyst! How can we assist you?" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["9 Akowonjo Street", "Ikosi, Ilaro", "Ogun State, Nigeria"],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+234 805 614 9269"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@educatalyst.ng", "support@educatalyst.ng"],
      color: "text-orange-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-purple-600",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "programs", label: "Program Information" },
    { value: "registration", label: "Registration" },
    { value: "hackathon", label: "Teacher Hackathon" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "media", label: "Media & Press" },
  ];

  // Handle input change with validation
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      switch (name) {
        case "name":
          newErrors.name = value.trim() ? "" : "Name is required";
          break;
        case "email":
          if (!value.trim()) newErrors.email = "Email is required";
          else if (!/^\S+@\S+\.\S+$/.test(value))
            newErrors.email = "Invalid email address";
          else newErrors.email = "";
          break;
        case "message":
          newErrors.message = value.trim()
            ? ""
            : "Message cannot be empty";
          break;
        case "phone":
          if (value && !/^\+?\d{7,15}$/.test(value))
            newErrors.phone = "Invalid phone number";
          else newErrors.phone = "";
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  // Validate all fields before submit
  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }
    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Submit to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const adminNumber = "2348056149269";
    const message = `
Hello Admin 👋, you have a new inquiry:

 Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone || "N/A"}
 Organization: ${formData.organization || "N/A"}
 Inquiry Type: ${formData.inquiryType}
 Message: ${formData.message}
`;

    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      inquiryType: "general",
      message: "",
    });

    setLoading(false);
  };

  // Handle chat bot messages
  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const newMessage = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, newMessage]);

    // simple bot responses
    let botReply = "Thank you for reaching out! We'll get back to you shortly.";
    if (chatInput.toLowerCase().includes("program")) {
      botReply =
        "We offer a range of programs 📘. Please check 'Programs' section above.";
    } else if (chatInput.toLowerCase().includes("register")) {
      botReply =
        "You can register via our Registration page 📝 or contact support.";
    } else if (chatInput.toLowerCase().includes("hello")) {
      botReply = "Hello 👋! How can we assist you today?";
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 1000);

    setChatInput("");
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-800">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your teaching career? Contact us today to
            learn more about our programs or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${info.color} bg-gray-100 rounded-lg flex items-center justify-center`}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idy) => (
                      <p key={idy} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      School/Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  <Send className="h-5 w-5" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-16">
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.436955597574!2d3.0176!3d6.8897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b0e1f7d7a2e4d%3A0x6b5a1f99a3b9f85f!2sIkosi%20Ilaro%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Chat Bot */}
      <div>
        {/* Floating button */}
        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition"
        >
          💬
        </button>

        {/* Chat window */}
        {isChatOpen && (
          <div
            className="fixed bottom-24 right-6 w-80 h-96 rounded-2xl shadow-xl flex flex-col overflow-hidden bg-white border"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/ae/1d/2b/ae1d2b1e6f7cf4b04a3e5d3886e0dbd2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Header */}
            <div className="bg-green-600 text-white px-4 py-3 flex justify-between items-center">
              <span className="font-semibold">Chat with us</span>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-black/30">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded-lg shadow max-w-[75%] ${
                    msg.sender === "bot"
                      ? "self-start bg-white text-gray-800"
                      : "self-end bg-green-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white flex items-center space-x-2 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleChatSend}
                className="bg-green-500 text-white px-3 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

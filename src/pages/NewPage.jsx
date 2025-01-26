import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const NewPage= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_123abc", 
        "template_456xyz", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "user_789qwertyuiop" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSubmissionMessage("Thank you! Your message has been sent.");
          localStorage.removeItem("formData"); 
          setTimeout(() => {
            navigate("/thank-you"); 
          }, 2000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSubmissionMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto text-center z-0"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <p className="text-gray-600 mb-6">
        Feel free to reach out to me through the form below or connect via social media.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Your Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 p-3 text-white rounded hover:bg-blue-600"
        >
          Send Your Message
        </button>
      </form>
      {submissionMessage && (
        <p className="mt-4 text-green-600 font-semibold">{submissionMessage}</p>
      )}
      <button
        onClick={() => navigate("/")} 
        className="mt-6 bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-800"
      >
        Go Back to Home
      </button>
    </section>
  );
};

export default NewPage;

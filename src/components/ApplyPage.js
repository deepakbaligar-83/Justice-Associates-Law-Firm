import React, { useState } from "react";

const ApplyPage = ({ jobTitle, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting application for", jobTitle, formData);
    alert("Application submitted successfully!");
    onBack("careers"); // go back to Careers page after submit
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <button
          onClick={() => onBack("careers")}
          className="mb-4 text-sm text-blue-600 underline"
        >
          ← Back to Careers
        </button>

        <h1 className="text-3xl font-bold text-navy-800 mb-6">
          Apply for {jobTitle || "a Position"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            rows="4"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />
          <button type="submit" className="btn-primary w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;

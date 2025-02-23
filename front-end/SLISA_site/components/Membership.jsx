import React, { useState } from 'react';

const Membership = () => {
  // State for form and members
  const [formData, setFormData] = useState({ name: '', email: '', file: null });
  const [members, setMembers] = useState([
    // Sample members (replace with real data or fetch from backend)
    {
      id: 1,
      name: 'Fatima Kamara',
      email: 'fatima@example.com',
      letter: null, // Will hold File object or URL
    },
    {
      id: 2,
      name: 'John Sesay',
      email: 'john@example.com',
      letter: null,
    },
  ]);
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData((prev) => ({ ...prev, file }));
    } else {
      alert('Please upload a PDF file.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.file) {
      alert('Please fill out all fields and upload a PDF.');
      return;
    }

    // Simulate adding member (in reality, send to backend)
    const newMember = {
      id: members.length + 1,
      name: formData.name,
      email: formData.email,
      letter: formData.file, // Store File object
    };
    setMembers((prev) => [...prev, newMember]);
    setSubmitted(true);
    setFormData({ name: '', email: '', file: null }); // Reset form
    setTimeout(() => setSubmitted(false), 2000); // Reset success message
  };

  // Handle file download
  const handleDownload = (member) => {
    if (!member.letter) {
      alert('No acceptance letter available for this member.');
      return;
    }
    const url = URL.createObjectURL(member.letter);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${member.name}`-acceptance-letter.pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Membership
        </h1>

        {/* Join Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Join Us</h2>
          <p className="text-gray-600 mb-4">
            Become a part of the SLSU-AP family! Membership is open to all Sierra Leonean students
            in Andhra Pradesh who want to connect, grow, and celebrate our heritage.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Access to exclusive events like Cultural Night and study workshops.</li>
            <li>Networking with peers, alumni, and local leaders.</li>
            <li>Academic resources and scholarship opportunities.</li>
            <li>A supportive community to call home.</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Join</h3>
          <p className="text-gray-600">
            Fill out the form below with your details and upload your university acceptance letter.
            Once submitted, our team will review and welcome you aboard!
          </p>
        </div>

        {/* Membership Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Membership Form</h2>
          {submitted ? (
            <p className="text-green-600 text-center">Successfully submitted! Welcome to SLSU-AP!</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block text-gray-700 mb-1">
                  University Acceptance Letter (PDF)
                </label>
                <input
                  type="file"
                  id="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Member Directory */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Member Directory</h2>
          {members.length === 0 ? (
            <p className="text-gray-600">No members listed yet. Join us to be the first!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((member) => (
                <div key={member.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-1"><strong>Email:</strong> {member.email}</p>
                  <button
                    onClick={() => handleDownload(member)}
                    className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Download Acceptance Letter
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Membership;
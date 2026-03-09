import { useState } from "react";
import { useNavigate } from "react-router";
import { UserPlus } from "lucide-react";

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock account creation
    alert(`Account created for: ${formData.name}`);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Wireframe Title */}
      <div className="border-2 border-gray-800 p-4 bg-white">
        <h1 className="text-2xl font-mono">SIGN UP</h1>
      </div>

      {/* Icon */}
      <div className="flex justify-center">
        <div className="border-2 border-gray-800 p-6 bg-white">
          <UserPlus className="w-12 h-12" />
        </div>
      </div>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="border-2 border-gray-800 p-8 bg-white space-y-6">
        <p className="font-mono text-sm text-gray-600">[CREATE NEW ACCOUNT FORM]</p>

        {/* Name Field */}
        <div className="space-y-2">
          <label className="font-mono block">[NAME FIELD]</label>
          <div className="border-2 border-gray-800 p-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name..."
              required
              className="w-full outline-none font-mono bg-transparent"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="font-mono block">[EMAIL FIELD]</label>
          <div className="border-2 border-gray-800 p-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
              required
              className="w-full outline-none font-mono bg-transparent"
            />
          </div>
        </div>

        {/* Address Field */}
        <div className="space-y-2">
          <label className="font-mono block">[ADDRESS FIELD]</label>
          <div className="border-2 border-gray-800 p-3">
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address..."
              required
              rows={3}
              className="w-full outline-none font-mono bg-transparent resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full border-2 border-gray-800 px-8 py-4 font-mono hover:bg-gray-200 bg-gray-800 text-white"
          >
            [CREATE ACCOUNT BUTTON]
          </button>
        </div>
      </form>

      {/* Additional Info */}
      <div className="border-2 border-gray-400 p-4 bg-gray-100">
        <p className="font-mono text-sm text-gray-600">
          [INFO] Already have an account? <span className="underline">Log in here</span>
        </p>
      </div>
    </div>
  );
}

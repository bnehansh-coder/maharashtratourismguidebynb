import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, ShieldCheck, Clock } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF7F2]">
      {/* Banner */}
      <section className="bg-[#142B21] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20">
          <SafeImage
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80"
            alt="Maharashtra Tourism Desk"
            credit="Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[#FFA96B] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-3">
            Visitor Inquiries & Assistance
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Contact & Tourist Assistance
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
            Have questions about itinerary planning, permit bookings for tiger safaris, or Kaas plateau? Reach out or access 24/7 verified state tourist helplines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DEC8] shadow-xs">
            <h2 className="font-heading text-2xl font-bold text-[#24211D] mb-2">
              Send a Travel Query
            </h2>
            <p className="text-xs text-[#736352] mb-6">
              Our travel editorial desk is glad to assist with routes, best seasons, and destination details.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-sm font-bold">Query Received Successfully!</h4>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, {formData.name}. Your inquiry has been logged in our demo portal. (Note: This is an editorial frontend demo. For immediate official government tourism assistance, call the official MTDC helpline below).
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-3 text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5E4F] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-sm text-[#24211D] focus:outline-none focus:border-[#D95D0F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5E4F] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-sm text-[#24211D] focus:outline-none focus:border-[#D95D0F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5E4F] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Inquiring about Tadoba Safari permits"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-sm text-[#24211D] focus:outline-none focus:border-[#D95D0F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5E4F] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to discover or plan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD3C0] text-sm text-[#24211D] focus:outline-none focus:border-[#D95D0F]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D95D0F] to-[#E86518] text-white hover:from-[#c25008] hover:to-[#d45812] shadow-sm transition-all"
                  >
                    Submit Query
                  </button>
                </div>

                <p className="text-[11px] text-[#8C7E6D]">
                  * This website is an independent travel portal; submissions are simulated on the frontend.
                </p>
              </form>
            )}
          </div>

          {/* Emergency & Official Helpline Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-8 border border-[#E8DEC8]">
              <h3 className="font-heading text-xl font-bold text-[#24211D] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#164E3D]" />
                <span>Verified Tourist Helplines</span>
              </h3>
              <div className="space-y-4 text-xs text-[#4A3E31]">
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#164E3D] block text-sm">MTDC Tourist Toll-Free</span>
                    <span className="text-[#6B5E4F]">Maharashtra Tourism Development Corp</span>
                  </div>
                  <span className="font-bold text-[#D95D0F] text-sm">1800-229-930</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#24211D] block text-sm">Emergency Police Response</span>
                    <span className="text-[#6B5E4F]">Dial 24/7 across Maharashtra</span>
                  </div>
                  <span className="font-bold text-[#D95D0F] text-sm">112</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#24211D] block text-sm">Medical Ambulance</span>
                    <span className="text-[#6B5E4F]">Emergency Health Services</span>
                  </div>
                  <span className="font-bold text-[#D95D0F] text-sm">108</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8DEC8] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#24211D] block text-sm">Indian Railways Enquiries</span>
                    <span className="text-[#6B5E4F]">Railway Police & Helpline</span>
                  </div>
                  <span className="font-bold text-[#D95D0F] text-sm">139</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC8]">
              <h3 className="font-heading text-lg font-bold text-[#24211D] mb-3">
                Key Tourism Information Offices
              </h3>
              <div className="space-y-3 text-xs text-[#5C4D3D] leading-relaxed">
                <div>
                  <strong className="text-[#24211D] block">Mumbai Information Center:</strong>
                  Madame Cama Road, Nariman Point, Mumbai 400021
                </div>
                <div>
                  <strong className="text-[#24211D] block">Pune Information Center:</strong>
                  Central Building, Near Pune Railway Station, Pune 411001
                </div>
                <div>
                  <strong className="text-[#24211D] block">Chhatrapati Sambhajinagar Center:</strong>
                  Holiday Resort, Station Road, Sambhajinagar 431005
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

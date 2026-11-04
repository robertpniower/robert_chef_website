"use client"

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Clock,
  Send
} from 'lucide-react';

export default function BookingRequestSection() {
  const [formData, setFormData] = useState({
    eventType: 'Dinner Party',
    guestCount: '6-8',
    date: '',
    location: '',
    name: '',
    email: '',
    notes: ''
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert('Thank you! Your availability request has been submitted.');
};

  return (
    <section id="booking" className="py-20 bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">Reservations</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">Request your date</h2>
            <p className="text-stone-600 text-base font-light leading-relaxed">
              Fill out your preliminary event details. We will confirm date availability and contact you within 24 hours to discuss custom menu ideas.
            </p>

            <div className="space-y-4 pt-4 text-sm text-stone-700">
              <div className="flex items-center gap-3">
                <Clock className="text-stone-800 shrink-0" size={18} />
                <span>Fast 24-hour response time</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-stone-800 shrink-0" size={18} />
                <span>Available for private villas & homes</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-stone-800 shrink-0" size={18} />
                <span>Direct communication with Chef</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/80 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  >
                    <option>Dinner Party</option>
                    <option>Birthday / Celebration</option>
                    <option>Corporate Event</option>
                    <option>Weekly Chef Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Guest Count</label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  >
                    <option>2 Guests (Intimate)</option>
                    <option>3-5 Guests</option>
                    <option>6-8 Guests</option>
                    <option>9-12 Guests</option>
                    <option>13+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Location / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Barcelona, Sitges"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Special Notes / Allergies</label>
                <textarea
                  rows={3}
                  placeholder="Mention any dietary restrictions, preferences, or special requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-stone-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-stone-900 text-stone-50 text-sm font-semibold hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                Send availability request
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

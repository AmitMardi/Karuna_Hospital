'use client';

import { useState } from 'react';
import { SlideUp, FadeIn } from '../animations/FadeIn';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call to the mock route
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Contact & Location</h2>
            <p className="text-text-muted text-lg">
              We are available 24/7. Reach out to us for emergencies or appointments.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <SlideUp>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-text mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-text mb-1">Address</p>
                      <p className="text-text-muted">Kaliyaganj Road, Buniadpur, Narayanpur, West Bengal 733121, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-text mb-1">Emergency & Helpline</p>
                      <p className="text-text-muted"><a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-text mb-1">Email</p>
                      <p className="text-text-muted"><a href="mailto:karunahospital@gmail.com" className="hover:text-primary transition-colors">karunahospital@gmail.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-text mb-1">Operating Hours</p>
                      <p className="text-text-muted">Open 24 hours, all 7 days (Mon–Sun)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h4 className="font-bold text-text mb-2">Send a Message</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Submit Request'}
                  </button>
                </form>
              </div>

            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-100 relative">
              {/* Google Maps Embed centered on Buniadpur */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.365319857907!2d88.37525!3d25.40537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa8a25c3453b47%3A0x8e8bd0b3b5c3938b!2sBuniadpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location Map"
              ></iframe>
            </div>
          </SlideUp>

        </div>

      </div>
    </section>
  );
}

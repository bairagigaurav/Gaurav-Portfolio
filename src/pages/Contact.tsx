import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { SEO } from '../components/layout/SEO';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-semibold text-slate-800 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-sm leading-relaxed pb-2">{answer}</p>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.company.trim()) tempErrors.company = 'Company name is required.';
    if (!formData.message.trim()) tempErrors.message = 'Please provide a message.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <>
      <SEO 
        title="Contact FlowPilot Sales & Support" 
        description="Get in touch with our solutions experts. We can help you configure triggers, integrations, or setup custom enterprise pipelines."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-20 pb-16 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch With Our Team
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            We are here to answer pricing questions, explore workflow architecture, or demo custom features.
          </p>
        </div>
      </section>

      {/* Form and Contact Info Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">FlowPilot Headquarters</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Have a complex tech stack or custom API? Talk to a workflow solution architect. We provide tailored recommendations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-600 text-sm">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>support@flowpilot.ai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 text-sm">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+1 (800) 555-FLOW</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 text-sm">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>100 Automation Way, Suite 400, San Francisco, CA</span>
                  </div>
                </div>
              </div>

              {/* Quick statistics */}
              <div className="bg-blue-900 text-white p-6 rounded-xl space-y-4">
                <h3 className="font-bold text-lg">Fast Support SLA</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  We reply to all inbound inquiries within 3 business hours. Enterprise customers get 15-minute response guarantees.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4" role="status" aria-live="polite">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border-2 border-green-200">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A workflow specialist has been notified and will get in touch with you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <h2 className="text-2xl font-bold text-slate-900">Send an Inquiry</h2>

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Input */}
                  <div className="space-y-1">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'company-error' : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transform active:scale-95 duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Support FAQ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Support FAQs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Useful answers regarding billing setups, uptime, custom webhooks, and integrations.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
            <FAQItem 
              question="What is the response time for support tickets?" 
              answer="Starter tickets are resolved within 24 hours. Growth tickets are prioritized and resolved in under 3 hours. Scale tier customers have sub-hour guarantees."
            />
            <FAQItem 
              question="Can you help us build custom integrations?" 
              answer="Yes! Our Solutions Engineering team works with Scale plan clients to write custom Python or Node.js endpoints inside the code execution blocks."
            />
          </div>
        </div>
      </section>
    </>
  );
};

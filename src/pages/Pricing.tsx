import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
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

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing plans configuration
  const plans = [
    {
      name: 'Starter',
      description: 'For individuals and small teams starting with basic automation.',
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        'Up to 5 active workflows',
        '1,000 monthly task runs',
        'Standard 5-minute run intervals',
        'Email customer support',
        'Core integrations (Gmail, Slack, etc.)',
      ],
      cta: 'Start Free Trial',
      recommended: false,
    },
    {
      name: 'Growth',
      description: 'For growing businesses expanding their operational workflows.',
      monthlyPrice: 59,
      annualPrice: 49,
      features: [
        'Unlimited active workflows',
        '25,000 monthly task runs',
        'Instant execution triggers',
        'Priority email & chat support',
        'Advanced integrations (Salesforce, Stripe)',
        'Multi-step conditional logic branches',
        'Shared team workspaces (up to 5 seats)',
      ],
      cta: 'Start Growth Trial',
      recommended: true,
    },
    {
      name: 'Scale',
      description: 'For larger organizations needing enterprise security and execution volume.',
      monthlyPrice: 199,
      annualPrice: 169,
      features: [
        'Unlimited active workflows',
        '250,000 monthly task runs',
        'Sub-second execution speeds',
        '24/7 dedicated account manager',
        'Enterprise SLA compliance contract',
        'SOC 2 Type II compliance controls',
        'Custom script nodes (Node.js/Python)',
        'Unlimited team seats',
      ],
      cta: 'Contact Enterprise Sales',
      recommended: false,
    },
  ];

  const featuresComparison = [
    { name: 'Active Workflows', starter: '5', growth: 'Unlimited', scale: 'Unlimited' },
    { name: 'Task Runs / Month', starter: '1,000', growth: '25,000', scale: '250,000+' },
    { name: 'Trigger Intervals', starter: '5 Minutes', growth: 'Instant', scale: 'Real-time (Sub-second)' },
    { name: 'Team Seat Capacity', starter: '1 Seat', growth: '5 Seats Included', scale: 'Unlimited Seats' },
    { name: 'Conditional Branching', starter: 'Basic (1 level)', growth: 'Advanced (Multi-level)', scale: 'Custom scripts allowed' },
    { name: 'Security standards', starter: 'Standard TLS/SSL', growth: 'Encrypted databases', scale: 'SOC 2 Type II / HIPAA' },
  ];

  return (
    <>
      <SEO 
        title="Simple, Flexible Pricing Plans" 
        description="Choose a FlowPilot plan that fits your business scale. No setup fees, cancel anytime. Save up to 20% with annual billing."
        canonicalPath="/pricing"
      />

      {/* Pricing Hero */}
      <section className="bg-slate-950 text-white pt-20 pb-16 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Transparent Pricing for Any Scale
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose a plan to grow with your business. Get started with our 14-day trial period on any tier.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual billing discount"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual
              <span className="ml-1.5 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full">Save ~20%</span>
            </span>
          </div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border p-8 flex flex-col justify-between relative transition-all duration-200 hover:shadow-lg ${
                  plan.recommended
                    ? 'border-blue-600 ring-2 ring-blue-600/10 lg:scale-[1.03] z-10 shadow-md'
                    : 'border-slate-200'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed min-h-[40px]">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 text-sm ml-2">/ month</span>
                  </div>
                  {isAnnual && (
                    <div className="text-[10px] text-blue-600 font-semibold mt-1">Billed annually</div>
                  )}

                  {/* Features List */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start text-sm">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      plan.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Compare Plan Specifications
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get details on database calls, intervals, security measures, and access levels.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-800 text-sm">Features</th>
                  <th className="p-4 font-semibold text-slate-800 text-sm">Starter</th>
                  <th className="p-4 font-semibold text-slate-800 text-sm">Growth</th>
                  <th className="p-4 font-semibold text-slate-800 text-sm">Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {featuresComparison.map((row) => (
                  <tr key={row.name} className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-700">{row.name}</td>
                    <td className="p-4 text-slate-600">{row.starter}</td>
                    <td className="p-4 text-slate-600">{row.growth}</td>
                    <td className="p-4 text-slate-600 font-semibold text-slate-900">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Pricing FAQs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Answers regarding trials, scaling runs, custom invoices, and cancellations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <FAQItem 
              question="What happens if we exceed our monthly task runs?" 
              answer="If you exceed your task quota, your workflows will remain active but runs will queue up. We will notify you and give a grace volume before requesting upgrade approval."
            />
            <FAQItem 
              question="Do you offer dedicated discounts for registered non-profits?" 
              answer="Yes! FlowPilot supports education and charity. We offer a 30% flat discount on our Growth and Scale packages. Get in touch with our team via the contact form."
            />
            <FAQItem 
              question="Can we sign a custom Business Associate Agreement (BAA)?" 
              answer="Custom compliance agreements (including BAAs for HIPAA compliance) are exclusively available on our Scale subscription tier."
            />
          </div>
        </div>
      </section>
    </>
  );
};

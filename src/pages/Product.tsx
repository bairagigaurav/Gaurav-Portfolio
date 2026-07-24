import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Workflow, 
  Layers, 
  ShieldAlert, 
  Users, 
  Lock, 
  Check, 
  CheckCircle,
  HelpCircle,
  ChevronDown,
  BarChart4,
  Cable,
  Activity,
  Code
} from 'lucide-react';
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

export const Product: React.FC = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "FlowPilot Workflow Automation Platform",
    "image": "https://flowpilot.ai/og-image.jpg",
    "description": "FlowPilot is a workflow automation platform that helps growing businesses automate repetitive processes, connect tools, and improve team productivity.",
    "brand": {
      "@type": "Brand",
      "name": "FlowPilot"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "199",
      "offerCount": "3"
    }
  };

  return (
    <>
      <SEO 
        title="Product Features & Integrations" 
        description="Explore the FlowPilot workflow builder, native integrations, live performance analytics, collaborative tools, and enterprise grade security."
        canonicalPath="/product"
        schemaData={productSchema}
      />

      {/* Product Hero */}
      <section className="bg-slate-950 text-white pt-20 pb-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center space-x-1.5 bg-blue-900/40 text-blue-300 border border-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              <Workflow className="h-3.5 w-3.5" />
              <span>FlowPilot Core Capabilities</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              A Complete Operational Platform
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Everything your team needs to map complex operational steps, connect software systems, track output, and collaborate in real-time.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30 hover:scale-[1.02] transform active:scale-95 duration-150"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Overview & Visual Builder Details */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Builder Demo Content */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Visual Workflow Designer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Connect and arrange events visually. Our builder supports standard branching logic, loop execution limits, custom filter parameters, and delay operations.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-slate-700 font-medium">Drag-and-drop node configuration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-slate-700 font-medium">Multi-branch conditional logic and filters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-slate-700 font-medium">Interactive test mode with mock inputs</span>
                </li>
              </ul>
            </div>

            {/* Visual Node Editor Mock */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-bold text-slate-800 text-sm">Customer Onboarding Flow</span>
                  <span className="text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full">Active</span>
                </div>
                
                {/* Node Box 1 */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div className="font-bold text-slate-700 mb-1">1. Trigger: Stripe Charge Completed</div>
                  <p className="text-slate-500">Listens to Stripe webhook event: `charge.succeeded`</p>
                </div>
                
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-slate-300" />
                </div>

                {/* Branching UI */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50/50 border border-blue-200 rounded-lg text-xs">
                    <div className="font-bold text-blue-800 mb-1">Branch A: Enterprise</div>
                    <p className="text-slate-500">Value &gt;= $500/mo. Assign Account Manager in CRM.</p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                    <div className="font-bold text-slate-700 mb-1">Branch B: Standard</div>
                    <p className="text-slate-500">Value &lt; $500/mo. Send automated welcome series.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Natively Connected to Your Stack
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              FlowPilot bridges the gap between marketing, sales, product, and developer operations applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-3">
              <span className="text-2xl">💬</span>
              <h3 className="font-bold text-slate-800">Slack</h3>
              <p className="text-xs text-slate-500">Post notifications, alerts, files, and update channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-3">
              <span className="text-2xl">✉️</span>
              <h3 className="font-bold text-slate-800">Google Workspace</h3>
              <p className="text-xs text-slate-500">Sync Sheets, schedule Calendar slots, read Gmail.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-3">
              <span className="text-2xl">💳</span>
              <h3 className="font-bold text-slate-800">Stripe</h3>
              <p className="text-xs text-slate-500">Listen for charges, update invoice records, handle refunds.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-3">
              <span className="text-2xl">💼</span>
              <h3 className="font-bold text-slate-800">Salesforce</h3>
              <p className="text-xs text-slate-500">Enrich deals, assign ownership, update lead pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">System Health Monitor</span>
                <span className="flex items-center space-x-1.5 text-xs text-green-400 bg-green-950 px-2 py-0.5 rounded">
                  <Activity className="h-3 w-3" />
                  <span>All Systems Operational</span>
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-slate-800 rounded overflow-hidden">
                  <div className="h-full bg-blue-500 w-11/12" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Current RAM Usage (52%)</span>
                  <span>Limits: 8GB</span>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-xs">
                <span>Avg latency</span>
                <span className="font-mono text-blue-400">12ms</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Real-Time Operations Analytics
              </h2>
              <p className="text-slate-600">
                Identify delays instantly. Our analytics dashboard keeps records of action execution times, data sizes, errors, and task performance outputs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-800 text-lg">99.99%</h4>
                  <p className="text-xs text-slate-500">Monthly uptime guarantee</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-bold text-slate-800 text-lg">&lt; 150ms</h4>
                  <p className="text-xs text-slate-500">Average step execution time</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Collaboration and Security Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Team Collaboration */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Built for Operations Teams</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Workspaces support multi-member workflows. Write reviews, share workflow templates, leave notes, and set permissions.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Granular access permissions</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>Version history &amp; rollbacks</span>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Bank-Grade Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enterprise security built into the core. We are fully SOC 2 Type II compliant, providing end-to-end encryption for your credentials.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>SOC 2 Type II + ISO 27001 Certified</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>TLS 1.3 &amp; AES-256 local database storage</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Product FAQ */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Product Specifications FAQ
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find technical answers about building flows.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
            <FAQItem 
              question="What is the maximum execution time of a single step?" 
              answer="By default, a standard action node has a timeout limit of 30 seconds. On the Scale plan, custom execution limits can be expanded to 15 minutes for big database synchronization processes."
            />
            <FAQItem 
              question="Does FlowPilot support custom Javascript scripts?" 
              answer="Yes. Our growth and scale packages include a Code Node that lets you execute private Node.js or Python code blocks to clean payload data."
            />
            <FAQItem 
              question="Can we rollback a workflow to a previous state?" 
              answer="Absolutely. FlowPilot maintains a comprehensive history logs of modifications. You can select any version from your dashboard history tab and hit restore."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <h2 className="text-3xl font-extrabold">Build Your First FlowPilot Workflow</h2>
          <p className="text-blue-100 max-w-xl mx-auto">
            Take back control over your operations. Deploy automated triggers today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-bold text-blue-950 bg-white hover:bg-slate-100 transition-colors shadow-md"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Settings, 
  Cpu, 
  BarChart3, 
  Users2, 
  Layers, 
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Clock,
  Sparkles,
  Zap
} from 'lucide-react';
import { SEO } from '../components/layout/SEO';

// FAQ Item Component
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

export const Home: React.FC = () => {
  // Structured FAQ schema for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does FlowPilot connect to my existing software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FlowPilot integrates natively with over 200+ popular SaaS tools including Slack, Salesforce, Google Workspace, GitHub, and Jira. You can authenticate and connect your accounts securely in just a few clicks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need coding skills to build workflows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. FlowPilot features an intuitive drag-and-drop visual builder. Anyone on your team can create powerful automated sequences, define conditional logic, and configure triggers without writing a single line of code."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure with FlowPilot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our top priority. FlowPilot is SOC 2 Type II certified, uses bank-grade AES-256 encryption at rest and TLS 1.3 in transit, and complies with GDPR and CCPA requirements to ensure your data stays private and safe."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowPilot",
    "url": "https://flowpilot.ai",
    "logo": "https://flowpilot.ai/logo.png",
    "sameAs": [
      "https://twitter.com/flowpilot",
      "https://linkedin.com/company/flowpilot"
    ]
  };

  return (
    <>
      <SEO 
        title="Automate Repetitive Workflows & Connect Tools" 
        description="FlowPilot is a workflow automation platform that helps growing businesses automate repetitive processes, connect tools, and improve team productivity."
        canonicalPath="/"
        schemaData={{
          "@graph": [faqSchema, organizationSchema]
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 lg:pt-32 lg:pb-36 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-900/40 text-blue-300 border border-blue-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Workflow Automation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Automate the Work That Slows Your Business Down
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                FlowPilot connects your tools, automates repetitive workflows, and gives your team more time to focus on work that actually moves the business forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30 hover:scale-[1.02] transform active:scale-95 duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-700 rounded-lg text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                >
                  See How It Works
                  <Play className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero Right Mockup */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-sm"
              >
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
                  </div>
                  <div className="bg-slate-800/80 px-4 py-1 rounded text-xs text-slate-400">
                    flowpilot.app/builder
                  </div>
                  <div className="w-12" />
                </div>
                
                {/* Builder Visual */}
                <div className="space-y-4 text-xs font-mono text-slate-300">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 bg-green-500/10 text-green-400 rounded-md flex items-center justify-center font-bold">
                        ✉️
                      </div>
                      <div>
                        <div className="font-semibold text-white">Trigger: New Email</div>
                        <div className="text-[10px] text-slate-500">When client email arrives in GMail</div>
                      </div>
                    </div>
                    <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-[10px]">Active</span>
                  </div>

                  <div className="w-0.5 h-6 bg-blue-500 mx-auto" />

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 bg-blue-500/10 text-blue-400 rounded-md flex items-center justify-center font-bold">
                        🧠
                      </div>
                      <div>
                        <div className="font-semibold text-white">Action: Analyze Intent</div>
                        <div className="text-[10px] text-slate-500">Categorize using FlowPilot AI</div>
                      </div>
                    </div>
                    <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px]">AI Step</span>
                  </div>

                  <div className="w-0.5 h-6 bg-blue-500 mx-auto" />

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 bg-purple-500/10 text-purple-400 rounded-md flex items-center justify-center font-bold">
                        💬
                      </div>
                      <div>
                        <div className="font-semibold text-white">Action: Post Notification</div>
                        <div className="text-[10px] text-slate-500">Send custom payload to Slack</div>
                      </div>
                    </div>
                    <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px]">Slack</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Trusted by teams building what comes next
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 justify-items-center items-center opacity-65">
            <span className="font-bold text-slate-700 text-lg tracking-tight">Acme Corp</span>
            <span className="font-bold text-slate-700 text-lg tracking-tight">Globex Ltd</span>
            <span className="font-bold text-slate-700 text-lg tracking-tight">Initech</span>
            <span className="font-bold text-slate-700 text-lg tracking-tight">Umbrella Corp</span>
            <span className="font-bold text-slate-700 text-lg tracking-tight">Hooli Inc</span>
            <span className="font-bold text-slate-700 text-lg tracking-tight">Veer AI</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Why Your Team is Falling Behind
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Disjointed apps and manual handoffs eat up critical hours, causing delays, mistakes, and team burnout.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Too Many Manual Tasks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Manually copying database entries, triggering notifications, and following up consumes your team's entire morning.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Disconnected Tools</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                CRMs, email apps, chat boxes, and spreadsheets don't talk to each other, creating silod information pockets.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Endless Repetitive Work</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Re-checking files and data validation takes up to 40% of standard operations, lowering productivity.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Zero Operational Visibility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Finding where tasks are stuck becomes a detective task, leading to missed client SLA deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Powerful Features Engineered for Scale
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              FlowPilot provides the infrastructure to build, track, and optimize complex workflows in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Workflow Automation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build advanced trigger-action flows with multiple branches and robust error-handling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Integrations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Securely connect to Gmail, Slack, Stripe, Hubspot, and 200+ services without typing API keys.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Insights</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Monitor live operation metrics, run speeds, task success rates, and active processes instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team Collaboration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Share workflow libraries, set custom permission systems, and audit changes as a team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No long implementation contracts, no custom code requirements. Just pure flow.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-center md:text-right space-y-3">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">Step One</span>
                  <h3 className="text-2xl font-bold text-slate-900">Connect Your Tools</h3>
                  <p className="text-slate-600">
                    Securely connect databases, CRMs, chat apps, and storage folders. Our platform supports secure OAuth and private keys natively.
                  </p>
                </div>
                <div className="my-4 md:my-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-md">
                  1
                </div>
                <div className="md:w-5/12 bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-3 py-1.5 bg-white shadow-sm border border-slate-200 rounded text-xs font-semibold">Slack Connect</span>
                    <span className="px-3 py-1.5 bg-white shadow-sm border border-slate-200 rounded text-xs font-semibold">Salesforce v2</span>
                    <span className="px-3 py-1.5 bg-white shadow-sm border border-slate-200 rounded text-xs font-semibold">Gmail Auth</span>
                    <span className="px-3 py-1.5 bg-white shadow-sm border border-slate-200 rounded text-xs font-semibold">Stripe Webhooks</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="md:w-5/12 text-center md:text-left space-y-3">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">Step Two</span>
                  <h3 className="text-2xl font-bold text-slate-900">Build Your Workflow</h3>
                  <p className="text-slate-600">
                    Use our drag-and-drop designer to choose triggers, filter criteria, and configure standard actions. Apply filters and custom delays.
                  </p>
                </div>
                <div className="my-4 md:my-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-md">
                  2
                </div>
                <div className="md:w-5/12 bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2 bg-white border border-blue-200 rounded text-blue-700">IF: Deal value &gt; $5,000</div>
                    <div className="p-2 bg-white border border-slate-200 rounded text-slate-600">THEN: Notify Executive Channel</div>
                    <div className="p-2 bg-white border border-slate-200 rounded text-slate-600">THEN: Create Deal in Hubspot</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-center md:text-right space-y-3">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">Step Three</span>
                  <h3 className="text-2xl font-bold text-slate-900">Let FlowPilot Do the Work</h3>
                  <p className="text-slate-600">
                    Deploy your automation with one click. Sit back and watch FlowPilot process operations, handle errors, and log records 24/7.
                  </p>
                </div>
                <div className="my-4 md:my-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-md">
                  3
                </div>
                <div className="md:w-5/12 bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-full border border-green-200 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Processing 2,450 runs/hour</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center space-x-1 text-blue-400 bg-blue-950 border border-blue-900 px-2 py-0.5 rounded text-xs font-semibold">
                <Zap className="h-3 w-3" />
                <span>Live Operations</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ultimate Operational Control Center
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                Get full visibility into your operations. Track success rates, performance, and workflow activity details at a glance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Real-time action logging</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Automatic retry protocol</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>Comprehensive audit logs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">Total Runs</div>
                  <div className="text-2xl font-bold text-white">482,109</div>
                  <div className="text-[9px] text-green-400 mt-1">↑ 12% vs yesterday</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">Time Saved</div>
                  <div className="text-2xl font-bold text-white">1,402 hrs</div>
                  <div className="text-[9px] text-green-400 mt-1">↑ 84 hrs saved this week</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1">Success Rate</div>
                  <div className="text-2xl font-bold text-white">99.98%</div>
                  <div className="text-[9px] text-blue-400 mt-1">Automatic recovery active</div>
                </div>
              </div>

              <div className="bg-slate-950 rounded-lg border border-slate-800 p-4">
                <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center justify-between">
                  <span>Recent Executed Actions</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-400 px-2 py-0.5 rounded">Live Refreshing</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between p-2 hover:bg-slate-900 transition-colors border-b border-slate-900">
                    <span className="text-green-400">✓ Sync CRM Contacts</span>
                    <span className="text-slate-500">2s ago</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-slate-900 transition-colors border-b border-slate-900">
                    <span className="text-green-400">✓ Auto-generate Invoice #1902</span>
                    <span className="text-slate-500">12s ago</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-slate-900 transition-colors border-b border-slate-900">
                    <span className="text-green-400">✓ Deliver Stripe payload to Slack</span>
                    <span className="text-slate-500">45s ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Proven Results from Growing Teams
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how operations teams and startup founders use FlowPilot to buy back their time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "FlowPilot saved our logistics team at least 15 hours a week. We connected our shipping provider to Slack and Hubspot in under an hour without writing code. Absolutely stellar product."
              </p>
              <div>
                <div className="font-bold text-slate-800">Sarah Jenkins</div>
                <div className="text-xs text-slate-500">VP of Operations, ShipFast</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "Our development team used to waste time manual copy-pasting release notes and issues across boards. FlowPilot automates all of it, leaving our developers to focus on the code itself."
              </p>
              <div>
                <div className="font-bold text-slate-800">David Chen</div>
                <div className="text-xs text-slate-500">Co-Founder, DevKit</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "The drag-and-drop builder is so simple my sales executives configured their own CRM enrichment loops. We've scaled our operations without hiring additional coordinators."
              </p>
              <div>
                <div className="font-bold text-slate-800">Elena Rostova</div>
                <div className="text-xs text-slate-500">Director of Sales, ScaleFlow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Clear answers to the most common questions about FlowPilot.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <FAQItem 
              question="How does FlowPilot connect to my existing software?" 
              answer="FlowPilot integrates natively with over 200+ popular SaaS tools including Slack, Salesforce, Google Workspace, GitHub, and Jira. You can authenticate and connect your accounts securely in just a few clicks."
            />
            <FAQItem 
              question="Do I need coding skills to build workflows?" 
              answer="Not at all. FlowPilot features an intuitive drag-and-drop visual builder. Anyone on your team can create powerful automated sequences, define conditional logic, and configure triggers without writing a single line of code."
            />
            <FAQItem 
              question="Is my data secure with FlowPilot?" 
              answer="Security is our top priority. FlowPilot is SOC 2 Type II certified, uses bank-grade AES-256 encryption at rest and TLS 1.3 in transit, and complies with GDPR and CCPA requirements to ensure your data stays private and safe."
            />
            <FAQItem 
              question="Can I upgrade, downgrade or cancel my plan at any time?" 
              answer="Yes. You can switch plans or cancel your subscription at any time directly from your dashboard settings. Upgrades take effect immediately, while downgrades and cancellations apply at the end of the current billing cycle."
            />
            <FAQItem 
              question="Do you offer a self-hosted or on-premise solution?" 
              answer="Yes, our Scale plan offers dedicated private cloud deployments and self-hosted on-premise configurations. Please contact our enterprise sales team via the Contact Page for detail options."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.4),transparent_50%)]" />
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Make More Time for Work That Matters
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of modern operations teams already automating their pipelines with FlowPilot. Set up your first workflow in 10 minutes.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg text-base font-bold text-blue-950 bg-white hover:bg-slate-100 transition-colors shadow-lg hover:scale-[1.02] transform active:scale-95 duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

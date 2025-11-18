/* eslint-disable @typescript-eslint/no-unused-vars */
import { Code, Globe, Shield, Headphones, Target, CheckCircle, ArrowRight, Cloud, Cpu, Database, Zap, Users, BarChart3, Smartphone, Server, Lock, MessageCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Transformation",
      description: "Modernize your infrastructure with scalable cloud solutions that drive efficiency and innovation",
      features: [
        "Cloud strategy and migration planning",
        "Multi-cloud architecture design",
        "Containerization and orchestration",
        "Serverless computing implementation",
        "Cost optimization and governance"
      ],
      color: "emerald"
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence to automate processes and gain competitive insights",
      features: [
        "Predictive analytics and modeling",
        "Natural language processing",
        "Computer vision solutions",
        "AI-powered automation",
        "Machine learning operations"
      ],
      color: "emerald"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform raw data into actionable intelligence with robust data pipelines and analytics",
      features: [
        "Data lake and warehouse design",
        "Real-time streaming pipelines",
        "Business intelligence dashboards",
        "Data governance and quality",
        "Advanced analytics implementation"
      ],
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protect your digital assets with enterprise-grade security frameworks and monitoring",
      features: [
        "Zero-trust architecture",
        "Threat detection and response",
        "Compliance and risk management",
        "Security awareness training",
        "Incident response planning"
      ],
      color: "emerald"
    },
    {
      icon: MessageCircle,
      title: "Customer Experience",
      description: "Revolutionize customer interactions with omnichannel engagement platforms",
      features: [
        "Contact center as a service",
        "CRM integration and automation",
        "Customer journey mapping",
        "Sentiment analysis tools",
        "Self-service portal development"
      ],
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Reimagine business processes with cutting-edge digital solutions and automation",
      features: [
        "Process automation (RPA)",
        "Digital workplace solutions",
        "Legacy system modernization",
        "API ecosystem development",
        "Digital strategy consulting"
      ],
      color: "emerald"
    }
  ];

  const industries = [
    {
      name: "Banking & Finance",
      description: "Regulatory compliance, fraud detection, and digital banking solutions",
      stats: "40+ financial institutions"
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant systems, telemedicine, and patient data management",
      stats: "25+ healthcare providers"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel experiences, inventory management, and personalization",
      stats: "60+ retail brands"
    },
    {
      name: "Manufacturing",
      description: "Industry 4.0, IoT integration, and supply chain optimization",
      stats: "35+ manufacturing plants"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 to-slate-900/0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-lg mb-8">
              <Zap size={20} className="mr-2" />
              Transformative Technology Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Digital
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to propel your business into the future
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Interactive Cards */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end technology solutions tailored to your unique business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`p-8 bg-gradient-to-br from-slate-900 to-${service.color}-900 text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <service.icon size={48} className="text-white" />
                    <div className="text-4xl font-bold text-white/20">0{index + 1}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle size={20} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry <span className="text-emerald-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Deep domain knowledge across key sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.name} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                  <div className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {industry.stats}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Target size={16} className="mr-2" />
                  Specialized solutions available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Deep dive into your business needs and challenges", icon: Users },
              { step: "02", title: "Design", desc: "Architect tailored solutions and implementation roadmap", icon: BarChart3 },
              { step: "03", title: "Develop", desc: "Agile development with continuous integration", icon: Code },
              { step: "04", title: "Deliver", desc: "Seamless deployment and ongoing optimization", icon: CheckCircle }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {phase.step}
                  </div>
                  <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <phase.icon size={32} className="mx-auto mb-4 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="text-emerald-400">Stack</span>
            </h2>
            <p className="text-xl text-slate-300">
              Built with cutting-edge tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "AWS", icon: Cloud },
              { name: "Azure", icon: Server },
              { name: "React", icon: Code },
              { name: "Node.js", icon: Zap },
              { name: "Python", icon: Cpu },
              { name: "MongoDB", icon: Database },
              { name: "Docker", icon: Globe },
              { name: "Kubernetes", icon: Shield },
              { name: "TensorFlow", icon: BarChart3 },
              { name: "Salesforce", icon: Users },
              { name: "iOS/Android", icon: Smartphone },
              { name: "Security", icon: Lock }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center group">
                <div className="bg-slate-700/50 p-6 rounded-2xl mb-3 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <tech.icon size={32} className="mx-auto text-emerald-400" />
                </div>
                <p className="font-semibold group-hover:text-emerald-300 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block text-emerald-400">Business?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can drive your digital success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  Start Your Project
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Learn About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
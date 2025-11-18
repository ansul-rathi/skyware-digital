/* eslint-disable @typescript-eslint/no-unused-vars */
import { Building2, ShoppingCart, Factory, Heart, Rocket, ArrowRight, Shield, Zap, Users, Target, BarChart3, Globe } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const industries = [
    {
      icon: Building2,
      title: "Banking & Financial Services",
      description: "Secure, compliant, and innovative solutions for the modern financial landscape",
      gradient: "from-blue-900 to-emerald-900",
      iconColor: "text-blue-400",
      solutions: [
        "Core banking system modernization",
        "Digital banking & mobile payments",
        "Regulatory compliance & risk management",
        "Fraud detection & cybersecurity",
        "Data analytics & business intelligence"
      ],
      stats: "40+ financial institutions"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description: "Transform customer experiences with cutting-edge retail technology",
      gradient: "from-purple-900 to-pink-900",
      iconColor: "text-purple-400",
      solutions: [
        "E-commerce platform development",
        "Omnichannel retail integration",
        "Inventory & supply chain optimization",
        "Customer personalization engines",
        "Payment gateway integration"
      ],
      stats: "60+ retail brands"
    },
    {
      icon: Factory,
      title: "Manufacturing & Logistics",
      description: "Industry 4.0 solutions for optimized operations and smart supply chains",
      gradient: "from-amber-900 to-orange-900",
      iconColor: "text-amber-400",
      solutions: [
        "ERP implementation & integration",
        "IoT & smart factory solutions",
        "Supply chain management",
        "Predictive maintenance systems",
        "Warehouse automation"
      ],
      stats: "35+ manufacturing plants"
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "Secure, compliant technology for better patient care and medical innovation",
      gradient: "from-red-900 to-rose-900",
      iconColor: "text-red-400",
      solutions: [
        "Electronic health records (EHR)",
        "Telemedicine & patient portals",
        "HIPAA compliance & security",
        "Healthcare analytics",
        "Medical device integration"
      ],
      stats: "25+ healthcare providers"
    },
    {
      icon: Rocket,
      title: "Startups & SMEs",
      description: "Scalable technology solutions designed for rapid growth and innovation",
      gradient: "from-green-900 to-emerald-900",
      iconColor: "text-green-400",
      solutions: [
        "MVP development & prototyping",
        "Cloud infrastructure setup",
        "Scalable architecture design",
        "DevOps & CI/CD pipelines",
        "CTO advisory services"
      ],
      stats: "100+ startups accelerated"
    },
    {
      icon: Globe,
      title: "Technology & SaaS",
      description: "Platform development and scaling solutions for tech companies",
      gradient: "from-cyan-900 to-blue-900",
      iconColor: "text-cyan-400",
      solutions: [
        "SaaS platform development",
        "Microservices architecture",
        "API ecosystem development",
        "Cloud-native solutions",
        "Scalable infrastructure"
      ],
      stats: "50+ tech companies"
    }
  ];

  const expertise = [
    {
      icon: Users,
      title: "Deep Domain Knowledge",
      description: "Years of experience working with organizations in each industry sector",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensuring solutions meet industry-specific regulatory requirements",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Best Practices",
      description: "Proven methodologies from successful implementations across industries",
      color: "amber"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored approaches addressing unique industry challenges",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Leveraging analytics for informed decision-making",
      color: "cyan"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International experience across diverse markets",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 to-slate-900/0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-lg mb-8">
              <Target size={20} className="mr-2" />
              Industry-Specific Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforming
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Industries
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Sector-specific solutions powered by deep domain knowledge and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-emerald-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep industry knowledge meets innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`p-8 bg-gradient-to-br ${industry.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <industry.icon size={48} className={industry.iconColor} />
                      <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                        {industry.stats}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-white/80 leading-relaxed">{industry.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center"
                  >
                    Explore Solutions
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in serving diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={item.title} className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className={`inline-flex p-4 bg-${item.color}-100 rounded-2xl mb-6 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110`}>
                  <item.icon size={40} className={`text-${item.color}-600 group-hover:text-white`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">12+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-8">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-world-map bg-center bg-no-repeat bg-contain opacity-5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block text-emerald-400">Industry?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Schedule Consultation
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
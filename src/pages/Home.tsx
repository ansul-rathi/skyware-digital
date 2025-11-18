import { ArrowRight, Code, Shield, Zap, Users, Globe, TrendingUp, Cloud, Database, Cpu, Lock, Server } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Transforming Businesses Digitally
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                SKY
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  WARE
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-emerald-100 font-light">
                Digital Innovation
                <span className="block text-white font-medium">Redefined</span>
              </p>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                We architect digital futures through cutting-edge technology solutions, 
                transforming challenges into opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Journey
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Solutions
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 transform translate-y-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Cloud size={32} className="text-emerald-400 mb-3" />
                    <h3 className="font-semibold text-white">Cloud Solutions</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Database size={32} className="text-cyan-400 mb-3" />
                    <h3 className="font-semibold text-white">Data Analytics</h3>
                  </div>
                </div>
                <div className="space-y-6 transform -translate-y-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Cpu size={32} className="text-amber-400 mb-3" />
                    <h3 className="font-semibold text-white">AI & ML</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Lock size={32} className="text-red-400 mb-3" />
                    <h3 className="font-semibold text-white">Cyber Security</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Global Support</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase - Diagonal Layout */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-gray-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Digital Arsenal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to propel your business into the future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Code size={28} className="text-emerald-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bespoke software solutions crafted to solve your unique business challenges 
                      and drive digital transformation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Server size={28} className="text-cyan-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Infrastructure Modernization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Transform your legacy systems into agile, cloud-native architectures 
                      that scale with your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Shield size={28} className="text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Security First Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enterprise-grade security protocols and compliance frameworks to safeguard 
                      your digital assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-emerald-900 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold mb-6">Why We Stand Out</h3>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Zap size={24} className="text-emerald-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Lightning Fast Deployment</h4>
                      <p className="text-emerald-100 text-sm">Rapid implementation with precision</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Users size={24} className="text-cyan-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Dedicated Expert Teams</h4>
                      <p className="text-emerald-100 text-sm">Senior talent focused on your success</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Globe size={24} className="text-amber-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Global Delivery Model</h4>
                      <p className="text-emerald-100 text-sm">Seamless collaboration across timezones</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <TrendingUp size={24} className="text-red-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Proven ROI</h4>
                      <p className="text-emerald-100 text-sm">Measurable business outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - Interactive Map Style */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-world-map bg-center bg-no-repeat bg-contain"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Worldwide <span className="text-emerald-400">Presence</span>
            </h2>
            <p className="text-xl text-slate-300">
              Delivering excellence across continents and timezones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
            {['Singapore', 'Hong Kong', 'United States', 'India', 'Middle East'].map((location, index) => (
              <div key={location} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <div className="w-12 h-12 bg-emerald-500/40 rounded-full flex items-center justify-center group-hover:bg-emerald-500/50 transition-colors duration-300">
                      <TrendingUp size={24} className="text-emerald-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 group-hover:border-emerald-400/50 animate-ping"></div>
                </div>
                <p className="font-semibold text-lg group-hover:text-emerald-300 transition-colors">
                  {location}
                </p>
                <div className="text-emerald-200 text-sm mt-1">
                  {['HQ', 'Tech Hub', 'Americas', 'Development', 'Growth'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Card Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-emerald-400">Elevate</span> Your Digital Presence?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that trust us with their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Begin Transformation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
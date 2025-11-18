/* eslint-disable @typescript-eslint/no-unused-vars */
import { Target, Eye, Award, CheckCircle, User, Globe, Clock, Shield, TrendingUp, Users, Rocket, Heart } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 to-slate-900/0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-lg mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              Innovating Since 2008
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Digital
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              We are architects of digital transformation, building bridges between 
              <span className="text-white font-semibold"> vision and reality</span>
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Timeline Style */}
      <section className="py-20 bg-white relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 mt-32"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From startup to global technology partner, our story is written in code and customer success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-3">The Beginning</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Founded with a vision to democratize enterprise-grade technology 
                    for businesses of all sizes. Our first office was a small space 
                    with big dreams.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:w-1/2">
                <div className="text-4xl font-bold text-emerald-600 mb-2">2008</div>
                <div className="text-sm text-gray-500">Humble Beginnings</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="text-4xl font-bold text-emerald-600 mb-2">2015</div>
                <div className="text-sm text-gray-500">Global Expansion</div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-3">Going Global</h3>
                  <p className="text-cyan-100 leading-relaxed">
                    Expanded operations across Asia-Pacific and established our 
                    first international development center, serving clients in 12 countries.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-3">Digital Revolution</h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Pioneered AI and machine learning solutions, helping clients 
                    navigate the digital transformation wave with cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:w-1/2">
                <div className="text-4xl font-bold text-emerald-600 mb-2">2020</div>
                <div className="text-sm text-gray-500">Innovation Era</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Card Stack */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Target size={32} className="text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To architect digital futures by transforming complex business challenges 
                  into elegant technological solutions. We empower organizations to thrive 
                  in the digital economy through innovation, expertise, and relentless 
                  commitment to excellence.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-100 rounded-xl mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Eye size={32} className="text-cyan-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's most trusted digital innovation partner, recognized 
                  for transforming industries and shaping the future of technology. We 
                  envision a world where every business can leverage cutting-edge 
                  solutions to achieve extraordinary outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "We do what's right, not what's easy", color: "emerald" },
              { icon: Users, title: "Collaboration", desc: "Stronger together in partnership", color: "cyan" },
              { icon: Rocket, title: "Innovation", desc: "Pushing boundaries of what's possible", color: "amber" },
              { icon: Heart, title: "Passion", desc: "Driven by love for technology", color: "red" }
            ].map((value, index) => (
              <div key={value.title} className="group text-center p-6">
                <div className={`inline-flex p-4 bg-${value.color}-100 rounded-2xl mb-4 group-hover:bg-${value.color}-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110`}>
                  <value.icon size={40} className={`text-${value.color}-600 group-hover:text-white`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Modern Profile Card */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visionary <span className="text-emerald-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600">
              Guided by experience, driven by innovation
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-900 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
                    <User size={64} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Sameer Nowal</h3>
                  <p className="text-emerald-300 text-xl font-semibold">Manager</p>
                </div>
              </div>
              <div className="p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock size={24} className="text-emerald-600" />
                    <span className="text-gray-700">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe size={24} className="text-emerald-600" />
                    <span className="text-gray-700">Global Technology Leader</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <TrendingUp size={24} className="text-emerald-600" />
                    <span className="text-gray-700">Digital Transformation Expert</span>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Sameer Nowal brings over 15 years of pioneering work in IT consulting 
                      and digital transformation. His visionary leadership has guided 
                      SKYWARE DIGITAL from a startup to a global technology partner.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Under his guidance, we've delivered transformative solutions for 
                      Fortune 500 companies and innovative startups alike, always pushing 
                      the boundaries of what technology can achieve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - Interactive Map */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-world-map bg-center bg-no-repeat bg-contain opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Worldwide <span className="text-emerald-400">Footprint</span>
            </h2>
            <p className="text-xl text-slate-300">
              Serving clients across continents with localized expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { location: "Singapore", role: "Asia-Pacific HQ", clients: "150+" },
              { location: "Hong Kong", role: "Financial Hub", clients: "80+" },
              { location: "United States", role: "Americas Center", clients: "200+" },
              { location: "India", role: "Innovation Lab", clients: "300+" },
              { location: "Middle East", role: "Growth Center", clients: "120+" }
            ].map((office, index) => (
              <div key={office.location} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Award size={32} className="text-emerald-300" />
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                  {office.location}
                </h4>
                <p className="text-emerald-200 text-sm mb-1">{office.role}</p>
                <p className="text-slate-400 text-xs">{office.clients} Clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your
              <span className="block text-emerald-400">Success Story?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have transformed their digital landscape with us
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Start Your Journey
              <TrendingUp size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
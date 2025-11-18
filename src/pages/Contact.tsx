import { Mail, Phone, MapPin, Clock, MessageCircle, Globe, Users, Zap, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 to-slate-900/0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-lg mb-8">
              <MessageCircle size={20} className="mr-2" />
              Let's Start Your Digital Journey
            </div>
            <h1 className="flex justify-center text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Get In
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let's start the conversation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Whether you're starting a new project or looking to optimize existing systems, 
                  we're here to help you achieve digital excellence. Reach out through any of the 
                  channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <MapPin size={24} className="text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Building A1, Dubai Digital Park<br />
                        Dubai Silicon Oasis<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl border border-gray-100 hover:border-cyan-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-100 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Phone size={24} className="text-cyan-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 text-lg font-medium">+971 42285285</p>
                      <a 
                        href="tel:+97142285285" 
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold mt-2"
                      >
                        Call Now <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl border border-gray-100 hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Mail size={24} className="text-amber-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        General Inquiries: info@Skyware.ink<br />
                        Careers: info@Skyware.ink
                      </p>
                      <a 
                        href="mailto:info@Skyware.ink" 
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mt-2"
                      >
                        Send Email <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Clock size={24} className="text-purple-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday to Friday<br />
                        10:00 AM to 6:00 PM (GST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information & Features */}
            <div className="space-y-8">
              {/* Response Time */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyan-100 rounded-xl">
                    <Zap size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fast Response</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  We pride ourselves on quick communication. Expect an initial response 
                  within 2 hours during business hours.
                </p>
                {/* <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Typical Response Time:</strong><br />
                    • Initial response: Within 2 hours<br />
                    • Detailed proposal: Within 24 hours<br />
                    • Project kickoff: Within 48 hours
                  </p>
                </div> */}
              </div>

              {/* Global Presence */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Globe size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Support</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  With teams across multiple timezones, we provide round-the-clock 
                  support for our international clients.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">Singapore</div>
                    <div className="text-gray-600">APAC Hub</div>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">Dubai</div>
                    <div className="text-gray-600">MEA HQ</div>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">USA</div>
                    <div className="text-gray-600">Americas</div>
                  </div>
                  <div className="text-center p-2 bg-white/50 rounded">
                    <div className="font-semibold">India</div>
                    <div className="text-gray-600">Tech Center</div>
                  </div>
                </div>
              </div>

              {/* Expert Consultation */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Users size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Expert Consultation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Get direct access to our senior technology experts and solution 
                  architects for personalized guidance on your digital transformation journey.
                </p>
                {/* <div className="mt-4 bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Included in every consultation:</strong><br />
                    • Technical architecture review<br />
                    • Solution design workshop<br />
                    • Implementation roadmap<br />
                    • Cost-benefit analysis
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 relative">
        <div className="w-full h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1843187326234!2d55.376316!3d25.117655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f64d9e2c30d2d%3A0x9c0d3f7b2e8f9d3e!2sDubai%20Digital%20Park!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SKYWARE DIGITAL Office Location"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
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
                Ready to Start Your
                <span className="block text-emerald-400">Digital Transformation?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact us today and let's build something amazing together. We're just a call or email away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97142285285"
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call +971 42285285
                </a>
                <a
                  href="mailto:info@Skyware.ink"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Email info@Skyware.ink
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
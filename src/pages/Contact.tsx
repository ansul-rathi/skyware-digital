import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-emerald-100">
              Let's Start a Conversation About Your Technology Needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question or ready to start your digital transformation journey?
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin size={24} className="text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Building A1, Dubai Digital Park<br />
                      Dubai Silicon Oasis<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone size={24} className="text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+971 42285285</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail size={24} className="text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@Skyware.ink<br />
                      Careers: info@Skyware.ink
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock size={24} className="text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday<br />
                      10:00 AM to 6:00 PM (GST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Message Box */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We're Here to Help</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're exploring new digital solutions, looking for expert guidance,
                  or simply want more information about our services, our team is always ready
                  to assist you. Reach out through phone, email, or visit our office during business hours.
                </p>
                <p className="text-gray-600 mt-4">
                  We pride ourselves on fast communication and dedicated support.
                  Expect a response within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1843187326234!2d55.376316!3d25.117655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f64d9e2c30d2d%3A0x9c0d3f7b2e8f9d3e!2sDubai%20Digital%20Park!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SKYWARE DIGITAL Office Location"
          />
        </div>
      </section>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Phone, MapPin, Mail, Linkedin, Twitter, Facebook, ArrowDown, Star, X } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVentures Inc.",
    image: "/api/placeholder/60/60",
    quote: "John helped our company navigate a complex merger with expert precision. His attention to detail saved us from potential legal pitfalls.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Developer",
    image: "/api/placeholder/60/60",
    quote: "The level of personal attention and legal expertise I received was exceptional. I wouldn't trust my real estate transactions to anyone else.",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda Rivera",
    role: "Family Law Client",
    image: "/api/placeholder/60/60",
    quote: "During my divorce, John provided not only legal expertise but also compassionate guidance during a difficult time. Highly recommended.",
    rating: 5
  }
];

// Mock data for services
const services = [
  {
    id: 1,
    title: "Corporate Law",
    icon: "🏛️",
    shortDesc: "Expert legal counsel for businesses of all sizes",
    fullDesc: "Comprehensive corporate law services including business formation, contract negotiation, mergers and acquisitions, corporate governance, and regulatory compliance. Our team helps businesses navigate complex legal landscapes while minimizing risk and maximizing opportunities."
  },
  {
    id: 2,
    title: "Civil Litigation",
    icon: "⚖️",
    shortDesc: "Strategic representation in civil disputes",
    fullDesc: "From pre-litigation negotiations to trial advocacy and appeals, our litigation team provides aggressive representation while pursuing the most favorable and cost-effective resolutions. We handle contract disputes, business torts, property disputes, and professional liability matters."
  },
  {
    id: 3,
    title: "Family Law & Divorce",
    icon: "💼",
    shortDesc: "Compassionate guidance for family legal matters",
    fullDesc: "Our family law practice focuses on providing supportive representation during challenging personal transitions. We handle divorce, child custody, support arrangements, adoption, and domestic violence protection with sensitivity and determination."
  },
  {
    id: 4,
    title: "Real Estate Law",
    icon: "📜",
    shortDesc: "Comprehensive property transaction services",
    fullDesc: "Our real estate practice covers all aspects of property law, including purchases and sales, leasing, development projects, zoning issues, title disputes, and mortgage transactions. We provide clear guidance through complex real estate matters for individuals and businesses."
  }
];

const LawyerWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Testimonial auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Open service modal
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Close service modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`font-sans ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className={`w-full h-full bg-cover bg-center ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`} style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}>
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/70' : 'bg-blue-900/30'}`}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className={`font-serif text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experienced Legal Representation You Can Trust.
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Over 20 years of expertise in Corporate Law, Civil Litigation, and Personal Injury Claims.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-md text-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white backdrop-blur-sm shadow-lg`}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </motion.div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode} 
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white z-50"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </section>

      {/* About Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} id="about">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <img 
                  src="/api/placeholder/400/500" 
                  alt="John Doe, Attorney at Law" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">John Doe, Esq.</h3>
                  <p className="text-gray-500 dark:text-gray-300">Attorney at Law</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Me</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Providing strategic legal solutions since 2005. With two decades of experience, I've successfully represented clients in complex corporate matters, civil litigation, and personal injury cases. My approach combines thorough legal knowledge with a commitment to each client's unique needs.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Career Milestones</h3>
                <div className="space-y-6">
                  <motion.div 
                    className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? 'bg-blue-700' : 'bg-blue-100 text-blue-700'}`}>
                      05
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Harvard Law School Graduate</h4>
                      <p className="text-gray-500 dark:text-gray-300">Graduated with honors, specializing in corporate and business law</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? 'bg-blue-700' : 'bg-blue-100 text-blue-700'}`}>
                      10
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Founded Doe & Associates</h4>
                      <p className="text-gray-500 dark:text-gray-300">Established boutique law firm focusing on corporate and civil litigation</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className={`flex items-start gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${darkMode ? 'bg-blue-700' : 'bg-blue-100 text-blue-700'}`}>
                      20
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Top Litigation Attorney</h4>
                      <p className="text-gray-500 dark:text-gray-300">Recognized by the State Bar Association for excellence in litigation</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="services">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Legal Services</h2>
            <p className="text-lg">Comprehensive legal solutions tailored to your specific needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`rounded-xl p-6 cursor-pointer shadow-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'}`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onClick={() => openServiceModal(service)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-300">{service.shortDesc}</p>
                <p className="mt-4 text-blue-600 dark:text-blue-400 font-medium">Learn more →</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} id="testimonials">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg">What our clients say about our legal services</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover" 
                    />
                    <div>
                      <h4 className="text-lg font-bold">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-500 dark:text-gray-300">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg italic">"{testimonials[currentTestimonial].quote}"</p>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`} id="contact">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h2>
            <p className="text-lg">Get in touch for a consultation or to schedule an appointment</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="bg-gray-200 h-64">
                {/* Map Placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-500" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Office</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-500 dark:text-gray-300">123 Legal Avenue, Suite 500<br/>New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-500 dark:text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-500 dark:text-gray-300">contact@doelaw.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800 backdrop-blur-lg bg-opacity-80' : 'bg-white backdrop-blur-lg'}`}
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="John Smith" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="john@example.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="(555) 123-4567" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    rows="4"
                    placeholder="Tell us about your case..." 
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-900 text-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Doe Law Firm</h3>
              <p className="text-gray-400 mb-6">Providing exceptional legal services with integrity and dedication since 2005.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 2pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Doe Law Firm. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <motion.a
          href="tel:5551234567"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg"
        >
          <Phone className="w-6 h-6 text-white" />
        </motion.a>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-lg w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-4xl mb-4">{selectedService.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              <p className="mb-6">{selectedService.fullDesc}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LawyerWebsite;
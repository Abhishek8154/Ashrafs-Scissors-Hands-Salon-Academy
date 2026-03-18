/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  GraduationCap, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  MessageCircle,
  ExternalLink,
  Award,
  Users,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  category: 'Hair' | 'Grooming';
}

interface Course {
  title: string;
  duration: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

// --- Data ---
const SERVICES: Service[] = [
  { title: "Haircut & Styling", description: "Precision cuts tailored to your face shape and style preferences.", category: 'Hair' },
  { title: "Hair Coloring", description: "From subtle highlights to bold transformations using premium products.", category: 'Hair' },
  { title: "Hair Spa & Treatment", description: "Deep conditioning and scalp treatments for healthy, glowing hair.", category: 'Hair' },
  { title: "Hair Smoothening / Keratin", description: "Long-lasting frizz control and silky smooth texture.", category: 'Hair' },
  { title: "Beard Styling", description: "Expert beard shaping and grooming for a sharp, clean look.", category: 'Grooming' },
  { title: "Hair Wash & Styling", description: "Professional wash followed by a blow-dry or styling session.", category: 'Grooming' },
  { title: "Head Massage", description: "Relaxing massage to relieve stress and improve blood circulation.", category: 'Grooming' },
];

const COURSES: Course[] = [
  { title: "Professional Hair Cutting", duration: "3 Months", description: "Master the art of precision cutting and modern barbering techniques." },
  { title: "Advanced Hair Styling", duration: "2 Months", description: "Learn creative styling for weddings, editorials, and high-fashion." },
  { title: "Barber Training Course", duration: "1.5 Months", description: "Comprehensive training in traditional and modern barbering." },
  { title: "Hair Coloring Techniques", duration: "1 Month", description: "Expertise in balayage, ombre, and advanced color theory." },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "Salon Client", text: "Best haircut I've ever had in Andheri. Ashraf is a true artist with his scissors!", rating: 5 },
  { name: "Priya Patel", role: "Academy Student", text: "The training here is top-notch. I learned more in 2 months than I did in a year elsewhere.", rating: 5 },
  { name: "Amit Verma", role: "Regular Client", text: "Premium atmosphere and very hygienic. Highly recommended for grooming services.", rating: 5 },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599351431247-f5094021186d?auto=format&fit=crop&q=80&w=800",
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4 shadow-xl border-b border-gold/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Scissors className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tighter">
            ASHRAFS <span className="text-gold">SCISSORS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-all rounded-full text-sm font-bold uppercase tracking-widest"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-gold text-black text-center font-bold rounded-lg"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 bg-gold/20 border border-gold/30 text-gold rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Premium Hair Salon & Academy
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Premium Hair Styling & <br />
            <span className="gold-text-gradient">Professional Academy</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
            Expert haircuts, grooming services, and professional hair styling courses in the heart of Andheri East, Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#appointment" 
              className="px-10 py-4 gold-gradient text-black font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              Book Appointment <ChevronRight size={20} />
            </a>
            <a 
              href="tel:+918104730772" 
              className="px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" 
                alt="Stylist at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-2xl hidden lg:block">
              <div className="text-black text-center">
                <span className="block text-4xl font-serif font-bold">10+</span>
                <span className="text-sm font-bold uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Where Artistry Meets <br />
              <span className="text-gold">Precision</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Ashrafs Scissors Hands Salon & Academy is more than just a place for a haircut. It's a sanctuary of style and a hub for professional hair education in Andheri East. 
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Our team of experienced stylists combines modern techniques with classic precision to deliver exceptional results. Whether you're looking for a fresh new look or aiming to build a career in the hair industry, we provide the expertise and environment to help you shine.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Expert Stylists</h4>
                  <p className="text-sm text-white/50">Highly trained professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Modern Tools</h4>
                  <p className="text-sm text-white/50">Latest salon equipment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Premium Products</h4>
                  <p className="text-sm text-white/50">Top-tier hair care brands.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hygienic Space</h4>
                  <p className="text-sm text-white/50">Safe & clean environment.</p>
                </div>
              </div>
            </div>

            <a href="#services" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:gap-4 transition-all">
              Explore Our Services <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Salon <span className="text-gold">Services</span></h2>
          <p className="text-white/60 text-lg">Indulge in our range of premium hair and grooming services designed to make you look and feel your absolute best.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-gold/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                {service.category === 'Hair' ? <Scissors size={24} /> : <Sparkles size={24} />}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-[#0a0a0a] scroll-mt-navbar relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold font-bold uppercase tracking-widest mb-4 block">Professional Training</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Hair Styling <span className="text-gold">Academy</span></h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Launch your career in the beauty industry with our certified training programs. We offer hands-on experience, expert mentorship, and a curriculum designed to make you industry-ready.
            </p>
            
            <div className="space-y-6 mb-12">
              {COURSES.map((course) => (
                <div key={course.title} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <GraduationCap className="text-black" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold">{course.title}</h4>
                      <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full uppercase">{course.duration}</span>
                    </div>
                    <p className="text-white/50 text-sm">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#appointment" 
              className="px-10 py-4 gold-gradient text-black font-bold rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              Enroll in Academy <ChevronRight size={20} />
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                alt="Academy Training" 
                className="rounded-2xl w-full aspect-[3/4] object-cover border border-gold/20"
                referrerPolicy="no-referrer"
              />
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Award className="text-gold mx-auto mb-2" size={32} />
                <h5 className="font-bold text-sm uppercase">Certified Courses</h5>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Users className="text-gold mx-auto mb-2" size={32} />
                <h5 className="font-bold text-sm uppercase">Expert Mentors</h5>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                alt="Hair Styling" 
                className="rounded-2xl w-full aspect-[3/4] object-cover border border-gold/20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Award />, title: "Experienced Stylists", desc: "Our team has over a decade of expertise in modern hair artistry." },
    { icon: <Sparkles />, title: "Modern Equipment", desc: "We use the latest tools and premium products for the best results." },
    { icon: <ShieldCheck />, title: "Hygienic Environment", desc: "Strict sanitization protocols for your safety and comfort." },
    { icon: <CheckCircle2 />, title: "Certified Training", desc: "Our academy programs are recognized and industry-aligned." },
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto gold-gradient rounded-2xl flex items-center justify-center text-black mb-6 shadow-lg">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our <span className="text-gold">Gallery</span></h2>
          <p className="text-white/60">A glimpse into our world of style, transformations, and professional training.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Sparkles className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Client <span className="text-gold">Stories</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/70 italic mb-6">"{t.text}"</p>
              <div>
                <h5 className="font-bold">{t.name}</h5>
                <span className="text-xs text-gold uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Haircut & Styling',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interested In:* ${formData.interest}%0A*Preferred Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918104730772?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Get In <span className="text-gold">Touch</span></h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Our Location</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Shop No 1, Nand Dham Industrial Estate, Radisson hotel, Marol Maroshi Rd, behind Marol Bus Stop, near State Bank Of India, Bori Colony, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059, India
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <p className="text-white/50 text-sm">+91 81047 30772</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Working Hours</h4>
                  <p className="text-white/50 text-sm">Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-gold/20 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.88000000000001!3d19.110000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86666666667%3A0x6666666666666666!2sAshrafs%20Scissors%20Hands%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/jBjmnP5PMjgF28EfA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest mt-4 hover:gap-4 transition-all"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </div>

          {/* Form */}
          <div id="appointment" className="glass-card p-10 rounded-3xl border border-gold/20">
            <h3 className="text-3xl font-serif font-bold mb-8">Book an <span className="text-gold">Appointment</span></h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-white/50">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-white/50">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-white/50">Service or Course</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all appearance-none"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <optgroup label="Salon Services" className="bg-[#0a0a0a]">
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </optgroup>
                  <optgroup label="Academy Courses" className="bg-[#0a0a0a]">
                    {COURSES.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-white/50">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-white/50">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 gold-gradient text-black font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-2"
              >
                Send Inquiry via WhatsApp <MessageCircle size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center">
                <Scissors className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tighter">
                ASHRAFS <span className="text-gold">SCISSORS</span>
              </span>
            </a>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Premium hair styling and professional academy in Andheri East, Mumbai. We believe in the art of precision and the power of education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6">Quick Links</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Salon Services</a></li>
              <li><a href="#academy" className="hover:text-gold transition-colors">Academy Courses</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6">Contact</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>Andheri East, Mumbai</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+91 81047 30772</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© 2026 Ashrafs Scissors Hands Salon & Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <>
      <a 
        href="https://wa.me/918104730772" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
      <a 
        href="tel:+918104730772" 
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
      >
        <Phone size={28} />
      </a>
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Academy />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

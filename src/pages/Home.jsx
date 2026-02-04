import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, BookOpen, Video, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-gray-900 opacity-90"></div>
          {/* Placeholder for background image */}
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Media Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Welcome to</span>
            <span className="block text-primary mt-2">PRAGEM SUCCOR TECHNOLOGY</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A dynamic Media Group bridging the gap between creativity, technology, and education. 
            We are your partner in Media Production, Training, Publishing, and Broadcasting.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-amber-600 transition-colors">
              Get in Touch
            </Link>
            <Link to="/services" className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-warmGray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Divisions</h2>
            <p className="mt-4 text-lg text-gray-600">Explore the diverse arms of Pragem Succor Technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Media Company */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-primary">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Media Company</h3>
              <p className="text-gray-600 mb-6">
                Full-scale media production including live streaming, event coverage, film making, and consultancy.
              </p>
              <Link to="/media-company" className="inline-flex items-center text-primary font-semibold hover:text-amber-700">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Media Academy */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Media Academy</h3>
              <p className="text-gray-600 mb-6">
                Practical training in filmmaking, broadcasting, editing, and content creation for aspiring professionals.
              </p>
              <Link to="/media-academy" className="inline-flex items-center text-secondary font-semibold hover:text-amber-900">
                Explore Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Books */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-primary">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Books & Publications</h3>
              <p className="text-gray-600 mb-6">
                A rich collection of books, journals, and publications to inspire and educate.
              </p>
              <Link to="/books" className="inline-flex items-center text-primary font-semibold hover:text-amber-700">
                View Library <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Videos */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-secondary">
                <Video size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video & Broadcast</h3>
              <p className="text-gray-600 mb-6">
                Our digital platform for broadcasts, short films, documentaries, and drama series.
              </p>
              <Link to="/videos" className="inline-flex items-center text-secondary font-semibold hover:text-amber-900">
                Watch Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to bring your vision to life?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Whether you need professional media coverage or want to learn the craft, we are here for you.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

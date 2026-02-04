import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Clapperboard, Video, Mic, PenTool, BookOpen, Radio, Users, MonitorPlay, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-warmGray min-h-screen">
      {/* Hero */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive Media, Training, and Publishing Solutions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Media Production Services */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-primary p-3 rounded-full mr-4">
              <Camera className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Media Production Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <MonitorPlay className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Streaming</h3>
              <p className="text-gray-600 mb-4">High-definition multi-camera live streaming for events, conferences, and religious programs.</p>
              <Link to="/media-company" className="text-primary font-semibold hover:underline flex items-center">
                Details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <Video className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Event Coverage</h3>
              <p className="text-gray-600 mb-4">Professional video and photography coverage for corporate and social events.</p>
              <Link to="/media-company" className="text-primary font-semibold hover:underline flex items-center">
                Details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <Radio className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Podcasts & Radio</h3>
              <p className="text-gray-600 mb-4">Production of online radio shows, audio dramas, and podcast series.</p>
              <Link to="/media-company" className="text-primary font-semibold hover:underline flex items-center">
                Details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <Clapperboard className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Film Production</h3>
              <p className="text-gray-600 mb-4">Short films, documentaries, and full-scale video productions.</p>
              <Link to="/media-company" className="text-primary font-semibold hover:underline flex items-center">
                Details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Training Services */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-secondary p-3 rounded-full mr-4">
              <Users className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Training & Education</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all border-l-4 border-secondary">
              <Clapperboard className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Filmmaking Courses</h3>
              <p className="text-gray-600 mb-4">Learn directing, scriptwriting, and production management.</p>
              <Link to="/media-academy" className="text-secondary font-semibold hover:underline flex items-center">
                View Curriculum <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all border-l-4 border-secondary">
              <PenTool className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p className="text-gray-600 mb-4">Master post-production software and techniques.</p>
              <Link to="/media-academy" className="text-secondary font-semibold hover:underline flex items-center">
                View Curriculum <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all border-l-4 border-secondary">
              <Mic className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Broadcasting</h3>
              <p className="text-gray-600 mb-4">Training for TV presenters and live broadcast technicians.</p>
              <Link to="/media-academy" className="text-secondary font-semibold hover:underline flex items-center">
                View Curriculum <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Publishing Services */}
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-amber-600 p-3 rounded-full mr-4">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Publishing</h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-all flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Books & Publications</h3>
              <p className="text-gray-600 mb-6">
                We publish a variety of books, journals, and educational materials. 
                Whether you are looking for inspirational reads or academic resources, our collection continues to grow.
              </p>
              <Link to="/books" className="px-6 py-3 bg-amber-600 text-white font-bold rounded hover:bg-amber-700 transition-colors inline-block">
                Visit Bookstore
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <BookOpen className="text-amber-100 w-32 h-32" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

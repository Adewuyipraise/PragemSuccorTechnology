import React from 'react';
import { Camera, Radio, Film, Video, Mic, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaCompany = () => {
  const services = [
    {
      icon: <MonitorPlay className="w-12 h-12 text-primary" />,
      title: "Multiple Camera Live Streaming & Broadcast",
      description: "Professional multi-cam setup for high-quality live streaming of events to Facebook, YouTube, and custom RTMP servers."
    },
    {
      icon: <Camera className="w-12 h-12 text-secondary" />,
      title: "Event Coverage",
      description: "Comprehensive coverage for corporate events, religious gatherings, weddings, and social functions, ensuring every moment is captured."
    },
    {
      icon: <Radio className="w-12 h-12 text-primary" />,
      title: "Online Radio & Drama Series Podcasts",
      description: "Production and hosting of engaging online radio shows and serialized audio drama podcasts."
    },
    {
      icon: <Film className="w-12 h-12 text-secondary" />,
      title: "Film Making",
      description: "End-to-end production of short films, documentaries, and full-length feature productions with cinematic quality."
    },
    {
      icon: <Video className="w-12 h-12 text-primary" />,
      title: "Video Shooting & Editing",
      description: "State-of-the-art video recording and post-production editing services using industry-standard software and hardware."
    },
    {
      icon: <Mic className="w-12 h-12 text-secondary" />,
      title: "Content Production",
      description: "Creative content creation tailored for TV, YouTube, and various digital platforms to grow your audience."
    }
  ];

  return (
    <div className="bg-warmGray min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Company</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your premier partner for professional media production and creative services.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Media Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Pragem Succor Technology's Media Company division, we don't just record video; we tell stories. 
              We operate as a full-service media production house, catering to corporate clients, organizations, and creative projects. 
              Our team of experienced professionals ensures that every project meets international broadcast standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Media Team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Media Consultancy & Production Support</h2>
              <p className="text-lg text-gray-600 mb-6">
                Beyond production, we offer expert consultancy to help you navigate the complex media landscape. 
                Whether you need advice on setting up your own studio, strategy for content distribution, or technical support for your media team, we are here to help.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                <li>Studio Setup & Equipment Procurement</li>
                <li>Workflow Optimization</li>
                <li>Technical Training & Support</li>
                <li>Project Management for Media Productions</li>
              </ul>
              <Link to="/contact" className="px-6 py-3 bg-primary text-white font-bold rounded hover:bg-amber-600 transition-colors">
                Consult With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCompany;

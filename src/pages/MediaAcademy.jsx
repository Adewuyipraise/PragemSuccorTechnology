import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clapperboard, Monitor, PenTool, CheckCircle } from 'lucide-react';

const MediaAcademy = () => {
  const courses = [
    {
      icon: <Clapperboard className="w-10 h-10 text-white" />,
      title: "Filmmaking & Directing",
      description: "Learn the art of visual storytelling, from script to screen. Covers directing, cinematography, and production management.",
      color: "bg-blue-600"
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      title: "Broadcasting & Live Streaming",
      description: "Master the technical and creative aspects of live broadcasting, TV presentation, and multi-camera streaming setups.",
      color: "bg-red-600"
    },
    {
      icon: <PenTool className="w-10 h-10 text-white" />,
      title: "Video Editing & Post-Production",
      description: "Hands-on training with industry software like Premiere Pro, After Effects, and DaVinci Resolve.",
      color: "bg-purple-600"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Content Creation Strategy",
      description: "Learn how to conceptualize, produce, and distribute engaging content for YouTube, Social Media, and Digital Platforms.",
      color: "bg-green-600"
    }
  ];

  return (
    <div className="bg-warmGray min-h-screen">
      {/* Hero */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Academy</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Empowering the next generation of media professionals through practical, hands-on training.
          </p>
        </div>
      </div>

      {/* About Academy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Learn from the Experts</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The Pragem Media Academy is dedicated to providing high-quality vocational training in the media arts. 
            Unlike traditional theoretical courses, our curriculum is designed around <strong>practical, hands-on learning</strong>. 
            Students work on real projects using professional equipment, ensuring they are industry-ready upon graduation.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full">
                <div className={`${course.color} p-6 flex items-center justify-center md:w-1/3`}>
                  {course.icon}
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link to="/contact" className="text-secondary font-semibold hover:underline">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Train With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-block p-3 bg-white rounded-full shadow mb-4">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Practical Focus</h4>
              <p className="text-sm text-gray-600">80% practical sessions, 20% theory.</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-block p-3 bg-white rounded-full shadow mb-4">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Modern Equipment</h4>
              <p className="text-sm text-gray-600">Access to the latest cameras and editing suites.</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-block p-3 bg-white rounded-full shadow mb-4">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Expert Instructors</h4>
              <p className="text-sm text-gray-600">Learn from working industry professionals.</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-block p-3 bg-white rounded-full shadow mb-4">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Certification</h4>
              <p className="text-sm text-gray-600">Receive a recognized certificate upon completion.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-amber-900 transition-colors">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaAcademy;

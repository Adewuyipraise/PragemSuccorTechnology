import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Bell, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="bg-warmGray min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Newspaper className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Launching Soon</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're preparing insightful articles on media, technology, and education.
          Subscribe to be notified when we launch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
          >
            <Bell size={18} className="mr-2" />
            Notify Me
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-bold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Back to Home
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Live Streaming in Nigeria",
      excerpt: "How technology is reshaping the way events are broadcasted and consumed in the digital age.",
      author: "Rasheed P.",
      date: "Jan 10, 2025",
      image: "https://images.unsplash.com/photo-1531297461136-82lw9b44d94d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    },
    {
      id: 2,
      title: "5 Tips for Aspiring Filmmakers",
      excerpt: "Starting your journey in filmmaking? Here are five essential tips from industry experts at Pragem Academy.",
      author: "Rasheed P.",
      date: "Jan 05, 2025",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Education"
    },
    {
      id: 3,
      title: "Why Corporate Branding Matters",
      excerpt: "Understanding the impact of professional media coverage on your corporate brand identity.",
      author: "Rasheed P.",
      date: "Dec 28, 2024",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Business"
    }
  ];

  return (
    <div className="bg-warmGray min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in media, technology, and academy announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary bg-amber-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <button className="text-primary font-bold text-sm flex items-center hover:underline">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

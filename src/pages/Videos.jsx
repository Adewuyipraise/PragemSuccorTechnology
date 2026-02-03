import React from 'react';
import { Play, Youtube } from 'lucide-react';

const Videos = () => {
  // Mock video data
  const videos = [
    {
      id: 1,
      title: "Live: Annual Media Conference 2024",
      thumbnail: "https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "2:15:30",
      views: "1.2K views",
      category: "Broadcast"
    },
    {
      id: 2,
      title: "Short Film: The Silent Echo",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "15:20",
      views: "5.4K views",
      category: "Film"
    },
    {
      id: 3,
      title: "Documentary: Voices of the Street",
      thumbnail: "https://images.unsplash.com/photo-1533533406456-30d5d42042ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "45:10",
      views: "3.1K views",
      category: "Documentary"
    },
    {
      id: 4,
      title: "Behind the Scenes: Studio Setup",
      thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "10:05",
      views: "800 views",
      category: "Tutorial"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center">
                <Youtube className="text-red-600 w-10 h-10 mr-3" />
                Video & Broadcast Platform
              </h1>
              <p className="text-gray-400">Watch our latest productions, live streams, and creative content.</p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors">
              Subscribe to Channel
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-4">Featured Broadcast</h2>
          <div className="relative aspect-video w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Featured Video" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center pl-1 hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-white" fill="white" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">LIVE NOW</span>
              <h3 className="text-3xl font-bold">Global Media Summit 2024</h3>
              <p className="text-gray-300 mt-2">Join us live as we discuss the future of digital media technology.</p>
            </div>
          </div>
        </div>

        {/* Latest Videos Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Latest Uploads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer group">
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{video.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <div className="text-gray-500 text-sm">
                    {video.views} • 2 days ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;

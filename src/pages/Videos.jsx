import React, { useState, useMemo } from 'react';
import { Play, Youtube, Radio, Clock, AlertCircle, Loader, ListVideo, X, Filter } from 'lucide-react';
import { useChannelVideos, useLiveStreams, useChannelPlaylists } from '../hooks/useYouTube';

const Videos = () => {
  const [tab, setTab] = useState('live');
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'az'

  // Fetch Data
  const { videos, loading: videosLoading, error: videosError } = useChannelVideos(12);
  const { streams: liveStreams, loading: liveLoading, error: liveError } = useLiveStreams('live', 3);
  const { streams: upcomingStreams, loading: upLoading } = useLiveStreams('upcoming', 6);
  const { streams: pastStreams, loading: pastLoading } = useLiveStreams('completed', 12);
  const { playlists, loading: playlistLoading } = useChannelPlaylists(9);

  // Sorting Logic
  const sortItems = (items) => {
    if (!items) return [];
    const sorted = [...items];
    if (sortBy === 'newest') {
      return sorted.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }
    if (sortBy === 'oldest') {
      return sorted.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
    }
    if (sortBy === 'az') {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  };

  const sortedVideos = useMemo(() => sortItems(videos), [videos, sortBy]);
  const sortedPastStreams = useMemo(() => sortItems(pastStreams), [pastStreams, sortBy]);
  const sortedPlaylists = useMemo(() => {
    // Playlists usually don't have publishedAt in the simple response, so we sort A-Z
    return [...(playlists || [])].sort((a, b) => a.title.localeCompare(b.title));
  }, [playlists]);

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center">
                <Youtube className="text-red-600 w-10 h-10 mr-3" />
                Video & Broadcast Platform
              </h1>
              <p className="text-gray-400">
                Watch our latest productions, live streams, and creative content.
              </p>
            </div>
            <a
              href={`https://www.youtube.com/channel/${import.meta.env.VITE_YOUTUBE_CHANNEL_ID}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors inline-flex items-center"
            >
              <Youtube size={20} className="mr-2" />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation & Sorting */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 border-b border-gray-800 pb-4 gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              { id: 'live', label: 'Live Now', icon: Radio },
              { id: 'upcoming', label: 'Upcoming', icon: Clock },
              { id: 'past', label: 'Past Streams', icon: Play },
              { id: 'uploads', label: 'All Videos', icon: Youtube },
              { id: 'playlists', label: 'Playlists', icon: ListVideo },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center px-3 py-2 text-sm md:text-base md:px-4 rounded-lg font-medium transition-colors ${
                  tab === id
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* Sorting Filter (Hidden on Live/Upcoming) */}
          {['past', 'uploads'].includes(tab) && (
            <div className="flex items-center text-sm">
              <Filter size={16} className="text-gray-400 mr-2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:border-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">Title (A-Z)</option>
              </select>
            </div>
          )}
        </div>

        {/* --- Live Tab --- */}
        {tab === 'live' && (
          <div>
            {liveLoading && <LoadingState />}
            {liveError && <ErrorState message={liveError} />}
            {!liveLoading && !liveError && liveStreams.length === 0 && (
              <EmptyState message="No live stream right now. Check back later or follow us on YouTube for notifications." />
            )}
            {liveStreams.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-4">Live Now</h2>
                {liveStreams.map((stream) => (
                  <div key={stream.id} className="relative aspect-video w-full max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${stream.id}?autoplay=0`}
                      title={stream.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- Upcoming Tab --- */}
        {tab === 'upcoming' && (
          <div>
            {upLoading && <LoadingState />}
            {!upLoading && upcomingStreams.length === 0 && (
              <EmptyState message="No upcoming streams scheduled. Subscribe on YouTube to get notified." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingStreams.map((stream) => (
                <a
                  key={stream.id}
                  href={`https://www.youtube.com/watch?v=${stream.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group block"
                >
                  <div className="relative aspect-video">
                    <img src={stream.thumbnail} alt={stream.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Upcoming
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{stream.title}</h3>
                    <p className="text-gray-500 text-sm">
                      Scheduled for: {new Date(stream.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* --- Past Streams Tab --- */}
        {tab === 'past' && (
          <div>
            {pastLoading && <LoadingState />}
            {!pastLoading && sortedPastStreams.length === 0 && (
              <EmptyState message="No past streams available yet." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPastStreams.map((stream) => (
                <div 
                  key={stream.id}
                  onClick={() => setSelectedVideo(stream.id)} // Opens modal
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="relative aspect-video">
                    <img src={stream.thumbnail} alt={stream.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                      Replay
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{stream.title}</h3>
                    <p className="text-gray-500 text-sm">
                      {new Date(stream.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- All Videos Tab --- */}
        {tab === 'uploads' && (
          <div>
            {videosLoading && <LoadingState />}
            {videosError && <ErrorState message={videosError} />}
            {!videosLoading && !videosError && sortedVideos.length === 0 && (
              <EmptyState message="No videos uploaded yet." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedVideos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => setSelectedVideo(video.id)}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer group block"
                >
                  <div className="relative aspect-video">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-500 text-xs">
                      {new Date(video.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- Playlists Tab --- */}
        {tab === 'playlists' && (
          <div>
            {playlistLoading && <LoadingState />}
            {!playlistLoading && sortedPlaylists.length === 0 && (
              <EmptyState message="No public playlists found." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPlaylists.map((pl) => (
                <a 
                  key={pl.id} 
                  href={`https://www.youtube.com/playlist?list=${pl.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 flex flex-col gap-4 transition-colors group"
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <img src={pl.thumbnail} alt={pl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold">
                      {pl.videoCount} videos
                    </div>
                  </div>
                  <h3 className="font-bold line-clamp-2 text-lg">{pl.title}</h3>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* --- Video Player Modal (For Past Streams & Uploads) --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// --- Helper Components ---

function LoadingState() {
  return (
    <div className="flex items-center justify-center py-20 text-gray-400">
      <Loader className="w-6 h-6 animate-spin mr-2" />
      Loading from YouTube...
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="flex items-center justify-center py-20 text-red-400 bg-red-400/10 rounded-xl">
      <AlertCircle className="w-6 h-6 mr-2" />
      {message}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <Youtube className="w-16 h-16 mb-4 opacity-50" />
      <p className="text-center max-w-md">{message}</p>
    </div>
  );
}

export default Videos;
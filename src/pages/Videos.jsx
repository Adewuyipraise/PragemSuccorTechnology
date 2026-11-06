import React, { useState } from 'react';
import { Play, Youtube, Radio, Clock, AlertCircle, Loader } from 'lucide-react';
import { useChannelVideos, useLiveStreams } from '../hooks/useYouTube';

const Videos = () => {
  const [tab, setTab] = useState('live');

  const { videos, loading: videosLoading, error: videosError } = useChannelVideos(8);
  const { streams: liveStreams, loading: liveLoading, error: liveError } = useLiveStreams('live', 3);
  const { streams: upcomingStreams, loading: upLoading } = useLiveStreams('upcoming', 3);
  const { streams: pastStreams, loading: pastLoading } = useLiveStreams('completed', 6);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
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
              href={`https://www.youtube.com/channel/${import.meta.env.VITE_YOUTUBE_CHANNEL_ID}`}
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
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800 pb-4">
          {[
            { id: 'live', label: 'Live Now', icon: Radio },
            { id: 'upcoming', label: 'Upcoming', icon: Clock },
            { id: 'past', label: 'Past Streams', icon: Play },
            { id: 'uploads', label: 'All Videos', icon: Youtube },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
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

        {/* Live Tab */}
        {tab === 'live' && (
          <div>
            {liveLoading && <LoadingState />}
            {liveError && <ErrorState message={liveError} />}
            {!liveLoading && !liveError && liveStreams.length === 0 && (
              <EmptyState message="No live stream right now. Check back later or follow us on YouTube for notifications." />
            )}
            {liveStreams.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-4">
                  Live Now
                </h2>
                {liveStreams.map((stream) => (
                  <div key={stream.id} className="relative aspect-video w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
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

            {/* Fallback: permanent live embed if API fails */}
            <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">
                Can't see the stream? Try the direct live embed:
              </p>
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                title="YouTube Live Stream"
                allowFullScreen
                className="w-full aspect-video rounded"
              />
            </div>
          </div>
        )}

        {/* Upcoming Tab */}
        {tab === 'upcoming' && (
          <div>
            {upLoading && <LoadingState />}
            {!upLoading && upcomingStreams.length === 0 && (
              <EmptyState message="No upcoming streams scheduled. Subscribe on YouTube to get notified." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingStreams.map((stream) => (
                <VideoCard key={stream.id} video={stream} badge="Upcoming" />
              ))}
            </div>
          </div>
        )}

        {/* Past Streams Tab */}
        {tab === 'past' && (
          <div>
            {pastLoading && <LoadingState />}
            {!pastLoading && pastStreams.length === 0 && (
              <EmptyState message="No past streams yet." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastStreams.map((stream) => (
                <VideoCard key={stream.id} video={stream} badge="Replay" />
              ))}
            </div>
          </div>
        )}

        {/* All Uploads Tab */}
        {tab === 'uploads' && (
          <div>
            {videosLoading && <LoadingState />}
            {videosError && <ErrorState message={videosError} />}
            {!videosLoading && !videosError && videos.length === 0 && (
              <EmptyState message="No videos uploaded yet. Subscribe on YouTube to be the first to know." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function VideoCard({ video, badge }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group block"
    >
      <div className="relative aspect-video">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <Play className="w-12 h-12 text-white" />
        </div>
        {badge && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-gray-500 text-sm">
          {new Date(video.publishedAt).toLocaleDateString()}
        </p>
      </div>
    </a>
  );
}

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
    <div className="flex items-center justify-center py-20 text-red-400">
      <AlertCircle className="w-6 h-6 mr-2" />
      {message}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <Youtube className="w-16 h-16 mb-4 opacity-50" />
      <p>{message}</p>
    </div>
  );
}

export default Videos;
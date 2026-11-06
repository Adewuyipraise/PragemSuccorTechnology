import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

function getCached(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // localStorage full or unavailable — ignore
  }
}

async function fetchWithCache(url, cacheKey) {
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `YouTube API error: ${res.status}`);
  }
  const data = await res.json();
  setCache(cacheKey, data);
  return data;
}

// Fetch recent uploads from the channel's uploads playlist
export function useChannelVideos(maxResults = 8) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) {
      setError('YouTube API key or Channel ID not configured.');
      setLoading(false);
      return;
    }

    async function load() {
      try {
        // Step 1: get the uploads playlist ID
        const channelUrl =
          `https://www.googleapis.com/youtube/v3/channels` +
          `?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;

        const channelData = await fetchWithCache(channelUrl, `yt_channel_${CHANNEL_ID}`);

        if (!channelData.items?.length) {
          throw new Error('Channel not found. Check your Channel ID.');
        }

        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Step 2: list playlist items (1 quota unit)
        const playlistUrl =
          `https://www.googleapis.com/youtube/v3/playlistItems` +
          `?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}` +
          `&maxResults=${maxResults}&key=${API_KEY}`;

        const playlistData = await fetchWithCache(playlistUrl, `yt_uploads_${CHANNEL_ID}_${maxResults}`);

        const formatted = playlistData.items.map((item) => ({
          id: item.contentDetails.videoId,
          title: item.snippet.title,
          thumbnail:
            item.snippet.thumbnails.high?.url ||
            item.snippet.thumbnails.medium?.url ||
            item.snippet.thumbnails.default?.url,
          publishedAt: item.snippet.publishedAt,
          description: item.snippet.description,
        }));

        setVideos(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [maxResults]);

  return { videos, loading, error };
}

// Fetch live streams by status: 'live' | 'upcoming' | 'completed'
export function useLiveStreams(status = 'live', maxResults = 6) {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) {
      setError('YouTube API key or Channel ID not configured.');
      setLoading(false);
      return;
    }

    async function load() {
      try {
        const url =
          `https://www.googleapis.com/youtube/v3/search` +
          `?part=snippet&channelId=${CHANNEL_ID}` +
          `&eventType=${status}&type=video&maxResults=${maxResults}` +
          `&key=${API_KEY}`;

        const data = await fetchWithCache(url, `yt_live_${status}_${CHANNEL_ID}`);

        const formatted = (data.items || []).map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url,
          publishedAt: item.snippet.publishedAt,
          description: item.snippet.description,
        }));

        setStreams(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [status, maxResults]);

  return { streams, loading, error };
}


export function useChannelPlaylists(maxResults = 6) {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!API_KEY || !CHANNEL_ID) return;
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=${maxResults}&key=${API_KEY}`;
        const data = await fetchWithCache(url, `yt_playlists_${CHANNEL_ID}`);
        
        const formatted = data.items.map(item => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url,
          videoCount: item.contentDetails.itemCount
        }));
        setPlaylists(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [maxResults]);

  return { playlists, loading };
}
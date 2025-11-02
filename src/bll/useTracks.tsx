import { useEffect, useState } from 'react';
import { getTracks, type TrackListItemResource } from '../dal/api';

export const useTracks = () => {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

  useEffect(() => {
    console.log('effect');
    getTracks().then((json) => setTracks(json.data));
  }, []);

  return { tracks };
};

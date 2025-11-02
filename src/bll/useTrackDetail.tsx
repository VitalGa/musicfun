import { useState, useEffect } from 'react';
import { type TrackDetailsResource, getTrack } from '../dal/api';

export const useTrackDetail = (trackId: string | null) => {
  const [trackDetail, setTrackDetail] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetail(null);
      return;
    }

    getTrack(trackId).then((json) => {
      setTrackDetail(json.data);
    });
  }, [trackId]);

  return { trackDetail };
};

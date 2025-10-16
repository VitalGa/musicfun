import { useEffect, useState } from 'react';
import { getTracks, type TrackDetailsResource } from '../dal/api';

type Props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: Props) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null);
      return;
    }

    getTracks(trackId).then((json) => {
      setSelectedTrack(json.data);
    });
  }, [trackId]);

  return (
    <div>
      <h2>Details</h2>
      {!selectedTrack && !trackId && 'Track is not selected.'}
      {!selectedTrack && trackId && 'Loading...'}
      {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...'}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
        </div>
      )}
    </div>
  );
}

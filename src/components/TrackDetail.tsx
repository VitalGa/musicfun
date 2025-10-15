import { useEffect, useState } from 'react';

export function TrackDetail({ trackId }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    if (!trackId) {
      return;
    }

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
      headers: { 'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b' },
    })
      .then((res) => res.json())
      .then((json) => {
        setSelectedTrack(json.data);
      });
  }, [trackId]);

  return (
    <div>
      <h2>Details</h2>
      {!selectedTrack && !trackId && 'Track is not selected.'}
      {!selectedTrack && trackId && 'Loading...'}
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

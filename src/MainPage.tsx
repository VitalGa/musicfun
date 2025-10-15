import { useState, useEffect } from 'react';
import { PageTitle } from './components/PegeTitle';
import { TrackList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';

export function MainPage() {
  const [tracks, setTracks] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  const onSelectTrackId = (trackId) => {
    setSelectedTrackId(trackId);
  };

  useEffect(() => {
    console.log('effect');

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

  return (
    <div>
      <PageTitle />
      <div style={{ display: 'flex', gap: '60px' }}>
        <TrackList
          tracks={tracks}
          onSelectTrackId={onSelectTrackId}
          selectedTrackId={selectedTrackId}
        />
        <TrackDetail trackId={selectedTrackId} />
      </div>
    </div>
  );
}

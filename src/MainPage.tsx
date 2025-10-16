import { useState } from 'react';
import { PageTitle } from './components/PegeTitle';
import { TrackList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';

export function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  };

  return (
    <div>
      <PageTitle />
      <div style={{ display: 'flex', gap: '60px' }}>
        <TrackList selectedTrackId={trackId} onTrackSelect={handleTrackSelect} />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  );
}

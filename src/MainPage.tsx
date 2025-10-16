import { useState } from 'react';
import { PageTitle } from './ui/PegeTitle';
import { TrackList } from './ui/TracksList';
import { TrackDetail } from './ui/TrackDetail';

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

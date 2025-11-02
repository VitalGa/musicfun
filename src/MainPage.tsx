import { PageTitle } from './ui/PageTitle';
import { TrackList } from './ui/TracksList';
import { TrackDetail } from './ui/TrackDetail';
import { useTrackSelection } from './bll/useTrackSelection';

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

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

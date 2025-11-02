import { useTrackDetail } from '../bll/useTrackDetail';

type Props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: Props) {
  const { trackDetail } = useTrackDetail(trackId);

  return (
    <div>
      <h2>Details</h2>
      {!trackDetail && !trackId && 'Track is not selected.'}
      {!trackDetail && trackId && 'Loading...'}
      {trackDetail && trackId && trackDetail.id !== trackId && 'Loading...'}
      {trackDetail && (
        <div>
          <h3>{trackDetail.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetail.attributes.lyrics ?? 'no lyrics'}</p>
        </div>
      )}
    </div>
  );
}

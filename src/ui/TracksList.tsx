import { TrackItem } from './TrackItem';
import { useTracks } from '../bll/useTracks';

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TrackList({ selectedTrackId, onTrackSelect }: Props) {
  const { tracks } = useTracks();
  if (tracks === null) {
    return (
      <div>
        <span>loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    );
  }

  const handlResetClick = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  const isSelected = (trackId: string) => {
    return selectedTrackId === trackId;
  };

  return (
    <div>
      <button onClick={handlResetClick}>Reset</button>
      <hr />
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={isSelected(track.id)}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { TrackItem, type TrackListItemResource } from './TrackItem';

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TrackList({ selectedTrackId, onTrackSelect }: Props) {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

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

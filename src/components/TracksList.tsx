import { useEffect, useState } from 'react';

export function TrackList({
  tracks,
  onSelectTrackId,
  selectedTrackId,
}: {
  tracks: any;
  onSelectTrackId: any;
  selectedTrackId: any;
}) {
  // const [tracks, setTracks] = useState(null);
  // const [selectedTrackId, setSelectedTrackId] = useState(null);

  // useEffect(() => {
  //   console.log('effect');

  //   fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
  //     headers: {
  //       'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setTracks(json.data));
  // }, []);

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>No tracks</span>
      </div>
    );
  }

  return (
    <ul>
      {tracks.map((track: any) => {
        return (
          <li
            key={track.id}
            style={{
              border: track.id === selectedTrackId ? '1px solid orange' : 'none',
            }}>
            <div
              onClick={() => {
                onSelectTrackId(track.id);
              }}
              style={{
                cursor: 'pointer',
              }}>
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        );
      })}
    </ul>
  );
}

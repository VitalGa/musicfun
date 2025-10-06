import { useEffect, useState } from 'react';

export const TracksList = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data);
      });
  }, []);

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <div>Loading...</div>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <div>No tracks found</div>
      </div>
    );
  }

  return (
    <ul>
      {tracks.map((track) => {
        return (
          <li
            key={track.id}
            style={{
              border: track.id === selectedTrackId ? '1px solid orange' : 'none',
            }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setSelectedTrackId(track.id);
                // fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id, {
                //   headers: {
                //     'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
                //   },
                // })
                //   .then((res) => res.json())
                //   .then((json) => {
                //     setSelectedTrack(json.data);
                //   });
              }}>
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        );
      })}
    </ul>
  );
};

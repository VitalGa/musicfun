import './App.css';

import { useState, useEffect } from 'react';

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState([]);

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
    <div>
      <h1>Musicfun</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
          setSelectedTrack(null);
        }}>
        reset selection
      </button>
      <div style={{ display: 'flex', gap: '30px' }}>
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

                    fetch(
                      'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id,
                      {
                        headers: {
                          'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
                        },
                      },
                    )
                      .then((res) => res.json())
                      .then((json) => {
                        setSelectedTrack(json.data);
                      });
                  }}>
                  {track.attributes.title}
                </div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
              </li>
            );
          })}
        </ul>
        <div className=''>
          <h2>Details</h2>
          {selectedTrack === null ? (
            'Track not selected'
          ) : (
            <div className=''>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'No lyrics available'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

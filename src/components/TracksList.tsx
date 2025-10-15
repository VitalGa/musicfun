export function TrackList({
  tracks,
  onSelectTrackId,
  selectedTrackId,
}: {
  tracks;
  onSelectTrackId;
  selectedTrackId;
}) {
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
      {tracks.map((track) => {
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

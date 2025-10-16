type TrackAttachment = {
  url: string;
};

type TrackDetailsAttributes = {
  title: string;
  attachments: Array<TrackAttachment>;
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type Props = {
  isSelected: boolean;
  onSelect: (trackId: string) => void;
  track: TrackListItemResource;
};

export function TrackItem({ onSelect, track, isSelected }: Props) {
  const handleClick = () => {
    onSelect?.(track.id);
  };

  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? '1px solid orange' : 'none',
      }}>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}

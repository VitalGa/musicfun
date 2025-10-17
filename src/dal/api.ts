export type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type GetTrackDetailsOutput = {
  data: TrackDetailsResource;
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: { 'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b' },
    },
  ).then((res) => res.json());

  return promise;
};

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

type GetTrackListOutput = {
  data: Array<TrackListItemResource>;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: {
        'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b',
      },
    },
  ).then((res) => res.json());
  return promise;
};

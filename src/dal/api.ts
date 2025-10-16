export type TrackDetailsResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export const getTracks = (trackId: string) => {
  const promise: Promise<{ data: TrackDetailsResource }> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId,
    {
      headers: { 'api-key': '9f82562a-b652-40dc-a2a8-bb46f97f211b' },
    },
  ).then((res) => res.json());

  return promise;
};

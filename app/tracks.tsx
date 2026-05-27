export interface Track {
  id: number;
  title: string;
  artist: string;
  youtubeId: string;
  note: string;
}

export const mixtapeTracks: Track[] = [
  {
    id: 1,
    title: "PALAGI",
    artist: "TJ MONTERDE",
    youtubeId: "_q4qiIyILZc", // The part after "v=" in a youtube link
    note: "This is where you write your sweet note explaining why you picked this song first..."
  },
  // You can copy and paste this object block to add as many tracks as you want!
];
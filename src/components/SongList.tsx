import { songs } from "@/data/songs";
import { SongCard } from "./SongCard";

export function SongList() {
  return (
    <div className="space-y-4">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

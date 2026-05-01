export default function SongList({ songs, onSelect }) {
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} onClick={() => onSelect(song)}>
          <img src={song.album.images[0]?.url} width="50" />
          <p>
            {song.name} — {song.artists[0].name}
          </p>
        </div>
      ))}
    </div>
  );
}
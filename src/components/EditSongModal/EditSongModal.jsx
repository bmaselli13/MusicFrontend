import React, { useState } from "react";

function EditSongModal({ song, onUpdate, onClose }) {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [releaseDate, setReleaseDate] = useState(song.releaseDate);
  const [genre, setGenre] = useState(song.genre);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedSong = {
      id: song.id,
      title,
      artist,
      album,
      releaseDate,
      genre,
    };
    onUpdate(updatedSong);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Song</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist"
          />
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            placeholder="Album"
          />
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            {/* Add your genre options here */}
          </select>
          <button type="submit">Update Song</button>
        </form>
      </div>
    </div>
  );
}

export default EditSongModal;

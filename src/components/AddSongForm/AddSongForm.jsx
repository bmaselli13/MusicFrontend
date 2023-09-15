import React, { useState, useEffect } from "react";

const defaultSongState = {
  title: "",
  artist: "",
  album: "",
  releaseDate: "",
  genre: "",
};

function AddSongForm({ addSong }) {
  const [song, setSong] = useState(defaultSongState);

  useEffect(() => {
    setSong(defaultSongState);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!song.title || !song.artist) return;

    addSong(song);
    setSong(defaultSongState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={song.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="artist"
        value={song.artist}
        onChange={handleChange}
        placeholder="Artist"
      />
      <input
        name="album"
        value={song.album}
        onChange={handleChange}
        placeholder="Album"
      />
      <input
        name="releaseDate"
        value={song.releaseDate}
        onChange={handleChange}
        placeholder="Release Date"
      />
      <input
        name="genre"
        value={song.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;

import React, { useState } from "react";
import axios from "axios";
import "./AddSongForm.css";

function AddSongForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const songData = {
      title: title,
      artist: artist,
      album: album,
      releaseDate: releaseDate,
      genre: genre,
    };

    axios
      .post("https://localhost:7196/api/Songs", songData)
      .then(() => {
        // Clear the form after a successful submission
        setTitle("");
        setArtist("");
        setAlbum("");
        setReleaseDate("");
        setGenre("");
      })
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  };

  return (
    <div className="add-song-form">
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="date"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default AddSongForm;

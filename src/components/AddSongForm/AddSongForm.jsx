import React, { useState } from "react";
import axios from "axios";
import "./AddSongForm.css";

const AddSongForm = () => {
  const [songTitle, setSongTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const songData = {
      Title: songTitle,
      Album: album,
      Artist: artist,
      Genre: genre,
      ReleaseDate: releaseDate,
    };

    try {
      const response = await axios.post(
        "https://localhost:7196/api/Songs",
        songData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Song added successfully!");
        // Update songs list or update form
      }
    } catch (error) {
      console.error(
        "Error while adding the song:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add the song. Check the console for details.");
    }
  };

  return (
    <div className="add-song-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="date"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSongForm;

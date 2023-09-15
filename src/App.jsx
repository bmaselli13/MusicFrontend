import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import SongList from "./components/SongList/SongList";
import "./App.css";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch songs from API
    axios
      .get("https://localhost:7196/api/Songs")
      .then((response) => {
        setSongs(response.data);
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  }, []);

  useEffect(() => {
    const results = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm) ||
        song.album.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm) ||
        song.genre.toLowerCase().includes(searchTerm) ||
        song.releaseDate.toLowerCase().includes(searchTerm)
    );
    setFilteredSongs(results);
  }, [searchTerm, songs]);

  const addSong = (newSong) => {
    // Add the song to the backend
    axios
      .post("https://localhost:7196/api/Songs", newSong)
      .then((response) => {
        setSongs([...songs, response.data]);
      })
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <SongList songs={filteredSongs} />
      <AddSongForm addSong={addSong} />
    </div>
  );
}

export default App;

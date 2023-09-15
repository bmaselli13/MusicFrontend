import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import SongList from "./components/SongList/SongList";
import "./App.css";
import axios from "axios";

function App() {
  // State to hold all songs fetched from the API
  const [songs, setSongs] = useState([]);

  // State to hold filtered songs based on search
  const [filteredSongs, setFilteredSongs] = useState([]);

  // State to hold search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect hook to fetch songs from the API when the component mounts
  useEffect(() => {
    // Making GET request to fetch all songs
    axios
      .get("https://localhost:7196/api/Songs")
      .then((response) => {
        // Updating the songs state with the fetched data
        setSongs(response.data);
        // Initially, all fetched songs are the filtered songs
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        // Handle and log any errors
        console.error("Error fetching songs:", error);
      });
  }, []);

  // useEffect hook to update filteredSongs based on search term
  useEffect(() => {
    // Filter the songs based on search term
    const results = songs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the state with filtered songs
    setFilteredSongs(results);
  }, [searchTerm, songs]); // Re-run when searchTerm or songs change

  // Function to add a new song
  const addSong = (newSong) => {
    // Making POST request to add the song
    axios
      .post("https://localhost:7196/api/Songs", newSong)
      .then((response) => {
        // Update the songs with the new song
        setSongs([...songs, response.data]);
      })
      // Handle and log any errors
      .catch((error) => {
        console.error("Error adding song:", error);
      });
  };

  // Function to delete a song
  const deleteSong = (songId) => {
    // Making DELETE request to delete the song
    axios
      .delete(`https://localhost:7196/api/Songs/${songId}`)
      .then(() => {
        // Filter out the deleted song
        setSongs(songs.filter((song) => song.id !== songId));
      })
      // Handle and log any errors
      .catch((error) => {
        console.error("Error deleting song:", error);
      });
  };

  // Function to update an existing song
  const updateSong = (updatedSong) => {
    // PUT request to update the song
    axios
      .put(`https://localhost:7196/api/Songs/${updatedSong.id}`, updatedSong)
      .then((response) => {
        // Find and update the song
        setSongs(
          songs.map((song) => (song.id === updatedSong.id ? updatedSong : song))
        );
      })
      // Handle and log any errors
      .catch((error) => {
        console.error("Error updating song:", error);
      });
  };

  // Render the components
  return (
    <div className="app">
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddSongForm addSong={addSong} />
      <SongList
        songs={filteredSongs}
        onDelete={deleteSong}
        onEdit={updateSong}
      />
    </div>
  );
}

export default App;

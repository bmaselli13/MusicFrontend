import React, { useState } from "react";
import "./SongList.css";

function SongList({ songs, onDelete, onEdit }) {
  const [editingSongId, setEditingSongId] = useState(null);
  const [editedSong, setEditedSong] = useState({});

  const startEditing = (song) => {
    setEditingSongId(song.id);
    setEditedSong(song);
  };

  const handleInputChange = (event, field) => {
    setEditedSong({
      ...editedSong,
      [field]: event.target.value,
    });
  };

  const saveChanges = () => {
    onEdit(editedSong);
    setEditingSongId(null);
  };

  const cancelEditing = () => {
    setEditingSongId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            {editingSongId === song.id ? (
              <>
                <td>
                  <input
                    value={editedSong.title || ""}
                    onChange={(e) => handleInputChange(e, "title")}
                  />
                </td>
                <td>
                  <input
                    value={editedSong.artist || ""}
                    onChange={(e) => handleInputChange(e, "artist")}
                  />
                </td>
                <td>
                  <input
                    value={editedSong.album || ""}
                    onChange={(e) => handleInputChange(e, "album")}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={editedSong.releaseDate.split("T")[0] || ""}
                    onChange={(e) => handleInputChange(e, "releaseDate")}
                  />
                </td>
                <td>
                  <input
                    value={editedSong.genre || ""}
                    onChange={(e) => handleInputChange(e, "genre")}
                  />
                </td>
                <td>
                  <button onClick={saveChanges}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.releaseDate.split("T")[0]}</td>
                <td>{song.genre}</td>
                <td>
                  <button onClick={() => startEditing(song)}>Edit</button>
                  <button onClick={() => onDelete(song.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SongList;

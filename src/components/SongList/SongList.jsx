import React from "react";
import "./SongList.css";

function SongList({ songs, onDelete, onEdit }) {
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
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.releaseDate.split("T")[0]}</td> {/* Updated this line */}
            <td>{song.genre}</td>
            <td>
              <button onClick={() => onEdit(song)}>Edit</button>
              <button onClick={() => onDelete(song.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SongList;

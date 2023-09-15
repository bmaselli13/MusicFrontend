import React from "react";
import "./SongList.css";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function SongList({ songs }) {
  return (
    <div className="songlist-container">
      <table className="songlist-table">
        <thead>
          <tr className="songlist-row">
            <th className="songlist-header">Title</th>
            <th className="songlist-header">Album</th>
            <th className="songlist-header">Artist</th>
            <th className="songlist-header">Genre</th>
            <th className="songlist-header">Release Date</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className="songlist-row">
              <td className="songlist-data">{song.title}</td>
              <td className="songlist-data">{song.album}</td>
              <td className="songlist-data">{song.artist}</td>
              <td className="songlist-data">{song.genre}</td>
              <td className="songlist-data">{formatDate(song.releaseDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongList;

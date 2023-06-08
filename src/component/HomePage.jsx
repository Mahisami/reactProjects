import React, { useState } from 'react';
// import './HomePage.css';

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState('');
  const [editedSong, setEditedSong] = useState('');

  const addSong = () => {
    if (newSong.trim() !== '') {
      setSongs([...songs, newSong]);
      setNewSong('');
    }
  };

  const deleteSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  const updateSong = (index) => {
    if (editedSong.trim() !== '') {
      const updatedSongs = [...songs];
      updatedSongs[index] = editedSong;
      setSongs(updatedSongs);
      setEditedSong('');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to the Music Page</h1>
      </header>

      <main className="content">
        <div className="song-list">
          <h2>Song List</h2>
          {songs.length === 0 ? (
            <p>No songs added yet.</p>
          ) : (
            <ul>
              {songs.map((song, index) => (
                <li key={index}>
                  {song}
                  <button onClick={() => deleteSong(index)}>Delete</button>
                  <button onClick={() => setEditedSong(song)}>Edit</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="add-song">
          <h2>Add Song</h2>
          <input
            type="text"
            placeholder="Enter a song"
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
          />
          <button onClick={addSong}>Add</button>
        </div>

        {editedSong && (
          <div className="edit-song">
            <h2>Edit Song</h2>
            <input
              type="text"
              placeholder="Edit the song"
              value={editedSong}
              onChange={(e) => setEditedSong(e.target.value)}
            />
            <button onClick={() => updateSong(songs.indexOf(editedSong))}>Update</button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2023 Your Music Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

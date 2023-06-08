import React from "react";

const LibraryPage = ({ user }) => {
  return (
    <div>
      <h1>Library</h1>
      <h3>Welcome, {user && user.username}!</h3>
      {/* Your library page content */}
    </div>
  );
};

export default LibraryPage;

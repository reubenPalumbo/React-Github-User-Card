import React from "react";

function Card({ profile }) {
  return (
    <div className="card">
      <img src={profile.avatar_url} alt="profile" />
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <p>{profile.location}</p>
    </div>
  );
}

export default Card;

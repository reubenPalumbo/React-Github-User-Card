import React from "react";

function Card({ profile, followers }) {
  return (
    <>
      <div className="card">
        <img src={profile.avatar_url} alt="profile" />
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <p>{profile.location}</p>
      </div>
      <div className="followCards">
        <div className="h2">
          <h2>Followers:</h2>
        </div>
        {followers.map((item) => {
          return (
            <div className="followCard">
              <img src={item.avatar_url} alt="profile" />
              <h3>{item.login}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;

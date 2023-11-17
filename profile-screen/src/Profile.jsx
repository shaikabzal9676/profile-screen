import React, { useState } from "react";

function Profile({ user }) {
  const [follower, setFollower] = useState(user.followers);
  const [following, setFollowing] = useState(user.following);
  const handleFollowers = () => {
    setFollower(follower + 1);
  };
  const handleFollowing = () => {
    setFollowing(following + 1);
  };
  return (
    <div className="profile">
      <div className="profileTop">
        <div className="profileCover">
          <img
            className="profileCoverImg"
            src="./cover.jpg"
            alt="profileCover"
          />
          <img
            className="profileImg"
            src={user.profileImage}
            alt="profileImage"
          />
        </div>

        <div className="profileInfo">
          <div className="top">
            <div className="name">{user.name}</div>
            <div className="symbols">
              <img className="diamond" src="diamond.png" alt="" />
              <img className="bluetick" src="bluetick.png" alt="" />
            </div>
          </div>
          <div className="follow">
            <div className="follower">
              <button className="followers" onClick={handleFollowers}>
                {follower}
              </button>
              <span>Followers</span>
            </div>
            <div className="follower">
              <button className="followers" onClick={handleFollowing}>
                {following}
              </button>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profileBottom">
        <span className="desc">{user.desc}</span>
        <a className="desc" href="http://www.instagram.com/anujgosalia">
          http://www.instagram.com/anujgosalia
        </a>
        <div className="likes">
          <img className="like" src="./star.png" alt="" />
          <span className="likeCount">{user.star}</span>
          <img className="like" src="./like.png" alt="" />
          <span className="likeCount">{user.like}</span>
          <img className="like" src="./eye.png" alt="" />
          <span className="likeCount">{user.eye}</span>
          <img className="like" src="./heart.png" alt="" />
          <span className="likeCount">{user.heart}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;

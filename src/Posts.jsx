import React from "react";
import { posty } from "./dummyData";
export default function Posts() {
  return (
    <>
      <div className="postCount">
        <span className="count">{posty.length} Posts</span>
      </div>

      <div className="posts" >
        {posty &&
          posty.map(
            ({ title, id, body, author, date, time, views, caption }) => (
              <div className="postDetails" key={id}>
                <div className="post">
                  <div className="mainDetails">
                    <h2 key={id} className="postTitle">
                      {title}
                    </h2>
                    <img className= 'like' src="./like.png" alt="" />
                  </div>
                    <p key={id} className="postBody">
                      {body}
                    </p>

                  <div className="postBottom">
                    <div className="postBottomLeft">
                      <span className="caption">{caption}</span>
                      <span className="author">{author}</span>
                    </div>
                    <div className="postBottomRight">
                      <span className="author">{date}</span>
                      <span className="author">{time} Read</span>
                      <span className="author">{views} Views</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}

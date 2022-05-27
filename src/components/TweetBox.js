import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="inputSection">
          <img
            className="tweetBoxProfile"
            src="https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
            alt="profile"
          />
          <div>
            <input type="text" placeholder="What's happening?" />
            <button>Tweet</button>
          </div>
        </div>
      </form>
    </div>
  );
}

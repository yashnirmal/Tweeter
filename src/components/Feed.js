import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import FlareIcon from "@material-ui/icons/Flare";

export default function Feed() {


  const posts = [
    {
      name: "Yash Nirmal",
      profileImage:
        "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
      isVerified: true,
      image: "http://i.imgur.com/z4GLLwJ.gif",
      text: "Check this out guys!! I had this party rocking 🤘🤘🤘....Going on the roll #AwesomeStuff",
      username : "@theyash15"
    },
    {
      name: "Yash Nirmal",
      profileImage:
        "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
      isVerified: true,
      image: "http://i.imgur.com/z4GLLwJ.gif",
      text: "Check this out guys!! I had this party rocking 🤘🤘🤘....Going on the roll #AwesomeStuff",
      username : "@theyash15"
    },
    {
      name: "Yash Nirmal",
      profileImage:
        "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80",
      isVerified: true,
      image: "http://i.imgur.com/z4GLLwJ.gif",
      text: "Check this out guys!! I had this party rocking 🤘🤘🤘....Going on the roll #AwesomeStuff",
      username : "@theyash15"
    }    
  ];

  return (
    <div className="feed">
      <div className="topHeader">
        <h2>Home</h2>
        <FlareIcon />
      </div>

      <TweetBox />

      {posts.map(post =>{
        return (
        <Post
          name={post.name}
          username={post.username}
          text={post.text}
          image={post.image}
          profileImage={post.profileImage}
          isVerified={post.isVerified}
          />
          );
      })}
      

    </div>
  );
}

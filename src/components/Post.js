import React from 'react';
import "./Post.css";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

export default function Post(props) {
  return (
    <div className="Post">
      <img
        className="post_profile"
        src={props.profileImage}
        alt="profile"
      />
      <div>
        <div className="post__names">
          <h3>{props.name}</h3>
          <p>{props.username}</p>
          {props.isVerified && <VerifiedIcon className="VerifiedIcon" />}
        </div>
        <p className="post__text">{props.text}</p>
        {/* Image if any */}
        <img
          className="uploadedImage"
          src={props.image}
          alt="img1"
        />

        <div className="post__footer">
          <ChatBubbleOutlineIcon className="footerIcons" />
          <RepeatIcon className="footerIcons" />
          <FavoriteBorderIcon className="footerIcons" />
          <PublishIcon className="footerIcons" />
        </div>
      </div>
    </div>
  );
}

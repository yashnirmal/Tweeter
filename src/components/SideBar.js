import React from 'react'
import './SideBar.css';
import SideBarItem from './SideBarItem';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function SideBar() {
  return (
    <div className='SideBar'>
      {/* Twitter Icon */}
      <TwitterIcon className="SideBarTwitterIcon" />

      {/* SideBar Btns */}
      <SideBarItem active Icon={HomeIcon} text="Home" />
      <SideBarItem Icon={SearchIcon} text="Explore" />
      <SideBarItem Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarItem Icon={MailOutlineIcon} text="Messages" />
      <SideBarItem Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SideBarItem Icon={ListAltIcon} text="Lists" />
      <SideBarItem Icon={PermIdentityIcon} text="Profile" />
      <SideBarItem Icon={MoreHorizIcon} text="More" />

      <button>Tweet</button>
    </div>
  );
}

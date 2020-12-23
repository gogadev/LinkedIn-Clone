import React from "react";

import { Avatar } from "@material-ui/core";

import { useSelector } from "react-redux";

import { selectUser } from "../../redux/reducers/userSlice";

import sidebarImg from "../../assets/sidebar-img.jpg";

import "./sidebar.style.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={sidebarImg} alt="Sidebar Background" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">3,520</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3121</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("javascript")}
        {recentItem("js")}
        {recentItem("reactredux")}
        {recentItem("frontenddeveloper")}
        {recentItem("developersbestpractices")}
        {recentItem("algorithm ")}
        {recentItem("selftaughtdevelopers")}
      </div>
    </div>
  );
};

export default Sidebar;

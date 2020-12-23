import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./widgets.style.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn Clone", "Top News ~ 20100 readers")}
      {newsArticle("Charity Marathon - Slovenia", "Charity ~ 900200 readers")}
      {newsArticle("Positive News", "Top News ~ 700000 readers")}
      {newsArticle("Santa is Here", "Christmas ~ 700100 readers")}
      {newsArticle("Christmas Dinner", "Christmas ~ 100100 readers")}
      {newsArticle(
        "Top 10 Most Beautiful Christmas Destinations",
        "Christmas ~ 40130 readers"
      )}
      {newsArticle("Santa is Here", "Christmas ~ 700100 readers")}
      {newsArticle(
        "Believe and act as if it were impossible to fail.",
        "Quotes ~ 300100 readers"
      )}
      {newsArticle(
        "It is never too late to be what you might have been.",
        "Quotes ~ 300100 readers"
      )}
      {newsArticle(
        "My Story: Front-End Developer",
        "Programming - 800700 readers"
      )}
    </div>
  );
};

export default Widgets;

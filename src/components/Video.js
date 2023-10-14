import React from "react";
import PropTypes from 'prop-types'

export default function Video(props) {
  return (
    <iframe
      className="rounded-3 shadow-lg"
      src={`https://www.youtube.com/embed/${props.videoId}`}
      style={{ width: "100%", height: "15rem" }}
      title={props.videoId}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

Video.propTypes = {
  videoId: PropTypes.string
}

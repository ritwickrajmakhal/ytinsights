import React from "react";
import PieChart from "./PieChart";
import Video from "./Video";
import PropTypes from "prop-types";
import loader from "../loader.gif";
import Card from "./Card";

export default function Response(props) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-evenly align-items-center">
        {props.videoId && (
          <div className="col-sm-4 d-flex justify-content-center align-items-center my-2">
            {props.loading && (
              <img src={loader} alt="loader" className="position-absolute" />
            )}
            <Video videoId={props.videoId} />
          </div>
        )}
        {props.response && (
          <div className="col-sm-4">
            <PieChart
              data={{
                labels: Object.keys(props?.response["sentiments"]),
                datasets: [
                  {
                    data: Object.values(props?.response["sentiments"]),
                    backgroundColor: ["#FF0000", "#00FF00", "#FFCE56"],
                  },
                ],
              }}
            />
            <h4 className="text-center fw-bold my-2">Sentiment Analysis</h4>
          </div>
        )}
      </div>
      {props.response && <div className="pb-3">
        <Card
          dataAos="fade-up"
          title="Video Recommendation 💡"
          body={props.response?.recommendation}
        />
        <Card
          dataAos="fade-up"
          title="Comment Summary 💬"
          body={props.response?.comment_summary}
        />
      </div>}
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.shape({
    sentiments: PropTypes.shape({
      positive: PropTypes.number,
      negative: PropTypes.number,
      neutral: PropTypes.number,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
        sentiment: PropTypes.string,
      })
    ),
  }),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  videoId: PropTypes.string,
};

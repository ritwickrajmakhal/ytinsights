import React from "react";
import PieChart from "./PieChart";
import Video from "./Video";
import PropTypes from "prop-types";
import loader from "../loader.gif";
import Card from "./Card";

export default function Response(props) {
  const sentiments = props?.response?.sentiments
  const spams = props?.response?.spams
  let labels = []
  let data = []
  let backgroundColor = []
  if (sentiments) {
    labels.push("Positive", "Negative", "Neutral")
    backgroundColor.push("#00a587", "#dc3545", "#ffb706")
    data.push(sentiments["positive"],sentiments["negative"],sentiments["neutral"])
  }
  if (spams){
    labels.push("Spams")
    backgroundColor.push("#6c757d")
    data.push(spams)
  }
  return (
    <div className="container">
      {!props.error &&
        <>
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
                    labels: labels,
                    datasets: [
                      {
                        data: data,
                        backgroundColor: backgroundColor,
                      },
                    ],
                  }}
                />
                <h4 className="text-center fw-bold my-2">Sentiment Analysis</h4>
              </div>
            )}
          </div>
          {props.response && <div className="pb-3">
            {props.response?.recommendation && <Card
              dataAos="fade-up"
              title="Video Recommendation 💡"
              body={props.response?.recommendation}
            />}
            {props.response?.comment_summary && <Card
              dataAos="fade-up"
              title="Comment Summary 💬"
              body={props.response?.comment_summary}
            />}
          </div>}
        </>}
      {props.error &&
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Some Error Occurred!</strong> Please try again
          <button onClick={props.setError(false)} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      }
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

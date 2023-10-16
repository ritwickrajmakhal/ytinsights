import React from "react";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";

export default function Input(props) {
  return (
    <div className="container-fluid">
      <div
        className="row d-flex justify-content-center bg-dark py-2"
        data-bs-theme="dark"
      >
        <div className="col-sm-6">
          <h1 className="text-center text-light">{props.websiteName}</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.getResponse();
            }}
          >
            <TextInput label="YouTube video link:" type="text" value={props.inputData.link}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                link: value
              })}
              placeholder="Paste YouTube video link"
            />
            <TextInput label="Comments limit:" type="number" value={props.inputData.commentLimit}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                commentLimit: value
              })}
              placeholder="Number of comments consideration"
            />
            <CheckBox
              label="Sentiment Analysis"
              value={props.inputData.sentiment}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                sentiment: value
              })} />
            <CheckBox label="Spam Detection" value={props.inputData.spam}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                spam: value
              })} />
            <CheckBox label="Comment Summary" value={props.inputData.commentSummary}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                commentSummary: value
              })} />
            <CheckBox label="Video Recommendation" value={props.inputData.recommendation}
              changeHandler={(value) => props.setInputData({
                ...props.inputData,
                recommendation: value
              })} />

            <div className="d-flex justify-content-center mb-3">
              <button type="submit" className="btn btn-outline-light">
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Input.propTypes = {
  websiteName: PropTypes.string,
  inputData: PropTypes.shape({
    link: PropTypes.string,
    commentLimit: PropTypes.string,
    commentSummary: PropTypes.bool,
    recommendation: PropTypes.bool,
  }),
  setInputData: PropTypes.func,
  getResponse: PropTypes.func,
};


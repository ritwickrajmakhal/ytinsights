import React from "react";
import PropTypes from "prop-types";

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
            <div className="mb-3">
              <label htmlFor="youtubeLink" className="form-label text-light">
                YouTube video link:
              </label>
              <input
                type="text"
                value={props.inputData.link}
                onChange={(event) =>
                  props.setInputData({
                    ...props.inputData,
                    link: event.target.value,
                  })
                }
                required
                className="form-control"
                id="youtubeLink"
                aria-describedby="emailHelp"
                placeholder="Paste YouTube video link"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="commentLimit" className="form-label text-light">
                Comments limit:
              </label>
              <input
                type="number"
                min="0"
                placeholder="Number of comments consideration"
                className="form-control"
                id="commentLimit"
                value={props.inputData.commentLimit}
                onChange={(event) =>
                  props.setInputData({
                    ...props.inputData,
                    commentLimit: event.target.value,
                  })
                }
              />
            </div>
            <div className="form-check form-check-inline mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                onChange={(event) =>
                  props.setInputData({
                    ...props.inputData,
                    commentSummary: event.target.value ? true : false,
                  })
                }
              />
              <label
                className="form-check-label text-light"
                htmlFor="inlineCheckbox1"
              >
                Comment summary
              </label>
            </div>

            <div className="form-check form-check-inline mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
                onChange={(event) =>
                  props.setInputData({
                    ...props.inputData,
                    recommendation: event.target.value ? true : false,
                  })
                }
              />
              <label
                className="form-check-label text-light"
                htmlFor="inlineCheckbox2"
              >
                Video Recommendation
              </label>
            </div>
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


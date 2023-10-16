import { useState, useEffect } from "react";
import "./App.css";
import Response from "./components/Response";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";
import Input from "./components/Input";
import data from "./config.json";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS styles

// Function to extract video ID from YouTube URL
function extractVideoId(url) {
  // Regular expression to match both long and short YouTube video URLs
  var regex =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?&v=|embed\/watch\?v=))([^?&]+)(?:\S+)?/;
  var match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    // Handle invalid or unsupported URLs
    return null;
  }
}

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const [videoId, setVideoId] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    link: "",
    commentLimit: "0",
    sentiment: false,
    spam: false,
    commentSummary: false,
    recommendation: false,
  });

  // Function to get response from the backend
  const getResponse = async () => {
    try {
      // Extract video ID from the link
      const videoId = extractVideoId(inputData.link);
      // If the link is invalid, set error to true
      if (!videoId) {
        setError(true);
        return;
      }
      // Set loading to true
      setLoading(true);
      // Set error to false
      setError(false);
      // Set video ID
      setVideoId(videoId);
      // Make a GET request to the backend
      const res = await fetch(
        `${data.backend.url}/api/youtube?youtube_video_id=${videoId}&limit=${inputData.commentLimit}&comment_summary=${inputData.commentSummary}&recommendation=${inputData.recommendation}&sentiment=${inputData.sentiment}&spam=${inputData.spam}`
      );

      if (!res.ok) {
        // If the response status code is not in the 2xx range, throw an error
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }

      // Convert response to JSON
      const response = await res.json();
      // clear response
      setResponse(null)
      // Set response
      setResponse(response);
      // Set loading to false
      setLoading(false);
    } catch (error) {
      // Handle the error here, for example:
      setError(true);
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      {/* The Navbar component is rendered here */}
      <NavBar nav={data.website.nav} />
      <Input
        websiteName={data.website.nav.websiteName}
        inputData={inputData}
        setInputData={setInputData}
        getResponse={getResponse}
      />
      <Response videoId={videoId} response={response} loading={loading} error={error} setError={setError} />
      <Footer footer={{ name: data.website.nav.websiteName }} />
    </div>
  );
}

export default App;

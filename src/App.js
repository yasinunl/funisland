import './App.css';
import YouTubePlayer from './component/YouTubePlayer';
function App() {
  return (
    <div className="App">
      <div>
      <h1>Watch YouTube Video</h1>
      <YouTubePlayer url="https://www.youtube.com/watch?v=sTZUe-pz5Q0" />
    </div>
    </div>
  );
}

export default App;

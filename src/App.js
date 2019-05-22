import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path={"/channel/:channel"} component={Embed} />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Please provide a Twitch channel name in the URL lile (/channel/monstercat)</h2>
    </div>
  );
}

function Embed( { match }) {
  return (
    <div>
      <iframe
        title="Embed"
        src={`https://player.twitch.tv/?channel=${match.params.channel}`}
        height="720"
        width="1280"
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}>
    </iframe>
    </div>
  );
}

export default App;

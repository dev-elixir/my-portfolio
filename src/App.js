import React from "react";
import Achievements from "./components/Achievements";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useGetAPI } from "./components/site-data";

function App() {
  const url = "https://recent-repo.p.rapidapi.com/repos";
  const { isLoading, response } = useGetAPI(url);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Navbar />
        <Intro gitHubRepo={response} />
        <Achievements />
        <Footer />
      </main>
    );
  }
}

export default App;

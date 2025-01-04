import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Moviecard from "./Components/Moviecard";

function App() {
  const [movie, setMovie] = useState({
    title: "Hello hello",
    release_date: "12-may-2025",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIM0-w43ChyvBSM5cXykYx5NV-Yl0WEX6Aqw&s",
  });

  return (
    <>
      <Moviecard movie={movie} />
    </>
  );
}

export default App;

import { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <MovieSearch query={query} setQuery={setQuery} />
      <MovieList query={query} />
    </>
  );
}

export default Home;

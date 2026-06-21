function MovieSearch({ query, setQuery }) {
  return (
    <div className="container mt-4">
      <input
        className="form-control form-control-lg shadow-sm"
        placeholder="Search Movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default MovieSearch;

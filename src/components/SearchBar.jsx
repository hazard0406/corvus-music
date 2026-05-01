import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
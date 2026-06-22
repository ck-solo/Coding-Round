import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setdebouncedQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout[timer];
    };
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`,
      );

      const data = await response.json();
      setResults(data);
    };
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search Users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {results.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Debounce;

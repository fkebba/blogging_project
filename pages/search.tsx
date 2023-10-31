import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/search?query=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data.results))
        .catch((error) => console.error(error));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

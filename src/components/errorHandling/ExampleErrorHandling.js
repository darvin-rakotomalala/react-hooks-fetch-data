import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function ExampleErrorHandling() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <h2>4. Error handling with react hooks</h2>
      <hr />
      <Fragment>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Search
        </button>

        {isError && (
          <div>
            <b>Something went wrong ...</b>
          </div>
        )}

        {isLoading ? (
          <div>
            <b>Loading ...</b>
          </div>
        ) : (
          <ul>
            {data.hits.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    </div>
  );
}

export default ExampleErrorHandling;

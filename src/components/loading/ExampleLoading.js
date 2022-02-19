import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function ExampleLoading() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <Fragment>
        <h2>3.Loading indicator with react hooks</h2>
        <hr />
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
        <br />
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

export default ExampleLoading;

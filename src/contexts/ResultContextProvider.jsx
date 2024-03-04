import React, { useState } from "react";
import { createContext } from "react";

const ResultContext = createContext();
const url = `https://google.serper.dev`;
function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  async function getResults(type) {
    console.log({ type });
    setIsLoading(true);
    const response = await fetch(`${url}${type}`, {
      method: "POST",
      headers: {
        "X-API-KEY": "ce6e69b98ccd94185faa6779bcf6ab427262a47b",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (type.includes("/news")) {
      setResults(data.news);
    } else if (type.includes("/search")) {
      setResults(data.organic);
    } else if (type.includes("/videos")) {
      setResults(data.videos);
    } else if (type.includes("/images")) {
      setResults(data.images);
    } else {
      setResults(null);
    }
    setIsLoading(false);
  }
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export default ResultContextProvider;

export { ResultContext };

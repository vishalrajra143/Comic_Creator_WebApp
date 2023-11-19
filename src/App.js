// src/App.js
import React, { useState,useEffect } from "react";
import "./App.css";
import ComicDisplay from "./ComicDisplay";
import Loading from "./Loading";
import fly from "./fly.png"
const ComicStripApp = () => {
  const [comicText, setComicText] = useState(Array(10).fill(""));
  const [comicImages, setComicImages] = useState(Array(10).fill(null));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState(1);
  const [annotation, setAnnotation] = useState(Array(10).fill(""));
  const handleTextChange = (index, text) => {
    const newTextArray = [...comicText];
    newTextArray[index] = text;
    setComicText(newTextArray);
  };

  const handleTextChangeAnnote = (index, text) => {
    const newTextArray = [...annotation];
    newTextArray[index] = text;
    setAnnotation(newTextArray);
  };
  const query = async (data) => {
    try {
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return URL.createObjectURL(result);
    } catch (err) {
      throw new Error("Error querying the API. Please try again.");
    }
  };

  const generateComic = async () => {
    try {
      setError(null);
      setLoading(true);
      setState(2);
      const newComicImages = await Promise.all(
        comicText.map(async (text) => {
          const data = { inputs: text };
          const imageUrl = await query(data);
          return imageUrl;
        })
      );

      setComicImages(newComicImages);
    } catch (err) {
      setError(err.message || "Error generating comic. Please try again.");
    } finally {
      setLoading(false);
      setState(3);
    }
  };
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <> 
    {showIntro && (
        <div className="intro-animation">
          <img className="fly" src={fly} alt="Comic Intro" />
        </div>
      )}
      <div className="homepage">
        {state === 1 && (
          <div className="container">
            <h1>Comic Strip Generator</h1>

            <div>
              {comicText.map((text, index) => (
                <div key={index} className="panel">
                  <label>{`Panel ${index + 1}: `}</label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => handleTextChange(index, e.target.value)}
                    className="text-input"
                  />
                  <label>Annotation for {`Panel ${index + 1}: `}</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleTextChangeAnnote(index, e.target.value)
                    }
                    className="text-input"
                  />
                </div>
              ))}
            </div>

            <button onClick={generateComic} className="generate-button">
                Generate Comic
            </button>

            {loading && <p style={{ color: "#555" }}>Generating comic...</p>}
          </div>
        )}
      </div>
      {state===2 && <Loading/>}
      {state === 3 && (
        <ComicDisplay comicImages={comicImages} annotation={annotation} />
      )}
    </>
  );
};

export default ComicStripApp;


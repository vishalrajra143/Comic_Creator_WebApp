// src/ComicDisplay.js
import React from "react";
import { useState } from "react";
import "./ComicDisplay.css";
import ComicStripApp from "./App";
const ComicDisplay = ({ comicImages, annotation }) => {
  const [state, setState] = useState(1);
  const onClose = () => {
    setState(2);
  };
  return (
    <>
      {state === 2 && <ComicStripApp />}
      {state === 1 && (
        <div className="container1">
          <div className="close-button" onClick={onClose}>
            X
          </div>
          {
            <div className="page">
              <div className="row1">
                <div className="panel1 r11">
                  {annotation[0] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[0]}</p>
                    </div>
                  )}

                  {comicImages[0] && (
                    <div>
                      <img src={comicImages[0]} alt="Panel 1" />
                    </div>
                  )}
                </div>

                <div className="panel1 r12">
                  {annotation[1] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[1]}</p>
                    </div>
                  )}

                  {comicImages[1] && (
                    <div>
                      <img src={comicImages[1]} alt="Panel 2" />
                    </div>
                  )}
                </div>

                <div className="panel1 r13">
                  {annotation[2] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[2]}</p>
                    </div>
                  )}

                  {comicImages[2] && (
                    <div>
                      <img src={comicImages[2]} alt="Panel 3" />
                    </div>
                  )}
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="row2">
                <div className="panel1 r21">
                  {annotation[3] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[3]}</p>
                    </div>
                  )}

                  {comicImages[3] && (
                    <div>
                      <img src={comicImages[3]} alt="Panel 4" />
                    </div>
                  )}
                </div>

                <div className="panel1 r22">
                  {annotation[4] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[4]}</p>
                    </div>
                  )}

                  {comicImages[4] && (
                    <div>
                      <img src={comicImages[4]} alt="Panel 5" />
                    </div>
                  )}
                </div>

                <div className="panel1 r23">
                  {annotation[5] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[5]}</p>
                    </div>
                  )}

                  {comicImages[5] && (
                    <div>
                      <img src={comicImages[2]} alt="Panel 6" />
                    </div>
                  )}
                </div>
                <div className="panel1 r24">
                  {annotation[6] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[6]}</p>
                    </div>
                  )}

                  {comicImages[6] && (
                    <div>
                      <img src={comicImages[6]} alt="Panel 7" />
                    </div>
                  )}
                </div>
              </div>
              {/* -------------------------------------------------- */}
              <div className="row3">
              <div className="panel1 r31">
                  {annotation[7] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[7]}</p>
                    </div>
                  )}

                  {comicImages[7] && (
                    <div>
                      <img src={comicImages[7]} alt="Panel 8" />
                    </div>
                  )}
                </div>

                <div className="panel1 r32">
                  {annotation[8] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[8]}</p>
                    </div>
                  )}

                  {comicImages[8] && (
                    <div>
                      <img src={comicImages[8]} alt="Panel 9" />
                    </div>
                  )}
                </div>

                <div className="panel1 r33">
                  {annotation[9] && (
                    <div className="speech bubble">
                      <p className="thought">{annotation[9]}</p>
                    </div>
                  )}

                  {comicImages[9] && (
                    <div>
                      <img src={comicImages[9]} alt="Panel 10" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};

export default ComicDisplay;

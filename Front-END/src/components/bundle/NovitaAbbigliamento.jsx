import React from "react";
import "./novitaAbbigliamento.css";

const NovitaAbbigliamento = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }} classNameName="mb-5">
        Novita Abbigliamento
      </h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            {/* CARD 01 */}

            <div className="my-4">
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <div className="image-container">
                  <img src="src\assets\imgMyProtein01.webp" alt="img Product" />
                  <button className="overlayButton">Acquisto Rapido</button>
                </div>
                <div className="text-start my-2">
                  <h5 style={{ fontSize: "1rem", fontWeight: "400" }}>
                    Crop top a costine senza cuciture MP Tempo da donna - Lilla
                    acceso
                  </h5>

                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "1rem" }}
                  >
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#2D2C2F",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#8a9992",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#bca4cb",
                      }}
                    ></div>
                  </div>
                  <div className="my-4">
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      <svg
                        classNameName="label"
                        fill="#BB1823"
                        width={"20px"}
                        display={"flex"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        ></path>
                      </svg>
                      <h4
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "700",
                          color: "#4d4f53",
                        }}
                      >
                        Spedizone Gratuita
                      </h4>
                    </div>
                    <h5
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#4d4f53",
                      }}
                    >
                      | Quando spendi 25€ in Abbigliamento
                    </h5>
                  </div>
                  <h1 className="fs-5">35,99</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {/* CARD 02*/}

            <div className="my-4">
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <div className="image-container">
                  <img
                    src="src\assets\imgMyProtein04.webp"
                    alt="img Product02"
                  />
                  <button className="overlayButton">Acquisto Rapido</button>
                </div>
                <div className="text-start my-2">
                  <h5 style={{ fontSize: "1rem", fontWeight: "400" }}>
                    MP Men's Tempo Stringer - Black
                  </h5>

                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "1rem" }}
                  >
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#2D2C2F",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#305679",
                      }}
                    ></div>
                  </div>
                  <div className="my-4">
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      <svg
                        classNameName="label"
                        fill="#BB1823"
                        width={"20px"}
                        display={"flex"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        ></path>
                      </svg>
                      <h4
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "700",
                          color: "#4d4f53",
                        }}
                      >
                        Spedizone Gratuita
                      </h4>
                    </div>
                    <h5
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#4d4f53",
                      }}
                    >
                      | Quando spendi 25€ in Abbigliamento
                    </h5>
                  </div>
                  <h1 className="fs-5">27,99</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {/* CARD 03*/}

            <div className="my-4">
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <div className="image-container">
                  <img
                    src="src\assets\imgMyProtein03.webp"
                    alt="img Product3"
                  />
                  <button className="overlayButton">Acquisto Rapido</button>
                </div>
                <div className="text-start my-2">
                  <h5 style={{ fontSize: "1rem", fontWeight: "400" }}>
                    MP Men's Tempo Shorts - Black
                  </h5>

                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "1rem" }}
                  >
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#2D2C2F",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#305679",
                      }}
                    ></div>
                  </div>
                  <div className="my-4">
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      <svg
                        classNameName="label"
                        fill="#BB1823"
                        width={"20px"}
                        display={"flex"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        ></path>
                      </svg>
                      <h4
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "700",
                          color: "#4d4f53",
                        }}
                      >
                        Spedizone Gratuita
                      </h4>
                    </div>
                    <h5
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#4d4f53",
                      }}
                    >
                      | Quando spendi 25€ in Abbigliamento
                    </h5>
                  </div>
                  <h1 className="fs-5">35,99</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {/* CARD 04*/}

            <div className="my-4">
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <div className="image-container">
                  <img
                    src="src\assets\imgMyProtein02.webp"
                    alt="img Product4"
                  />
                  <button className="overlayButton">Acquisto Rapido</button>
                </div>
                <div className="text-start my-2">
                  <h5 style={{ fontSize: "1rem", fontWeight: "400" }}>
                    Leggings a costine senza cuciture MP Tempo da donna - Lilla
                    acceso
                  </h5>

                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "1rem" }}
                  >
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#2D2C2F",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#8a9992",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#8a9992",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#bca4cb",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#4a4843",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        borderRadius: "50px",
                        backgroundColor: "#807d6f",
                      }}
                    ></div>
                  </div>
                  <div className="my-4">
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      <svg
                        classNameName="label"
                        fill="#BB1823"
                        width={"20px"}
                        display={"flex"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                        ></path>
                      </svg>
                      <h4
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "700",
                          color: "#4d4f53",
                        }}
                      >
                        Spedizone Gratuita
                      </h4>
                    </div>
                    <h5
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "#4d4f53",
                      }}
                    >
                      | Quando spendi 25€ in Abbigliamento
                    </h5>
                  </div>
                  <h1 className="fs-5">49,99</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}

      <div class="container text-center my-5">
        <div class="row">
          <div class="col">
            <button className="rounded-1 btn btnCenter border border-primary text-primary">
              Visualizza Altro
            </button>
          </div>
        </div>
      </div>

      {/* LOGHI */}
      <div class="container text-center">
        <div class="row">
          <div class="col">
            {/* LOGO 01 */}
            <img
              src="src\assets\TrustPilotImg.jpg"
              alt="Logo01"
              width={"150px"}
            />
          </div>

          <div class="col">
            {/* LOGO 02 */}
            <img src="src\assets\Train&Gain.png" alt="Logo02" width={"150px"} />
          </div>

          <div class="col">
            {/* LOGO 03 */}
            <img
              src="src\assets\myprotein_subscribe_logo_blk-015918.png"
              alt="Logo03"
              width={"150px"}
            />
          </div>

          <div class="col">
            {/* LOGO 04 */}
            <div className="d-flex flex-column mb-3 gap-1">
              <img
                src="src\assets\GooglePlay.png"
                alt="Logo04"
                width={"150px"}
              />
              <img
                src="src\assets\App_Store_Badge-094340.png"
                alt="Logo04"
                width={"150px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovitaAbbigliamento;

import React from "react";
import "./Firstpage.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import threedot from "../asset/dots.png";
import twodot from "../asset/dotss.png";
import check from "../asset/check.png";
import checked from "../asset/checked.png";

const Firstpage = () => {
  return (
    <div className="row">
      <div className="menu col-2">
        <div className="logo d-flex p-3">
          <div
            className="icon mb-4 mx-3"
            style={{ transform: "rotate(45deg)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-file-earmark"
              viewBox="0 0 16 16"
            >
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </div>
          <p className="brand h4">examica</p>
        </div>
        <div className="testbutton text-center mb-4">
          <button type="button" className="btn btn-primary btn-m">
            Nowy Test
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-plus ms-4 mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
        <div className="navigation p-4">
          <ul className="nav flex-column mb-5">
            <li className="mb-3 ms-2">Testy</li>
            <li className="mb-3 ms-2">Wszystkie</li>
            <li className="mb-3 ms-2">Udostepnione</li>
            <li className="mb-3 ms-2">Ostatnie</li>
            <li className="mb-3 ms-2">Usuniete</li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="settings m-4">
          <div className="letters">
            <p className="h7">Ustawienia</p>
            <p className="h7">Polityka Prywatności</p>
          </div>
          <div className="setlogo">
            <div className="corner"></div>
            <div className="setlogoTop d-flex p-2">
              <p className="mt-2">Skorzystaj ze wszystkich mozliwości</p>
              <div className="setLogoSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="buttonset p-2" type="button">
                Zmien taryfe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main col-10 p-4">
        <nav className="d-flex justify-content-between">
          <div className="searchbar">
            <input type="search" name="search" className="searchInput ps-2" placeholder="Szukaj testow"/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div className="user d-flex">
            <div className="me-3">
              <p className="username">Michal Jankowska</p>
            </div>
            <div className="avatar me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
            </div>
            <div className="notification d-flex justify-content-center">
              <Badge badgeContent={3} color="primary" className="my-auto">
                <NotificationsNoneIcon color="action" />
              </Badge>
            </div>
          </div>
        </nav>
        <div className="header">
          <p className="h3 mt-5">Kreator testow</p>
          <p style={{color:"rgb(182, 185, 191)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
            sint corporis, iste consequuntur animi illo possimus.
          </p>
          <div className="line"></div>
          <div className="questions">
            <div className="question p-2 mt-4">
              <div className="questionHeader d-flex justify-content-between mx-auto">
                <div className="d-flex my-3">
                  <div className="questionIcon">
                    <img src={threedot} alt="dots" className="" />
                  </div>
                  <div>
                    <p className="h3 ms-3">Pytanie 1</p>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-x-lg my-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
              </div>
              <div className="questionBody p-2 mx-auto mb-2">
                <p className="my-auto">Najwyzszy szcyt polski to:</p>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">A</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Sniezka</p>
                  <div className="d-flex">
                    <img
                      src={check}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">B</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Rysy</p>
                  <div className="d-flex">
                    <img
                      src={checked}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addButton mx-auto mb-2">
                <p className="text-primary">Dodaj odpowiedz +</p>
              </div>
            </div>
          </div>
          <div className="questions">
            <div className="question p-2 mt-4">
              <div className="questionHeader d-flex justify-content-between mx-auto">
                <div className="d-flex my-3">
                  <div className="questionIcon">
                    <img src={threedot} alt="dots" className="" />
                  </div>
                  <div>
                    <p className="h3 ms-3">Pytanie 2</p>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-x-lg my-auto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
              </div>
              <div className="questionBody p-2 mx-auto mb-2">
                <p className="my-auto">Stolica Wloch jest?</p>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">A</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Rzym</p>
                  <div className="d-flex">
                    <img
                      src={checked}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">B</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Mediolan</p>
                  <div className="d-flex">
                    <img
                      src={check}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">C</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Neapol</p>
                  <div className="d-flex">
                    <img
                      src={check}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="questionChoice mx-auto mb-2">
                <img src={twodot} alt="dots" className="twodot" />
                <p className="h5 my-auto">D</p>
                <div className="choicesRight d-flex">
                  <p className="my-auto ps-2">Turyn</p>
                  <div className="d-flex">
                    <img
                      src={check}
                      alt="check"
                      className="check my-auto mx-1"
                    />
                    <div className="x px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-lg my-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addButton mx-auto mb-2">
                <p className="text-primary">Dodaj odpowiedz +</p>
              </div>
            </div>
          </div>
          <div className="questionAddButton d-flex my-3">
            <p className="text-primary m-auto py-1">Dodaj odpowiedz +</p>
          </div>
          <div className="buttonEnd mx-auto my-3">
            <div className="d-grid gap-2">
              <button
                className="buttonTest p-4 d-flex justify-content-between bg-primary"
                type="button"
              >
                Stworz test
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fillRule="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;

import React from "react";
import "./Secondpage.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";

const Secondpage = () => {
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
        <div className="settings">
          <div className="letters">
            <p className="h7 m-4">Ustawienia</p>
            <p className="h7 m-4">Polityka Prywatności</p>
          </div>
          <div className="setlogo ms-2">
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
            <input
              type="search"
              name="search"
              className="searchInput ps-2"
              placeholder="Szukaj testow"
            />
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
        <div className="header mt-5 d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-left text-primary"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <p className="h5 my-auto ms-2">Test Gramatyki</p>
        </div>
        <div className="info d-flex mt-4">
          <div className="status d-flex me-5">
            <p className="my-auto text-secondary">Status:</p>
            <div className="stick my-auto mx-2"></div>
            <p className="my-auto">Aktywny</p>
          </div>
          <div className="date ms-5">
            <p className="text-secondary my-auto">
              Data stworzania: 15.07.2020 15:22
            </p>
          </div>
        </div>
        <div className="variant p-3 d-flex my-3">
          <div className="select mb-2">
            <label className="my-2 text primary">Wybierz wariant</label>
            <select
              className="form-select form-select-sm p-2"
              aria-label=".form-select-sm example"
            >
              <option selected className="ms-2">
                Wariant 1
              </option>
            </select>
          </div>
          <div className="pencil d-flex ms-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil m-auto"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>
          <div className="pencil d-flex ms-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-three-dots-vertical m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
        </div>
        <div className="questions">
          <div className="question mb-2">
            <div className="questionHeader mx-auto pt-4">
              <p style={{color:'rgb(182, 185, 191)', marginBottom:'0'}}>Pytanie 1</p>
              <p className="h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime minus expedita ad. Dignissimos quae aspernatur commodi?</p>
            </div>
            <div className="questionChoices mx-auto my-3">
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">A</p>
                <p className="text-secondary ms-3">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">B</p>
                <p className="text-secondary ms-3">Consectetur</p>
              </div>
              <div className="choices d-flex">
                <p className="choice checked d-flex justify-content-center">C</p>
                <p className="ms-3" style={{color:'rgb(99,199,170)'}}>Adipisicing elit</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">D</p>
                <p className="text-secondary ms-3">Sit amet</p>
              </div>
            </div>
          </div>
          <div className="question mb-2">
            <div className="questionHeader mx-auto pt-4">
              <p style={{color:'rgb(182, 185, 191)', marginBottom:'0'}}>Pytanie 2</p>
              <p className="h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime minus expedita ad. Dignissimos quae aspernatur commodi?</p>
            </div>
            <div className="questionChoices mx-auto my-3">
              <div className="choices d-flex">
                <p className="choice checked d-flex justify-content-center">A</p>
                <p className="ms-3" style={{color:'rgb(99,199,170)'}}>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">B</p>
                <p className="text-secondary ms-3">Consectetur</p>
              </div>
            </div>
          </div>
          <div className="question mb-2">
            <div className="questionHeader mx-auto pt-4">
              <p style={{color:'rgb(182, 185, 191)', marginBottom:'0'}}>Pytanie 3</p>
              <p className="h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime minus expedita ad. Dignissimos quae aspernatur commodi?</p>
            </div>
            <div className="questionChoices mx-auto my-3">
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">A</p>
                <p className="text-secondary ms-3">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">B</p>
                <p className="text-secondary ms-3">Consectetur</p>
              </div>
              <div className="choices d-flex">
                <p className="choice checked d-flex justify-content-center">C</p>
                <p className="ms-3" style={{color:'rgb(99,199,170)'}}>Adipisicing elit</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">D</p>
                <p className="text-secondary ms-3">Sit amet</p>
              </div>
            </div>
          </div>
          <div className="question mb-2">
            <div className="questionHeader mx-auto pt-4">
              <p style={{color:'rgb(182, 185, 191)', marginBottom:'0'}}>Pytanie 4</p>
              <p className="h5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime minus expedita ad. Dignissimos quae aspernatur commodi?</p>
            </div>
            <div className="questionChoices mx-auto my-3">
              <div className="choices d-flex">
                <p className="choice checked d-flex justify-content-center">A</p>
                <p className="ms-3" style={{color:'rgb(99,199,170)'}}>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="choices d-flex">
                <p className="choice d-flex justify-content-center">B</p>
                <p className="text-secondary ms-3">Consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;

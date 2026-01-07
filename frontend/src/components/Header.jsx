import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons/faAtlassian";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Header({ perdoruesiData, onCkycja }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center w-full">
      <Link to="/" className="flex items-center mr-8">
        <FontAwesomeIcon icon={faAtlassian} className="text-2xl" />
      </Link>

      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="nav-link">
          Ballina
        </Link>
        <Link to="/listaPuneve" className="nav-link">
          Lista e Puneve
        </Link>
        <Link to="/listaKompanive" className="nav-link">
          Lista e Kompanive
        </Link>
        <Link to="/rrethNesh" className="nav-link">
          Rreth Nesh
        </Link>
      </nav>

      <div className="hidden md:flex space-x-4 items-center ml-auto">
        {perdoruesiData ? (
          <>
            <Link
              to={`/profili/${perdoruesiData._id}`}
              className="flex items-center"
            >
              <FontAwesomeIcon
                icon={
                  perdoruesiData.tipiPerdoruesit === "punedhenes"
                    ? faBriefcase
                    : faUser
                }
                className="mr-2"
              />
              {perdoruesiData.tipiPerdoruesit === "punedhenes"
                ? perdoruesiData.kompania
                : perdoruesiData.emri}
            </Link>
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
              onClick={onCkycja}
            >
              C'kycu
            </button>
          </>
        ) : (
          <>
            <Link to="/kycja" className="kycja">
              Kycu/Regjistrohu
            </Link>
            <Link to="/publikopune" className="publikoPune">
              Publiko Pune
            </Link>
          </>
        )}
      </div>

      <button
        className="md:hidden text-2xl ml-auto"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md: hidden"
            onClick={closeMenu}
          ></div>

          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button onClick={closeMenu} className="text-2xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <nav className="flex flex-col px-6 space-y-6">
              <Link to="/" className="nav-link text-lg" onClick={closeMenu}>
                Ballina
              </Link>
              <Link
                to="/listaPuneve"
                className="nav-link text-lg"
                onClick={closeMenu}
              >
                Lista e Puneve
              </Link>
              <Link
                to="/listaKompanive"
                className="nav-link text-lg"
                onClick={closeMenu}
              >
                Lista e Kompanive
              </Link>
              <Link
                to="/rrethNesh"
                className="nav-link text-lg"
                onClick={closeMenu}
              >
                Rreth Nesh
              </Link>

              {perdoruesiData ? (
                <>
                  <Link
                    to={`/profili/${perdoruesiData._id}`}
                    className="nav-link text-lg flex items-center"
                    onClick={closeMenu}
                  >
                    <FontAwesomeIcon
                      icon={
                        perdoruesiData.tipiPerdoruesit === "punedhenes"
                          ? faBriefcase
                          : faUser
                      }
                      className="mr-2"
                    />
                    {perdoruesiData.tipiPerdoruesit === "punedhenes"
                      ? perdoruesiData.kompania
                      : perdoruesiData.emri}
                  </Link>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => {
                      onCkycja();
                      closeMenu();
                    }}
                  >
                    C'kycu
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/kycja"
                    className="kycja text-lg"
                    onClick={closeMenu}
                  >
                    Kycu/Regjistrohu
                  </Link>
                  <Link
                    to="/publikopune"
                    className="publikoPune text-lg"
                    onClick={closeMenu}
                  >
                    Publiko Pune
                  </Link>
                </>
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;

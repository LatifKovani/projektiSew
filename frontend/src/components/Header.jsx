import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons/faAtlassian";
<<<<<<< HEAD
import { SquareChartGantt, Heart, Settings, LogOut } from "lucide-react";
=======
import { SquareChartGantt } from "lucide-react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
>>>>>>> 4176ce8 (test)

import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Perdoruesi from "../PerdoruesiContext";

function Header() {
  const navigate = useNavigate();
  const { perdoruesiData, setPerdoruesiData } = Perdoruesi.usePerdoruesi();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
<<<<<<< HEAD
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
=======
>>>>>>> 4176ce8 (test)
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
<<<<<<< HEAD
    setIsMobileProfileOpen(false);
=======
>>>>>>> 4176ce8 (test)
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
<<<<<<< HEAD
    setIsMobileProfileOpen(false);
=======
>>>>>>> 4176ce8 (test)
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

<<<<<<< HEAD
  const toggleMobileProfile = () => {
    setIsMobileProfileOpen(!isMobileProfileOpen);
  };

=======
>>>>>>> 4176ce8 (test)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCkycja = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ckycja/perdoruesi",
        {},
        { withCredentials: true },
      );

      setPerdoruesiData(null);
<<<<<<< HEAD
      localStorage.removeItem("user");
      localStorage.removeItem("token");
=======
>>>>>>> 4176ce8 (test)

      console.log("Ckycja u be", response.data);
      closeDropdown();
      navigate("/");
    } catch (error) {
      console.error(error);
      setPerdoruesiData(null);
<<<<<<< HEAD
      localStorage.clear();
    }
  };

  const isPunedhenes = perdoruesiData?.tipiPerdoruesit === "punedhenes";

  return (
    <>
      <div className="flex items-center justify-between w-full bg-white shadow-md py-7 px-6 mx-auto text-l ">
        <Link to="/" className="flex items-center mr-8">
          <FontAwesomeIcon icon={faAtlassian} className="text-2xl" />
        </Link>

        <nav className="hidden md:flex space-x-8 ">
          <Link to="/" className="nav-link">
            Ballina
          </Link>
          <Link to="/listaPuneve" className="nav-link">
            Lista e Puneve
          </Link>
          <Link to="/listaKompanive" className="nav-link">
            Lista e Kompanive
          </Link>
          {isPunedhenes && (
            <Link to="/publikopune" className="nav-link">
              Publiko Pune
            </Link>
          )}
          <Link to="/rrethNesh" className="nav-link">
            Rreth Nesh
          </Link>
        </nav>

        <div className="hidden md:flex space-x-4 items-center ml-auto">
          {perdoruesiData ? (
            <>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={
                      perdoruesiData.tipiPerdoruesit === "punedhenes"
                        ? faBriefcase
                        : faUser
                    }
                  />
                  <span style={{ color: "#3f3f46", fontWeight: "500" }}>
                    {perdoruesiData.tipiPerdoruesit === "punedhenes"
                      ? perdoruesiData.kompania
                      : perdoruesiData.emri}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-sm transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "#71717a" }}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to={`/profili/${perdoruesiData._id}`}
                      className="profileDropDown"
                      onClick={closeDropdown}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-3 text-[#0F4C75]"
                      />
                      Profili
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    {isPunedhenes ? (
                      <Link
                        to={`/profili/${perdoruesiData._id}/menaxhoShpalljet`}
                        className="profileDropDown"
                        onClick={closeDropdown}
                      >
                        <SquareChartGantt
                          size={20}
                          className="mr-3 text-[#0F4C75]"
                        />
                        Menaxho Shpalljet
                      </Link>
                    ) : (
                      <Link
                        to={`/profili/${perdoruesiData._id}/menaxhoAplikimet`}
                        className="profileDropDown"
                        onClick={closeDropdown}
                      >
                        <SquareChartGantt
                          size={20}
                          className="mr-3 text-[#0F4C75]"
                        />
                        Menaxho Aplikimet
                      </Link>
                    )}
                    <hr className="my-2 border-gray-200" />
                    <Link
                      to={`/profili/${perdoruesiData._id}/konfigurimet`}
                      className="profileDropDown"
                      onClick={closeDropdown}
                    >
                      <Settings size={20} className="mr-3 text-[#0F4C75]" />
                      Konfigurimet e Llogarise
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <Link
                      to={`/profili/${perdoruesiData._id}/punetRuajtura`}
                      className="profileDropDown"
                      onClick={closeDropdown}
                    >
                      <Heart size={20} className="mr-3 text-[#0F4C75]" />
                      Punet e Ruajtura
                    </Link>

                    <hr className="my-2 border-gray-200" />
                    <button
                      type="button"
                      className="w-full text-center flex items-center px-4 py-2 hover:text-red-600 transition-colors"
                      onClick={handleCkycja}
                    >
                      <LogOut
                        size={20}
                        className="mr-3 text-[#0F4C75] hover:text-red-500"
                      />
                      C'kycu
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/kycja" className="kycja">
                Kycu/Regjistrohu
              </Link>
              <Link to="/kycja" className="publikoPune">
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
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-2xl overflow-hidden ">
          <nav className="flex flex-col py-6 px-6">
            <Link
              to="/"
              className="text-lg font-medium py-3 hover:text-[#0F4C75] transition-colors"
              onClick={closeMenu}
            >
              Ballina
            </Link>
            <Link
              to="/listaPuneve"
              className="text-lg font-medium py-3 hover:text-[#0F4C75] transition-colors"
              onClick={closeMenu}
            >
              Lista e Puneve
            </Link>
            <Link
              to="/listaKompanive"
              className="text-lg font-medium py-3 hover:text-[#0F4C75] transition-colors"
              onClick={closeMenu}
            >
              Lista e Kompanive
            </Link>
            <Link
              to="/rrethNesh"
              className="text-lg font-medium py-3 hover:text-[#0F4C75] transition-colors"
              onClick={closeMenu}
            >
              Rreth Nesh
            </Link>

            {isPunedhenes && (
              <Link
                to="/publikopune"
                className="text-lg font-medium py-3 hover:text-[#0F4C75] transition-colors"
                onClick={closeMenu}
              >
                Publiko Pune
              </Link>
            )}

            {perdoruesiData ? (
              <div className="mt-4 border-t border-t-gray-300 pt-4">
                <button
                  onClick={toggleMobileProfile}
                  className="flex items-center justify-between w-full text-left py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
=======
    }
  };

  // Check if user is punedhenes
  const isPunedhenes = perdoruesiData?.tipiPerdoruesit === "punedhenes";

  return (
    <div className="flex items-center justify-between w-full bg-white shadow-md py-7 px-6 mx-auto text-l rounded-2xl">
      <Link to="/" className="flex items-center mr-8">
        <FontAwesomeIcon icon={faAtlassian} className="text-2xl" />
      </Link>

      <nav className="hidden md:flex space-x-8 ">
        <Link to="/" className="nav-link">
          Ballina
        </Link>
        <Link to="/listaPuneve" className="nav-link">
          Lista e Puneve
        </Link>
        <Link to="/listaKompanive" className="nav-link">
          Lista e Kompanive
        </Link>
        {/* Show "Publiko Pune" LINK in navbar ONLY for punedhenes users */}
        {isPunedhenes && (
          <Link to="/PublikoPune" className="nav-link">
            Publiko Pune
          </Link>
        )}
        <Link to="/rrethNesh" className="nav-link">
          Rreth Nesh
        </Link>
      </nav>

      <div className="hidden md:flex space-x-4 items-center ml-auto">
        {perdoruesiData ? (
          <>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon
                  icon={
                    perdoruesiData.tipiPerdoruesit === "punedhenes"
                      ? faBriefcase
                      : faUser
                  }
                  className="text-gray-700"
                />
                <span className="text-gray-700 font-medium">
                  {perdoruesiData.tipiPerdoruesit === "punedhenes"
                    ? perdoruesiData.kompania
                    : perdoruesiData.emri}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-gray-500 text-sm transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to={`/profili/${perdoruesiData._id}`}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={closeDropdown}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                    Profili
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  {isPunedhenes ? (
                    <Link
                      to={`/profili/${perdoruesiData._id}/menaxhoShpalljet`}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <SquareChartGantt
                        size={20}
                        className="mr-3 text-gray-500"
                      />
                      Menaxho Punet
                    </Link>
                  ) : (
                    <Link
                      to={`/profili/${perdoruesiData._id}/menaxhoAplikimet`}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <SquareChartGantt
                        size={20}
                        className="mr-3 text-gray-500"
                      />
                      Menaxho Aplikimet
                    </Link>
                  )}
                  <hr className="my-2 border-gray-200" />
                  <Link
                    to={`/profili/${perdoruesiData._id}/konfigurimet`}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings size={20} className="mr-3 text-gray-500" />
                    Konfigurimet e Llogarise
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  <button
                    type="button"
                    className="w-full text-center flex items-center px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                    onClick={handleCkycja}
                  >
                    <LogOut size={20} className="mr-3 text-gray-700" />
                    C'kycu
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/kycja" className="kycja">
              Kycu/Regjistrohu
            </Link>
            <Link to="/PublikoPune" className="publikoPune">
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
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
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

              {isPunedhenes && (
                <Link
                  to="/PublikoPune"
                  className="nav-link text-lg"
                  onClick={closeMenu}
                >
                  Publiko Pune
                </Link>
              )}

              {perdoruesiData ? (
                <>
                  <Link
                    to={`/profili/${perdoruesiData._id}`}
                    className="nav-link text-lg flex items-center"
                    onClick={closeMenu}
                  >
>>>>>>> 4176ce8 (test)
                    <FontAwesomeIcon
                      icon={
                        perdoruesiData.tipiPerdoruesit === "punedhenes"
                          ? faBriefcase
                          : faUser
                      }
<<<<<<< HEAD
                    />
                    <span className="font-medium text-[#3f3f46]">
                      {perdoruesiData.tipiPerdoruesit === "punedhenes"
                        ? perdoruesiData.kompania
                        : perdoruesiData.emri}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-sm transition-transform ${
                      isMobileProfileOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "#71717a" }}
                  />
                </button>

                {isMobileProfileOpen && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-300">
                    <Link
                      to={`/profili/${perdoruesiData._id}`}
                      className="flex items-center gap-3 py-2 px-3 text-[#3f3f46] hover:text-[#0F4C75] transition-colors"
                      onClick={closeMenu}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-[#0F4C75]"
                      />
                      Profili
                    </Link>

                    {isPunedhenes ? (
                      <Link
                        to={`/profili/${perdoruesiData._id}/menaxhoShpalljet`}
                        className="flex items-center gap-3 py-2 px-3 hover:text-[#0F4C75] transition-colors"
                        onClick={closeMenu}
                      >
                        <SquareChartGantt
                          size={20}
                          className="text-[#0F4C75]"
                        />
                        Menaxho Shpalljet
                      </Link>
                    ) : (
                      <Link
                        to={`/profili/${perdoruesiData._id}/menaxhoAplikimet`}
                        className="flex items-center gap-3 py-2 px-3 hover:text-[#0F4C75] transition-colors"
                        onClick={closeMenu}
                      >
                        <SquareChartGantt
                          size={20}
                          className="text-[#0F4C75]"
                        />
                        Menaxho Aplikimet
                      </Link>
                    )}

                    <Link
                      to={`/profili/${perdoruesiData._id}/konfigurimet`}
                      className="flex items-center gap-3 py-2 px-3 hover:text-[#0F4C75] transition-colors"
                      onClick={closeMenu}
                    >
                      <Settings size={20} className="text-[#0F4C75]" />
                      Konfigurimet e Llogarise
                    </Link>

                    <Link
                      to={`/profili/${perdoruesiData._id}/punetRuajtura`}
                      className="flex items-center gap-3 py-2 px-3 hover:text-[#0F4C75] transition-colors"
                      onClick={closeMenu}
                    >
                      <Heart size={20} className="text-[#0F4C75]" />
                      Punet e Ruajtura
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => {
                    handleCkycja();
                    closeMenu();
                  }}
                  className="mt-4 bg-red-500 text-white px-4 py-3 rounded-lg font-medium w-full hover:bg-red-600 transition-colors"
                >
                  C'kycu
                </button>
              </div>
            ) : (
              <div className="mt-4 border-t pt-4 flex flex-col gap-3">
                <Link
                  to="/kycja"
                  className="kycja text-center"
                  onClick={closeMenu}
                >
                  Kycu/Regjistrohu
                </Link>
                <Link
                  to="/kycja"
                  className="publikoPune text-center"
                  onClick={closeMenu}
                >
                  Publiko Pune
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
=======
                      className="mr-2"
                    />
                    {perdoruesiData.tipiPerdoruesit === "punedhenes"
                      ? perdoruesiData.kompania
                      : perdoruesiData.emri}
                  </Link>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-left"
                    onClick={() => {
                      handleCkycja();
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
                    to="/PublikoPune"
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
>>>>>>> 4176ce8 (test)
  );
}

export default Header;

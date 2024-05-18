import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaImage,
  FaCloudUploadAlt,
  FaPlayCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`top-0 sticky w-full z-30 bg-white border-y-2 border-slate-300`}
    >
      <div className="flex items-center justify-between max-w-6xl p-3">
        <div className="relative group" ref={menuRef}>
          <button
            className="text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
          <div
            className={`absolute top-7 left-0 bg-white shadow-md rounded-md p-3 z-10 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } w-28`}
          >
            <Link to="/player" className="block text-slate-700 py-1">
              <FaPlayCircle className="inline-block mr-2" />
              Player1
            </Link>
            <Link to="/player" className="block text-slate-700 py-1">
              <FaPlayCircle className="inline-block mr-2" />
              Player2
            </Link>
            <Link to="/player" className="block text-slate-700 py-1">
              <FaPlayCircle className="inline-block mr-2" />
              Player3
            </Link>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-24">
          <div>
            <Link to="/dashboard">
              <FaCloudUploadAlt
                size={24}
                className="text-slate-700 hover:underline"
              />
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/dashboard">
              <FaImage size={24} className="text-slate-700 hover:underline" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

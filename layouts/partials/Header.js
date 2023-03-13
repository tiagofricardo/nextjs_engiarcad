import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  //router
  const router = useRouter();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header py-[25px]">
      <nav className="border-gray-300 ">
        <div className=" container mx-auto flex flex-wrap items-center justify-between">
          <Logo />
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="ml-3 inline-flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>

          <div
            className={
              navOpen
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="mobile-menu"
          >
            <ul className="nav-bar">
              {main.map((menu, i) =>
                !menu.hasChildren ? (
                  <Link
                    key={i}
                    href={menu.url}
                    className={`nav-link ${
                      router.asPath === menu.url ? "nav-link-active" : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                ) : (
                  <li key={i} className="group">
                    <span
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className={`nav-dropdown-link ${
                        menu.children.filter((e) => e.url === router.asPath)
                          .length > 0
                          ? "nav-dropdown-link-active"
                          : ""
                      }`}
                    >
                      {menu.name}{" "}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <ul
                      className="nav-dropdown-list"
                      aria-labelledby="dropdownLargeButton"
                    >
                      {menu.children.map((children, i) => (
                        <Link
                          key={i}
                          href={children.url}
                          className="nav-dropdown-list-link "
                        >
                          {children.text}
                        </Link>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

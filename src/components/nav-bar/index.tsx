import React from "react";
import Search from '../search'

export default function Navbar(props: any) {
  const { useThemedLogo, withSearch } = props
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="/"
            >
              {
                useThemedLogo ? 
                <h1 className={'text-2xl mr-4'}>
                <span style={{color: "#4285F4"}}>R</span>
                <span style={{color: "#EA4335"}}>o</span>
                <span style={{color: "#FBBC05"}}>o</span>
                <span style={{color: "#00A1F1"}}>g</span>
                <span style={{color: "#34A853"}}>l</span>
                <span style={{color: "#F67314"}}>e</span>
                </h1> : 
                "Roogle"
              }
            </a>
          </div>
          {
            withSearch ? 
            <div className="flex items-center flex w-4/5">
              <Search/>
            </div>
            : <></>
          }
          <div
            className={
              "items-center flex"
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-row list-none">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
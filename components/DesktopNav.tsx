import React from "react";

type Props = {};

function DesktopNav({}: Props) {
  return (
    <>
      <nav className="hidden sm:block">
        <ul className="flex">
          <li className="pr-16">About</li>
          <li className="pr-16">News & Events</li>
          <li>Donate</li>
        </ul>
      </nav>
    </>
  );
}

export default DesktopNav;

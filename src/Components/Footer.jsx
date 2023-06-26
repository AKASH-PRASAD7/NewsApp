import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Akash Prasad. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

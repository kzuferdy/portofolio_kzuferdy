import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Tentang Saya {" "}
        <a
          className="font-medium"
          href="https://github.com/kzuferdy"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ferdy Mohamad Firdaus
        </a>{" "}
      Website
        <span className="text-gradient font-medium"> Project</span> &
        <span className="text-gradient font-medium"> Portofolio</span>
      </p>
    </footer>
  );
}
export default Footer;

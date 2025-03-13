import { useState, useEffect } from "react";
import reactLogo from "../../assets/images/react.svg";
import stripeLogo from "../../assets/images/stripe_purple.svg";
import salvascLogo from "../../assets/images/S.svg";
import tsLogo from "../../assets/images/Typescript_logo_2020.svg";
import storybookLogo from "../../assets/images/icon-storybook-default.svg";
import rtlLogo from "../../assets/images/rtl_logo.png";
import vitestLogo from "../../assets/images/logo-shadow.svg";
import salvascLightLogo from "/S_white.svg";
import viteLogo from "/vite.svg";

import reactRouterLightLogo from "../../assets/images/rr_logo_dark.svg";
import reactRouterDarkLogo from "../../assets/images/react-router_logo.svg";

import "../../App.css";

function Introduction() {
  const getInitialTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(getInitialTheme);
  const isDarkTheme = theme !== "dark";
  const [reactRouterLogo, setReactRouterLogo] = useState(
    isDarkTheme ? reactRouterDarkLogo : reactRouterLightLogo
  );
  const [sLogo, setSLogo] = useState(
    isDarkTheme ? salvascLogo : salvascLightLogo
  );

  useEffect(() => {
    setReactRouterLogo(
      isDarkTheme ? reactRouterDarkLogo : reactRouterLightLogo
    );
    setSLogo(isDarkTheme ? salvascLogo : salvascLightLogo);
  }, [isDarkTheme]);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateLogo = () => {
      const newTheme = matchDark.matches ? "dark" : "light";
      setTheme(newTheme);
      setReactRouterLogo(
        newTheme === "dark" ? reactRouterDarkLogo : reactRouterLightLogo
      );
    };

    matchDark.addEventListener("change", updateLogo);

    return () => matchDark.removeEventListener("change", updateLogo);
  }, []);

  return (
    <>
      <h1>Stripe Interview Assessment</h1>
      <h2>Salvador Sánchez Campos</h2>
      <div className="card top-card">
        <a href="https://stripe.com/" target="_blank">
          <img src={stripeLogo} className="logo" alt="Stripe logo" />
        </a>
        <span>+</span>
        <a href="https://salvasc.dev" target="_blank">
          <img src={sLogo} className="logo" alt="SalvaSc logo" />
        </a>
      </div>
      <div className="card tech-logos">
        <h3>Tech Stack:</h3>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={tsLogo} className="logo ts" alt="Typescript logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://storybook.js.org/" target="_blank">
          <img
            src={storybookLogo}
            className="logo storybook"
            alt="Storybook logo"
          />
        </a>

        <ul>
          <li>
            <a href="https://reactrouter.com/home" target="_blank">
              React Router{" "}
              {reactRouterLogo === "light" ? (
                <span className="logo small">Light</span>
              ) : (
                <img
                  src={reactRouterLogo}
                  className="logo small"
                  alt="React Router logo"
                />
              )}
            </a>
          </li>
          <li>
            <a href="https://testing-library.com/" target="_blank">
              React Testing Library{" "}
              <img
                src={rtlLogo}
                className="logo small"
                alt="React Testing Library logo"
              />
            </a>
          </li>
          <li>
            <a href="https://vitest.dev/" target="_blank">
              Vitest{" "}
              <img src={vitestLogo} className="logo small" alt="Vitest logo" />
            </a>
          </li>
        </ul>
        <p className="read-the-docs">Click on the logos to learn more</p>
        <a href="https://github.com/SalvadorSC/stripe-try">GitHub Repo</a>
      </div>

      <a href="/interview">
        <button>Continue to interview</button>
      </a>
    </>
  );
}

export default Introduction;

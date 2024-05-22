import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';
import SearchContext from './SearchContext';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: localStorage.getItem("i18nextLng") || "en", // language to use
  resources: {
    en: {
      common: require("./locales/en/translation.json"),
    },
    vi: {
      common: require("./locales/vi/translation.json"),
    },
  },
});



const Root = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const showPopup = localStorage.getItem("showPopup");

  // Kích hoạt overlay nếu showPopup là true
  if (showPopup === "true") {
    setIsOverlayActive(true);
  }

  console.log("isOverlayActive", isOverlayActive);

  return (
    <React.StrictMode>
      <ContextProvider>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <I18nextProvider i18n={i18next}>
            {isOverlayActive && <div className="overlay"></div>}
            <App />
          </I18nextProvider>
        </SearchContext.Provider>
      </ContextProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
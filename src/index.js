import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';
import SearchContext from './SearchContext';

const Root = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <React.StrictMode>
      <ContextProvider>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <App />
        </SearchContext.Provider>
      </ContextProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
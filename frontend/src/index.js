import React from "react";

import "./index.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider, Modal } from "./context/Modal";
import { LeftSideModalProvider, LeftSideModal } from "./context/SideModal/LeftSideModal";
import { RightSideModalProvider, RightSideModal } from "./context/SideModal/RightSideModal"; 
import App from "./App";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}


function Root() {
  return (
    <RightSideModalProvider>

    <LeftSideModalProvider>
      <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Modal />
          <LeftSideModal />
          <RightSideModal />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
      </LeftSideModalProvider>
    </RightSideModalProvider>
    
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

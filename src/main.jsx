import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./ReduxTK/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HelmetProvider>
);

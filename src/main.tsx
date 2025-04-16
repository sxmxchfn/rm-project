import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";

// Add dark mode class to document
document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

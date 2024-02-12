import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutePages from "./pages";
import { Store } from "./context/useProvider";
import "./assets/style.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Store>
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  </Store>
);

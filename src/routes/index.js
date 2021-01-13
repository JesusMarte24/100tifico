import Header from "../templates/header";
import Home from "../pages/home";
import Characters from "../pages/characters";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Error404 from "../pages/error404";

const Routes = {
  "/": Home,
  "/:id": Characters,
  "/contact": "Contact",
};

const Router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = Routes[route] ? Routes[route] : Error404;
  content.innerHTML = await render();
};

export default Router;

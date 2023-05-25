import "./App.css";
import NavBar from "./Components/navbar";
import FrontAdv from "./Components/front-adv";
import Functions from "./Components/functions";
import ShopCategory from "./Components/shop-category";
import PopularServices from "./Components/popular-service-product";
import AllPopularServices from "./Components/all-pop-serv-prod";
import Services from "./Components/services";

function App() {
  return (
    <>
      <NavBar />
      <FrontAdv />
      <Functions />
      <ShopCategory />
      <PopularServices />
      <AllPopularServices />
      <Services />
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import FooterPageInformation from "./pages/FooterPageInformation";
import DescriptionProduct from "./pages/DescriptionProduct";
import MyProfile from "./pages/MyProfile";
import Error from "./pages/Error";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/page/:idPage" element={<FooterPageInformation />} />
        <Route
          exact
          path="/product/:productId"
          element={<DescriptionProduct />}
        />
        <Route
          exact
          path="/profile"
          element={user.username !== "" ? <MyProfile /> : <Error />}
        />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

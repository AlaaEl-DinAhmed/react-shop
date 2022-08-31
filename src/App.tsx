import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/Home";
const Shop = () => <div>shop</div>;
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default App;

import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/Home";
const Shop = () => <div>shop</div>;

const SignIn = React.lazy(() => import("@/routes/sign-in/SignIn"));

function App() {
  return (
    <>
      <Navigation />
      <React.Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
        </Routes>
      </React.Suspense>
      <Outlet />
    </>
  );
}

export default App;

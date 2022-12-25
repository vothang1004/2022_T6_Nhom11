import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {publicRoute.map((route) => (
          <Route path={route.path} key={route.id} element={route.page}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;

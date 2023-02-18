import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element, isPrivate, isHidden }) => {
            return (
                <Route key={id} path={path} element={element} />
            );
          })}

        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

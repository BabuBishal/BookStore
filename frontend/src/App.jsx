import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <>
      <div className="bg-slate-100 h-20 w-full">
        <h1 className="text-3xl font-medium text-center p-4">
          Book Management System
        </h1>
      </div>
      <div className=" min-h-[92vh] h-full py-5 px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBooks />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

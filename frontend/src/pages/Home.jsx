import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    // Fetching books data from the server
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full mx-auto  h-full p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-500 hover:text-sky-50 px-4 duration-200 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-500 hover:text-sky-50 duration-200 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-medium">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-600 text-4xl hover:scale-105 duration-200" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        !!books.length ? (
          <BooksTable books={books} />
        ) : (
          <h1 className="text-2xl text-center">
            No Books Found. Please add new books.
          </h1>
        )
      ) : !!books?.length ? (
        <BooksCard books={books} />
      ) : (
        <h1 className="text-2xl text-center">
          No Books Found. Please add new books.
        </h1>
      )}
    </div>
  );
};

export default Home;

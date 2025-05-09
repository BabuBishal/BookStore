import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [bookDetails, setBookDetails] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setBookDetails(response.data.bookDetails);
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });

        // alert('An error has occured. Please check the console')
        console.log(error);
        setLoading(false);
      });
  }, []);
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      bookDetails,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });

        // alert('An error occured. Pleade check the console.')
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="my-4 ">
          <label className="text-xl mr-4 text-gray-500">Book Details</label>
          <textarea
            type="text"
            rows={4}
            value={bookDetails}
            onChange={(e) => setBookDetails(e.target.value)}
            className="border-2 rounded-md border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="m-8 p-2 rounded-md bg-sky-400 hover:bg-sky-500 transition-colors duration-200 text-[#f1f1f1] font-bold"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;

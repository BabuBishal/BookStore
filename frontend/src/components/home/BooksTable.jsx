import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separated border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No.</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md ">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-400 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-400 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-400 rounded-md text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-400 rounded-md text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-400 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-xl text-green-800 hover:text-green-600 duration-200" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-xl text-yellow-700 hover:text-yellow-600 duration-200" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-xl text-red-600 hover:text-red-500 duration-200" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

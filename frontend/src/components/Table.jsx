import axios from "axios";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
} from "react-icons/md";

const Table = (Props) => {
  const todos = Props.todos;
  const isLoading = Props.isLoading;

  const handleDelete = (id) => {
    Props.setTodos(Props.todos.filter((u) => u.id !== id));
    axios.delete(`http://localhost:8000/api/todo/${id}/`);
  };

  return (
    <div className="py-2 ">
      <table className="w-11/12 max-w-4xl">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              To Do
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Date Created
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Acions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div> Is isLoading </div>
          ) : (
            <>
              {todos.map((todoItem) => {
                return (
                  <tr key={todoItem.id} className="border-b border-black ">
                    <td className="p-3 text-sm" title={todoItem.id}>
                      <span className="inline-block cursor-pointer">
                        {todoItem.completed ? (
                          <MdOutlineCheckBox />
                        ) : (
                          <MdOutlineCheckBoxOutlineBlank />
                        )}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{todoItem.body}</td>
                    <td className="p-3 text-sm text-center">
                      {" "}
                      <span
                        className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${
                          todoItem.completed ? "bg-green-300" : " bg-red-300"
                        }`}
                      >
                        {todoItem.completed ? "Done" : "Incomplete"}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      {new Date(todoItem.created).toLocaleString()}
                    </td>
                    <td className="p-3 text-sm font-medium   items-center mt-5">
                      <span className="text-xl cursor-pointer">
                        <MdEditNote />
                      </span>
                      <span className="text-xl cursor-pointer">
                        <MdOutlineDeleteOutline
                          onClick={() => handleDelete(todoItem.id)}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Table.propTypes = {
//   todos: PropTypes.array.isRequired,
// };

export default Table;

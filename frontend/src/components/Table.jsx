import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
} from "react-icons/md";

const Table = (Props) => {
  const todos = Props.todos;
  const isLoading = Props.isLoading;

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
                      <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300 ">
                        Done
                      </span>
                    </td>
                    <td className="p-3 text-sm">22-04-23</td>
                    <td className="p-3 text-sm font-medium   items-center mt-5">
                      <span className="text-xl cursor-pointer">
                        <MdEditNote />
                      </span>
                      <span className="text-xl cursor-pointer">
                        <MdOutlineDeleteOutline />
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

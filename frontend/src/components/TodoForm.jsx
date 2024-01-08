import "bootstrap/dist/css/bootstrap.min.css";

const TodoForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <input type="text" placeholder="Type here" className="form-control" />
      <button className="btn btn-primary ml-2">Add TODO</button>
    </div>
  );
};

export default TodoForm;

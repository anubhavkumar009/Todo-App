import { useState, useEffect, useRef } from 'react'
import { getTodos, createTodo, deleteTodo, updateTodo } from "./api/todoApi";
import Navbar from "./components/Navbar.jsx"
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showfinished, setshowfinished] = useState(true);
  const [editId, setEditId] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    loadTodos();
  }, []);


  const loadTodos = async () => {
    try {
      const res = await getTodos();
      settodos(res.data);
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(todo.length, todo.length);
    }
  }, [todo]);

  const togglefinished = () => {
    setshowfinished(prev => !prev);
  };

  const handleEdit = (e, id) => {
    const t = todos.find(item => item._id === id);

    settodo(t.title);
    setEditId(id);
  };

  const handleDelete = async (e, id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    if (todo.trim() === "") return;

    try {

      if (editId) {

        await updateTodo(editId, {
          title: todo
        });

        setEditId(null);

      }
      else {

        await createTodo({
          title: todo
        });

      }

      settodo("");
      loadTodos();

    }
    catch (err) {
      console.log(err);
    }
  };

  const handleEnter = async (e) => {

    if (e.key === "Enter" && todo.trim() !== "") {

      try {

        if (editId) {

          await updateTodo(editId, {
            title: todo
          });

          setEditId(null);

        }
        else {

          await createTodo({
            title: todo
          });

        }

        settodo("");
        loadTodos();

      }
      catch (err) {
        console.log(err);
      }

    }

  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handlecheckbox = async (e) => {
    const id = e.target.name;

    const todo = todos.find(item => item._id === id);

    try {
      await updateTodo(id, {
        completed: !todo.completed
      });

      loadTodos();
    }
    catch (err) {
      console.log(err);
    }
  };

  const filteredTodos = showfinished
    ? todos
    : todos.filter(item => !item.completed);

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[87vh]">

        <div className="addTodos my-5 flex flex-col gap-4">
          <h1 className="font-bold text-center text-4xl">
            iTask - Manage Your Todos at one place
          </h1>

          <h2 className="text-lg font-bold">Add a Todo</h2>

          <input
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={handleEnter}
            value={todo}
            type="text"
            className="w-full rounded-lg p-2 px-5"
          />

          <button
            onClick={handleAdd}
            disabled={todo.length < 1}
            className="bg-violet-700 hover:bg-violet-950 disabled:bg-violet-300 p-2 py-1 rounded-lg text-sm font-bold text-white mx-auto w-full"
          >
            Save
          </button>
        </div>

        <input
          type="checkbox"
          checked={showfinished}
          onChange={togglefinished}
        />{" "}
        Show Finished

        <div className="h-[1px] bg-black opacity-50 w-[90%] mx-auto my-2"></div>

        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {filteredTodos.length === 0 && (
            <div className="m-5">No Todos to display</div>
          )}

          {filteredTodos.map(item => {
            return (

              <div
                key={item._id}
                className="todo flex w-1/2 justify-between items-start my-3"
              >
                <div className="flex gap-3 flex-1 min-w-0">
                  <input
                    name={item._id}
                    onChange={handlecheckbox}
                    type="checkbox"
                    checked={item.completed}
                  />

                  <div
                    className={`flex-1 min-w-0 break-words ${item.completed ? "line-through" : ""
                      }`}
                  >
                    {item.title}
                  </div>
                </div>

                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => handleEdit(e, item._id)}
                    className="bg-violet-700 hover:bg-violet-950 p-2 py-1 rounded-lg text-sm font-bold text-white mx-1"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={(e) => handleDelete(e, item._id)}
                    className="bg-violet-700 hover:bg-violet-950 p-2 py-1 rounded-lg text-sm font-bold text-white mx-1"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default App;

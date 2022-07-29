import { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/todoV2/todoWithBackend.css";
import { DisplayTodoV2 } from "./DisplayTodoV2";

export const TodoWithBackend = () => {
  let userid = localStorage.getItem("userid") || "";

  useEffect(() => {
    getData();
  }, []);

  const [displayTodo, setDisplayTodo] = useState([]);
  //& "GET" operation
  const getData = async () => {
    let error = null;
    let response = await axios
      .get(`http://localhost:3001/task/${userid}`)
      .then((res) => {
        console.log("res.data:", res.data);
        setDisplayTodo(res.data);
        // console.log("displayTodo:", displayTodo);
      })
      .catch((err) => {
        console.log("err:", err);
        error = err.response.data.message;
      });

    if (error) {
      console.log("error:", error);
    }
  };

  //& Storing input
  const [todo, setTodo] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  //& "POST" operation on input
  const handleSubmit = async (event) => {
    event.preventDefault();

    let error = null;
    let response = await axios
      .post(`http://localhost:3001/task/${userid}`, todo)
      .catch((err) => {
        console.log("err:", err);
        error = err.response.data.message;
      });

    if (response) {
      console.log("POST response:", response.data);
    }
    if (error) {
      console.log("error:", error);
    }

    getData();
  };

  return (
    <div id="todoV2">
      <form id="todoV2Form" onSubmit={handleSubmit}>
        <input
          className="todoV2FormInput"
          type="text"
          name="title"
          placeholder="Enter Todo"
          required
          onChange={handleChange}
        />

        <button className="todoV2FormButton" type="submit">
          Add
        </button>
      </form>

      {displayTodo && (
        <DisplayTodoV2 displayTodo={displayTodo} getData={getData} />
      )}
    </div>
  );
};

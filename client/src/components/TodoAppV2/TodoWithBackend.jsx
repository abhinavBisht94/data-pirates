import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../CSS/todoV2/todoWithBackend.css";
import { DisplayTodoV2 } from "./DisplayTodoV2";
import { Button, Box, Center } from "@chakra-ui/react";

export const TodoWithBackend = () => {
  let userid = localStorage.getItem("userid") || "";

  useEffect(() => {
    getData();
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const [displayTodo, setDisplayTodo] = useState([]);
  //& "GET" operation
  const getData = async () => {
    let error = null;
    let response = await axios
      .get(`https://data-pirates-july.herokuapp.com/task/${userid}`)
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
      .post(`https://data-pirates-july.herokuapp.com/task/${userid}`, todo)
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
        <Center height={'50px'} width={'800px'}>
        <input
          className="todo-input"
          type="text"
          name="title"
          ref={inputRef}
          placeholder="Enter Todo"
          required
          onChange={handleChange}
          style={{fontSize:'1.1rem'}}
        />

        <button style={{borderRadius:'10%',marginLeft:'30px'}}  className="todo-button" type="submit">
          Add
        </button>
        </Center>
      </form>

      {displayTodo && (
        <DisplayTodoV2 displayTodo={displayTodo} getData={getData} />
      )}
    </div>
  );
};

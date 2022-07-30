import { useState, useEffect } from "react";
import axios from "axios";

import "../../CSS/todoV2/displayTodoV2.css";

export const DisplayTodoV2 = ({ displayTodo, getData }) => {
  let userid = localStorage.getItem("userid") || "";

  useEffect(() => {
    // console.log("displayTodo");
  }, [displayTodo]);

  const [editid, setEditid] = useState(null);
  const [editText, setEditText] = useState("");

  const taskEdit = async (taskid, text) => {
    setEditid(taskid);
    setEditText(text);

    // setEditid(null);
  };

  const taskDelete = async (taskid) => {
    let error = null;
    let response = await axios
      .delete(`http://localhost:8080/task/${userid}/${taskid}`)
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

  const handleChange = (e) => {
    console.log("e:", e.key);

    if (e.key !== "Backspace") {
      setEditText(editText + e.key);
    }
    if (e.key === "Backspace") {
      let temp = editText.split("");
      temp.pop();
      setEditText(temp.join(""));
    }
  };

  const handleEditDone = async () => {
    let send = { title: editText, userid: [userid] };

    let error = null;
    let response = await axios
      .patch(`http://localhost:8080/task/${userid}/${editid}`, send)
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

    setEditid(null);
    getData();
  };

  const temp = (event) => {
    setEditText(event.target.value);
  };

  return (
    <div id="displayTodoV2">
      {displayTodo.map((task) => {
        return (
          <div className="todoV2Div" key={task._id}>
            <div className="todoV2DivFalse">
              <p>{task.title}</p>
              <button
                style={{ backgroundColor: "goldenrod" }}
                onClick={() => {
                  taskEdit(task._id, task.title);
                }}
              >
                Edit
              </button>
              <button
                style={{ backgroundColor: "maroon" }}
                onClick={() => {
                  taskDelete(task._id);
                }}
              >
                Delete
              </button>
            </div>

            {/* {editid===task._id} */}

            <div
              className="todoV2DivTrue"
              style={editid === task._id ? {} : { display: "none" }}
            >
              {/* onKeyDown={handleChange} */}
              <input
                type="text"
                value={editText}
                onChange={(e) => {
                  temp(e);
                }}
              />

              <button
                style={{ backgroundColor: "darkgreen" }}
                onClick={handleEditDone}
              >
                Done
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

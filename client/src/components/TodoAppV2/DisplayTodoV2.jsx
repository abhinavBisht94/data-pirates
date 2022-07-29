import { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'
import { Box, Icon, Input, Text } from '@chakra-ui/react';
import {FaLongArrowAltRight} from 'react-icons/fa'
import { TiDelete} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import '../../CSS/App.css'


import "../../CSS/todoV2/displayTodoV2.css";

export const DisplayTodoV2 = ({ displayTodo, getData }) => {
  let userid = localStorage.getItem("userid") || "";

  const nav = useNavigate()

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

  function handleCurrent(task){
    // console.log("task",task)
    localStorage.setItem("currentObj",JSON.stringify(task))
    nav('/timer')
  }

  return (
    <div id="displayTodoV2">
      {displayTodo.map((task) => {
        return (
          <div className="todoV2Div"   key={task._id}>
            <Box bg='#f5dd90' mb='15px' borderRadius={'md'} p='10px 12px' maxW={'900px'} display={"flex"} justifyContent='space-between'>
              <Text fontSize={'1.1rem'}>{task.title}</Text>
              <Box>
                <Icon color={'blue.800'} mr='12px' fontSize={'1.35rem'} cursor='pointer'  onClick={() => {
                  taskEdit(task._id, task.title);
                }} as={TiEdit} />
             
             
              <Icon color={'red.600'} mr='12px' cursor={'pointer'} onClick={() => {
                  taskDelete(task._id);
                }} fontSize={'1.35rem'} as={TiDelete} />

                <Icon onClick={()=> handleCurrent(task)} cursor={'pointer'} as={FaLongArrowAltRight} />

                </Box>
            </Box>

            {/* {editid===task._id} */}

            <div
              className="todoV2DivTrue"
              style={editid === task._id ? {} : { display: "none" }}
            >
              {/* onKeyDown={handleChange} */}
              <Box>
              <Input
                style={{width:'300px'}}
                type="text"
                value={editText}
                onChange={(e) => {
                  temp(e);
                }}
              />

              <button
                style={{ backgroundColor: "green",borderRadius:'15px',marginLeft:'25px' }}
                onClick={handleEditDone}
              >
                Done
              </button>
              </Box>
            </div>
          </div>
        );
      })}
    </div>
  );
};

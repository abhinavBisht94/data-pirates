//---------------------------------------
//
const { Router } = require("express");
const createError = require("http-errors");

const UserSchema = require("../models/UserModel");
const TaskModel = require("../models/TaskModel");

const taskrouter = Router();

//---------------------------------------
//* CRUD Operations
taskrouter.post("/:userid", async (req, res) => {
  const { userid } = req.params;
  //   console.log("userid:", userid);

  //! "POST" the received task
  let receivedTask = req.body;
  receivedTask.userid = userid;
  //   console.log("receivedTask:", receivedTask);

  const sendTask = await new TaskModel(receivedTask);
  sendTask.save((err, success) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    }
    // console.log("success:", success);
    return res.status(201).send({ message: "Todo/task saved" });
  });
});

taskrouter.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  console.log("userid:", userid);

  //! "GET" all task based on userid

  let searchResult = await TaskModel.find({
    userid: { $regex: userid },
  });
  console.log("searchResult:", [...searchResult]);

  return res.status(201).send(searchResult);
});

taskrouter.patch("/:userid/:taskid", async (req, res) => {
  const { userid, taskid } = req.params;

  //! "DELETE" that particular task
  let deletedTask = await TaskModel.deleteOne({ _id: [taskid] });
  console.log("deletedTask:", deletedTask);

  //! "POST" the modified task
  let receivedTask = req.body;
  receivedTask.userid = userid;
  console.log("receivedTask:", receivedTask);

  const sendTask = await new TaskModel(receivedTask);
  let error = null;
  sendTask.save((err, success) => {
    if (err) {
      error = err;
      res.status(500).send({ message: "Error occurred" });
    }
    // console.log("success:", success);
    // return res.status(201).send({ message: "Task saved" });
  });

  const resultDisplay = async () => {
    //! "GET" all task based on userid
    let searchResult = await TaskModel.find({ id: [userid] });
    //   console.log("searchResult:", searchResult);
    return res.status(201).send(searchResult);
  };

  if (!error) {
    resultDisplay();
  }
});

taskrouter.delete("/:userid/:taskid", async (req, res) => {
  const { userid, taskid } = req.params;

  //! "DELETE" that particular task
  let deletedTask = await TaskModel.deleteOne({ _id: [taskid] });
  console.log("deletedTask:", deletedTask);

  //! "GET" all task based on userid
  let searchResult = await TaskModel.find({ id: [userid] });
  //   console.log("searchResult:", searchResult);
  return res.status(201).send(searchResult);
});
//---------------------------------------
// Export
module.exports = taskrouter;

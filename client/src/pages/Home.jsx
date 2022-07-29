import React from "react";
import Hero from "../components/Hero";
import TodoList from "../components/TodoApp/TodoList";
import { TodoWithBackend } from "../components/TodoAppV2/TodoWithBackend";
import { Login } from "./Login";

const Home = () => {
  return (
    <div>
        <Hero text1="This is just a day" text2="Make it your day" />
        {/* <TodoList /> */}
        {/* <Login /> */}
       <TodoWithBackend />
    </div>
  )
}

      
  
 


export default Home;

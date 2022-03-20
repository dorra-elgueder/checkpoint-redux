import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Tasklist = () => {
  const tasks = useSelector((store) => store.taskreducer.Tasklist);
  return (
    <div>
      {tasks.map((el) => (
        <div>
          <span>{el.text}</span>
          <button>delete</button>
        </div>
      ))}
    </div>
  );
};
export default Tasklist;

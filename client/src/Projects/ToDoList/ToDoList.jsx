import React, { createRef, useState } from "react";
import ToDoAppFeatures from "./Component/ToDoAppFeatures";
import ToDoStorage from "./Service/ToDoStorage";

const ListAppWithStorage = ToDoStorage(ToDoAppFeatures);

const ToDoList = () => {

    const inputBox = createRef();
    const [task, setTask] = useState("");

    return (
        <div className="main">
            <input
                type="text"
                ref={inputBox}
                placeholder="Type and press enter..."
                onKeyUp={e => {
                    if (e.keyCode === 13) {
                        setTask(e.target.value);
                        inputBox.current.value = "";
                    }
                }}
            />
            <ListAppWithStorage task={task}>
                {({ list, remove }) => (
                    <div className="list-app">
                        {list.length > 0
                            ? list.map(({ id, task }) => (
                                <div className="list-item" key={id}>
                                    <span>{task}</span>
                                    <button onClick={() => remove(id)}>X</button>
                                </div>
                            ))
                            : null}
                    </div>
                )}
            </ListAppWithStorage>
        </div>
    );
};

export default ToDoList;

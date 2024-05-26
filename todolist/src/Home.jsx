import React, { useState } from "react";
import Create from "./Create";

function Home() {
    const[todos, setTodos] = useState([]);
    return (
        <element class="home">
        <div>
            <h2>Todo List</h2>
            <Create />{

                todos.length===0
                ?
                <div><h2>No Records</h2></div>
                :
                todos.map(todo => (
                    <div>{todo}</div>
                ))
            }
        </div>
        </element>
    );
}

export default Home;
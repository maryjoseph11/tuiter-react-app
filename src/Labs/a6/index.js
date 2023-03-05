import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-item.js";
import ConditionalOutput from "./conditional-output";

function Assignment6() {
    return(
    <div>
        <Link to="/">Lab</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter/*">Tuiter</Link>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>

        <TodoList/>
    </div>
    );
}

export default Assignment6;
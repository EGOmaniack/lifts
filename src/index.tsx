import * as React from "react";
import * as ReactDOM from "react-dom";
import {Checkbox} from "./components/checkbox";
import { Hello } from "./components/Hello";


ReactDOM.render(
    <div>
        <Checkbox name="checkbox text"/>
        <Hello programmer1="Pasha" programmer2="Vadim"/>
        <Hello programmer1="Andrey" programmer2="Alexandr" />      
    </div>,
    document.getElementById("example")
);
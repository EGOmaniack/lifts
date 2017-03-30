import * as React from "react";
import * as ReactDOM from "react-dom";
//import {Checkbox} from "./components/checkbox";
import { Hello } from "./components/Hello";
import {Checkboxq} from "./components/checkboxq";
import {Checkbox, Newcheckbox} from "ui_mediapult";

ReactDOM.render(
    <div>
        <Checkboxq name="checkbox first"/>
        <Checkbox name="checkbox second2"/>
        <Newcheckbox name="checkbox tree"/>
        <Hello programmer1="Pasha" programmer2="Vadim"/>
        <Hello programmer1="Andrey" programmer2="Alexandr" />      
    </div>,
    document.getElementById("example")
);
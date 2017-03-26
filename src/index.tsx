import * as React from "react";
import * as ReactDOM from "react-dom";
import {checkbox} from "ui_mediapult";
import { Hello } from "./components/Hello";


ReactDOM.render(
    <div>
        <checkbox name="Name of checkbox!"/>
        <Hello programmer1="Pasha" programmer2="Vadim"/>
        <Hello programmer1="Andrey" programmer2="Alexandr" />
    </div>,
    document.getElementById("example")
);
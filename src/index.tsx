import * as React from "react";
import * as ReactDOM from "react-dom";
//import {Checkbox} from "./components/checkbox";
import { Hello } from "./components/Hello";
import {Checkbox, Newcheckbox, Addr_button} from "./components/ui_mediapult";
import * as txt from './constants/liftPackages';
//test comment



ReactDOM.render(
    <div>
        <Checkbox name="checkbox second2"/>
        <Newcheckbox name="checkbox tree"/>
        <Hello programmer1="Pasha" programmer2="Vadim"/>
        <Hello programmer1="Andrey" programmer2="Alexandr" />
        <Addr_button type = "address" value={txt.addr} active />      
    </div>,
    document.getElementById("example")
);
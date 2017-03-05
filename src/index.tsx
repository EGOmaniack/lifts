import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello programmer1="Andrey" programmer2="Alexandr" />,
    document.getElementById("example")
);
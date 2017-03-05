import * as React from 'react';
import * as DOM from 'react-dom';
import './style.css'; // так заработало
//const Style = require("./style.css"); // и так заработало 

export class Checkbox extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <div className="checkbox">
            <input id="check1" type="checkbox" name="check" value="check1"/>
            <label htmlFor="check1">Тест 1</label>
            <br/>
            <input id="check2" type="checkbox" name="check" value="check2"/>
            <label htmlFor="check2">Тест 2</label>
            </div>;
    }
}
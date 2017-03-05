import * as React from 'react';
import * as DOM from 'react-dom';
// import './index.css';
// const Style = require<any>("./index.css");

export class Checkbox extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <input type="checkbox" className="checkbox"/>;
    }
}
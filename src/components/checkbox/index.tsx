import * as React from 'react';
import * as DOM from 'react-dom';
// import './index.css';
// const Style = require<any>("./index.css");
import styled from 'styled-components';

const Outer = styled.div`
   width: fit-content;

   >.checklabel{
       color:green;
   }
   
`

export class Checkbox extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <Outer>
                    <input id="check1" type="checkbox" className="checkbox"/>
                    <label className="checklabel" htmlFor="check1" >{this.props.name}</label>
                </Outer>;
    }
}
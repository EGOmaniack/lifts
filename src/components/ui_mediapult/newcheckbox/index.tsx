import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';

const Outer = styled.div`
   width: fit-content;

   >label {
       color: green;
   }
`

const Check = styled.input`
   color: green;
   background: black;
`

export class Newcheckbox extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <Outer>
                    <input id="check1" type="checkbox" className="checkbox"/>
                    <label htmlFor="check1" >{this.props.name}</label>
                </Outer>;
    }
}
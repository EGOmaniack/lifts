import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';

const Outer = styled.div`
   width: fit-content;

`

const BtnBody = styled.div`
    height: 11px;
    width: 8px;
    color: green;
    background: palevioletred url("img/pointer_inv.png") ;
`

export class Addr_button extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <Outer>
                    <BtnBody className="wrap"></BtnBody>
                </Outer>;
    }
}

//<input id="check1" type="checkbox" className="checkbox"/>
//<label htmlFor="check1" >{this.props.name}</label>
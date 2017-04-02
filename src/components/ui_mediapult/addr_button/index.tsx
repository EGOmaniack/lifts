import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
//import { Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';

const Outer = styled.div`
   width: fit-content;
`

const Content = styled.div`
    line-height: 36px;
    vertical-align: middle;
`
const Text = styled.div`
    margin-left: 15px;
    line-height: 36px;
    display: inline-block;
`
const Icon = styled.div`
    margin-left: 10px;
    display: inline-block;
    height: 11px;
    width: 8px;
    background: palevioletred url(img/pointer_inv.png) ;
`
const BtnBody = styled.div`
    line-height: 36px;
    height: 36px;
    width: 100px;
    border: 1px solid #2ea2f8;
    border-radius: 3px;
    color: #2ea2f8;
`

export class Addr_button extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    render() {
        return <Outer>
                    <BtnBody>
                        <Content>
                        <Icon></Icon>
                        <Text>{this.props.value}</Text>
                        </Content>
                    </BtnBody>
                </Outer>;
    }
}

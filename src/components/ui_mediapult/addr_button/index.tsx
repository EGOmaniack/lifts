import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
//import { Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';
const activeColor = '#2ea2f8';
const notActiveColor = '#ced0da';
const orangeColor = '#ff7800';

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
`
const BtnBody = styled.div`
    padding-right: 12px;
    line-height: 36px;
    height: 36px;
    border: 1px solid ${notActiveColor};
    color: ${notActiveColor};
    ${ props => props.active && "border: 1px solid " + activeColor}
    ${ props => props.active && "color: " + activeColor }
    border-radius: 3px;
    
`
const OtherBtnBody = styled.div`
padding-right: 12px;
    line-height: 36px;
    height: 36px;
    background-color: ${orangeColor};
    color: white;
    ${ props => props.selected && " border: 1px solid " + orangeColor + ";"}
    ${ props => props.selected && " background-color: none;"}
    ${ props => props.selected && " color: " + orangeColor + ";" }
    border-radius: 3px;
`
const Plus = styled.div`

    > span {
        width: 5px;
        height: 2px;
        background: white;
    }
`

export class Addr_button extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }
    
        render() {
        if(this.props.type == "address"){
            return <Outer>
                        <BtnBody active={this.props.active}>
                            <Content>
                            <Icon><img src="pointer_inv.png"></img></Icon>
                            <Text>{this.props.value}</Text>
                            </Content>
                        </BtnBody>
                    </Outer>;
        } else if(this.props.type == "inbucket"){
            return <Outer>
                        <OtherBtnBody selected={this.props.selected}>
                            <Content>
                            <Plus>
                                <span></span>
                                <span></span>
                            </Plus>
                            <Text>{this.props.value}</Text>
                            </Content>
                        </OtherBtnBody>
                    </Outer>;
        }
        
    } 
}

import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
//import { Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';
const activeColor = '#2ea2f8';
const notActiveColor = '#ced0da';


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
// добавим немного магии
interface DivProps { active?: boolean; }
const Btn:React.StatelessComponent<DivProps> = ({children, ...props}) => <div {...props}>{children}</div>
// хоп и все заработало)))
const BtnBody = styled(Btn)`
    padding-right: 12px;
    line-height: 36px;
    height: 36px;
    border: 1px solid ${(props) => props.active ? activeColor : notActiveColor };
    color: ${(props) => props.active ? activeColor : notActiveColor };   
    border-radius: 3px;    
`

//упростил, через классы избыточно много кода
export const Addr_button = (props:any)=>{
   return <Outer>
                    <BtnBody {...props}>
                        <Content>
                        <Icon><img src="pointer_inv.png"></img></Icon>
                        <Text>{props.value}</Text>
                        </Content>
                    </BtnBody>
                </Outer>;
}


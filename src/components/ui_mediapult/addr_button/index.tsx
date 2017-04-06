import * as React from 'react';
import * as DOM from 'react-dom';
import styled from 'styled-components';
const ActiveColor = '#2ea2f8';
const DisableColor = '#ced0da';

const image = require('../addr_button/img/pointer_inv.png');

interface DivProps { active?: boolean; }

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
    background: url(${image}) center center;
    background-color: ${(props:DivProps) => props.active ? ActiveColor : DisableColor }; 
`

const BtnBody = styled.div`
    width: fit-content;
    margin-top: 10px;
    padding-right: 12px;
    line-height: 36px;
    height: 36px;
    border: 1px solid ${(props:DivProps) => props.active ? ActiveColor : DisableColor };
    color: ${(props:DivProps) => props.active ? ActiveColor : DisableColor };   
    border-radius: 3px;    
`

export const Addr_button = (props:any)=>{
   return  <BtnBody {...props}>
                        <Content>
                        <Icon {...props}></Icon>
                        <Text>{props.value}</Text>
                        </Content>
                    </BtnBody>;
}

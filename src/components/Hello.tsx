import * as React from "react";
import { connect } from "react-redux";
import {Checkbox, Newcheckbox, Addr_button} from "../components/ui_mediapult";
import * as txt from '../constants/liftPackages';

export interface HelloProps { programmer1: string; programmer2: string; }

const Hello = (props:any) => {
    return <div>
            <Checkbox name="checkbox second2"/>
            <Newcheckbox name="checkbox tree"/>
            <p>view: {props.views}</p>
            <h1>Hello from {props.programmer1} and {props.programmer2}!</h1>
            <h1>Hello from {props.programmer1} and {props.programmer2}!</h1>
            <Addr_button onClick={props.plus1} type = "address" value={txt.addr} active />
            <Addr_button onClick={props.minus1} type = "inbucket" value={txt.inbucket} selected />
            <Addr_button type = "inbucket" value={txt.inbucket} />
        </div>;
}
const mapStateToProps = (state:any) => ({
    views: state.views
});

const mapDispatchToProps = (dispatch:any) => ({
    plus1 : () => dispatch({type:"PLUS"}),
    minus1 : () => dispatch({type:"MINUS"})
});
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
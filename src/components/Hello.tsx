import * as React from "react";

export interface HelloProps { programmer1: string; programmer2: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello from {this.props.programmer1} and {this.props.programmer2}!</h1>;
    }
}
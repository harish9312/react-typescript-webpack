import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloProps {
    name: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

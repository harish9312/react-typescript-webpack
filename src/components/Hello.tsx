import { get } from '../utils/HTTP';
import { store } from '../store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloProps {
    name: string;
}

export class Hello extends React.Component<IHelloProps, {}> {

    getReq() {
        get('http://services.groupkt.com/country/get/all').then(
            (response: { data: { RestResponse: { result: string[] } } }) => {
               let respData =  response.data.RestResponse.result;
               console.log('>> respData', respData);
            }
        )
    }

    render() {
        console.log(store.getState());
        return (
            <div>
                {this.getReq()}
                Hello {this.props.name}
            </div>
        );
    }
}

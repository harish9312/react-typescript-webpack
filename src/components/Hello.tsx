import { get } from '../utils/HTTP';
import { store } from '../store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloProps {
    name: string;
}

interface IResponse {
    name: string;
    alpha2_code: string;
    alpha3_code: string;
}
export interface IHelloState {
    responseData: IResponse[];
}

export class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor() {
        super();
        this.state = { responseData: null };
    }

    getReq = async () => {
        const response: any = await get('http://services.groupkt.com/country/get/all');
        const results = response.data.RestResponse.result;
        this.setState({
            responseData: results
        });
    }

    renderList = () => {

        if (!this.state.responseData) {
            return;
        }
        return this.state.responseData.map((data, index) => {
            return <div key={index}>
                <h4 key={index + 1} >{data.name} &nbsp; {data.alpha2_code} &nbsp;{data.alpha3_code}</h4>
            </div>;
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
                Hello {this.props.name}
                <button onClick={this.getReq}>Get The List</button>
            </div>
        );
    }
}

import * as React from 'react';
import { Link } from 'react-router-dom'
interface IBasePageProps {
}

export class BasePage extends React.Component<IBasePageProps, {}> {

    render() {
        return (
            <div>
                <h2>Base Page</h2>
            </div>
        )
    }
}
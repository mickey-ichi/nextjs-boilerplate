import React from 'react';
import NotFound from '../app/components/errors/NotFound';
import ServerError from '../app/components/errors/ServerError';

export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode}
    }

    render() {
        return (
            <div className='container'>
                {this.props.statusCode === 404 ? <NotFound/> : null}
                {this.props.statusCode === 500 ? <ServerError/> : null}
            </div>
        )
    }
}

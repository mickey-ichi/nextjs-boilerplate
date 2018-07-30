import React from 'react';
import defaultPage from '../hocs/defaultPage';

class Login extends React.Component {
    static async getInitialProps(ctx) {
    }

    render() {
        return <div>
            Login
        </div>
    }
}

export default defaultPage(['common', 'login',])(Login);

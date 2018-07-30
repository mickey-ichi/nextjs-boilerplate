import React from 'react'
import Cookies from '../services/Cookies'
import 'semantic-ui-css/semantic.min.css'
import {withI18next} from "./_withI18next";

const pageHoc = Page => class DefaultPage extends React.Component {
    static async getInitialProps(ctx) {
        let token = Cookies.get('token', ctx.req);
        // ctx.store.dispatch(loginWithToken(token));
        const pageProps = await (Page.getInitialProps && Page.getInitialProps(ctx));
        return {
            ...pageProps,
            isAuthenticated: !!token,
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Page {...this.props} />
        )
    }
};

export default (namespaces) => (page) => (withI18next(namespaces)(pageHoc(page)));

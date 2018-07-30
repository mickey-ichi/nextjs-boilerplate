import React, { PropTypes } from 'react'

import defaultPage from './defaultPage';

const securePageHoc = Page => class SecurePage extends React.Component {
    static async getInitialProps (ctx) {
        return await Page.getInitialProps && Page.getInitialProps(ctx)
    }

    render () {
        if (!this.props.isAuthenticated) {
            return <div>
                Not Authorized
            </div>
        }
        return <Page {...this.props} />
    }
};

export default Page => defaultPage(securePageHoc(Page))

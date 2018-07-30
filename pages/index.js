import React from 'react';
import defaultPage from '../hocs/defaultPage';
import Link from 'next/link';


import HomeContainer from '../app/containers/Home';

class Index extends React.Component {
    static async getInitialProps(ctx) {
    }

    onClick = () => {
        this.props.i18n.changeLanguage('de');
    };

    render() {
        const {t} = this.props;

        return <div>
            <h3>{t('home:welcome')}</h3>
            <button onClick={this.onClick}>translate</button>
            <Link href='/login'>
                <a>{t('home:link.gotoPage2')}</a>
            </Link>
            <HomeContainer />
        </div>
    }
}

export default defaultPage(['common', 'home'])(Index);

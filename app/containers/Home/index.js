import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {makeSelectImages} from "./selectors";

class Home extends React.Component {
    render() {
        const {images} = this.props;
        return <div>
            {images.map((item, index) => {
                return <div key={index}>
                    hunglm
                </div>
            })}
        </div>
    }
}

Home.propTypes = {
    images: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
    images: makeSelectImages(),
});

const mapDispatchToProps = dispatch => ({});

const Connector = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Connector;


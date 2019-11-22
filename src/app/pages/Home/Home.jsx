import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {createPropsSelector} from 'reselect-immutable-helpers'

import * as actions from './actions'
import {getBackgroundImage} from './selectors'

import PrincipalContent from '../../components/PrincipalContent/PrincipalContent';
import ChatView from '../../components/ChatView/ChatView';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.pageType = 'home'
    }

    componentDidMount() {
        const {initializeHome} = this.props
        initializeHome()
    }

    render() {
        return (
            <div className="Home">
                <div className="c-background"></div>
                <ChatView />
                <PrincipalContent />
            </div>
        )
    }
}

Home.propTypes = {
    backgroundImage: PropTypes.string,
    initializeHome: PropTypes.func
}

const mapStateToProps = createPropsSelector({
    backgroundImage: getBackgroundImage
})

const mapDispatchToProps = {
    initializeHome: actions.initializeHome
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import {postEvent} from "../actions";

class EventsNew extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Cancel</Link>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = null; // ({postEvent});

export default connect(null, mapDispatchToProps)(EventsNew)
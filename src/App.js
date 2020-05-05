import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
    const profiles = [
        {name: 'Taro', age: 10},
        {name: 'Hanako', age: 20},
        {name: 'NoName',},
    ];
    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
        </div>
    )
};

const User = (props) => {
        return <div>Hi! I am {props.name}!! and {props.age} year old! </div>
    }
;

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

User.defaultProps = {
    age: 1
}

export default App;

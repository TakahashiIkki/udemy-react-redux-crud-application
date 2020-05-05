import React, {Component} from 'react';
import './App.css';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onClick={() => {console.log("I am clicked.")}} />
//             </React.Fragment>
//         );
//     }
// }

const App = () => {
    return (
        <div>
            Hi const
            <Cat/>
            <Cat/>
        </div>
    )
};

const Cat = () => {
        return <div>にゃーん</div>
    }
;
export default App;

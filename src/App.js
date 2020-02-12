import React, {Component} from 'react';
import './App.css';
import config from "./firebase"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        }
    }
    componentWillMount() {
        let demo = config.database().ref('test').orderByKey().limitToLast(100);
        demo.on('child_added', snapshot => {
            let message = {text: snapshot.val(), id: snapshot.key};
            this.setState({test: [message].concat(this.state.test)})
        })
    }

    addMessage(e) {
        e.preventDefault();
        config.database().ref('test').push(this.inputEl.value);
        this.inputEl.value = '';
    }

    render() {
        return (
            <form onSubmit={this.addMessage.bind(this)}>
                <input type="text" ref={ el => this.inputEl = el }/>
                <input type="submit"/>
                <ul>
                    {
                        this.state.test.map( message => <li key={message.id}>{message.text}</li> )
                    }
                </ul>
            </form>
        )
    }
}

export default App;

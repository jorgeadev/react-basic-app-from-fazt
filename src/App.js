import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Navigation from "./components/Navigations";
import TasksForm from "./components/TasksForm";

/*function App() {
    return (
        <div className="App">
            <nav>

            </nav>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}*/

class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <TasksForm/>
                <Navigation title={"Tasks"}/>
            </div>

        );
    }
}

export default App;

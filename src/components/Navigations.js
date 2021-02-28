import React, { Component } from 'react';
import { todos } from '../todos.json';


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            todos
        }
    }
    render() {
        const todos = this.state.todos.map((todo, index) => {
            return (
                <div className={"col-md-4"}>
                    <div className={"card mt-4"}>
                        <div className={"card-header"}>
                            <h3>{ todo.title }</h3>
                            <span className={"badge rounded-pill bg-danger mx-2"}>
                                {todo.priority}
                            </span>
                        </div>
                        <div className={"card-body"}>
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={"container"}>
                <nav className={"navbar navbar-dark bg-dark"}>
                    <a href="" className={""}>
                        { this.props.title }
                        <span className={"badge rounded-pill bg-light text-dark mx-2"}>
                            { this.state.todos.length}
                        </span>
                        {/*{ this.state.title } - { this.state.nTasks }*/}
                    </a>
                </nav>
                <div className="container">
                    <div className="row mt-4">
                        {todos}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;

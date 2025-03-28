import { Component } from "react";

class ClassComponentExample extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Example of Class Component</h3>
                <h3>Course Name : {this.props.course}</h3>
            </div>
        )
    }
}

export default ClassComponentExample;
import { Component } from "react";

class MountingPhase extends Component {
    constructor() {
        super();
        // console.log("Constructor Method Executed");
    }

    state = {
        productName: "ASUS Vivobook",
        price: "40000",
        
        userData: []
    }

    getData = async () => {
        try {
            let data = await fetch(`https://fakestoreapi.com/users`);
            let res = await data.json();
            console.log(res);
            this.setState({ userData: res })
        } catch (error) {
            console.log(error);
        }
    }
    static getDerivedStateFromProps() {
        // console.log("getDriveStateFromProps Called");
        return null;
    }
    componentDidMount() {
        // console.log("componentDidMount executed");
        this.getData();
    }
    render() {
        // console.log("Running render Method");

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <table className="table table-striped text-center mt-4">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userData.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name.firstname} {user.name.lastname}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default MountingPhase


/*
Mounting phase=> When an instence of an component is created and it is instered into DOM node.
In mounting phase we have 4 methods/steps 
-> constructor
-> static getDerivedStateFromProps
-> render
-> componentDidMount


=> In static getDerivedStateFromProps method we will recive state from parent component.
=> In static getDerivedStateFromProps method we must always define one state.
=> In static getDerivedStateFromPro method we should return some object else return null.
*/
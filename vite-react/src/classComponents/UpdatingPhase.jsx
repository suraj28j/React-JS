import React, { Component } from 'react'
import { appId } from '../key'
class UpdatingPhase extends Component {
  state = {
    userData: [],
    pageNumber: 1
  }
  getData = async () => {
    try {
      const data = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, {
        method: "GET",
        headers: {
          "app-id": appId
        }
      })
      const res = await data.json();
      // console.log(res.data);
      this.setState({ userData: res.data });

    } catch (error) {
      console.log("Error : ", error);
    }
  }

  buttonHandler = (num) => {
    this.setState({ pageNumber: num });
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber)
      this.getData();
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className='conatiner'>
        {
          this.state.userData.length > 0 ? (
            <div className='row g-2 m-4 text-center'>
              {
                this.state.userData.map((user) => (
                  <div className='col-md-5 me-2 border' key={user.id}>
                    <div className='row p-1'>
                      <div className='col-3'>
                        <img src={user.picture} alt='' />
                      </div>
                      <div className='col-9'>
                        <h4>{user.id}</h4>
                        <p>{user.title} {user.firstName} {user.lastName}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className='col-10'>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button className='btn btn-info ms-2' onClick={() => this.buttonHandler(num)} key={num}>{num}</button>
                  ))
                }
              </div>
            </div>
          ) : (<div>Loading....</div>)
        }
      </div>
    )
  }
}

export default UpdatingPhase

/*
    => static getDerivedStateFromProps
    => shouldComponentUpdate
    => render
    => getSnapShotBeforeUpdate
    => componentDidUpdate  // 3 parameters ( previousProp, previousState, getSnapShotBeforeUpdate )

*/

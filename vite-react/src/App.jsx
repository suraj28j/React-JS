import Header from './Header/Header';
import Router from './Routing/Router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  // const username = "Suraj";
  // [ {username} => evaluation expression mean final outcome ]

  return (
    <div>
      {/* <h2>React Vite {username}</h2> */}
      {/*{username} = JavaScript final outcome that evaluate  */}
      <Header/>
      <Router/>
  
    </div>
  )
}

export default App


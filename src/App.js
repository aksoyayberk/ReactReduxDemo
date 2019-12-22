import React from 'react';
import FirstComponent from "./components/FirstComponent";
import AddBro from "./components/AddBro";
import NavBar from "./components/NavBar";
import About from "./components/About";
import BroInfo from "./components/BroInfo";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';
import {connect} from "react-redux";

class App extends React.Component {
  state = {
    bros: []
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => this.setState({
      bros: res.data.slice(0, 10)}))
    .then(() => this.props.initBros(this.state.bros));
  }

  // addBro = (bro) => {
  //   bro.id = Math.random()*10;
  //   this.setState({
  //     bros: [...this.state.bros, bro]
  //   })
  // }

  // deleteBro = (id) => {
  //   this.setState({
  //     bros: [...this.state.bros.filter(bro => bro.id !== id)]
  //   })
  // }

  render(){
    return (
      <BrowserRouter>
        <div className="App container"> 
          <NavBar />
          <Switch>
            <Route 
              exact path="/" 
              render={(props) => 
                <div>
                  <h1 className="center blue-text">Pick Your Bro!</h1>
                  <AddBro {...props} addBro={this.props.addBro}/>
                  <FirstComponent {...props} bros={this.props.bros} deleteBro={this.props.deleteBro}/>
                </div>
              }
            />
            <Route
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route 
              path="/:bro_id"
              render={(props) => 
                <BroInfo {...props} bros={this.state.bros} broID={props.match.params.bro_id}/>
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    bros: state.bros 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBro: (id) => {dispatch({type: "DELETE_BRO", id: id})},
    addBro: (bro) => {dispatch({type: "ADD_BRO", bro: bro })},
    initBros: (bros) => {dispatch({type: "INIT_BROS", bros: bros})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

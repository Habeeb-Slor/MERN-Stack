import { Component } from 'react'
class ClassBased extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = { 
    myNumber : 10,
   }
  increase = ()=>{
      this.setState({myNumber : this.state.myNumber+1})
  }
  render() { 
    return ( 
      <>
        <h1>This is Class Based</h1>
        <h1>{this.state.myNumber}</h1>
        <button onClick={this.increase}>increase</button>
      </>
     );
  }
}
 
export default ClassBased;
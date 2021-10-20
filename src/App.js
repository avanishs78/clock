import React,{Component} from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      Date : new Date()
    }
  }
  /*componentDidMount(
    timerId = setInterval(()=>this.tick(),1000)
  )
  componentWillUnmount(
    clearInterval(this.timerId);
  )
  tick(){
    this.setState({
      Date : new Date()
    });
  }*/
  render(){
    setTimeout(()=>{this.setState({Date:new Date()})},1000)
    return(
      <div className='box'>
        <div style={{fontSize:'80px',margin:'10px'}}>Clock</div>
        
        <div className='time'>Time :{this.state.Date.toLocaleTimeString()}</div>
      </div>
    )
  }
}
export default Clock;
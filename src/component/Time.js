import React, {Component} from 'react'

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >= 1 && curDate <12){
  greeting = "Good Morning";
  cssStyle.color = 'Green';
}else if(curDate >=12 && curDate <19){
  greeting = "Good Afternoon";
  cssStyle.color = 'Orange';
}else{
  greeting = "Good Night";
  cssStyle.color = 'black';
}
const clock = setInterval(clocking, 1000);
function clocking() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
}
const time = {
    fontSize: '12px',
    right: '73px',
    top: '-20px'
}
class Time extends Component {
    render(){
        return(
            <h5 style={{fontWeight: 'bold'}}>Hello Sir, <span style={cssStyle}>{greeting}</span><sup id="time" style={time}></sup></h5>
        )
    }
}

export default Time
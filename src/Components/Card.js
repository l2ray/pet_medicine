import React,{ Component } from 'react';

class  Card extends Component {
  constructor(props){
    super(props);
   
  }
/*
{pName: "lamin", pOwner: "Touray", 
appData: "20.10.2021", time: "10:10 PM", 
appNote: "This is a Simple NOte to be verified ..."}
*/
  render(){
    return (
      <div >
      <div class="card">
      <div className="card-header d-flex justify-content-between">

  <h5 class="card-headers">{this.props.data.pName}</h5>
  <span class="card-headers">sdfs</span>
      </div>
  <div class="card-body">
    <h5 class="card-title">Owner: <u>{this.props.data.pOwner}</u></h5>
    <p class="card-text">{this.props.data.appNote}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
&nbsp;
      </div>
      
    );
  }
  
}

export default Card;




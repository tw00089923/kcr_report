import React from 'react';
import { loadingRate } from '../../actions/rate';
import { connect } from 'react-redux';
import xlsx  from 'xlsx';
import fs from 'fs';


export class rate_index extends React.Component {


constructor(props) {
    super(props);
    this.state={
      readfile:""

    };
    this.readxlsx = this.readxlsx.bind(this);
    
  }
readxlsx(e){
  // e.stopPropagation();
  // e.preventDefault();
const files = e.target.files[0];
const reader = new FileReader();
const f = [];
  reader.onload = function(e) {
      var data = e.target.result;

      var workbook = xlsx.read(data, {type: 'binary'});

      /* DO SOMETHING WITH workbook HERE */
    };
    reader.readAsText(files,()=>{

      this.setState({readfile:files.name});
    });

      // reader.readAsText(workbook);
// console.log(workbook);
// this.setState({readfile:files.name});
  // if(e){

    // const xlsx1 = xlsx.readFile('test.xlsx');

      // const reader = new FileReader();
      // reader.onload = function(e) {
      // const data = e.target.result;
      // console.log("ok");
      // console.log(data);
      //   }
     // const workbook = xlsx.read(data, {type: 'binary'});
     //  this.setState({readfile:'OK'});
     //    //DO SOMETHING WITH workbook HERE 
     //  console.log("seccuess");
     //                              };

  // }else{
  //   console.log("error");
  // }
  
 }

componentDidMount() {
  // this.props.loadingRate();
}
  render() {
    return (
      <div className="row" style={{margin:20}}>
        <h1 className="text-center"> RATE</h1>
        <div className="col-md-3 col-sm-3" style={{border: '3px dashed black',height:200,blackground:'black'}} onChange={this.readxlsx}>
          <h5 className="text-center">{this.state.readfile?this.state.readfile:"請拖曳檔案"}</h5>
          <input type="file"  accept=".xlsx,.xls" onchange={this.readxlsx} />
        </div>
        <div className="col-md-8 col-sm-8 col-sm-offset-1 col-md-offset-1" style={{border: '1px solid red'}}>
          {this.state.readfile?this.state.readfile:"請選擇檔案"}
        </div>
      </div>
    );
  }
}




export default connect(null,{loadingRate})(rate_index)

import React from 'react';

import map from 'lodash/map';
import _ from 'lodash';
import classnames from 'classnames';
import { connect } from 'react-redux';
import moment from 'moment';
import workInput from '../../../server/shared/validations/workinput';

// import TextFieldGroup from '../common/TextFieldGroup';
import { createWork ,loadingwork} from '../../actions/workActions';
import { Modal,Button,Table } from 'react-bootstrap';
// import { Link } from 'react-router';

class WorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    work_number: '',
    work_name: '',
    work_material: '',
    work_process: '',
    work_input: '',
    work_lottos: '',
    work_goodnumber: '',
    work_accumulation: '',
    work_badnumber: '',
    work_unfinished: '',
    work_starttime: '',
    work_endtime: '',
    work_line:'',
    setuptime:'',
    loading : false,
    errors : {},
    invalid: false,
    show:false,
    work:'',
    worksearch:'',
    worksearch_bar:true,
    work_table:[1],
    tableSheet:false

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.copy = this.copy.bind(this);
    this.show = this.show.bind(this); 
    this.upload = this.upload.bind(this); 

     }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = workInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }
  copy(e){


  }
  show(e){

    this.setState({ target: e.target, show: !this.state.show });
  }



  onSubmit(e) {
    e.preventDefault();

    console.log("OK");
     if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createWork(this.state).then(
        () => {         
          this.context.router.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
    
  }

  upload(e){
            e.preventDefault();
// this.props.loadingwork(this.state.worksearch);
        this.props.loadingwork(this.state.worksearch);
        this.setState({work_name:this.props.work.work_name,work_material:this.props.work.work_material,work_number:this.props.work.work_number });


    // if (_.isEmpty(this.state.worksearch)){
    //     this.setState({errors:{  worksearch: "請輸入工單號碼"}});
    //   }else{
    //     this.props.loadingwork(this.state.worksearch);
    //     this.setState({work_name:this.props.work.work_name,work_material:this.props.work.work_material,work_number:this.props.work.work_number });
    
    //   }
  }




 

  render() {
   console.log(this);
 // const time_sub = moment.duration(1, 'h');



 // 
    // const date1 = (moment(this.state.work_endtime, "HH:mm").hour()-moment(this.state.work_starttime, "HH:mm").hour())*60+(moment(this.state.work_endtime, "HH:mm").minutes()-moment(this.state.work_starttime, "HH:mm").minutes());
    

    // if (date1){
    //   return console.log("right");
    // };


    const { errors }  = this.state;
    const line = ['201','202','203','204','205','206','207','208','209','210','212'];
    const options = map(line, (val) =>
      <option key={val} value={val}>{val}</option>
    );     

    const worksheet = (
         <input type="range" min="" max="50" name="work" value={this.state.work} onChange={this.onChange } /> 
      );



    return (
      

      <form onSubmit={this.onSubmit} className="form-group" >  
          <div className="form-group"> 
          <input type="text" className="control-input form-inline" value={this.state.worksearch} name="worksearch" onChange={this.onChange} placeholder={this.state.errors.worksearch}/>
          <button onClick={this.upload} className="btn btn-primary btn-sm" disabled={this.state.show}> 搜尋工單 </button> 
          </div>


   
         <div className="form-group"> 
      <label className="control-label">   線別  </label> 
         <select className="form-control col-md-3" name="work_line" onChange={this.onChange} value={this.state.work_line}  >
            <option value="" disabled>選線別</option>
            {options}
          </select>
       </div>
     
     
       
        <label className="control-label">工號 : {this.state.work_number }   <span className="" style={{"color":"red"}}> {errors.work_number}  </span></label>
        <input type="number" name="work_number" value={this.state.work_number} onChange={this.onChange} className="form-control"/>
    

        <label className="control-label">品名 : {this.state.work_name }   <span className="" style={{"color":"red"}}> {errors.work_name}  </span></label>
        <input type="number" name="work_name" value={this.state.work_name} onChange={this.onChange} className="form-control"/>
    
    

        <label className="control-label">工單號碼 : {this.state.work_material} <span className="" style={{"color":"red"}}>  {errors.work_material} </span></label>
        <input type="number" name="work_material" value={this.state.work_material} onChange={this.onChange} className="form-control"/>
           
 
        <label className="control-label">工程別 : {this.state.work_process} <span className="" style={{"color":"red"}}> {errors.work_process}</span></label>
        <input type="number" name="work_process" value={this.state.work_process} onChange={this.onChange} className="form-control"/>
       

        <label className="control-label">投入量 : {this.state.work_input} <span className="" style={{"color":"red"}}> {errors.work_input}</span></label>
        <input type="number" name="work_input" value={this.state.work_input} onChange={this.onChange} className="form-control"/>
      
        <label className="control-label">批量 : {this.state.work_lottos}  <span className="" style={{"color":"red"}}>{errors.work_lottos}</span></label>
        <input type="number" name="work_lottos" value={this.state.work_lottos} onChange={this.onChange} className="form-control"/>
        

        <label className="control-label">良品 : {this.state.work_goodnumber}  <span className="" style={{"color":"red"}}>{errors.work_goodnumber}</span></label>
        <input type="number" name="work_goodnumber" value={this.state.work_goodnumber} onChange={this.onChange} className="form-control"/>
       

        <label className="control-label">累積 : {this.state.work_accumulation}   <span className="" style={{"color":"red"}}> {errors.work_accumulation}</span></label>
        <input type="number" name="work_accumulation" value={this.state.work_accumulation} onChange={this.onChange} className="form-control"/>
     

        <label className="control-label">不良品 : {this.state.work_badnumber}  <span className="" style={{"color":"red"}}>{errors.work_badnumber}</span></label>
        <input type="number" name="work_badnumber" value={this.state.work_badnumber} onChange={this.onChange} className="form-control"/>
       

        <label className="control-label">未完成品 : {this.state.work_unfinished}  <span className="" style={{"color":"red"}}>{errors.work_unfinished}</span></label>
        <input type="number" name="work_unfinished" value={this.state.work_unfinished} onChange={this.onChange} className="form-control"/>
       

        <label className="control-label">整備時間 : {this.state.setuptime} <span className="" style={{"color":"red"}}> {errors.work_setuptime}</span></label>
        <input type="number" name="setuptime" value={this.state.setuptime} onChange={this.onChange} className="form-control"/>
      

        <label className="control-label">起始時間 : {this.state.work_starttime}  <span className="" style={{"color":"red"}}>{errors.work_starttime}</span></label>
        <input type="time" name="work_starttime" value={this.state.work_starttime} onChange={this.onChange} className="form-control"/>
       
        
        <label className="control-label">結束時間  : {this.state.work_endtime} <span className="" style={{"color":"red"}}>  {errors.work_endtime}</span></label>
        <input type="time" name="work_endtime" value={this.state.work_endtime} onChange={this.onChange} className="form-control" />
      
        
     

   



         <div className="form-group row"><button className="btn btn-primary btn-lg" disabled={this.state.loading}>上傳</button> </div>

        




        </form>



        //<div className="form-group"> 
        //   <label className="control-label">   線別  </label> 

        //   <select class="form-control">
        //      <option value="" disabled>選擇線別</option>
        //     {options}
        //   </select>
       
        // </div>

    );
  }
}


WorkForm.propTypes = {

  createWork: React.PropTypes.func.isRequired,
  loadingwork: React.PropTypes.func.isRequired
}

WorkForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    work: state.work
  };
}


export default connect( mapStateToProps, { createWork , loadingwork })(WorkForm);



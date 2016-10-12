import React from 'react';

import map from 'lodash/map';
import classnames from 'classnames';
import { connect } from 'react-redux';

import workInput from '../../../server/shared/validations/workinput';

import TextFieldGroup from '../common/TextFieldGroup';
import { createWork ,loadingwork} from '../../actions/workActions';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';

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
    worksearch:''

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

  upload(){
    this.props.loadingwork(this.state.worksearch);
    // this.setState({work_name:'u-02-M'  });

  }

  render() {

    const { errors }  = this.state;
    const line = ['201','202','203','204','205','206','207','208','209','210','212'];
    const options = map(line, (val) =>
      <option key={val} value={val}>{val}</option>
    );     
    return (
      


      <form onSubmit={this.onSubmit} className="form-group" >  
  { errors.form }{this.state.work}
        <div className="form-group"> 
        <label className="control-label"> 
        <input type="range" min="" max="50" name="work" value={this.state.work} onChange={this.onChange }/></label> 
        <label className="control-label">   線別  </label> 
         <select
            className="form-control col-md-3"
            name="work_line"
            onChange={this.onChange}
            value={this.state.work_line}
          >
            <option value="" disabled>選線別</option>
            {options}
          </select>
       </div>

  {this.state.worksearch}
      <div className="form-group"> 
      <input type="text" className="control-input " value={this.state.worksearch} name="worksearch" onChange={this.onChange}/>
      <button onClick={this.upload} className="btn btn-primary btn-sm"> X </button> 
      </div>
      
        <TextFieldGroup
          field="work_number"
          label="工號"
          name="work_number"
          value={this.state.work_number}
          onChange={this.onChange}
          error={errors.work_number} />
  
         <TextFieldGroup
          field="work_name"
          label="品名"
          name="work_name"
          value={this.state.work_name}
          onChange={this.onChange}
          error={errors.work_name}
        />

    


        <TextFieldGroup
          field="work_material"
          label="料號"
          name="work_material"
          value={this.state.work_material}
          onChange={this.onChange}
          error={errors.work_material}
        />
        <TextFieldGroup
          field="work_process"
          label="工程別"
          name="work_process"
          value={this.state.work_process}
          onChange={this.onChange}
          error={errors.work_process}
        />
        <TextFieldGroup
          field="work_input"
          label="投入量"
          name="work_input"
          value={this.state.work_input}
          onChange={this.onChange}
          error={errors.work_input}
           type="number"
        />
        <TextFieldGroup
          field="work_lottos"
          label="批量"
          name="work_lottos"
          value={this.state.work_lottos}
          onChange={this.onChange}
          error={errors.work_lottos}
           type="number"
        />
        <TextFieldGroup
          field="work_goodnumber"
          label="良品"
          name="work_goodnumber"
          value={this.state.work_goodnumber}
          onChange={this.onChange}
          error={errors.work_goodnumber}
           type="number"
        />
        <TextFieldGroup
          field="work_accumulation"
          label="累計"
          name="work_accumulation"
          value={this.state.work_accumulation}
          onChange={this.onChange}
          error={errors.work_accumulation}
           type="number"
        />
        <TextFieldGroup
          field="work_badnumber"
          label="不良品"
          name="work_badnumber"
          value={this.state.work_badnumber}
          onChange={this.onChange}
          error={errors.work_badnumber}
          type="number"
        />
        <TextFieldGroup
          field="work_unfinished"
          label="未完成品"
          name="work_unfinished"
          value={this.state.work_unfinished}
          onChange={this.onChange}
          error={errors.work_unfinished}
          type="number"
        />

        <TextFieldGroup
          field="work_starttime"
          label="起始時間"
          name="work_starttime"
          value={this.state.work_starttime}
          onChange={this.onChange}
          error={errors.work_starttime}
          type="time"
        />    
        <TextFieldGroup
          field="work_endtime"
          label="結束時間"
          name="work_endtime"
          value={this.state.work_endtime}
          onChange={this.onChange}
          error={errors.work_endtime}
          type="time"
        />
         <TextFieldGroup
          field="setuptime"
          label="整備時間"
          name="setuptime"
          value={this.state.setuptime}
          onChange={this.onChange}
          error={errors.setuptime}
          type="number"
        />

        

   




         <div className="form-group"><button className="btn btn-primary btn-lg" disabled={this.state.loading}>上傳</button></div>


  




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

  createWork: React.PropTypes.func.isRequired
}

WorkForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default connect(null, { createWork , loadingwork })(WorkForm);



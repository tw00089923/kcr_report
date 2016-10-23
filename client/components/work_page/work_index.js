import React from 'react';
import { connect } from 'react-redux';
import { work_all } from '../../actions/workActions';
import { ProgressBar} from 'react-bootstrap';
import moment from 'moment';



export class work_index extends React.Component {
  constructor(props) {
    super(props);
    this.time_add = this.time_add.bind(this);
  }
  componentDidMount() {
  	this.props.work_all();
  }
  time_add(a,b){

  	// const starttime = moment.duration(a).minutes();
  	// const endtime =moment.duration(b).minutes();
  	 return moment.duration(b).asMinutes()-moment.duration(a).asMinutes();
  }

  render() {
  	console.log(this);
  	//<ProgressBar active now={45} label={`${45}%`}/> 
  	
    return (

    	<div>
    	<table className="table table-hover ">
    		<thead>
    			<tr>
    				<th> 線別 </th>
    				<th> 工號 </th>
    				<th> 品名 </th>
    				<th> 料號 </th>
    				<th> 效率 </th>
    				
    			</tr>
    		</thead>
    		<tbody>
    			{ this.props.work_tabel.map( (val,key) => (

    				<tr key={key}> 
    				<th>{val.work_line}</th> 
    				<td>{val.work_number}</td> 
    				<td>{val.work_name *val.work_input}</td>
    				<td> {val.work_name} </td>
    			  	<td> {this.time_add(val.work_starttime,val.work_endtime)}  </td>


    				</tr>  ) )}
    		</tbody>
    	</table>

    
    	</div>



		// <table className="table">
		//   <thead>
		//     <tr>
		//       <th>#</th>
		//       <th>First Name</th>
		//       <th>Last Name</th>
		//       <th>Username</th>
		//     </tr>
		//   </thead>

		//   <tbody>
		//     <tr>
		//       <th scope="row">1</th>
		//       <td>Mark</td>
		//       <td>Otto</td>
		//       <td>@mdo</td>
		//     </tr>
		//     <tr>
		//       <th scope="row">2</th>
		//       <td>Jacob</td>
		//       <td>Thornton</td>
		//       <td>@fat</td>
		//     </tr>
		//     <tr>
		//       <th scope="row">3</th>
		//       <td>Larry</td>
		//       <td>the Bird</td>
		//       <td>@twitter</td>
		//     </tr>
		//   </tbody>
		// </table>
    );
  }
}


work_index.propTypes = {



}

work_index.contextTypes = {
  router: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
  	work_tabel : state.work.work_tabel
  };
}



export default connect(
  mapStateToProps,{ work_all}
// Implement map dispatch to props
)(work_index)

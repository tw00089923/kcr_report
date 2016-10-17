import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class work_index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<table class="table">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Username</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      <td>Jacob</td>
		      <td>Thornton</td>
		      <td>@fat</td>
		    </tr>
		    <tr>
		      <th scope="row">3</th>
		      <td>Larry</td>
		      <td>the Bird</td>
		      <td>@twitter</td>
		    </tr>
		  </tbody>
		</table>
    );
  }
}


work_index.propTypes = {

}

work_index.contextTypes = {
  router: React.PropTypes.object.isRequired
}




export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(work_index)

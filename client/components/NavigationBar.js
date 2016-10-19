import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { Popover , Button , Overlay ,OverlayTrigger} from 'react-bootstrap';

class NavigationBar extends React.Component {

   constructor(props) {
    super(props);
    this.state = { show : false  };
 
    this.handleClick = this.handleClick.bind(this);
    


  }

  logout(e) {
    e.preventDefault();
    this.props.logout();

  }

  handleClick(e){
    this.setState({ target: e.target, show: !this.state.show });
  }


  

  render() {

    const { isAuthenticated ,user} = this.props.auth;
//     const PopoverButton = (
//   <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
//     <strong>Holy guacamole!</strong> Check this info.
//   </Popover>
// );


 
    const pop1 = ( 
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom" 
          container={this}
          containerPadding={10}

        >
          <Popover id="popover-trigger-click-root-close" title="個人設置" onClick={this.handleClick} > 
              
            <li className=" user-profile "  /*style={{background: 'rgba(124, 224, 249, .3)' , list:'none'}} */> <Link to="/work"> 工單輸入 </Link> </li>
            <li> <Link to="/work_index"> 工單管理 </Link>  </li>
            <li>  </li>
            <hr/>
             <li> <a href="#" onClick={this.logout.bind(this)}> 登出</a></li>
          </Popover>
        </Overlay>);



    const userLinks = (
      
      <ul className="nav navbar-nav navbar-right pull-xs-right">

       
        <li><a href="#" onClick={this.handleClick} >{user.username} </a>

          {this.state.show ? pop1 : this.state.show}
        </li>
        

      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">註冊</Link></li>
        <li><Link to="/login">登入</Link></li>
      </ul>
    );

    return (
    
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"> <span className="glyphicon glyphicon-list"></span> KCR 報表 </Link>
          </div>  
         
           
          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }


          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);

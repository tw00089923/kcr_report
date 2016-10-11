import React from 'react';
import moment from 'moment';
import WorkForm from './workForm';


class workPage extends React.Component {
  render() {
    

  	const title = ( <div className=" text-center"> <strong><h2> 工作日報表 輸入</h2></strong> </div>);
   	const date1 = moment("20111031", "YYYYMMDD").fromNow(); 
    return (

    <div className=" ">
     <div className="column ">
       <div className="" /* style={{background: 'rgba(124, 224, 249, .3)'}} */ >  
          {title}  
      </div>
    </div>
        <div className="col-md-4 col-md-offset-4">
          <WorkForm />
        </div>
    </div>


    // <div className="row active">
    //     <div className="col-md-4 col-md-offset-4">
    //       <workForm />
    //     </div>
    //   </div>

    );
  }
}

export default workPage;

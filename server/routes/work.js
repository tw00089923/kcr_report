// import express from 'express';
// import Work from '../models/work';





// let router = express.Router();


// router.post('/', (req, res) => {
//   res.status(201).json({ success: true });
// });


import express from 'express';
import Work from '../models/work';

let router = express.Router();



// router.get('/work/work_index',(req,res) => {
// 	 res.status(200).json(works);
// });
router.get('/',(req,res)=>{
 	console.log(work);
	let { work } = req.body;
	Work.findOne((err,works)=>{
		if (err) {
			console.log(err);
			 // res.status(401).json({ errors: { form: '密碼錯誤' } })
		}else{
			console.log(works);
		 res.status(200).json(works);
			 // res.status(201).json(works);

		}
	});
		


});

router.post('/', (req, res) => {

	// console.log(req);

 const {  work_number,
	  work_name,
	  work_material,
	  work_process,
	  work_input,
	  work_lottos,
	  work_goodnumber,
	  work_accumulation,
	  work_badnumber,
	  work_unfinished,
	  work_starttime,
	  work_endtime ,setuptime,work_line} = req.body;
	
  const Workheet = new Work	({
	  work_number,
	  work_name,
	  work_material,
	  work_process,
	  work_input,
	  work_lottos,
	  work_goodnumber,
	  work_accumulation,
	  work_badnumber,
	  work_unfinished,
	  work_starttime,
	  work_endtime,setuptime,work_line
  });

  		Workheet.save( ( err , data ) =>{  
  			if (err){
  				console.log(err);
  				 res.status(400).json({message:"insert DB errors"});

  			}else{
  				
      		  res.json({ success: true });
   
  			}

  		} );


  // res.status(201).json({ success: true });
});

export default router;

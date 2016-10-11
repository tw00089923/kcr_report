import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


 // work_number,
 //    work_material,
 //    work_process,
 //    work_input,
 //    work_lottos,
 //    work_goodnumber,
 //    work_accumulation,
 //    work_badnumber,
 //    work_unfinished,
 //    work_starttime,
 //    setuptime,
 //    work_endtime


export default function workInput(data) {
  let errors = {};

  if (Validator.isNull(data.work_number)) {
    errors.work_number = 'This field is required work_number';
  }
  if (Validator.isNull(data.work_material)) {
    errors.work_material = 'This field is required work_material';
  }
  if (Validator.isNull(data.work_process)) {
    errors.work_process = 'Email is invalid';
  }
  if (Validator.isNull(data.work_input)) {
    errors.work_input= 'This field is required';
  }
  if (Validator.isNull(data.work_lottos)) {
    errors.work_lottos= 'This field is required';
  }
  if (Validator.isNull(data.work_goodnumber)) {
    errors.work_goodnumber = 'This field is required';
  }
  if (Validator.isNull(data.work_accumulation)) {
    errors.work_accumulation= 'This field is required';
  }
  if (Validator.isNull(data.work_badnumber)) {
    errors.work_badnumber= 'This field is required';
  }
   if (Validator.isNull(data.work_unfinished)) {
    errors.work_unfinished= 'This field is required';
  }
  //   if (Validator.isNull(data.setuptime)) {
  //   errors.setuptime= 'This field is required';
  // }
  // if (Validator.isNull(data.work_starttime)) {
  //   errors.work_starttime= '請輸入正確時間';
  // }
  //  if (Validator.isNull(data.work_endtime)) {
  //   errors.work_endtime= '請輸入正確時間';
  // }
  if (Validator.isNull(data.setuptime)) {
    errors.setuptime= 'This field is required';
  }


  if (Validator.isDate(data.work_starttime)) {
    errors.work_starttime= '請輸入正確時間';
  }
   if (Validator.isDate(data.work_endtime)) {
    errors.work_endtime= '請輸入正確時間';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

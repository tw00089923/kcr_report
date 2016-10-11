import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const workSchema = new Schema({
  work_number: String,
  work_name: String,
  work_material: String,
  work_process: String,
  work_input: Number,
  work_lottos: Number,
  work_goodnumber: Number,
  work_accumulation: Number,
  work_badnumber: Number,
  work_unfinished: Number,
  work_starttime: Date,
  work_endtime: Date,
  work_line:Number,
  setuptime:Number


});


const Work = mongoose.model('Work', workSchema);

export default Work;
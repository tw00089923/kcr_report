import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';
import work from './routes/work';
import Work from './models/work';
import bulebird from 'bluebird';
import mongoose from 'mongoose';
let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

app.use('/api/auth', auth);

app.use('/api/events', events);

app.use('/api/work', work);


mongoose.Promise = require('bluebird');

const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 3000;

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => console.log('Running on localhost:3000'));

const DB_URL = 'mongodb://localhost/api'
  mongoose.connect(DB_URL);
  
  mongoose.connection.on('open', function(){
  	console.log("成功連線到"+ DB_URL);
  });
  mongoose.connection.on('error', function(){
  	console.log("Error 連線到"+DB_URL);
  });
  mongoose.connection.on('close', function(){
  	console.log("close to mongodb");
  });

//   const Newworksheet = new Work({  work_number: '1',
//   work_name: '1',
//   work_material: '1',
//   work_process: '1',
//   work_input: 2,
//   work_lottos: 2,
//   work_goodnumber: 2,
//   work_accumulation: 2,
//   work_badnumber: 2,
//   work_unfinished: 2,
//   work_starttime: new Date(),
//   work_endtime: new Date(),
//   work_line:2203,
//   setuptime:30
// });




//    Newworksheet.save( (err,data)=>{
//     if(err){

//       console.log(err);
//     }
//       console.log(data);


   // } )

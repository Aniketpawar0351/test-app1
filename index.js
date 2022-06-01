import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
const databaseURL="mongodb+srv://cn_grp3:cn_grp3@cluster0.bf5bawq.mongodb.net/sensors_data";

app.listen(port,()=>console.log("hello world"));

var level1=0;
var level2=0;


import connectDB from './connectdb.js';
import './s_data.js';
import * as myfun from './s_data.js';
connectDB(databaseURL);

app.set('view engine', 'ejs');
import {join} from 'path';
app.get('/',(req, res)=>{
    const result1=myfun.all_records(); 
    result1.then((value)=>{
            const t1=value[0].level1;
            const t2=value[0].level2;
           console.log(value[0].level1);
           console.log(value[0].level2);
           res.render('pages/index',{tl1:t1,tl2:t2
         })
    });
});

app.get('/sensor_data/:api_key/:tank1/:tank2',(req,res)=>{
    const {api_key,tank1,tank2}=req.params;
    console.log(tank1,tank2);
    if(api_key=='cn_grp3'){
        myfun.createDoc(tank1,tank2);
        res.status(200).send("hello");
        console.log(req.params);
    }
});

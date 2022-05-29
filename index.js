import express from 'express';
const app = express();
const port=process.env.PORT || 5000;
const databaseURL="mongodb://localhost:27017/sensor_data";

app.listen(port,()=>console.log("hellow word"));




import connectDB from './connectdb.js';
import './s_data.js';
import * as myfun from './s_data.js';
connectDB(databaseURL);


app.get('/',(req, res)=>{
   
    const result=myfun.all_records();
    console.log(result);
    res.send(result);
});

app.post('/sensor_data/:api_key/:s_data',(req,res)=>{
    const {api_key,s_data}=req.params;
    console.log(s_data);
    if(api_key=='cn_grp3')
    {
        res.send(s_data);
        //myfun.createDoc(s_data);
       // res.status(200).send("ok");
       // console.log(req.params);
    }
    
});

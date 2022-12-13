import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
//const port=3000;

// const databaseURL="mongodb://localhost:27017/vehicle_data";
const databaseURL="mongodb+srv://cn_grp3:cn_grp3@cluster0.bf5bawq.mongodb.net/?retryWrites=true&w=majority";

app.listen(port,()=>console.log("hello world"));



import connectDB from './connectdb.js';
import './s_data.js';
import * as myfun from './s_data.js';
connectDB(databaseURL);

app.set('view engine', 'ejs');
import {join} from 'path';
import { checkPrime } from 'crypto';

app.use(express.urlencoded({extended:false}));

app.get('/',(req, res)=>{
    //const result1=myfun.all_records1(res); 
        res.render("pages/index");
    
});
app.get('/recentrecord',(req, res)=>{
    const result1=myfun.all_records1(res); 
    result1.then((value)=>{
        console.log(value);
        //res.send(value);
 });
    
});
app.get('/allrecord',(req, res)=>{
    const result1=myfun.all_records3(res); 
    result1.then((value)=>{
        console.log(value);
        //res.send(value);
        
 });
    
});

app.get('/unrecognized',(req, res)=>{
    const result1=myfun.all_records2(res); 
    result1.then((value)=>{
        console.log(value);
        //res.send(value);
       
 });
    
});

app.get('/newvehicle',(req, res)=>{
    const result1=myfun.all_records1(); 
    result1.then((value)=>{
        //console.log(value);
        //res.send(value);
        res.render("pages/new_vehicle");
 });
    
});

app.post('/newvehicle_submited',(req,res)=>{
    myfun.createDoc3(req.body.uname,req.body.state,req.body.vnumber,req.body.email,req.body.bphone_no);
    console.log(req.body);
    res.render("pages/gg");
})
app.get('/vehicle_data/:api_key/:number_p/:speed',(req,res)=>{
    const {api_key,number_p,speed}=req.params;
    //console.log(number_p,speed);
    if(api_key=="IC_C"){
        if(myfun.check(number_p))
        {
            console.log("yes")
            myfun.createDoc1(number_p,speed);
        }
        else
        {
            myfun.createDoc2(number_p,speed);
        }
        
        res.status(200).send("hello");
        //console.log(req.params);
    }
});

// <% data.forEach((item)=>{ %>
//     <tr>
//       <td><%= item.number_p %></td>
//       <td><%= item.speed %></td>
//       <td><%= item.sdate %></td>
//     </tr>
//  <% }) %>
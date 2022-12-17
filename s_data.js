import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

//defining schema
const vehicle_dataSchema1 = new mongoose.Schema({
    sdate:{type:Date, default: Date.now},
    number_p:{type:String},
    speed:{type:String}
})
const vehicle_dataSchema2 = new mongoose.Schema({
    unrdate:{type:Date, default: Date.now},
    unrnumber_p:{type:String},
    unrspeed:{type:String}
})
const vehicle_dataSchema3 = new mongoose.Schema({
    uname:{type:String},
    state:{type:String},
    unumber_p:{type:String},
    uemail:{type:String},
    phone:{type:String},
    sdate:{type:Date, default: Date.now}
})
// export let tl1;
// export let tl2;

//compiling Shema
export const vehicle_data_model1 = mongoose.model('vehicle_datas',vehicle_dataSchema1)
export const vehicle_data_model2 = mongoose.model('unr_vehicle_data',vehicle_dataSchema2)
export const vehicle_data_model3 = mongoose.model('user_vehicle_data',vehicle_dataSchema3)

export const all_records1= async (res)=>{
    try{
        const result=await vehicle_data_model1.find();
        //console.log(result);
        res.render("pages/recent_record",{data: result});
        return {result};

    }catch(error){
        console.log(error);
    }
}


export const all_records2= async (res)=>{
    try{
        const result=await vehicle_data_model2.find();
        //console.log(result);
        res.render("pages/unrecognized_vehicle",{data: result});
        return {result};

    }catch(error){
        console.log(error);
    }
}

export const all_records3= async (res)=>{
    try{
        const result=await vehicle_data_model3.find();
        //console.log(result);
        res.render("pages/all_record",{data: result});
        return {result};

    }catch(error){
        console.log(error);
    }
}


//all_records();
export const createDoc1 = async(var1,var2)=>{
    try{
        const new_vehicle_data1 = new vehicle_data_model1({
            number_p:var1,
            speed:var2
        })
       const result = await vehicle_data_model1.insertMany([new_vehicle_data1]);
       //console.log(result);

    }catch(error){
        console.log(error);
    }
}

export const createDoc2 = async(var1,var2)=>{
    try{
        const new_vehicle_data2 = new vehicle_data_model2({
            unrnumber_p:var1,
            unrspeed:var2
        })
       const result = await vehicle_data_model2.insertMany([new_vehicle_data2]);
       //console.log(result);

    }catch(error){
        console.log(error);
    }
}

export const createDoc3 = async(var1,var2,var3,var4,var5)=>{
    try{
        const new_vehicle_data3 = new vehicle_data_model3({
            uname:var1,
            state:var2,
            unumber_p:var3,
            uemail:var4,
            phone:var5
        })
       const result = await vehicle_data_model3.insertMany([new_vehicle_data3]);
       console.log(result);
    }catch(error){
        console.log(error);
    }
}


export const mail_to_user = async(var1,var2,var3,var4,var5)=>{
    try{
        
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aniket.pawar19@vit.edu',
            pass: 'Aniket@1234'
        }
        });

        var mailOptions = {
        from: 'aniket.pawar19@vit.edu',
        to: var1,
        subject: 'Speeding Ticket',
        text: `This mail informs you of the over-speeding incident that you recently had. 
        Over-speeding doesn’t allow on the highways; the government has mentioned the maximum speed limit at each stop. Being a citizen of this nation, you have to follow the rules made by the government.`+
        'Vehicle Details -'+
        '  Vehicle owner: '+var2+
        '  Vehicle Number: '+var3+
        '  State: '+var4+
        '  Date: '+var5+
        '  pls replay this mail if you have any query'
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    }catch(error){
        console.log(error);
    }
}
// export const send_msg = async(var1,var2,var3,var4,var5)=>{
//     try{
//         var sid = "xxxxxxxxxxxxxxxxxxxxxxxxxxx";
//         var auth_token = "xxxxxxxxxxxxxxxxxxxxxxxxx;

//         var twilio = require("twilio")(sid, auth_token);

//         twilio.messages
//         .create({
//             from: "+1xxxxxxxxxx",
//             to: "+9199999xxxxxx",
//             body: "this is a testing message",
//         })
//         .then(function(res) {console.log("message has sent!")})
//         .catch(function(err)  {
//             console.log(err);
//         });
//     }catch(error){
//         console.log(error);
//     }
// }


export const check = async(var1,var2,res)=>{
    try{
        const result=await vehicle_data_model3.find({"unumber_p": var1});
       console.log(result.length);
       if(result.length>0)
       {
            console.log(result[0].uemail)
            mail_to_user(result[0].uemail,result[0].uname,result[0].unumber_p,result[0].state,result[0].sdate);
            createDoc1(var1,var2);
       }
       else
       {
            createDoc2(var1,var2);
       }
    }catch(error){
        console.log(error);
    }
}
// if(myfun.check(number_p))
// {
    
// }
// else
// {
    
// }


// export function check(var1){
//     const result= vehicle_data_model3.find();
//     console.log(result);
//     if(result.length!=0)
//     {
//         console.log("yes")
//         return true;
//     }
//     else return false;
// }


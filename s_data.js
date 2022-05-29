import mongoose from 'mongoose';

//defining schema
const sensor_dataSchema = new mongoose.Schema({
    sdate:{type:Date, default: Date.now},
    level:{type:Number}
})

//compiling Shema
const sensor_data_model = mongoose.model('sensors_data',sensor_dataSchema)

export const all_records= async ()=>{
    const result=await sensor_data_model.find();
    console.log(result);
    //return result;
}
//all_records();
export const createDoc = async(s_data)=>{
    try{
        const new_sensor_data = new sensor_data_model({
            level:s_data
        })
       const result = await sensor_data_model.insertMany([new_sensor_data]);
       console.log(result);
    }catch(error){
        console.log(error);
    }
}



import mongoose from 'mongoose';

//defining schema
const sensor_dataSchema = new mongoose.Schema({
    sdate:{type:Date, default: Date.now},
    level1:{type:Number},
    level2:{type:Number}
})
export let tl1;
export let tl2;

//compiling Shema
export const sensor_data_model = mongoose.model('sensors_data',sensor_dataSchema)

export const all_records= async ()=>{
    try{
        const result=await sensor_data_model.find().sort({_id:-1}).limit(1);
        console.log(result);
        return result;

    }catch(error){
        console.log(error);
    }
}
//all_records();
export const createDoc = async(tank1,tank2)=>{
    try{
        const new_sensor_data = new sensor_data_model({
            level1:tank1,
            level2:tank2
        })
       const result = await sensor_data_model.insertMany([new_sensor_data]);
       console.log(result);
    }catch(error){
        console.log(error);
    }
}



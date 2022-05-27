const express = require("express");
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const app = express();

const port=process.env.PORT || 5000;
console.log(arr);
app.get('/',(req, res)=>{
    res.send("hellow word");
});
app.listen(port,()=>console.log("hellow word"));

app.get('/even',(req,res)=>
{
    const even=arr.filter((num)=>num%2==0);
    res.status(200).send(even);
});

app.get('/odd',(req,res)=>
{
    const odd=arr.filter((num)=>num%2!=0);
    res.status(200).send(odd);

});

app.get('/primes',(req,res)=>{
    const prime=arr.filter((num)=>
    {
        for(var i=2;i<=Math.sqrt(num);i++)
        {
            if(num%i==0)return false;
        }
        return true;
    })
    res.status(200).send(prime);
});
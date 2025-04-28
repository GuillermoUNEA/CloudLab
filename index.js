const express=require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
	res.send("heya this is cloud express!");
});
app.listen(port,()=>{
	console.log("server listening at http;//locahost:${port}");
});

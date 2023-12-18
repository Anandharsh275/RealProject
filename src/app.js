const express=require('express');
const a=express();
const port = process.env.PORT || 800;
app.get("", (req, res) => {
    res.render("index")
 });
 app.listen(port,()=>{
    console.log(`listening to the port http://localhost:${port}`)
})
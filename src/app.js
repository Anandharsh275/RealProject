const express=require('express');
const path=require('path');
const app=express();
const port = process.env.PORT || 800;
const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));//mainly used to give allowence for static file like html
app.get("", (req, res) => {
    res.render("index")
 });
//  app.get("/student", (req, res) => {
//     res.send("Student")
//  });
//  app.get("/teacher", (req, res) => {
//    res.send("teacher")
// });
//  app.get("/Submit",(req, res) => {
//     res.send("Submit")
//  });
 app.listen(port,()=>{
    console.log(`listening to the port http://localhost:${port}`)
})
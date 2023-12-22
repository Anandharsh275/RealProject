const express=require('express');
const path=require('path');
const app=express();
const port = process.env.PORT || 800;
const static_path = path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(static_path));//mainly used to give allowence for static file like html
app.get("", (req, res) => {
    res.render("index.hbs")
 });
 app.get("/primary", (req, res) => {
    res.render("primary.hbs")
 });
 app.get("/Secondary", (req, res) => {
   res.render("Secondary")
});
 app.get("/Submit",(req, res) => {
    res.send("Submit")
 });
 app.get("/login",(req,res)=>{
    res.render("login");
 })
 app.listen(port,()=>{
    console.log(`listening to the port http://localhost:${port}`)
})
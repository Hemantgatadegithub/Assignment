const express = require("express")
const db = require("../dbconnect/dbConnect")
const router = express.Router()
const utils = require("../utils/utils")


        //get user specific details
        router.get("/userdetails/:id", (req,resp) => {
            const id =  req.params.id
            db.query(`select user_name,user_email,total_orders,created_at from Users where user_id = ?`,[id] ,(err,data) => {
              resp.send(utils.createObject(err,data))
            })
          })



        // updating total_orders for user

        router.put("/updateorder/:id",(request,response) =>{
        const {total_orders} = request.body

        console.log(request.body)
         db.query("UPDATE Users set total_orders = ? where user_id = ?",[total_orders,request.params.id],
        (error,result) =>{
            response.send(utils.createObject(error,result))       
        })
        })


        //get user Image
        router.get("/getimage/:id",(request,response) => {
        const  user_id = request.params.id
        const statement = `select userImg from Users where user_id=?`
        db.query(statement, [user_id], (error, result) =>{
        console.log(user_id)
        response.send(utils.createObject(error,result))
        })
        })


       
        //add new user

        router.post("/adduser", (request, response) => {
        const { user_name,user_email,user_password,created_at } = request.body
        db.query(
        "INSERT INTO Users(user_name,user_email,user_password,created_at) VALUES(?,?,?,now())",
        [user_name,user_email,user_password,created_at],
        (error, result) => {
        response.send(utils.createObject(error, result))
        })
        })



        //delete user
        router.delete("/dltuser/:id",(req,resp)=>{
            db.query("delete from Users where user_id = ?",[req.params.id],(err,data)=>{
                resp.send(utils.createObject(err,data));
                })
        })


    


module.exports = router;
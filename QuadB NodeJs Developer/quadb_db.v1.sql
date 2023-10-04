create database quadb_db;

use quadb_db;


create table Users
(

    user_id int auto_increment,
    user_name varchar(255),
    user_email varchar(255),
    user_password varchar(255),
    userImg varchar(255) default 'byDefault.png',
    total_orders int,
    created_at DATETIME,
    last_logged_in DATETIME,
    extra_col1 varchar(255),
    extra_col2 varchar(255),
    primary key (user_id),
    UNIQUE (user_email)
);







  ** Required Query
  
  // Fetching user_name,user_email,total_orders,created_at details for user
  
 select user_name,user_email,total_orders,created_at from Users where user_id=1;
 
 
 
   //Updating total_orders for user
   
 UPDATE Users SET total_orders = 5 WHERE user_id=1; 
 
 
    //Get Image from user
   select userImg from Users where user_id=1;
   
   
   // Add new User
   INSERT INTO Users(user_name,user_email,user_password,created_at) VALUES("Hemant","hemantgatade732@gmail.com","pass1",now()) 
   
   
   // Delete	 User
   delete from Users where user_id = 4
   
 
 
 ******* PostMan Testing API
 
    *get details of user
    
    http://localhost:4001/user/userdetails/1
    
    
    *update order count
    http://localhost:4001/user/getimage/1   
    
        *passing json object
        {
        "total_orders":10
        }
        
         	
    *getImage
    
    http://localhost:4001/user/getimage/1
    
    
    *addUser
    
    http://localhost:4001/user/adduser
    
    *passing json object
        {
         "user_name":"a",
         "user_email":"a@123",
         "user_password":"pass234"
        }
        
        
    *deleteuser
    
    http://localhost:4001/user/dltuser/4







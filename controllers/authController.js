const Admin=require('../models/AdminModel');
const bcrypt=require('bcryptjs');


const adminLogin= async (req,res)=>{
    const { email,password }=req.body;
    const login_data= await Admin.findOne({ email });
    // console.log(login_data);
    if(!login_data){
        res.status(400).json({
            message:"Email Can not match!"
        })
    }
    else{
        if(await bcrypt.compare(password,login_data.password)){
            res.status(200).json({
                message:"Admin user login successfully"
            })
        }
        else{
            res.status(401).json({
                message:"Password Can not match!"
            })
        }
        
    }
    
}

module.exports={
    adminLogin
}
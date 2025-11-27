import {JWT_SECRET} from "./config.js"
import jwt from "jsonwebtoken"

export const authmiddleware= (req,res)=>{
let authheader = req.headers.authorization;

if(!authheader || !authheaders.startsWith('Bearer')){
    return res.status(403).json({});
}
    try{
    const token = authheader.split('')[1]
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
    } catch(e){
        return res.status(411).json({})
    }


}


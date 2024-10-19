import jwt from 'jsonwebtoken';
import {ErrorHandler} from '../utils/utility.js';
import { adminSecretKey } from '../app.js';
import { TryCatch } from './error.js';
const isAuthenticated = TryCatch(async(req,res,next) => {
    const token = req.cookies["chat-app-token"];
    if(!token)
        return next(new ErrorHandler("Please Login to access this route", 401));
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decodedData._id;
    next();
});
const adminOnly = async(req,res,next) => {
    const token = req.cookies["chat-app-admin-token"];
    if(!token)
        return next(new ErrorHandler("Only admin can access this route", 401));
    const adminId = jwt.verify(token,process.env.JWT_SECRET);
    
    const isMatch = adminId === adminSecretKey;
    if(!isMatch)
        return next(new ErrorHandler("Invalid Secret Key",401));
    next();
};
export { isAuthenticated, adminOnly };

import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token) {
            return res.json({success: false, message: "Token not found"});
         }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success: false, message: "Not Authorized as admin"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong"});
    }
}

export default adminAuth
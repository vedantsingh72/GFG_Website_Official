import Application from "../models/Application.model";
import User from "../models/User.model";


export const createApplication = async (userId :string , body:{preference1 :string , preference2:string , preference3:string ,reason:string} )=>{
    const user = await User.findById(userId);
    const rollNo = user?.email.substring(0,8);
    const form = await Application.create({
          user: userId,
          rollNo,
          ...body,
    });

    return form;
};

export const getexistingApplication = async(userId:string) =>{
    return  await Application.findOne({ user: userId });
}


export const allApplication = async()=>{
    return await Application.find();
}


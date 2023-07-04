import mongoose from "mongoose"

export const connectDB=async()=>{
    mongoose.set("strictQuery" , true);

    try{
        await mongoose.connect(process.env.MONGO_DB_URI , {
            dbName:"Blog",
        });

        console.log("Mongo db connected")
    }catch(err){
        console.log(err);
    }
}
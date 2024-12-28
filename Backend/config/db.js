import mongoose from "mongoose";

const connectDB= async()=>{
    await mongoose.connect("mongodb+srv://Vinayreddy44666:Vinayreddyd@cluster0.twohb.mongodb.net/food-del").then(()=>console.log("db connected"));
}
export default connectDB;
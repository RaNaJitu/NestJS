import mongoose, * as Mongoose from 'mongoose';
export default {
    // mongoURI: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
    //mongoURI: 'mongodb://localhost:27017/local'
    mongoURI: 'mongodb://localhost:27017/DemoDB'
}

// const uri: string = 'mongodb://localhost:27017/DemoDB';

// mongoose.connect(uri, (err:any) => {
//     if(err){
//         console.log(err.message)
//     }
//     else {
//         console.log("successfully connected to MongoDB")
//     }
// })

// export const UserSchema = new mongoose.Schema({
//     title: { type:String, required: true},
//     author: { type:String, required: true}
// })

// const book = mongoose.model('user', UserSchema)

// export default book;

const mongoose = require('mongoose')
// const uri = "mongodb+srv://dbUser:dbUser@cluster0.m3u1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const uri = "mongodb+srv://dbUser:dbUser@cluster0.m3u1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const connectDb = async()=>{
//     await mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected")
// }

const client = mongoose(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
module.exports = connectDb;

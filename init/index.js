const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(mongoose_url);
}

main()
.then(()=> console.log("Connection Successful!.."))
.catch((err)=> console.log(err));

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: '6a4a832cdda09fd47b69b94c'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initilised..");
}

initDB();
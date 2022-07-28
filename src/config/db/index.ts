import mongoose from "mongoose";


 async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tnp3011:taodeobiet30111992@cluster0.kgnds.mongodb.net/test');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
    }
}

export default connect;
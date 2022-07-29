import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://tnp3011:taodeobiet30111992@cluster0.kgnds.mongodb.net/restfulAPI',
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
    }
}

export default connectDB;

import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alakhians1008_db_user:N5Bzwlrf8QnBNMeL@cluster0.aekirec.mongodb.net/?appName=Cluster0")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// export
export default User;

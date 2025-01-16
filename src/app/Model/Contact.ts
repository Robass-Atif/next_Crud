import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures email is unique in the collection
        match: [/.+\@.+\..+/, 'Please fill a valid email address']  // Regex for email validation
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model using the schema and if it already exists, use it
const Contact =mongoose.models.Contact ||   mongoose.model('Contact', contactSchema);

export default Contact;

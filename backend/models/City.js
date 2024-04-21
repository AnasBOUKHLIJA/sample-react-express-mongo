import mongoose from "mongoose";

const CitySchema = mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    country: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    
}, {timestamps: true});

const City = mongoose.model("CityDocument",CitySchema);

export default City;
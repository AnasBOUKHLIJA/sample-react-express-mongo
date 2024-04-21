import City from "../models/City.js";

export const addCity = async (req, res) => {
    try {
        const {
            code,
            name,
            country,
            location,
            description
        } = req.body;
        const newCity = new City({
            code,
            name,
            country,
            location,
            description
        });
        const savedCity = await newCity.save();
        res.status(201).json(savedCity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getAllCities = async (req, res) => {
    try {
        const cities = await City.find().sort({ createdAt: -1 });
        res.status(200).json(cities)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export const getCityById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await City.findById(id);
        res.status(200).json(city);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const searchCitiesByName = async (req, res) => {
    try {
        const { start } = req.params;
        const cities = await City.find({ name: new RegExp(`^${start}`, 'i') });
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export const updateCity = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            code,
            name,
            country,
            location,
            description
        } = req.body;
        const updatedCity = await City.findByIdAndUpdate(
            id,
            {
                code,
                name,
                country,
                location,
                description,
            },
            { new: true }
        );
        res.status(200).json(updatedCity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteCity = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: 'Id not provided' });
        }
        const deletedDocument = await City.findOneAndDelete({ _id: id });
        if (!deletedDocument) {
            return res.status(404).json({ error: 'City not found' });
        }

        res.status(200).json({ message: 'City deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const countCitites = async (req, res) => {
    try {
        const count = await City.countDocuments();
        res.status(200).json(count);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
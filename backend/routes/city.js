import express from "express";
import { 
    getAllCities,
    countCitites,
    getCityById,
    addCity,
    updateCity,
    deleteCity,
    searchCitiesByName,
} from "../controllers/city.js";

const router = express.Router();

router.get("/getAllCities", getAllCities);
router.get("/countCitites", countCitites);
router.post("/:id/getCityById", getCityById);
router.post("/addCity", addCity);
router.post("/:id/updateCity", updateCity);
router.delete("/:id/deleteCity", deleteCity);
router.get("/searchCitiesByName", searchCitiesByName);

export default router;
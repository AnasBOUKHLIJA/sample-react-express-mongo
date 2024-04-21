import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Box, TextField, } from "@mui/material";
import { useFormik } from "formik";
import { ToastContext } from "../Context/Toast";
import { BackdropContext } from "../Context/Backdrop";
import { MdSend } from "react-icons/md";

export default function Home() {
    const [cities, setCities] = React.useState([]);
    const [change, setChange] = React.useState(0);
    const toastContext = React.useContext(ToastContext);
    const backdropContext = React.useContext(BackdropContext);

    React.useEffect(() => {
        axios
            .get(`http://localhost:3001/city/getAllCities`)
            .then((response) => {
                setCities(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [change]);

    function deleteCity(id) {
        backdropContext.show();
        console.log(id);
        axios.delete(`http://localhost:3001/city/${id}/deleteCity`).then((response) => {
            backdropContext.hide();
            toastContext.success("City deleted successfully!");
            setChange(change + 1);
        }).catch(function (error) {
            backdropContext.hide();
            toastContext.error("Deletion failed. Please try again");
            console.log(error);
        });
    }

    const formik = useFormik({
        initialValues: {
            code: "",
            name: "",
            country: "",
            location: "",
            description: "",
        },
        onSubmit: (values, onSubmitProps) => {
            backdropContext.show();
            const city = {
                code: values.code,
                name: values.name,
                country: values.country,
                location: values.location,
                description: values.description,
            };
            axios.post(`http://localhost:3001/city/addCity`, city).then((response) => {
                toastContext.success("City added successfully!");
                setChange(change + 1);
                onSubmitProps.resetForm();
                backdropContext.hide();
            }).catch((error) => {
                backdropContext.hide();
                toastContext.error("Addition failed. Please try again");
            });
        },
    });

    return (
        <main>
            <Box className="form-city">
                <form onSubmit={formik.handleSubmit}>
                    <h1>Add new city</h1>
                    <div>
                        <TextField
                            id="code"
                            name="code"
                            placeholder="Enter your code here"
                            value={formik.values.code}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div>
                        <TextField
                            id="name"
                            name="name"
                            placeholder="Enter your name here"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div>
                        <TextField
                            id="location"
                            name="location"
                            placeholder="Enter your location here"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div>
                        <TextField
                            id="country"
                            name="country"
                            placeholder="Enter your country here"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div>
                        <TextField
                            id="description"
                            name="description"
                            multiline
                            rows={6}
                            placeholder="Enter your description here"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <Box className="city-form-buttons">
                        <Button variant="contained" type="submit">
                            Save <MdSend />
                        </Button>
                    </Box>
                </form>
            </Box>

            {cities.length > 0 ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Code</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Country</TableCell>
                                <TableCell align="left">Location</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cities.map((city) => (
                                <TableRow
                                    key={city._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="left">
                                        {city.code}
                                    </TableCell>
                                    <TableCell align="left">{city.name}</TableCell>
                                    <TableCell align="left">{city.country}</TableCell>
                                    <TableCell align="left">{city.location}</TableCell>
                                    <TableCell align="left">{city.description}</TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ display: "flex", gap: "10px" }}
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={() => deleteCity(city._id)}
                                            color="error"
                                            startIcon={<AiFillDelete />}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            endIcon={<AiFillEdit />}
                                        >
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                : <p>No cities found</p>}
        </main>
    );
}

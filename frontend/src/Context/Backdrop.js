import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const BackdropContext = React.createContext();

export function BackdropProvider(props) {
    const [open, setOpen] = React.useState(false);
    function hide() {
        setOpen(false);
    }
    function show() {
        setOpen(true);
    }

    return (
        <BackdropContext.Provider value={{ show, hide }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {props.children}
        </BackdropContext.Provider>
    )
}
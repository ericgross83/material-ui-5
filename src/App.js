import './App.css';
import {Container, Grid} from "@mui/material";
import TourCard from "./components/TourCard";
import * as PropTypes from "prop-types";

function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};

function App() {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={5}>
                    <TourCard/>
                    <TourCard/>
                    <TourCard/>
                    <TourCard/>
                </Grid>
            </Container>
        </div>
    );
}

export default App;

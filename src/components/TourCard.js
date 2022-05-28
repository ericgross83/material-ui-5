import React from 'react';
import {Box, Grid, Paper, Rating, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";

export default function TourCard() {
    const boxStyles = {
        display: "flex",
        alignItems: "center"
    }
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className={'img'} src={'https://picsum.photos/200'}/>
                <Box paddingX={1}>
                    <Typography variant={'subtitle1'} component={'h2'}>
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={boxStyles}
                    >
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant={'body2'} component={'p'} marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={boxStyles} marginTop={3}>
                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size={"small"} />
                        <Typography variant={"body2"} component={"p"}>4.5</Typography>
                        <Typography variant={"body3"} component={"p"} marginLeft={1.5}>(655 reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant={"h6"} component={"h3"} marginTop={0}>From C $ 147</Typography>

                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

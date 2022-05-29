import React from 'react';
import {Box, createTheme, Grid, Paper, Rating, ThemeProvider, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: {
                    variant: "body2"
                }, style: {
                    fontSize: 11
                }
            }, {
                props: {
                    variant: "body3"
                }, style: {
                    fontSize: 9
                }
            },]
        }
    }
})

export default function TourCard({tour}) {
    const boxStyles = {
        display: "flex", alignItems: "center"
    }
    return (<Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img className={'img'} src={tour.image}/>
                    <Box paddingX={1}>
                        <Typography variant={'subtitle1'} component={'h2'}>
                            {tour.name}
                        </Typography>
                        <Box
                            sx={boxStyles}
                        >
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography variant={'body2'} component={'p'} marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box sx={boxStyles} marginTop={3}>
                            <Rating name="read-only" value={tour.rating} precision={0.5} readOnly size={"small"}/>
                            <Typography variant={"body2"} component={"p"}>{tour.rating}</Typography>
                            <Typography variant={"body3"} component={"p"} marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant={"h6"} component={"h3"} marginTop={0}>From C ${tour.price}</Typography>

                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>);
};

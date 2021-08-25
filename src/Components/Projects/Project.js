import React from 'react'
import '../../App.css'
import './Project.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import projectArr from './projectItems'
const useStyles = makeStyles({
    root: {
        maxWidth: "30vw",
        marginLeft: "3px",
        marginRight: "3px",
        marginTop: "5px",
        marginBottom: "5px",
        alignSelf: "center",
        backgroundColor: "rgb(220,220,220)",
        height: "45vh",
        justifyContent:"space-between"
    },
    media: {
        height: "15vh",
    },
});

const Project = () => {
    const classes = useStyles();
    return (
        <div className="projectContainer" id="Projects">
            <div className="globalDivider">
            </div>
            <h2 className="globalDividerTitle">Projects</h2>
            <div className="box">
                {
                    projectArr.map((item, index) => (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title={item.Name}
                                />
                                <CardContent style={{ height: "16vh" }}>
                                    <Typography gutterBottom variant="h5" component="h3" style={{ color: "black",fontSize:"1.5rem" }}>
                                        {item.Name}
                                    </Typography>
                                    <Typography style={{ color: "black",fontSize:"1rem" }}>
                                        {item.Description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{backgroundColor:"rgb(88,88,88)",marginTop:"auto"}}>
                                <Button size="small" color="primary" style={{marginBottom:"0px",marginTop:"auto"}}>
                                    <a
                                        href={item.Github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github fa-3x"/>
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
export default Project
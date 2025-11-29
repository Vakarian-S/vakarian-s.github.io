import './App.css'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@mui/material";
import AppBar from "./surfaces/AppBar.tsx";

export const App = () => {
    return (
        <div>
            <AppBar/>
            <Box padding={2} component="section" display={"flex"} justifyContent={'center'}>
                <Typography variant="h2" >
                    My Projects
                </Typography>
            </Box>
            <Container
                sx={{
                    paddingTop: { 'xs': 4, 'md': 4},
                    paddingX: { 'xs': 0, 'md': 4},
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: 5
                }} maxWidth={'xl'}>
                <Card>
                    <CardMedia
                        component="video"
                        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                        controls={true}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardMedia
                        component="video"
                        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                        controls={true}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card >
                    <CardMedia
                        component="video"
                        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                        controls={true}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Container>
            {/* <Container maxWidth={'xl'}>
                <Box flexDirection="row" display="flex" justifyContent="space-between">
                    <Box padding={2}>
                        <Box>
                            <img src={'https://picsum.photos/500/500?random=3'}/>
                        </Box>
                        <Box padding={5}>
                            <Box padding={1}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="C++" color="primary"/>
                                    <Chip label="OpenGL" color="success"/>
                                    <Chip label="SDL3" color="success"/>
                                </Stack>
                            </Box>
                            <Box padding={1}>
                                <Typography variant="h3">Ricochet Game</Typography>
                                <Typography>Our Midstone project sample description</Typography>
                            </Box>
                            <Button variant="text" href={'https://github.com/Vakarian-S'} target={'_blank'}>Check it out on Github</Button>

                        </Box>
                    </Box>
                    <Box padding={2}>
                        <Box>
                           <video width={'500px'}  style={{ aspectRatio: 16/ 9}} controls src={'public/Game101.mp4'}></video>
                        </Box>
                        <Box padding={5}>
                            <Box padding={1}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="C++" color="primary"/>
                                    <Chip label="2D" color="success"/>
                                    <Chip label="SDL3" color="success"/>
                                </Stack>
                            </Box>
                            <Box padding={1}>
                                <Typography variant="h3">Bouncing Balls</Typography>
                                <Typography>My Physics homework</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box padding={2}>
                        <Box>
                            <img src={'https://picsum.photos/500/500?random=2'}/>
                        </Box>
                        <Box padding={5}>
                            <Box padding={1}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="C++" color="primary"/>
                                    <Chip label="3D" color="success"/>
                                    <Chip label="SDL3" color="success"/>
                                </Stack>
                            </Box>
                            <Box padding={1}>
                                <Typography variant="h3">Snooker Simulation</Typography>
                                <Typography>Physics Homework</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>*/}
        </div>
    );
}

export default App;

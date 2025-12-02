import './App.css'
import {
    Box,
    Container,
    Typography
} from "@mui/material";
import AppBar from "./surfaces/AppBar.tsx";
import ProjectCard from "./components/ProjectCard.tsx";

const projects = [
    {
        title: 'Midstone Project',
        description: 'Our midstone project sample description',
        githubLink: 'https://github.com/MattPiet/Mid-Stone',
        videoSrc: 'public/Midstone.webm',
        chips: ['C++', 'OpenGL', 'SDL3'],
    },
    {
        title: 'Game 101 Final Project',
        description: 'My final project for our Game 101 class, implementing graphics through SDL',
        githubLink: 'https://github.com/Vakarian-S/Midstone',
        videoSrc: 'public/Midstone.webm',
        chips: ['C++', 'SDL2'],
    },
    {
        title: 'Physics Homework',
        description: 'Our midstone project sample description',
        githubLink: 'https://github.com/Vakarian-S/Midstone',
        videoSrc: 'public/Midstone.webm',
        chips: ['C++', 'OpenGL', 'SDL2'],
    },
]

export const App = () => {
    return (
        <div>
            <AppBar/>
            <Box padding={2} component="section" display={"flex"} justifyContent={'center'}>
                <Typography variant="h2">
                    My Projects
                </Typography>
            </Box>
            <Container
                sx={{
                    paddingTop: {'xs': 4, 'md': 4},
                    paddingX: {'xs': 0, 'md': 4},
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: 5
                }} maxWidth={'xl'}>
                {projects && projects.length && (projects.map((project, index) => (
                    <ProjectCard {...project} key={index}/>
                )))}
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

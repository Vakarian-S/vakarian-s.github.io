import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

function ResponsiveAppBar() {

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1}}>
                        <Typography
                            variant="h2"
                            fontWeight={"bold"}
                            noWrap
                            component="a"
                            sx={{fontSize: {xs: '18px', md: '32px'}}}
                        >
                            Sebastian Villarroel
                        </Typography>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="My LinkedIn">
                            <IconButton href={'https://www.linkedin.com/in/sebastian-villarroel-2243aa177/'}
                                        aria-label="linkedin" size={"medium"} style={{color: 'white'}}>
                                <LinkedInIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Github">
                            <IconButton href={'https://github.com/Vakarian-S'} aria-label="github" size={"medium"}
                                        style={{color: 'white'}}>
                                <GitHubIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="My Resume">
                            <IconButton href={'https://www.linkedin.com/in/sebastian-villarroel-2243aa177/'}
                                        aria-label="resume" size={"medium"} style={{color: 'white'}}>
                                <DescriptionIcon fontSize={"large"}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
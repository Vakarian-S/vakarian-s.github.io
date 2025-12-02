import { Button, Card, CardActions, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";

const ProjectCard = ({
    videoSrc,
    title,
    description,
    githubLink,
    chips
}) => {
    return (
        <Card sx={{flexGrow: {md: 1}, flexBasis: {md: 0}}}>
            <CardMedia
                sx={{height: 270, background: 'black'}}
                component="video"
                src={videoSrc || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                controls={true}
            />
            <CardContent>
                <Box paddingBottom={1} display={'flex'} gap={1}>
                    {chips && chips.map((chip, index) => (
                        <Chip key={index} label={chip} color={index === 0 ? 'primary' : 'secondary'}/>
                    ))}
                </Box>

                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{paddingLeft: 2}}>
                <Button sx={{paddingLeft: 0}} href={githubLink || '#'} target={'_blank'} size="small">View on GitHub</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
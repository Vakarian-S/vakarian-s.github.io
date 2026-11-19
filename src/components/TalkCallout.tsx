import { Button, Container } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import Reveal from "@/components/Reveal";

const talk = {
    title: "I taught a class on ECS",
    blurb: "A deck I presented to my Game Engines 5 class. It shows why objects and pointers cause cache misses. Then it builds an ECS step by step: archetypes, systems and a command buffer.",
    href: "/slides/ecs/index.html",
};

export default function TalkCallout() {
    return (
        <Container maxWidth="xl" sx={{pt: 5}}>
            <Reveal delay={0}>
                <aside
                    aria-label="Talk"
                    className="flex flex-col gap-4 rounded-xl border border-gold-600/30 bg-gold-600/10 p-5 md:flex-row md:items-center md:gap-6 md:px-7 md:py-6"
                >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gold-600 text-white md:size-14">
                        <SlideshowOutlinedIcon aria-hidden="true" fontSize="large"/>
                    </span>

                    <div className="flex min-w-0 grow flex-col gap-1">
                        <span className="uppercase text-xs font-medium tracking-[0.08333em] text-brand-900/70">
                            Talk
                        </span>
                        <span className="text-xl font-medium leading-tight text-brand-900 md:text-2xl">
                            {talk.title}
                        </span>
                        <p className="max-w-[62ch] text-brand-900/80">{talk.blurb}</p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-2 md:items-end">
                        <Button
                            href={talk.href}
                            target="_blank"
                            rel="noreferrer"
                            variant="contained"
                            endIcon={<ArrowOutwardIcon/>}
                            className="min-h-11"
                        >
                            Open the slides
                        </Button>
                        <span className="text-center text-xs text-brand-900/70">
                            Opens in a new tab. Use the arrow keys.
                        </span>
                    </div>
                </aside>
            </Reveal>
        </Container>
    );
}

"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TopAppBar from "./TopAppBar";

const theme = createTheme({
    typography: {
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    },
    palette: {
        primary: {
            50: "#e8e9f2",
            100: "#c4c9e0",
            900: "#212463",
            light: "#c4c9e0",
            main: "#5f69a6",
            dark: "#212463",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#7d7340",
            dark: "#ba000d",
            contrastText: "#fff",
        },
        background: {
            default: "#f8f9fc",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: "#212463",
                    "&:hover": { backgroundColor: "#161938" },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: 2 },
            },
        },
    },
});

export default function Providers(props: { children: React.ReactNode }) {
    const year = new Date().getFullYear();

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box className="bg-page min-h-screen">
                    <TopAppBar />
                    {props.children}
                    <footer className="border-t border-brand-900/10 py-8 text-sm text-brand-900/70">
                        <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-3 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
                            <span>© {year} Sebastian Villarroel</span>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/sebastian-villarroel-2243aa177/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-brand-900"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/Vakarian-S"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-brand-900"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="/2026_09_Game_Programming_Intern.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-brand-900"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </footer>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}

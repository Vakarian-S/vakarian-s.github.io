import type { ReactNode } from "react";

// Full class names so Tailwind can find them.
const tones = {
    light: "border-gold-600", // on the light page
    dark: "border-gold-300", // on navy
} as const;

type CornerFrameProps = {
    children: ReactNode;
    tone?: keyof typeof tones;
    className?: string;
};

const corner = "pointer-events-none absolute size-4 md:size-5 motion-safe:transition-transform motion-safe:duration-300 ease-out-quint";

export default function CornerFrame({ children, tone = "dark", className = "" }: CornerFrameProps) {
    const color = tones[tone];
    return (
        <div className={`relative ${className}`}>
            {children}
            <span aria-hidden="true" className={`${corner} ${color} -top-2.5 -left-2.5 border-t-2 border-l-2 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:translate-y-1 motion-safe:group-focus-within:translate-x-1 motion-safe:group-focus-within:translate-y-1`} />
            <span aria-hidden="true" className={`${corner} ${color} -top-2.5 -right-2.5 border-t-2 border-r-2 motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:translate-y-1 motion-safe:group-focus-within:-translate-x-1 motion-safe:group-focus-within:translate-y-1`} />
            <span aria-hidden="true" className={`${corner} ${color} -bottom-2.5 -left-2.5 border-b-2 border-l-2 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 motion-safe:group-focus-within:translate-x-1 motion-safe:group-focus-within:-translate-y-1`} />
            <span aria-hidden="true" className={`${corner} ${color} -bottom-2.5 -right-2.5 border-b-2 border-r-2 motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:-translate-y-1 motion-safe:group-focus-within:-translate-x-1 motion-safe:group-focus-within:-translate-y-1`} />
        </div>
    );
}

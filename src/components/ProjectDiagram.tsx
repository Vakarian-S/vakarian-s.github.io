import * as React from "react";

const cellStroke = "rgb(255 255 255 / 0.45)";

type ColumnRowProps = {
    label: string;
    labelX: number;
    x: number;
    y: number;
    width: number;
};

function ColumnRow(props: ColumnRowProps) {
    const {label, labelX, x, y, width} = props;
    const cell = width / 6;

    return (
        <>
            <text x={labelX} y={y + 15} textAnchor="end" fontSize="11" fill="#212463">{label}</text>
            <rect x={x} y={y} width={width} height="22" rx="3" fill="#5f69a6"/>
            {[1, 2, 3, 4, 5].map((index) => (
                <line
                    key={index}
                    x1={x + cell * index}
                    y1={y}
                    x2={x + cell * index}
                    y2={y + 22}
                    stroke={cellStroke}
                    strokeWidth="1"
                />
            ))}
        </>
    );
}

function PhaseBox(props: { label: string; x: number }) {
    return (
        <>
            <rect x={props.x} y="30" width="190" height="52" rx="6" fill="#212463"/>
            <text x={props.x + 95} y="60" textAnchor="middle" fontSize="14" fontWeight="500" fill="#ffffff">
                {props.label}
            </text>
        </>
    );
}

function EngineDiagram() {
    return (
        <svg viewBox="0 0 960 500" role="img" className="block h-auto w-full min-w-[720px] sm:min-w-0">
            <title>
                Engine architecture: three system phases read and write the ECS world, structural changes pass
                through a command buffer, and a draw list crosses the boundary to the Vulkan renderer.
            </title>
            <desc>
                Every frame runs three phases: a fixed 1/60 second step, an update pass and an extract pass. All
                three read and write the World, which stores entities in archetypes, one packed column per
                component. Structural changes are queued in a command buffer and applied at phase ends. The
                World&apos;s memory comes from an arena. The extract pass hands a draw list and a camera across a
                boundary to the hand-written Vulkan 1.3 renderer; data crosses that boundary but Vulkan types do
                not.
            </desc>

            <defs>
                <marker id="diagram-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
            </defs>

            <g fontSize="11" fill="#7d7340" letterSpacing="0.08em">
                <text x="40" y="18">EVERY FRAME</text>
                <text x="700" y="488" textAnchor="middle">DATA CROSSES &#8212; TYPES DO NOT</text>
            </g>

            <PhaseBox label="Fixed &#183; 1/60 s" x={40}/>
            <PhaseBox label="Update" x={250}/>
            <PhaseBox label="Extract" x={460}/>

            <g stroke="#5f69a6" strokeWidth="1.2" fill="none" markerEnd="url(#diagram-arrow)">
                <line x1="232" y1="56" x2="246" y2="56"/>
                <line x1="442" y1="56" x2="456" y2="56"/>
                <line x1="135" y1="84" x2="135" y2="134"/>
                <line x1="345" y1="84" x2="345" y2="134"/>
                <line x1="555" y1="84" x2="555" y2="134"/>
                <line x1="310" y1="352" x2="310" y2="396"/>
                <line x1="390" y1="396" x2="390" y2="352"/>
                <line x1="654" y1="245" x2="734" y2="245"/>
            </g>

            <rect x="40" y="140" width="610" height="210" rx="10" fill="#ffffff" stroke="#212463" strokeOpacity="0.15"/>
            <text x="64" y="174" fontSize="16" fontWeight="500" fill="#212463">World</text>
            <text x="64" y="194" fontSize="11" fill="#5f69a6">archetypes &#8212; one packed column per component</text>

            <rect x="64" y="210" width="270" height="120" rx="8" fill="#e8e9f2"/>
            <text x="76" y="230" fontSize="11" fill="#5f69a6">Archetype A</text>
            <ColumnRow label="Transform" labelX={150} x={158} y={254} width={168}/>
            <ColumnRow label="Renderable" labelX={150} x={158} y={286} width={168}/>

            <rect x="356" y="210" width="270" height="120" rx="8" fill="#e8e9f2"/>
            <text x="368" y="230" fontSize="11" fill="#5f69a6">Archetype B</text>
            <ColumnRow label="Transform" labelX={442} x={450} y={242} width={162}/>
            <ColumnRow label="Renderable" labelX={442} x={450} y={270} width={162}/>
            <ColumnRow label="Velocity" labelX={442} x={450} y={298} width={162}/>

            <line x1="130" y1="396" x2="130" y2="354" stroke="#5f69a6" strokeWidth="1" strokeDasharray="4 4"/>
            <rect x="40" y="400" width="180" height="60" rx="8" fill="#ffffff" stroke="#212463" strokeOpacity="0.15"/>
            <text x="60" y="425" fontSize="14" fontWeight="500" fill="#212463">Arena</text>
            <text x="60" y="445" fontSize="11" fill="#5f69a6">one block of memory</text>

            <text x="302" y="378" textAnchor="end" fontSize="11" fill="#5f69a6">queued</text>
            <text x="400" y="378" fontSize="11" fill="#5f69a6">applied at phase ends</text>

            <rect x="250" y="400" width="200" height="60" rx="8" fill="#ffffff" stroke="#212463" strokeOpacity="0.15"/>
            <text x="270" y="425" fontSize="14" fontWeight="500" fill="#212463">CommandBuffer</text>
            <text x="270" y="445" fontSize="11" fill="#5f69a6">structural changes</text>

            <line x1="700" y1="16" x2="700" y2="466" stroke="#7d7340" strokeWidth="1" strokeDasharray="6 5"/>

            <rect x="740" y="140" width="200" height="210" rx="10" fill="#2b3063"/>
            <g fill="#ffffff" fontSize="16" fontWeight="500">
                <text x="762" y="184">Vulkan 1.3</text>
                <text x="762" y="206">renderer</text>
            </g>
            <g fill="#c4c9e0" fontSize="11">
                <text x="762" y="240">written by hand</text>
                <text x="762" y="260">dynamic rendering</text>
                <text x="762" y="280">Phong &#183; textures &#183; OBJ</text>
                <text x="762" y="308">takes a draw list</text>
                <text x="762" y="326">and a camera</text>
            </g>
        </svg>
    );
}

const diagrams: Record<string, { caption: string; render: () => React.ReactNode }> = {
    "vulkan-ecs-engine": {
        caption: "How a frame moves through the engine.",
        render: () => <EngineDiagram/>,
    },
};

export function getProjectDiagram(slug: string) {
    return diagrams[slug] ?? null;
}

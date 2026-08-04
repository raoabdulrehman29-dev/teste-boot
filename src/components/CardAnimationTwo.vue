<script setup>

</script>

<template>
    <div class="network-card-bg absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-[inherit]"
        aria-hidden="true">
        <svg viewBox="0 0 500 350" preserveAspectRatio="xMidYMid slice" class="h-full w-full">
            <defs>
                <!-- Much lighter gradients -->
                <linearGradient id="nc-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2bb6c4" stop-opacity="0" />
                    <stop offset="50%" stop-color="#2bb6c4" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="#2bb6c4" stop-opacity="0" />
                </linearGradient>
                <radialGradient id="nc-node-glow">
                    <stop offset="0%" stop-color="#2bb6c4" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="#2bb6c4" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="nc-node-glow-alt">
                    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.1" />
                    <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
                </radialGradient>
            </defs>


            <g class="nc-links" stroke="#2bb6c4" stroke-width="0.8" opacity="0.06" fill="none">

                <line x1="80" y1="70" x2="200" y2="45" />
                <line x1="200" y1="45" x2="350" y2="80" />
                <line x1="80" y1="70" x2="160" y2="160" />

                <line x1="160" y1="160" x2="350" y2="80" />
                <line x1="160" y1="160" x2="280" y2="240" />
                <line x1="350" y1="80" x2="380" y2="220" />
                <line x1="280" y1="240" x2="380" y2="220" />


                <line x1="80" y1="70" x2="60" y2="220" />
                <line x1="60" y1="220" x2="160" y2="160" />
                <line x1="60" y1="220" x2="280" y2="240" />


                <line x1="200" y1="45" x2="160" y2="160" />
                <line x1="350" y1="80" x2="280" y2="240" />
                <line x1="80" y1="70" x2="280" y2="240" />
                <line x1="60" y1="220" x2="350" y2="80" />
            </g>


            <g class="nc-flow" fill="none" stroke="url(#nc-line-grad)" stroke-width="1.2">
                <path class="nc-flow-path nc-flow-path--1" d="M80,70 L200,45 L350,80" />
                <path class="nc-flow-path nc-flow-path--2" d="M80,70 L160,160 L280,240" />
                <path class="nc-flow-path nc-flow-path--3" d="M350,80 L380,220 L280,240" />
                <path class="nc-flow-path nc-flow-path--4" d="M60,220 L160,160 L350,80" />
                <path class="nc-flow-path nc-flow-path--5" d="M200,45 L160,160 L60,220" />
                <path class="nc-flow-path nc-flow-path--6" d="M80,70 L280,240 L380,220" />
            </g>


            <g class="nc-nodes">

                <g transform="translate(80, 70)">
                    <circle r="18" fill="url(#nc-node-glow)" class="nc-glow nc-glow--a" />
                    <circle r="3.5" fill="#2bb6c4" opacity="0.4" />
                </g>

                <g transform="translate(200, 45)">
                    <circle r="16" fill="url(#nc-node-glow-alt)" class="nc-glow nc-glow--b" />
                    <circle r="3" fill="#6366f1" opacity="0.35" />
                </g>

                <g transform="translate(350, 80)">
                    <circle r="19" fill="url(#nc-node-glow)" class="nc-glow nc-glow--c" />
                    <circle r="4" fill="#2bb6c4" opacity="0.45" />
                </g>

                <!-- Middle Row -->
                <g transform="translate(160, 160)">
                    <circle r="17" fill="url(#nc-node-glow-alt)" class="nc-glow nc-glow--a" />
                    <circle r="3.5" fill="#6366f1" opacity="0.4" />
                </g>

                <g transform="translate(280, 240)">
                    <circle r="18" fill="url(#nc-node-glow)" class="nc-glow nc-glow--b" />
                    <circle r="4" fill="#2bb6c4" opacity="0.4" />
                </g>

                <!-- Bottom Row -->
                <g transform="translate(60, 220)">
                    <circle r="15" fill="url(#nc-node-glow-alt)" class="nc-glow nc-glow--c" />
                    <circle r="3" fill="#6366f1" opacity="0.35" />
                </g>

                <g transform="translate(380, 220)">
                    <circle r="16" fill="url(#nc-node-glow)" class="nc-glow nc-glow--a" />
                    <circle r="3.5" fill="#2bb6c4" opacity="0.4" />
                </g>

                <!-- Extra nodes for better distribution -->
                <g transform="translate(140, 90)">
                    <circle r="12" fill="url(#nc-node-glow-alt)" class="nc-glow nc-glow--b" />
                    <circle r="2.5" fill="#6366f1" opacity="0.3" />
                </g>

                <g transform="translate(310, 170)">
                    <circle r="13" fill="url(#nc-node-glow)" class="nc-glow nc-glow--c" />
                    <circle r="2.5" fill="#2bb6c4" opacity="0.3" />
                </g>

                <g transform="translate(110, 200)">
                    <circle r="11" fill="url(#nc-node-glow-alt)" class="nc-glow nc-glow--a" />
                    <circle r="2" fill="#6366f1" opacity="0.25" />
                </g>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.network-card-bg {
    background: radial-gradient(circle at 30% 20%, rgba(43, 182, 196, 0.03) 0%, transparent 70%);
}

/* ====== NODE BREATHING GLOW ====== */
.nc-glow {
    transform-origin: center;
    transform-box: fill-box;
    animation: nc-pulse 5s ease-in-out infinite;
}

.nc-glow--a {
    animation-delay: 0s;
}

.nc-glow--b {
    animation-delay: 1.6s;
}

.nc-glow--c {
    animation-delay: 3.2s;
}

@keyframes nc-pulse {

    0%,
    100% {
        opacity: 0.2;
        transform: scale(0.85);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.2);
    }
}


.nc-flow-path {
    stroke-dasharray: 40 300;
    stroke-linecap: round;
    animation: nc-flow 4s linear infinite;
}

.nc-flow-path--1 {
    animation-duration: 3.5s;
}

.nc-flow-path--2 {
    animation-duration: 4.2s;
    animation-delay: 0.5s;
}

.nc-flow-path--3 {
    animation-duration: 3.8s;
    animation-delay: 1.2s;
}

.nc-flow-path--4 {
    animation-duration: 4.8s;
    animation-delay: 1.8s;
}

.nc-flow-path--5 {
    animation-duration: 3.2s;
    animation-delay: 2.5s;
}

.nc-flow-path--6 {
    animation-duration: 4.5s;
    animation-delay: 0.8s;
}

@keyframes nc-flow {
    from {
        stroke-dashoffset: 340;
    }

    to {
        stroke-dashoffset: 0;
    }
}


@media (prefers-reduced-motion: reduce) {

    .nc-glow,
    .nc-flow-path {
        animation: none;
    }

    .nc-glow {
        opacity: 0.3;
        transform: scale(0.9);
    }
}
</style>
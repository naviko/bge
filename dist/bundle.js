var i=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Falling Blocks Game</title>

    <!-- Load Phaser SDK (single include) -->
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.86.0/dist/phaser.min.js?v=9"><\/script>
    <!-- Minimal UI library -->
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@2.0.0-alpha1/css/pico.min.css">

    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: #000;
            touch-action: none;
            -webkit-user-select: none;
            user-select: none;
        }
    </style>
</head>

<body>

    <!-- Telegram loader (only shown inside Telegram) -->
    <div id="tg-loader" style="
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background: #111;
        color: #fff;
        font-family: Arial, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;">
        <div id="tg-loader-text">Loading\u2026</div>
    </div>

    <div id="volume-ui" style="
        position: fixed !important;
        top: 16px !important;
        right: 8px !important;
        bottom: auto !important;
        left: auto !important;
        min-width: 130px;
        padding: 4px 6px;
        background: rgba(64, 42, 24, 0.9);
        border-radius: 8px;
        z-index: 999998;
        color: #fff;
        backdrop-filter: blur(4px);
        box-shadow: 0 3px 10px rgba(0,0,0,0.16);
        font-size: 13px;
        ">
        <label for="volume-slider" style=" display: block; font-weight: 600; color: #fff; font-size: 13px; margin-bottom: 2px;">
            Volume <span id="volume-value">100%</span>
        </label>
        <input type="range" id="volume-slider" min="0" max="1" step="0.01" value="1" style="width: 115px;">
    </div>

    <!-- Telegram detection + setup -->
    <script>
        const isTelegram =
            typeof window.Telegram !== "undefined" &&
            typeof Telegram.WebApp !== "undefined";

        if (isTelegram) {
            const loader = document.getElementById("tg-loader");
            if (loader) loader.style.display = "flex";

            Telegram.WebApp.ready();
            Telegram.WebApp.expand();
            Telegram.WebApp.disableClosingConfirmation();
        }
    <\/script>

    <script>
        (() => {
            const slider = document.getElementById("volume-slider");
            const label = document.getElementById("volume-value");
            const update = v => {
                const pct = Math.round(v * 100);
                if (label) label.textContent = pct + "%";
                window.dispatchEvent(new CustomEvent("tg-volume", { detail: { volume: v } }));
            };
            if (slider) {
                slider.addEventListener("input", e => update(parseFloat(e.target.value)));
                update(parseFloat(slider.value));
            }
        })();
    <\/script>

    <!-- Load your Phaser game -->
    <script type="module" src="src/main.js?v=9"><\/script>

</body>
</html>
`;export{i as default};

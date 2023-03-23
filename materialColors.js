  import { Hct, argbFromHex, themeFromSourceColor, applyTheme  } from "https://cdn.skypack.dev/@material/material-color-utilities@0.2.4";

window.setInterval(function () {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex(metaThemeColor.getAttribute("content")), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.querySelector(':root'), dark: systemDark});
},1);

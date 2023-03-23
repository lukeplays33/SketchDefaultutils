  import { Hct, argbFromHex, themeFromSourceColor, applyTheme  } from "https://cdn.skypack.dev/@material/material-color-utilities@0.2.4";

window.setInterval(function () {

// Simple demonstration of HCT.
const color = Hct.fromInt(0xff4285f4);
console.log(`Hue: ${color.hue}`);
console.log(`Chrome: ${color.chroma}`);
console.log(`Tone: ${color.tone}`);

    var metaThemeColor = document.querySelector("meta[name=theme-color]");

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex(metaThemeColor.getAttribute("content")), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2));

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.querySelector(':root'), dark: systemDark});
},1);

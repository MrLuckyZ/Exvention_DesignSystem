module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "blue-dark":       "#2E3579",
          "blue":            "#005FBC",
          "blue-lightest":   "#DEF3FF",
          "orange-dark":     "#FF5444",
          "orange":          "#E69755",
          "orange-lightest": "#FFFED7",
        },
        accent: {
          "yellow":          "#EC920E",
          "yellow-lighter":  "#FAB900",
          "yellow-lightest": "#FFE86A",
          "green":           "#63BE00",
          "green-lighter":   "#88E226",
          "green-lightest":  "#BBF280",
          "red":             "#DB0000",
          "red-lighter":     "#FF4A4B",
          "red-lightest":    "#FF7A7A",
        },
        neutral: {
          "black":           "#202020",
          "basic-005":       "#5A6E7B",
          "basic-004":       "#A9AFAB",
          "basic-003":       "#BCCCD6",
          "basic-002":       "#EAF0F5",
          "basic-001":       "#F9FAFB",
          "white":           "#FFFFFF",
          "divider":         "#5A6E7B1A", // 10% opacity for divider
          "backdrop":        "#000000CC", // 80% opacity for backdrop
        },
        gradient: {
          "blue-gradient":    ["#2E3579", "#005FBC"],
          "orange-gradient":  ["#FF5444", "#E69755"],
          "yellow-gradient":  ["#EC920E", "#FFE86A"],
          "green-gradient":   ["#63BE00", "#BBF280"],
          "red-gradient":     ["#DB0000", "#FF7A7A"],
          "grey-gradient":    ["#A9AFAB", "#BCCCD6"],
          "grey-lighter-gradient": ["#BCCCD6", "#EAF0F5"],
        },
      },
    },
  },
  plugins: [],
};

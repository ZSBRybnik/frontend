export default {
  launch: {
    dumpio: true,
    headless: true,
    args: ["--disable-infobars", `--no-sandbox``--disable-setuid-sandbox`],
  },
  browserContext: "default",
};

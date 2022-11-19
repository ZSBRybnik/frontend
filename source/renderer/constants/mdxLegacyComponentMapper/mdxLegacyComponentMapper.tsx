import { MarkdownToJSX } from "markdown-to-jsx";
import TikTokLegacy from "../../components/TikTok/TikTok";

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    TikTok: {
      component: TikTokLegacy,
    },
  },
  namedCodesToUnicode: {
    plus: "\u002b",
    minus: "\u2212",
    currentyear: new Date().getFullYear().toString(),
    currentday: new Date().getDay().toString(),
    currentmonth: new Date().getMonth().toString(),
    currenthour: new Date().getHours().toString(),
    currentminute: new Date().getMinutes().toString(),
    currentsecond: new Date().getSeconds().toString(),
    currentdate: new Date().toString(),
  },
};

export default markdownOptions;

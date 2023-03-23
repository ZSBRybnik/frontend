import { platform } from "os";
import { $ } from "zx";
import destination from "~frontend/source/scripts/build/constants/destination/destination";
import scriptsKeys from "~frontend/source/scripts/build/constants/scriptsKeys/scriptsKeys";
import Programs from "~frontend/source/scripts/runner/types/programs/programs";

beforeAll((): Promise<void> => {
  return new Promise<void>((resolve): void => {
    const os: NodeJS.Platform = platform();
    if (os === "win32") {
      $.shell = "cmd";
      $.prefix = "";
    }
    $.verbose = true;
    (async () => {
      await $`cross-env NODE_OPTIONS="--max-old-space-size=8192" ${Programs.Yarn} run ${scriptsKeys["build-web"]}`;
      $`yarn run ${Programs.Serve} -s ${destination}`;
      resolve();
    })();
  });
});

describe("Main tests", (): void => {
  beforeAll(async (): Promise<void> => {
    setTimeout(async (): Promise<void> => {
      await page.goto("http://localhost:5000");
    }, 5000);
  });
  it("Has been detected as bot", async (): Promise<void> => {
    const webdriver: boolean = await page.evaluate((): Promise<boolean> => {
      return Promise.resolve(window.navigator.webdriver);
    });
    expect(webdriver).toBe(true);
  });
});

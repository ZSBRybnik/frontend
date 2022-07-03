import { exec, execSync } from "child_process";
import destination from "~scripts/build/constants/destination/destination";
import scriptsKeys from "~scripts/build/constants/scriptsKeys/scriptsKeys";
import Programs from "~scripts/runner/types/programs/programs";

beforeAll((): Promise<void> => {
  return new Promise<void>((resolve): void => {
    execSync(`${Programs.Yarn} run ${scriptsKeys["build-web"]}`);
    exec(`${Programs.Serve} -s ${destination}`);
    resolve();
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

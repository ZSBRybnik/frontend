import config from "~root/jest-puppeteer.config";
import { Launch } from "~scripts/runner/types/jestPuppeteerConfig/jestPuppeteerConfig";

const { browserContext, launch } = config;
const { dumpio, headless, args }: Launch = launch;

describe("Jest Puppeteer Config", (): void => {
  it("Dumpio is enabled", async (): Promise<void> => {
    expect(dumpio).toBe(true);
  });
  it("Has default browserContext", async (): Promise<void> => {
    expect(browserContext).toBe("default");
  });
  it("Headless is enabled", async (): Promise<void> => {
    expect(headless).toBe(true);
  });
  it("Args have contains --disable-infobars", async (): Promise<void> => {
    expect(args).toContain("--disable-infobars");
  });
});

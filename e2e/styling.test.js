import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('should show up in the correct position', async () => {
    await page.goto(baseUrl);
    await page.evaluate(() => {
      const button = document.querySelector('.popover-button');
      button.click();
    });
    await page.waitForSelector('.popover-active');
  });
});

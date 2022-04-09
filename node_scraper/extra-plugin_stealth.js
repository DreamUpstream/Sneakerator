const puppeteer = require("puppeteer-extra");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// puppeteer usage as normal
puppeteer
	.launch({
		headless: true,
		// args: ["--no-sandbox"],
		// "--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox",
		// executablePath: "/usr/bin/chromium",
	})
	.then(async (browser) => {
		console.log("Running tests..");
		const page = await browser.newPage();
		await page.goto("https://bot.sannysoft.com");
		await page.waitForTimeout(5000);
		await page.screenshot({ path: "testresult.png", fullPage: true });
		await browser.close();
		console.log(`All done, check the screenshot. ✨`);
	});

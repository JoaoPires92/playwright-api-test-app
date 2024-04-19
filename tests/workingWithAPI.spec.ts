import { test, expect } from '@playwright/test';

//APP URl: https://conduit.bondaracademy.com 
//API URl: https://conduit-api.bondaracademy.com

test.beforeEach(async ({page})=>{
await page.goto('https://conduit.bondaracademy.com/')

})

test('first test', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
});


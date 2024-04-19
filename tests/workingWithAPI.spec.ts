import { test, expect } from '@playwright/test';

//APP URl: https://conduit.bondaracademy.com 
//API URl: https://conduit-api.bondaracademy.com

test.beforeEach(async ({page})=>{
  // Call to mock API before the test
  await page.route('https://conduit-api.bondaracademy.com/api/tags', async route =>{
    const tags = {
      "tags": [
          "Joao",
          "Pires",
          "Playwright",
          "Udemy",
          "Course"
      ]
  }
    await route.fulfill({
      body:JSON.stringify(tags)
    })

  })

  await page.goto('https://conduit.bondaracademy.com/')

})

test('first test', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
});


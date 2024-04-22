import { test as setup } from '@playwright/test'
//import user from '../.auth/user.json'
//import fs from 'fs'

const authFile = '.auth/user.json'

setup('authentication', async ({ page }) => {
  // Call api login to get token
  await page.goto('https://conduit.bondaracademy.com')
  await page.getByText('Sign in').click()
  await page.getByRole('textbox',{name: "Email"}).fill('joaopires92@gmail.com')
  await page.getByRole('textbox',{name: "Password"}).fill('Password99')
  await page.getByRole('button').click()

  await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags')

  await page.context().storageState({path: authFile})


    // Call api login to get token
    //const response = await request.post('https://conduit.bondaracademy.com/api/users/login', {
      //data: {
        //user: { email: 'joaopires92@gmail.com', password: 'Password99' },
      //},
    //});
    //const responseBody = await response.json();
    //const accessToken = responseBody.user.token;

    // Get token from the user.json
    //user.origins[0].localStorage[0].value = accessToken
    //fs.writeFileSync(authFile, JSON.stringify(user))
    
    //process.env['ACCESS_TOKEN' = accessToken]

});

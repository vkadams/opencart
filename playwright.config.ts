import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000, // 30000ms (30 secs)
  testDir: './tests',
  fullyParallel: true,
  //retries: process.env.CI ? 2 : 0,
  retries: 1,
  //workers: process.env.CI ? 1 : undefined,
  //workers:1,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    //headless: false,
    viewport: {width: 1920, height: 1080}, // set default viewport size for consistency
    ignoreHTTPSErrors: true,// Ignore SSL errors if necessart
    permissions: ['geolocation'], // set necessary permissions for geolocation-based tests
  },
  //grep: /@master/,
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox']},
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari']},
    }*/
  ],
})
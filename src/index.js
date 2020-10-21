const axios = require('axios')

const url = process.env.WM_WEBHOOK_URL
const WM_WEBHOOK_METHOD = (process.env.WM_WEBHOOK_METHOD || 'GET').toUpperCase()

const WM_CHECK_NAME = process.env.WM_CHECK_NAME
const WM_CHECK_OUTPUT = process.env.WM_CHECK_OUTPUT
const WM_CHECK_EXIT_CODE = process.env.WM_CHECK_EXIT_CODE * 1 // to make sure it is a number

const data = {
  WM_CHECK_NAME,
  WM_CHECK_OUTPUT,
  WM_CHECK_EXIT_CODE,
  WM_WEBHOOK_METHOD
}

  ; (async () => {
    try {
      await axios[WM_WEBHOOK_METHOD.toLowerCase()](url, {
        data
      })

      console.log(`Message sent to webhook via ${WM_WEBHOOK_METHOD} method.`)
      process.exit(0)
    } catch (error) {
      console.log(`Message has not been send to webhook.`)
      console.error(error.response.status, error.response.statusText)
      process.exit(2)
    }
  })()

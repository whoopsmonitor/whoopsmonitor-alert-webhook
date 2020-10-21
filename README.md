# whoopsmonitor-alert-webhook
Alert that sends message to the webhook.

## Build
```sh
docker build -t whoopsmonitor-alert-webhook .
```

## Run image
```bash
docker run --rm --env-file .env whoopsmonitor-alert-webhook
```

## Environmental variables
- `WM_WEBHOOK_URL` - URL of the webhook
- `WM_WEBHOOK_METHOD` - method. GET or POST. Optional. GET is default.

### Example
Details of the check in Whoops Monitor configuration tab or for the `.env` file.

```yaml
WM_WEBHOOK_URL=http://...
WM_WEBHOOK_METHOD=POST
```

### Data
Webhook sends this data (uppercased):
 - `WM_CHECK_NAME` - name of the check
 - `WM_CHECK_OUTPUT` - check's output (stdout or stderr)
 - `WM_CHECK_EXIT_CODE` - exit status (0 - ok, 1 - warning, 2 - critical)
 - `WM_WEBHOOK_METHOD` - request method, GET or POST.


## Alert specification
Please read further details in the [alert docs](https://github.com/whoopsmonitor/whoopsmonitor/blob/master/docs/custom-alert.md).

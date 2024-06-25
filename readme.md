# Improve your app security with Dev Proxy

This is a sample application demonstrates how to use Dev Proxy to improve the security of your app.

> [!TIP]
> Tested using Dev Proxy Beta `v0.19-beta.5`

## Check for minimal permissions

If you work on a large solution that uses many endpoints, it can be difficult to build the exact list of minimal permissions for your application.

To check for minimal permissions:

1. Start the local web server, `npm start`
1. Start Dev Proxy, `devproxy-beta --config-file .\.dev-proxy\minimal-permissions.json --urls-to-watch "https://graph.micrsoft.com/*"`
1. Start recording mode, press <kbd>R</kdb>
1. Navigate to `http://localhost:3000`, login and wait for the table to be populated
1. Stop recording mode, press <kbd>S</kdb>
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Check if you are using excessive permissions

A common approach to security is to apply the principle of least privilege (PoLP). This principle applies to users, processes and programs.

To check your access token for excessive permissions:

1. Start the local web server, `npm start`
1. Start Dev Proxy, `devproxy-beta -c .\.dev-proxy\minimal-permissions.json -u "https://graph.micrsoft.com/*" --record`
1. Navigate to `http://localhost:3000`, login and wait for the table to be populated
1. Stop recording mode, press <kbd>S</kdb>
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

## Automate with Playwright

This scenario uses Playwright end to end tests to automate the issuing of requests that are sent from your app.

> [!NOTE]
> This scenario uses the `devproxyrc.json` file in the root as it's configuration

To run the tests:

1. Start Dev Proxy, `devproxy-beta --record`
1. Run tests, `npm test`
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

The output is saved to a markdown file.
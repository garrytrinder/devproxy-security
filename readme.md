# Improve your app security with Dev Proxy

This is a sample application demonstrates how to use Dev Proxy to improve the security of your app when making requests to Microsoft Graph API.

- Check for minimal permissions
- Check if you are using excessive permissions
- Prevent scope creep

> [!TIP]
> Tested using Dev Proxy Beta `v0.19-beta.5`

## Check for minimal permissions

If you work on a large solution that uses many endpoints, it can be difficult to build the exact list of minimal permissions for your application.

To check for minimal permissions locally:

1. Start the local web server, `npm start`
1. Start Dev Proxy, `devproxy-beta --config-file .\.dev-proxy\minimal-permissions.json --urls-to-watch "https://graph.microsoft.com/*"`
1. Start recording mode, press <kbd>R</kdb>
1. Navigate to `http://localhost:3000`, login and wait for the table to be populated
1. Stop recording mode, press <kbd>S</kdb>
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

The minimal scopes for the tracked requests is shown in the console output.

## Check if you are using excessive permissions

A common approach to security is to apply the principle of least privilege (PoLP). This principle applies to users, processes and programs.

To check your access token for excessive permissions locally:

1. Start the local web server, `npm start`
1. Start Dev Proxy in recording mode, `devproxy-beta -c .\.dev-proxy\minimal-permissions.json -u "https://graph.microsoft.com/*" --record`
1. Navigate to `http://localhost:3000`, login and wait for the table to be populated
1. Stop recording mode, press <kbd>S</kdb>
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>

The guidance is shown in the console output.

## Prevent scope creep

This scenario uses Playwright end to end tests to automate the issuing of requests that are sent from your app and generate a markdown report using the [MarkdownReporter](https://learn.microsoft.com/microsoft-cloud/dev/dev-proxy/technical-reference/markdownreporter) plugin.

> [!NOTE]
> This scenario uses the `devproxyrc.json` file in the root as it's configuration

To run the tests locally:

1. Start Dev Proxy, `devproxy-beta --record`
1. Run tests, `npm test`
1. Stop Dev Proxy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>
1. Open `MinimalPermissionsGuidancePlugin_MarkdownReporter.md` file to view the output

A [GitHub Workflow](./.github/workflows/api-permissions-check.yml) and [Azure DevOps Pipeline](./azure-pipelines.yml) are provided to automatically run Playwright and Dev Proxy when new code is committed to the repo.

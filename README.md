# Simple Viewer (Node.js)

![platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![node.js](https://img.shields.io/badge/Node.js-16.16-blue.svg)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-8.11-blue.svg)](https://www.npmjs.com/)
[![license](https://img.shields.io/:license-mit-green.svg)](https://opensource.org/licenses/MIT)

[Autodesk Platform Services](https://aps.autodesk.com) application built by following
the [Simple Viewer](https://tutorials.autodesk.io/tutorials/simple-viewer/) tutorial
from https://tutorials.autodesk.io.

![thumbnail](thumbnail.png)

## Development

### Prerequisites

- [APS credentials](https://forge.autodesk.com/en/docs/oauth/v2/tutorials/create-app)
- [Node.js](https://nodejs.org) (Long Term Support version is recommended)
- Command-line terminal such as PowerShell or bash (should be available on most systems)

> Consider using [Visual Studio Code](https://code.visualstudio.com) which, among other benefits,
> includes an [integrated terminal](https://code.visualstudio.com/docs/terminal/basics) as well.

### Setup & Run

- Clone this repository
- Create a _.env_ file in the project folder, and populate it with your APS credentials:

```bash
APS_CLIENT_ID=""       # enter your APS Client ID between the double-quotes
APS_CLIENT_SECRET=""   # enter your APS Client Secret between the double-quotes
```

- Open the terminal, making sure you are in the project folder
- Install dependencies: `npm install`
- Run the server: `npm start`

> When using [Visual Studio Code](https://code.visualstudio.com), you can start
> the application in debug mode by pressing `F5`.

## Troubleshooting

Please contact us via https://forge.autodesk.com/en/support/get-help.

## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for more details.

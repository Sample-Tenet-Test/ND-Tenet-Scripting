## Tenet Scripts

Tenet scripts are utilities to collate and verify information for activities in the Tenet framework. Contribution [guide](./CONTRIBUTING.md)


### Setup

#### Dev & Code Environment 

1. Install the following packages:
   1. [Git](https://git-scm.com/downloads)
   2. [Visual Studio Code](https://code.visualstudio.com/download)
   3. [Node.js LTS](https://nodejs.org/en/download)
2. Install the following extensions from the VSCode extensions tab or press `Ctrl+Shift+X` and search for following ID's:
   1. amazonwebservices.aws-toolkit-vscode
   2. vscjava.vscode-java-pack
   3. redhat.vscode-yaml
   4. dbaeumer.vscode-eslint
   5. xabikos.javascriptsnippets

#### Installation
If you have Node.js already installed:

```bash
npm install
```

#### Executing the test suite

```bash
npm test
```
____

### Style & guidlines

#### Coding Style

[Project follows Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)


#### Git Commit Style

1. Commit message format `<Short Description of Action>: <Brief Commit Message>`
1. Eg: 
	* `INIT: create serverless.yml`
	* `ADD: helper function to do an action`
	* `ENH: changed helper function to do this and that`
	* `RM: deleted img.jpg file`

____

### Folder Layout

#### Templated Folder Layout
```
|-- CONTRIBUTING.md
|-- README.md
|-- <AREA-1>
|   |-- <SUB-AREA-1>
|   |    |-- <ITEM-1>.test.js
|   |    |-- <ITEM-2>.test.js
|   |    |-- <ITEM-N>.test.js
|   |    `-- helpers
|   |        |-- <HELPER-1>.js
|   |        |-- <HELPER-2>.js
|   |        `-- <HELPER-N>.js
|   `-- <SUB-AREA-2>
|       |-- <ITEM-1>.test.js
|       |-- <ITEM-2>.test.js
|       |-- <ITEM-N>.test.js
|       `-- helpers
|           |-- <HELPER-1>.js
|           |-- <HELPER-2>.js
|           `-- <HELPER-N>.js
|-- <AREA-2>
|   |-- <SUB-AREA-1>
|   |    |-- <ITEM-1>.test.js
|   |    |-- <ITEM-2>.test.js
|   |    |-- <ITEM-N>.test.js
|   |    `-- helpers
|   |        |-- <HELPER-1>.js
|   |        |-- <HELPER-2>.js
|   |        `-- <HELPER-N>.js
|   `-- <SUB-AREA-2>
|       |-- <ITEM-1>.test.js
|       |-- <ITEM-2>.test.js
|       |-- <ITEM-N>.test.js
|       `-- helpers
|           |-- <HELPER-1>.js
|           |-- <HELPER-2>.js
|           `-- <HELPER-N>.js
|-- jest.config.js
|-- package-lock.json
`-- package.json
```
#### Current Folder Layout
```
|-- CONTRIBUTING.md
|-- README.md
|-- development
|   `-- design-and-setup
|       |-- internationalization.test.js
|       |-- branching-strategy.test.js
|       |-- cloud-native.test.js
|       |-- coding-standards-and-practices.test.js
|       |-- helpers
|       |   `-- changelog.js
|       |-- identity-management.test.js
|       |-- rest-api.test.js
|       `-- version-control.test.js
|-- infra
|   `-- setup
|       |-- helpers
|       |   `-- fine-grained-policies.js
|       `-- roles-groups-permissions-and-users.test.js
|-- jest.config.js
|-- package-lock.json
`-- package.json
```
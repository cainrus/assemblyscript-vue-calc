# Simple AssemblyScript template

Simple AssemblyScript template contains:
* [AssemblyScript](https://github.com/AssemblyScript/assemblyscript) as playground or for some specific heavy logic.
* [Vue3](https://vuejs.org/) for UI.
* Static web application powered by [GitHubPages](https://pages.github.com/). Current template [demo](https://cainrus.github.io/assemblyscript-vue-calc).

## Installation

Use the package manager [npm](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager) to install the project.

```bash
npm install
```

## Structure
```
.
├── assembly                # AssemblyScript source files
│   │
│   ├── tsconfig.json       # TypeScript configuration
│   └── index.ts            # Source entry point
│
├── build                   # Compiled and generated files
├── docs                    # Documentation files
├── test                    # Automated tests
├── scripts                 # CLI tools and utilities
├── index.html              # Web application entry point
├── asconfig.json           # AssemblyScript configuration
├── package.json            # Project configuration
├── package-lock.json       # Exact generated project configuration state
├── node_modules            # Project dependencies
├── .gitignore              # Excluded files (from the git repository) 
├── .github                 # GitHub related configurations
├── LICENSE
└── README.md 
```

## Usage

Build assemblyscript:
```
npm run asbuild 
```

Start web server:
```bash
npm start
```

Run tests:
```bash
npm test
```

Build and deploy static web application:
```bash
npm run deploy:gh-pages
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
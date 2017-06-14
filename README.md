# harp-scripts :zap: [![npm version](https://badge.fury.io/js/harp-scripts.svg)](https://npmjs.com/package/harp-scripts)
Opinionated, zero-configuration, front-end development automation. Based on [harp](https://github.com/sintaxi/harp).

Useful for `hotsites`, `rapid web prototyping` & `static site management`.


## Features
- **Fast.** Live-Reloading based development.
- **Easy.** Deploy to surge.sh with a single command.
- **ZeroConf.** Use your favorite pre-processor without managing `gulp/grunt/etc`.
- **Extensible.** Everything is composable, every command adheres to simple principles.
- **Fully Featured.** All harp [features](https://github.com/sintaxi/harp#features) work.


## Dependencies
| Dependency | Minimum Version |
| --- | --- |
| `node` | `v4` |
| `bash` | `v3`* |

`*` Built-in on MacOS & Modern Linux.

## Instalation:
```bash
$ npm i --save harp harp-scripts
```


## CLI Usage:
```bash
$ harp-scripts [command] [argument]
```


#### Commands:
| comand | argument | description |
| --- | --- | --- |
| **compile** | `outputPath`* | Compile harp project. |
| **help** | `command`* | Show the help section for command. |
| **merge** | `file`† | Inline all file dependencies.  |
| **start** | | Run production server. |
| **surge.sh** | `compiledPath`* | Deploy project to [surge.sh](surge.sh). |
| **test** | | Test your project harp compilation. |
| **uglify** | `jadeFile` | Concatenate javascript files. |
| **watch** | | Run a development server with browser-sync. |

`*` Optional argument.
`†` Only jade or stylus files supported.

#### Environment Variables:
| name | description |
| --- | --- |
| **PORT** | Which port to listen on. |
| **DOMAIN** | Which domain to deploy to. |
| **HS_NODE_ENV** | NODE_ENV for the harp processor. |


## Roadmap: [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../../pulls)
#### Deployment options:
- [x] `surge.sh`
- [ ] `gh-pages`
- [ ] `netlify`
- [ ] `gitlab-pages`
- [ ] `gitlab-pipeline`
#### Developer Experience:
- [ ] Interactive Project Generator
- [ ] Commit Hook For Test
- [ ] Better Documentation
- [ ] Integration Tests


## Inspiration:
- [harp](https://github.com/sintaxi/harp)
- [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)
- [browser-sync](https://github.com/browsersync/browser-sync)

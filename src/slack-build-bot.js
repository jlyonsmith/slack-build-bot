#!/usr/bin/env node
import { SlackBuildBotTool } from './SlackBuildBotTool'
import chalk from 'chalk'

const log = {
  info: console.error,
  info2: function() { console.error(chalk.green([...arguments].join(' '))) },
  error: function() { console.error(chalk.red('error:', [...arguments].join(' '))) },
  warning: function() { console.error(chalk.yellow('warning:', [...arguments].join(' '))) }
}

const tool = new SlackBuildBotTool(log)
tool.run(process.argv.slice(2)).then((exitCode) => {
  process.exit(exitCode)
}).catch((err) => {
  console.error(err)
})

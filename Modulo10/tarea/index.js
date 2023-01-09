import * as controller from './modulos/controller.js'
import chalk from 'chalk'

const total = controller.suma(1,2)

console.log(total)
const producto = controller.multiplica(4,5)

console.log(chalk.green(producto))
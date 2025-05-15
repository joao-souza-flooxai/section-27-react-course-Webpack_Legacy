const logger = require('./logger');
const duvidaCruel = require('./duvidaCruel');
import Pessoa from "./pessoa"

logger.info('Usando o padrão CommonJS!');
const pessoa = new Pessoa("João Victor");
console.log(pessoa);

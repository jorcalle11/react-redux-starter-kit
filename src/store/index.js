import configDev from './config.dev'
import configProd from './config.prod'

if (process.env.NODE_ENV === 'production') {
  module.exports = configProd
} else {
  console.log(configDev)
  module.exports = configDev
}


const path = require('path');

const appname = 'TripAdvisor';

module.exports = {
  applicationName: appname,
  env: 'dev',
  port: 3014,
  sqlite: {
    options: {
      dialect: 'DBMS',
      storage: path.resolve('path'),
      logging: false
    }
  }
};

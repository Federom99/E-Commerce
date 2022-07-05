const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
// Seteado en force: true para que sea facil debuggear.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

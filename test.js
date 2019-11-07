const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'nodejs', 'nodejs', {
  host:"localhost",
  dialect: "mysql"
});

sequelize.authenticate().then( function() {
  console.log('Conectado com sucesso!');
}).catch( function() {
  console.log("Falha ao se conectar: "+erro);
});

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

Postagem.sync({force: true})

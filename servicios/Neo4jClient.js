var neo4j = require('neo4j-driver');


class Neo4jClient {
    constructor(uri, user, pass, dbName) {
            // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
            this.URI = uri;
            this.USER = user;
            this.PASSWORD = pass;
            this.dbName = dbName;
            this.driver = null;
    }

    async connect() {
        let driver = null;
        try {
            driver = neo4j.driver(this.URI, neo4j.auth.basic(this.USER, this.PASSWORD))
            const serverInfo = await driver.getServerInfo()
            console.log('Connection established')
            console.log(serverInfo)
            this.driver = driver;
          } catch(err) {
            console.log(`Connection error\n${err}\nCause: ${err.cause}`)
          }
    }

    async delete() {
      let { _, summary } = await this.driver.executeQuery(`
        MATCH (n)
        DETACH DELETE n
        `, { },
        { database: 'neo4j' }
      )
      console.log('Query counters:')
      console.log(summary.counters.updates());
    }

    async insertarJuego(nameVJ) {
      //let session = this.driver.session()
      let { records, summary } = await this.driver.executeQuery(`
        CREATE (vj:Videojuego {name: $name}); 
        `, { name: nameVJ },
        { database: 'neo4j' }
      )
      console.log(
        `Created ${summary.counters.updates().nodesCreated} nodes ` +
        `in ${summary.resultAvailableAfter} ms.`
      );
    }

    async insertarGenero(nameG) {
      //let session = this.driver.session()
      let { records, summary } = await this.driver.executeQuery(`
        CREATE (g:Genero {name: $name}); 
        `, { name: nameG },
        { database: 'neo4j' }
      )
      console.log(
        `Created ${summary.counters.updates().nodesCreated} nodes ` +
        `in ${summary.resultAvailableAfter} ms.`
      );
    }

    async insertarEmpresa(nameE) {
      //let session = this.driver.session()
      let { records, summary } = await this.driver.executeQuery(`
        CREATE (e:Empresa {name: $name}); 
        `, { name: nameE },
        { database: 'neo4j' }
      )
      console.log(
        `Created ${summary.counters.updates().nodesCreated} nodes ` +
        `in ${summary.resultAvailableAfter} ms.`
      );
    }

    async insertarPlataforma(nameP) {
      //let session = this.driver.session()
      let { records, summary } = await this.driver.executeQuery(`
        CREATE (p:Plataforma {name: $name}); 
        `, { name: nameP },
        { database: 'neo4j' }
      )
      console.log(
        `Created ${summary.counters.updates().nodesCreated} nodes ` +
        `in ${summary.resultAvailableAfter} ms.`
      );
    }

    
    async insertarTag(nameT) {
      //let session = this.driver.session()
      let { records, summary } = await this.driver.executeQuery(`
        CREATE (t:Tag {name: $name}); 
        `, { name: nameT },
        { database: 'neo4j' }
      )
      console.log(
        `Created ${summary.counters.updates().nodesCreated} nodes ` +
        `in ${summary.resultAvailableAfter} ms.`
      );
    }
}

module.exports = Neo4jClient;
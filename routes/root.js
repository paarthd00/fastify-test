'use strict'

module.exports = async function (fastify, opts) {

  fastify.register(require('@fastify/postgres'), {
    connectionString: 'postgresql:'
  })

  fastify.get('/', async function (request, reply) {

    fastify.pg.connect(onConnect)

    function onConnect (err, client, release) {
      if (err) return reply.send(err)
      
      console.log(client);
    }
    return { root: true }
  })
}

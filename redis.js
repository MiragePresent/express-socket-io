const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_DB,
  REDIS_CHANNEL,
} = require('./config')

const redis = require('redis')

function subscribe(user, db=REDIS_DB, channel=REDIS_CHANNEL) {
  const subscriber = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
  })

  subscriber.subscribe(`${db}_private-${channel}_user_${user.id}`)

  return subscriber
}

module.exports = { subscribe }

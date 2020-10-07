require('dotenv').config()

const APP_PORT = process.env.APP_PORT || 3000
const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const REDIS_PORT = process.env.REDIS_PORT || 6379
const REDIS_DB = process.env.REDIS_DB || 'redis'
const REDIS_CHANNEL = process.env.REDIS_CHANNEL

module.exports = {
    APP_PORT,
    AUTH_ENDPOINT,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_DB,
    REDIS_CHANNEL,
};

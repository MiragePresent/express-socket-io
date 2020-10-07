const axios = require('axios')
const { AUTH_ENDPOINT } = require('./config')

function authMiddleware(socket, next) {
  try {
    const { token } = socket.handshake.query
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: 'application/json',
    }

    axios.get(AUTH_ENDPOINT, { headers })
      .then(res => {
        socket.user = res.data
        next()
      })
      .catch(error => {
          throw new Error(`Unauthorized`)
      })

  } catch (error) {
    next(error);
  }
}

module.exports = { authMiddleware }

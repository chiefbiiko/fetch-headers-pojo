function pojoToHeaders (pojo) {
  return new Headers(pojo)
}

function pojoFromHeaders (headers) {
  return [ ...headers.entries() ].reduce(function (acc, cur) {
    acc[cur[0]] = cur[1]
    return acc
  }, {})
}

module.exports = { pojoToHeaders, pojoFromHeaders }

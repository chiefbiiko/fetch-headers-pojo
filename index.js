function pojoToHeaders (pojo) {
  return new Headers(pojo)
}

function pojoFromHeaders (headers) {
  const pojo = {}
  for (const prop of headers.entries())  pojo[prop[0]] = prop[1]
  return pojo
}

module.exports = { pojoToHeaders, pojoFromHeaders }

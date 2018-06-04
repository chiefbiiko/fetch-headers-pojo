const tape = require('tape')
const { pojoToHeaders, pojoFromHeaders } = require('./index')

tape('to headers', function (t) {
  const pojo = { 'Content-Type': 'application/javascript' }
  const headers = pojoToHeaders(pojo)
  t.is(headers.constructor, Headers, 'Headers type')
  t.end()
})

tape('from headers', function (t) {
  const headers = new Headers({ 'Content-Type': 'text/html' })
  const pojo = pojoFromHeaders(headers)
  t.is(pojo.constructor, Object, 'pojo')
  t.end()
})

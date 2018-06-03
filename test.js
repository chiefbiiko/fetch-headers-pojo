var tape = require('tape')
var { pojoToHeaders, pojoFromHeaders } = require('./index')

tape('to headers', function (t) {
  var pojo = { 'Content-Type': 'application/javascript' }
  var headers = pojoToHeaders(pojo)
  t.is(headers.constructor, Headers, 'Headers type')
  t.end()
})

tape('from headers', function (t) {
  var headers = new Headers({ 'Content-Type': 'text/html' })
  var pojo = pojoFromHeaders(headers)
  t.is(pojo.constructor, Object, 'pojo')
  t.end()
})

$ ->
  getUrlVars = ->
    vars = []
    hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
    for hash in hashes
      hash = hash.split('=')
      vars.push hash[0]
      vars[hash[0]] = hash[1]
    vars
    
  params = getUrlVars()
  name = decodeURIComponent params["name"]
  console.log name
  
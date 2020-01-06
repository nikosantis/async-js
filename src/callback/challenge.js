const { XMLHttpRequest } = require('xmlhttprequest')

const fetchData = (url_api, callback) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url_api, true)
  xhr.onreadystatechange = event => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText))
      } else {
        const error = new Error('Error' + url_api)
        return callback(error, null)
      }
    }
  }
  xhr.send()
}
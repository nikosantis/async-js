const { XMLHttpRequest } = require('xmlhttprequest')

const API_URL = 'https://rickandmortyapi.com/api/character/'

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

fetchData(API_URL, (error1, data1) => {
  if (error1) return console.error(error1)
  fetchData(API_URL + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2)
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3)
      console.log(data1.info.count)
      console.log(data2.name)
      console.log(data3.dimension)
    })
  })
})

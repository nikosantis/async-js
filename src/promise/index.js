const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!')
    } else {
      reject('Whooops!')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('Whooops!')
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch
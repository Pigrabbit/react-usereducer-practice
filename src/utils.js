export const login = async ({
  username,
  password
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Alex" && password === '123') {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}
import { manageProviderAuth } from '.'

manageProviderAuth.use(async () => {
  const token = sessionStorage.getItem('token')

  if (token === null) {
    console.log('no user found while auth')
    throw 'no user found while auth'
  }

  const user = JSON.parse(token)

  const url = `https://dummyjson.com/users/1`
  const { image } = await fetch(url).then((response) => response.json())

  return { userName: user.login, avatar: image }
})

manageProviderAuth()

// manageProviderAuth.done.watch(({ result }) => {
//   console.log(result)
// })

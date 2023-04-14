import { $newsList, fetchNews } from '.'

fetchNews.use(async () => {
  const url = `https://fakerapi.it/api/v1/images`
  const { data } = await fetch(url).then((response) => response.json())
  return data
})

$newsList.on(fetchNews.doneData, (state, news) => news)

// @ts-ignore
fetchNews()

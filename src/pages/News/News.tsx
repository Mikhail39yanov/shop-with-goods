import { useStore } from 'effector-react'
import { FC, Key, PropsWithChildren } from 'react'
import { $newsList } from '../../app/model/news'

const News: FC<PropsWithChildren> = () => {
  const newslist = useStore($newsList)
  return (
    <div className="content content--news">
      <div className="container">
        <h1 className="title-h content__title">Новости</h1>
        <div className="content__row content__row--col-mb">
          {newslist.map((item, i) => {
            return (
              <div key={i} className="content__col content__col--sm-6 content__col--xl-3">
                <a className="preview" href="template-page.html">
                  <article className="preview__wrap">
                    <div className="preview__img">
                      <img src={item.url} alt="Повседневная практика показывает важность событий" />
                    </div>
                    <h3 className="preview__title">{item.description}</h3>
                    <span className="preview__data">{item.title}</span>
                  </article>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default News

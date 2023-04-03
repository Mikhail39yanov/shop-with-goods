import { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren> = () => {
  return (
    <div className="page__footer-wrapper">
      <footer className="page-footer">
        <div className="container">
          <div className="page-footer__content">
            <h2>Footer</h2>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

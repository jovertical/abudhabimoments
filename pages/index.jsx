import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from 'i18n'
import Layout from 'components/Layout/Layout'
import Pattern from 'components/Pattern/Pattern'
import 'styles/pages/home.css'

const Home = ({ t }) => (
  <Layout hasFooter={false}>
    <div className="tw-relative tw-py-16 tw-flex tw-flex-grow tw-flex-col tw-items-center tw-justify-center tw-bg-gray-light tw-text-center tw-text-white">
      <Pattern />

      <div className="tw-px-5 home-wrap">
        <div className="content">
          <h1 className="tw-relative tw-uppercase tw-font-normal tw-text-4xl tw-m-0 tw-px-0 tw-py-2 tw-leading-none md:tw-text-5xl heading">
            {t('title')}

            <strong className="tw-block tw-text-5xl md:tw-text-6xl">
              {t('subTitle')}
            </strong>
          </h1>
          <h2 className="tw-uppercase tw-text-2xl md:tw-text-3xl tw-mb-1">
            {t('saying')}
          </h2>
          <p
            className="md:tw-text-xl"
            dangerouslySetInnerHTML={{ __html: t('message') }}
          />
        </div>
      </div>

      <Link href="/events">
        <a className="expand">
          <i className="arrow"></i>
          {t('expandText')}
        </a>
      </Link>
    </div>
  </Layout>
)

Home.getInitialProps = async () => {
  return {
    namespacesRequired: ['home']
  }
}

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation('home')(Home)

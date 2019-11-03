import React from 'react'
import Link from 'next/link'
import 'styles/header.css'

function Header() {
  return (
    <header>
      <div className="tw-flex tw-items-center tw-justify-between md:tw-justify-center tw-p-6 md:tw-px-12 md:tw-py-4 tw-bg-gray">
        <Link href="/">
          <a aria-current="page">
            <img className="logo" src="/png/logo_en.png" alt="Logo" />
          </a>
        </Link>

        <nav className="md:tw-absolute md:tw-right-0 md:tw-mr-12">
          <div className="tw-mx-3 md:tw-mx-6 tw-border tw-border-white tw-rounded-full tw-text-white tw-cursor-pointer lang-switch">
            <span>AR</span>
            <span className="active">EN</span>
          </div>

          <Link href="/auth/login">
            <a className="tw-inline-block tw-text-white tw-text-3xl md:tw-text-4xl profile">
              <i className="icon-login"></i>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

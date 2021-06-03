import * as React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import GlobalStyle from "../globalStyles"
import Theme from "../styles/Theme"
import TopBar from "./TopBar"
import MobileHeader from "./MobileHeader"
import MobileNav from "./MobileNav"
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <Theme data-is-root-path={isRootPath}>
      <GlobalStyle />
      <TopBar />
      <Header />
      <MobileHeader />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </Theme>
  )
}

export default Layout

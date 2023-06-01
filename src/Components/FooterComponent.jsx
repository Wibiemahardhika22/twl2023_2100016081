import React from "react"
import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <>
      <Footer container={true} className="dark:bg-slate-900">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="#"
              name="Mahardhika"
            />
            <Footer.LinkGroup>
              <Link to='/' className="mx-3">
                Home
              </Link>
              <Link to='/top-rated' className="mx-3">
                Top Rated
              </Link>
              <Link to='/about' className="mx-3">
                About
              </Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            year={2023}
            by="Wibie Mahardhika"
          />
        </div>
      </Footer>
    </>
  )
}
export default FooterComponent
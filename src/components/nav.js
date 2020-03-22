import { Link } from "gatsby"
import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <section className="container mx-auto">
        <ul className="flex flex-col justify-center items-center py-4">
          <li className="w-full">
            <Link
              to={`/work`}
              className="w-full text-white py-4 px-8 flex justify-between items-center border-dashed border-b"
              activeClassName="text-yellow-600 font-bold"
            >
              <h2 className="text-xl uppercase">work</h2>
              <i>
                <IoIosArrowForward />
              </i>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={`/about`}
              className="w-full text-white py-4 px-8 flex justify-between items-center border-dashed border-b"
              activeClassName="text-yellow-600 font-bold"
            >
              <h2 className="text-xl uppercase">about</h2>
              <i>
                <IoIosArrowForward />
              </i>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={`/contact`}
              className="w-full text-white py-4 px-8 flex justify-between items-center border-dashed border-b"
              activeClassName="text-yellow-600 font-bold"
            >
              <h2 className="text-xl uppercase">hello</h2>
              <i>
                <IoIosArrowForward />
              </i>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={`/blog`}
              className="w-full text-white py-4 px-8 flex justify-between items-center"
              activeClassName="text-yellow-600 font-bold"
            >
              <h2 className="text-xl uppercase">blog</h2>
              <i>
                <IoIosArrowForward />
              </i>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav

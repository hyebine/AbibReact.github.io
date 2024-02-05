import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPerson, BsSearch } from "react-icons/bs";

import '../../scss/header.scss'


function Header(props) {

  const [toggle, setToggle] = useState(false);

  return (
    <header className='fixed-top'>

      <div className='adtop text-center py-1'>
        <Link to={`/${props.datasrc.mini[0].href}`}>
          <span>{props.datasrc.mini[0].txt}</span>
        </Link>
      </div>

      <div className='hd container d-flex align-items-center justify-content-between '>
        <h1 className='logo position-relative zup'><Link to="/" className='d-block'><img src="/img/logo.png" alt="로고이미지" className='d-block' /></Link></h1>

        <button className={`gnb_btn position-relative d-lg-none ${toggle && 'act'} order-3`} onClick={() => { setToggle(!toggle) }}>
          <i></i>
          <i></i>
          <i></i>
        </button>

        <div className='navi d-lg-flex ms-auto ms-lg-0 flex-lg-grow-1 justify-content-between'>
          <ul className='gnb d-none d-lg-flex flex-grow-1  justify-content-center'>
            {
              props.datasrc.navi.gnb.map((el, idx) => {
                return (
                  <li className='menu_li position-relative' key={`gnb_${idx}`}>
                    <Link to={`/${el.href}`} className='menu_a'>
                      {el.nm}
                    </Link>
                    <ul className='sub_ul zup position-absolute'>
                      {
                        el.sub.map((eel, iidx) => {
                          return (
                            <li key={iidx}>
                              <Link to={`${eel.href}`}>{eel.nm}</Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )

              })
            }
          </ul>

          <ul className='box d-flex w-0 align-items-center justify-content-end'>
            <li>
              <Link to="/">
                <span className='d-none d-lg-block'>JOIN</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsPerson className='d-block d-lg-none' size={25} />
                <span className='d-none d-lg-block'>LOGIN</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsSearch className='d-block d-lg-none' size={25} />
                <span className='d-none d-lg-block'>SEARCH</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header;

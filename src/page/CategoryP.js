import React, { useEffect, useState } from 'react'
import { MainH3 } from '../styled/common'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { serverapi } from '../api/api'

import '../scss/categoryP.scss'



function CategoryP(props) {

  const [gnbdataarr, setgnbdata] = useState({}); // api 변수
  const { cateid } = useParams("cateid"); // { cateid : 8 }

  const apireseive = async (tn, cate_id = null) => {
    try {

      const reqres = await serverapi(tn, cate_id);

      console.log(reqres)


      setgnbdata((prev) => ({
        ...prev,
        [tn]: [...reqres.data]
      }));

      console.log("리액트 컴포넌트 카테고리", gnbdataarr)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    console.log(typeof cateid, cateid)
    apireseive('gnb');
    apireseive("products", { cate_id: cateid }).then(() => {
      console.log("실행하고 온 결과", gnbdataarr)
    });

  }, [cateid])

  useEffect(() => {
    console.log(gnbdataarr)
    //랜더링되는 함수 넣지않기

  }, [gnbdataarr])


  return (
    <div className='set'>

      <div className='hdbg' style={{
        backgroundImage: `url(/img/setbg.jpg)`
      }}>
      </div>
      <div className='mt-5'>
        <MainH3>
          {
            gnbdataarr && gnbdataarr['gnb'] && gnbdataarr['gnb'].filter((item) => item.id == cateid).map((e, i) => {
              return e.nm;
            })
          }
        </MainH3>
      </div>

      <div className='wrapper'>
        <div className='container'>
          <ul className='row mx-0'>
            {
              gnbdataarr && gnbdataarr['products'] && gnbdataarr['products'].map((e, i) => (
                <li className='setLi col-6 col-lg-4 justify-content-between' key={i}>

                  <Link to={`/${e.href}`} className='bg d-block' style={{ backgroundImage: `url(${e.bg})` }}></Link>

                  <p>{e.nm}</p>
                  <p>{e.en}</p>
                  <span className='d-block'>{e.txt}</span>

                  <p className='btn p-0'>
                    <Link to={`/${e.href}`} className='d-block'>READ MORE</Link>
                  </p>

                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default CategoryP
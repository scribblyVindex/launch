import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
import logo from './logo.png';
import logo_2 from './logo_2.png';
import logo_2_copy from './logo_2_copy.png';
// import background from './form/Login_Background.png';
// import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
// import { useState, /* useContext,*/ useEffect } from 'react';
// import { withRouter } from 'react-router';
// import { useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Welcomepage = (props) => {
    // const history = useHistory();
    const [c, setC] = useState(true)
    const fun = () => {
      window.open("http://www.iqac-ggv.com/login","_self")
    }
    const { innerWidth: width, innerHeight: height } = window;
useEffect(() => {
  setInterval(e=>setC(false),10000);
}, [c])

    // const { width, height } = useWindowSize()

  return (

    
    <>
    {c&&<Confetti
      width={width}
      height={height}
      
    />}
      {
        <div
          // style={{ background: "#B4322E" }}
          style={{  backgroundColor:"#DFF6FF"}}
          className="h w-screen grid  grid-cols-7 pt-4 bg-white "
        >
          <div className="  w-screen border-black  ">
            <div
              style={{
                height: '70%',
              }}
              className=" grid grid-cols-7 grid-rows-6 lg:justify-items-center  border-black rounded  w-full   "
            >
              <div className="border-black h-auto  col-span-1 col-start-2"><img
                 style={{ transform: 'scale(1)' }}
                className="border-black h-auto  "
                src={logo}
                alt="Logo"
              /></div>
              <h className=" font-medium col-span-4  text-center font-semiold text-blue-900 col-start-3 pt-10 text-5xl ">
                Guru Ghasidas Vishwavidyalaya, Bilaspur
              <p className=" font-medium  font-semiold text-blue-900  text-lg ">
              A Central University established by the Central University Act 2009 No. 25 of 2009
              </p>
              </h>
              <h className=" font-medium row-span-1 row-start-3 col-span-5 col-start-2  text-center font-semiold text-blue-700  text-5xl ">Internal Quality Assurance Cell (IQAC)
              <p className='text-2xl text-blue-900 mt-6'>SSR and AQAR data capturing system.</p>
              </h>
              <button onClick={fun} className="mt-4 font-bold row-span-1 bg-white text-blue-900 row-start-4 col-span-5 col-start-2  text-center font-semiold  h-20 w-4/6 transition delay-100 duration-300 ease-in-out border-gray-300 border hover:border-gray-300 hover:border-2 shadow-lg shadow-gray-400 hover:bg-green-500 hover:text-white hover:animate-bounce rounded-md text-5xl ">LAUNCH!</button>
              {/* <h1 className=" font-medium  text-grey-100 mb-6   text-5xl">IQAC-Portal</h1> */}
              {/* <Link
                to="/developmentTeam"
                className=" font-medium hover:text-gray-100 text-gray-100 mb-8   text-2xl"
              >
                Web Portal
              </Link> */}
                {/* <button
                style={{ background: "#B4322E" }}
                  onClick={fun}
                  className=" "
                >
                  Launch
                </button> */}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default (Welcomepage);

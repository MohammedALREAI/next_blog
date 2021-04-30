

import styled from 'styled-components'
import headrLog from'../../public/images/hero.png'
const Title=styled.h1`

font-family: Public Sans;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;
color: #FFFFFF;

`



const BlogComponent=styled.h1`


    color: white;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.3;
    font-style: normal;
    font-family: monospace;
`

 const CustomButton=styled.button`
 
  
    background: #000000;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    color: white;
    background: black; 
    margin-top:4px;
 `
const SubTitle=styled.h1`

font-family: Public Sans;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;
color: #FFFFFF;
`



const MesuSubTitle=styled.h2`


font-family: Public Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;


`
const SpanBy=styled.span`

font-family: Public Sans;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;

color:white;

`

const TitleHeader=styled.h1`


font-family: Public Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 47px;
margin-top:20px
color: #FFFFFF;


`
export const MainHader=()=>{

    return(
        <div className="grid grid-col-2 grid-flow-col gap-4 space-x-2 " style={{marginTop:"80px",marginBottom:"50px"}}>
  <div className="col-span-3  bg-red-200">
  <div className="bg-red-400 w-12 items-center justify-items-center absolute ">
                      <div className="p-2">
                      <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 0L19.8731 9.48091L30.2414 10.7102L22.5759 17.7991L24.6107 28.0398L15.5 22.94L6.38933 28.0398L8.42414 17.7991L0.758624 10.7102L11.1269 9.48091L15.5 0Z" fill="white" />
                      </svg>
                      
                      </div>
                    </div>
                   
  <img className="object-cover shadow-lg w-full " src={headrLog} alt="" />

  </div>
  <div className="col-span-1 bg-black">
  <div className="space-y-4 ">
                  <div className="text-lg flex leading-6 font-medium space-y-1">
                    <div className="flex-1">
                      <SubTitle className="text-red-600">CATEGORY 2</SubTitle>
                    </div>
                  </div>
                  <div className="text-lg">
                    <h1
                    style={{
                      fontFamily: "Public Sans",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "40px",
lineHeight: "47px",
marginTop:"20px",
color: "#FFFFFF",
                    }}
                    
                    >SG Beelitz - The path building a correct role model for promoting bright and strong  young talent</h1>
                    <p style={{

fontFamily: "Public Sans",
fontstyle: "normal",
fontWeight: "600",
fontsize: "20px",
lineHeight: "23px",
color: "#FFFFFF",
marginTop:"20px"


                    }}>Sit pharetra, arcu, vestibulum vehicula nulla lorem eget ornare egestas mi.</p>
                    <p className="text-white mt-2">by <span className="text-red-600 ml-1"> Mohammed alreai</span></p>
                  </div>
                </div>
  </div>
</div>
    )
}
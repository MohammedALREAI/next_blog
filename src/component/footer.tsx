import React from 'react'
import Messi from'../../public/images/messi.png'
import PostItem from'./postItem'
import {FooterSubSection} from'./footerSubSection'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Footer = () => {

return(
  <div className=" mt-4 space-y-1  bg-black grid lg:grid-cols-1 sm:grid-row-3 gap-4 md:grid-cols-2 bg-black  grid-rows-1 sm:grid-rows-3 md:grid-rows-2 sm:grid-cols-1" x-max="1">
<div className=" grid grid-rows-3 space-x-1  sm:grid-rows-1 grid-flow-col gap-4"
  style={{background:"#323232"}}>
   <FooterSubSection  title="Most Read Article"
  image={Messi}
  subtile="CATEGORY 2"
  description="The correct path newly promote young talent" />
   <FooterSubSection  title="Most Read Article"
  image={Messi}
  subtile="CATEGORY 2"
  description="The correct path newly promote young talent" />

   <PostItem 
      image={Messi}
      title="CATEGORY 4"
      liked={10}
      subtitle="The correct path for newly promoting young talent"
      describtion="Sit pharetra, arcu, vestibulum vehicula nulla lorem eget ornare egestas mi."
      by="Mohamemd alreai"
      className="bg-black"
   />
     </div>

  </div>


)}
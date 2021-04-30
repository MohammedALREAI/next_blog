/* eslint-disable prettier/prettier */
import {Grid, Typography,ButtonGroup,Button} from '@material-ui/core';
import styled from 'styled-components'
import {MainHader} from'./mainHeader'


const MyHeaderContainer=styled(Grid)`
  letter-spacing: 3px;
  margin-top:129px;
  margin-bottom:80px;

`

const BlogComponent=styled.h1`


    color: white;
    font-size: 52px;
    font-weight: 700;
    line-height: 1.3;
    font-style: normal;
    font-family: monospace;
`

 const CustomButton=styled(Button)`
border-radius: 1px;
    background: #000000;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    color: white;
    background: black; 
    margin-top:4px;
 `
export const Header = () => {
    return (
        <Grid   direction="row" 
        
        justify="space-between"container
        >
        <Grid item space className="bg-red">
           <BlogComponent>Blog</BlogComponent>
        </Grid>
        <Grid item>
        <div className="flex-1 flex justify-center lg:justify-end bg-black border-solid border-1 border-white">
  <div className="w-full px-2 lg:px-6 bg-black border border-white my-1 ">
    <label htmlFor="search" className="sr-only text-white">Search </label>
    <div className="relative text-white-200 focus-within:text-white">
      <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-white" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <input id="search" name="search" className="block text-white bg-black w-full pl-10 pr-3 py-2 border border-transparent leading-5 bg-opacity-25 placeholder-white focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search " type="search" />
    </div>
  </div>
</div>
               <div className="grid grid-cols-4 grid-rows-2 space-x-1 space-y-1">
                <CustomButton className="border-solid border-white boder-2">All</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Seminars</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Authors</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Business</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Basics</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Science</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Stories</CustomButton>
                <CustomButton className="border-solid border-white boder-2">Success</CustomButton>
     
                </div>
                </Grid>
                <MainHader/>


              


        </Grid>


    )
}
















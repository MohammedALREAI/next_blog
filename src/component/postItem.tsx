// eslint-disable-next-line prettier/prettier
import React from 'react';
import Image from'next/image'
interface Props {
  image: any;
  title: string;
  liked: number;
  subtitle : string
  describtion:string
  by:string
}

const PostItem = ({
    image,
    title,
    liked,
    subtitle,
    describtion,
    by

}: Props) => {
  return (
    <div className="">
      <div className="aspect-w-3 aspect-h-2">
        <Image
          className="object-cover shadow-lg w-full"
          src={image}
          alt=""
          width={380}
          height={264}
        />
      </div>
      <div className="text-lg flex leading-6 font-medium space-y-1 mt-4">
        <div className="flex-1">
          <h3 className="text-red-600"> {title}</h3>
        </div>
        <div className="flex">
                   <ul className="flex space-x-5">
            <li>
              <a href="#"  className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Like</span>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 10.0937C11.9999 9.668 11.8314 9.27132 11.5388 8.97877C11.8696 8.61682 12.0382 8.13159 11.9921 7.62657C11.9093 6.72627 11.0982 6.02077 10.1448 6.02077H5.76945C5.9862 5.36272 6.33327 4.15645 6.33327 3.18745C6.33327 1.65107 5.02782 0.354126 4.20827 0.354126C3.47232 0.354126 2.94672 0.768501 2.92407 0.785501C2.8405 0.852804 2.79163 0.954804 2.79163 1.06245V3.4644L0.751626 7.8837L0.666626 7.9269V15.5188C1.2432 15.7908 1.97277 15.9374 2.43745 15.9374H8.93925C9.71063 15.9374 10.3857 15.4175 10.5443 14.7C10.6258 14.3309 10.5783 13.9591 10.4161 13.6361C10.9396 13.3726 11.2916 12.8335 11.2916 12.2187C11.2916 11.9679 11.2343 11.7278 11.1252 11.5104C11.6486 11.2469 11.9999 10.7078 11.9999 10.0937Z"
                    fill="#9F9F9F"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="text-grey-200">8</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div />
      <div className="text-lg">
        <h1
          style={{
            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '35px',
            color: '#FFFFFF',
          }}
          className="text-gray-500"
        >
{subtitle}
        </h1>
        <h3
          className=""
          style={{
            fontFamily: 'Public Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '35px',
            color: '#FFFFFF',
          }}
        >
          {describtion}
        </h3>
        <p className="text-white">
          by <span className="text-red-600">{by}</span>
        </p>
      </div>
    </div>
  );
};

export default PostItem;

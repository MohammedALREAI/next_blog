/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import React from 'react';

interface Props {
  title: string;
  image: any;
  subtile: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const FooterSubSection = ({
  title,
  image,
  subtile,
  description,
}: Props) => {
  return (
    <div className="mt-2">
      <h1
        style={{
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '30px',
          lineHeight: '35px',
          color: '#EB2D2D',
        }}
      >
        {title}
      </h1>
      <img src={image} alt="image" className="mx-3 mb-2" />
      <p
        style={{
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '35px',
          color: '#EB2D2D',
        }}
      >
        {' '}
        {subtile}
      </p>
      <h1 style={{fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '30px',
          lineHeight: '35px',
          color: '#EB2D2D',}} > {description}</h1>
    </div>
  );
};

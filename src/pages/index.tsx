/* eslint-disable prettier/prettier */
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Container,Grid} from '@material-ui/core';
import {Item} from'../component/item'
import {Header} from'../component/header'
import {Footer} from '../component/footer'
export default function Home() {
  return (
    <div className="">
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Container>
        <Header/>
       
<div className="lg:col-span-2">
<ul className="space-y-12 grid-cols-3 sm:grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8" x-max="1">
{Array(10).fill(0).map(x=><Item key={x}/>)}
</ul>
</div>
<Footer/>
        </Container>

        </main>
        
    </div>
  );
}

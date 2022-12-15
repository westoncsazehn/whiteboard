import { WASMExample } from '../components/WASMExample'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
import TextField from '@mui/material/TextField';
const Home: NextPage = ({add}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whiteboard</title>
        <meta name="description" content="Next.JS with WebAssembly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </main>
    </div>
  )
}

export default Home

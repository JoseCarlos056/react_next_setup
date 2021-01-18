import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import rocktseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'
const Title = styled.h1`
  color: red;
`
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <img src={rocktseatLogo} alt="" />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      </main>
    </Container>
  )
}
export default Home

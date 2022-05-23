import Head from 'next/head'
import Image from 'next/image';

import { Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Portal</title>
        <meta name="description" content="Test Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <div>
        <Center bgColor="blue.100" borderRadius="5px" ml="20px" mr="20px">
          Hello
        </Center>
      </div>

    </div>
  )
}

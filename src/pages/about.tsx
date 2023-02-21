import React from 'react';
import { Stack, Text, Flex, Img } from '@chakra-ui/react';

import banner5 from '@/assets/images/banner5.webp';

export interface IProps {}
function Index({}: IProps) {
  return (
    <Stack
      margin="0 auto"
      width={{ base: '100%', md: '980px' }}
      // direction={"column"}
      alignItems="center"
      as="main"
      spacing="2px"
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justify="center"
        alignItems="center"
        height="48.5px"
        width="100%"
        bgColor="#000000"
        color="#ffffff"
        fontSize="25px"
        letterSpacing="0.1em"
      >
        About WEFACC
      </Flex>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width="100%"
        spacing="2px"
      >
        <Text
          width={{ base: '100%', md: '319px' }}
          padding="14px 20px"
          bgColor="rgba(36,36,36,0.25)"
          fontSize="12px"
          color="#242424"
        >
          WEFA.CC is short from Web3 Fans Common Community, Called 萬發公社 in
          Chinese. <br />
          <br />
          ​From the metaverse to NFTs, Web3 can be intimidating and
          overwhelming. WEFA.CC is facing the fast-growing and rapidly changing
          Web3 market, launching a comprehensive enterprise service model and
          related businesses in the Web3 field. <br />
          <br />
          WEFA.CC provides services helping people to explore emerging Web3
          technologies. Web3 technologies make the holy grail of meaningful,
          bi-directional relationships between brands and customers possible
          (without an intermediary). <br />
          <br />
          ​ Meet with our team of Web3 experts and learn more about how emerging
          Web3 technologies can revolutionize your community development and
          customer relationships. <br />
          <br />
        </Text>
        <Img
          src={banner5}
          width="100%"
          height={{ base: '100%', md: '538px' }}
        />
      </Stack>
    </Stack>
  );
}
export default Index;

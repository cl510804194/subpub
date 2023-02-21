import React from 'react';
import { Stack, Text, Flex, Img } from '@chakra-ui/react';

import { buttonHover } from '@/theme/style';
import px2vw from '@/utils/px2vw';

import wechat from '@/assets/images/wechat.webp';
import twitter2 from '@/assets/images/twitter2.webp';
import back1 from '@/assets/images/back1.webp';
import email from '@/assets/images/email.png';

export interface IProps {}

function Index({}: IProps) {
  return (
    <Stack
      margin="0 auto"
      width={{ base: '100%', md: '980px' }}
      alignItems="center"
      as="main"
      spacing={{ base: px2vw(2), md: '20px' }}
    >
      <Flex
        justify="center"
        alignItems="center"
        height="48.5px"
        width="100%"
        bgColor="#000000"
        color="#ffffff"
        fontSize="25px"
        letterSpacing="0.1em"
      >
        Contact US
      </Flex>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        width="100%"
        bgColor="#dbdbdb"
      >
        <Stack
          spacing="30px"
          width={{ base: '100%', md: '327px' }}
          height="363px"
          justifyContent="center"
          alignItems="center"
          _hover={buttonHover}
        >
          <Img width="75px" height="61px" src={email} />
          <Text>​hi@wefa.cc</Text>
        </Stack>
        <Stack
          spacing="30px"
          width={{ base: '100%', md: '327px' }}
          height="363px"
          justifyContent="center"
          alignItems="center"
          backgroundImage={back1}
          _hover={buttonHover}
        >
          <Img width="141px" height="141px" src={wechat} />
          <Text fontSize="16px" color="#ffffff">
            Let we know your request
          </Text>
        </Stack>
        <Stack
          spacing="30px"
          width={{ base: '100%', md: '327px' }}
          height="363px"
          justifyContent="center"
          alignItems="center"
          _hover={buttonHover}
        >
          <Img width="61px" height="61px" src={twitter2} />
          <Text>https://twitter.com/WEFAcc</Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
export default Index;

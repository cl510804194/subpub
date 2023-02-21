import { Flex, Stack, Text, Img, Box, Divider } from '@chakra-ui/react';

import banner1 from '@/assets/images/banner1.webp';
import banner2 from '@/assets/images/banner2.webp';
import banner3 from '@/assets/images/banner3.webp';
import banner4 from '@/assets/images/banner4.webp';
import twitter from '@/assets/images/twitter.png';

import { buttonHover } from '@/theme/style';
// import banner5 from '@/assets/images/banner1.webp'

// const links = [
//   {
//     img: banner1,
//     path: '',
//   },
//   {
//     img: banner2,
//     path: '',
//   },
//   {
//     img: banner3,
//     path: '',
//   },
//   {
//     img: banner4,
//     path: '',
//   },
// ];

export default function Home() {
  return (
    <Stack
      margin="0 auto"
      width="980px"
      flexDirection="column"
      alignItems="center"
      as="main"
      spacing="2px"
    >
      <Stack direction="row" spacing="2px">
        {/* left */}
        <Stack direction="column" spacing="2px">
          <Box>
            <Img
              src={banner1}
              width="651px"
              height="548px"
              _hover={buttonHover}
            />
          </Box>

          <Stack direction="row" spacing="2px">
            <Flex
              width="482px"
              height="55px"
              justify="center"
              alignItems="center"
              fontSize="25px"
              fontWeight="bold"
              backgroundColor="#000000"
              color="#ffffff"
              _hover={buttonHover}
            >
              For Community, By Community
            </Flex>
            <Flex
              width="166px"
              height="55px"
              justify="center"
              alignItems="center"
              fontSize="15px"
              // fontWeight="bold"
              backgroundColor="#000000"
              color="#ffffff"
              _hover={buttonHover}
            >
              {'What we support >'}
            </Flex>
          </Stack>
        </Stack>
        {/* right */}
        <Flex flexDirection="column">
          <Stack
            padding="14px 20px"
            bgColor="rgba(36,36,36,0.25)"
            spacing="12px"
          >
            <Text fontSize="25px" color="#ffffff">
              WEFA.CC
            </Text>
            <Text fontSize="17px" lineHeight="1.4em" color="#000000">
              WEFA.CC is short from Web3 Fans Common Community.
            </Text>
            <Text fontSize="17px" lineHeight="1.4em">
              WEFA.CC is facing the fast-growing and rapidly changing Web3
              market, launching a comprehensive enterprise service model and
              related businesses in the Web3 field.
            </Text>
            <Divider borderColor="rgba(255,255,255,0.35)" />
            <Text textAlign="right" color="#ffffff" _hover={buttonHover}>
              {'Read more >'}
            </Text>
          </Stack>
          <Img src={banner2} />
        </Flex>
      </Stack>
      {/* bottom */}
      <Stack direction="row" spacing="2px">
        <Img src={banner3} width="326px" height="274px" />
        <Img src={banner4} width="326px" height="274px" />
        <Stack width="326px" direction="column" spacing="2px">
          <Stack
            spacing="20px"
            justify="center"
            alignItems="center"
            height="136px"
            width="100%"
            bgColor="rgba(36,36,36,0.25)"
            fontSize="25px"
            color="#ffffff"
          >
            <Text>Incubation</Text>
            <Stack direction="row" spacing="10px">
              <Img height="30px" width="30px" src={twitter} />
              <Text color="#8b8b8b">@MythorLabs</Text>
            </Stack>
          </Stack>
          <Stack
            spacing="20px"
            justify="center"
            alignItems="center"
            height="136px"
            width="100%"
            bgColor="rgba(36,36,36,0.25)"
            fontSize="25px"
            color="#ffffff"
          >
            <Text>Follow us</Text>
            <Stack direction="row" spacing="10px">
              <Img height="30px" width="30px" src={twitter} />
              <Text color="#8b8b8b">@WEFAcc</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

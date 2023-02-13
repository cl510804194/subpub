import React, { useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Stack,
  Text,
  Image,
  Button,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';

import wechat from '@/assets/images/wechat.svg';
import wechat2 from '@/assets/images/wechat2.svg';
import discord from '@/assets/images/discord.svg';
import redbook from '@/assets/images/redbook.svg';
import jike from '@/assets/images/jike.svg';

import wechatQrCode from '@/assets/images/wechatQrCode.jpeg';
import gzhQrCode from '@/assets/images/gzhQrCode.jpeg';
import jikeQrCode from '@/assets/images/jikeQrCode.jpeg';
import redbookQrCode from '@/assets/images/redbookQrCode.png';
import discordQrCode from '@/assets/images/discordQrCode.png';

import { textNormalStyle } from '@/theme/style';

export interface IProps {}

const QrItem = ({
  text,
  img,
  qrCode,
}: {
  text: string;
  img: string;
  qrCode: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Stack
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      position="relative"
      justify="center"
      alignItems="center"
    >
      <Image src={img} alt="" />
      <Text {...textNormalStyle}>{text}</Text>
      {/* <Image
        position="absolute"
        top="-120px"
        width="120px"
        maxW="inherit"
        // height="120px"
        src={qrCode}
        alt=""
      /> */}
      {isHover && (
        <Image
          position="absolute"
          top="-130px"
          width="120px"
          // height="120px"
          src={qrCode}
          alt=""
        />
      )}
    </Stack>
  );
};

function Index({}: IProps) {
  return (
    <>
      <Box
        height="0px"
        width="100%"
        marginTop="68px"
        borderBottom="1px dashed rgba(0, 0, 0, 0.4)"
      />
      <Flex
        margin="0 auto"
        width="1200px"
        justifyContent="space-between"
        alignItems="center"
        marginTop="107px"
        marginBottom="60px"
      >
        <Text fontSize="28px" fontWeight="700">
          联系我们
        </Text>
        <Stack direction="row" spacing="68px">
          <QrItem img={wechat} text={'微信'} qrCode={wechatQrCode} />
          <QrItem img={wechat2} text={'公众号'} qrCode={gzhQrCode} />
          <QrItem img={discord} text={'discord'} qrCode={discordQrCode} />
          <QrItem img={redbook} text={'小红书'} qrCode={redbookQrCode} />
          <QrItem img={jike} text={'即刻'} qrCode={jikeQrCode} />

          {/* <Stack justify="center" alignItems="center">
            <Image src={wechat} alt="" />
            <Text {...textNormalStyle}>微信</Text>
          </Stack>
          <Stack justify="center" alignItems="center">
            <Image src={wechat2} alt="" />
            <Text {...textNormalStyle}>公众号</Text>
          </Stack>
          <Stack justify="center" alignItems="center">
            <Image src={discord} alt="" />
            <Text {...textNormalStyle}>discord</Text>
          </Stack>
          <Stack justify="center" alignItems="center">
            <Image src={redbook} alt="" />
            <Text {...textNormalStyle}>小红书</Text>
          </Stack>
          <Stack justify="center" alignItems="center">
            <Image src={jike} alt="" />
            <Text {...textNormalStyle}>即刻</Text>
          </Stack> */}
        </Stack>
      </Flex>
    </>
  );
}
export default Index;

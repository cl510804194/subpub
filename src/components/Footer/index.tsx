import React from "react";
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
} from "@chakra-ui/react";

import wechat from "@/assets/images/wechat.svg";
import wechat2 from "@/assets/images/wechat2.svg";
import discord from "@/assets/images/discord.svg";
import redbook from "@/assets/images/redbook.svg";
import jike from "@/assets/images/jike.svg";
import { textNormalStyle } from "@/theme/style";

export interface IProps {}

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
          <Stack justify="center" alignItems="center">
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
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
export default Index;

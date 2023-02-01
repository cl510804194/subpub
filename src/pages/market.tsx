import React from "react";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { textTitleStyle } from "@/theme/style";

import show from "@/assets/images/show.png";
import dev from "@/assets/images/dev.svg";
import digic from "@/assets/images/digic.svg";
import design from "@/assets/images/design.svg";
import write from "@/assets/images/write.svg";
import service from "@/assets/images/service.svg";
import ask from "@/assets/images/ask.svg";
import news from "@/assets/images/news.svg";
import teach from "@/assets/images/teach.svg";
import workPlace from "@/assets/images/workPlace.png";
import family from "@/assets/images/family.png";
import metaOnline from "@/assets/images/metaOnline.png";

export interface IProps {}

const types = [
  {
    label: "研发",
    img: dev,
  },
  {
    label: "数字营销",
    img: digic,
  },
  {
    label: "图片设计",
    img: design,
  },

  {
    label: "写作翻译",
    img: write,
  },
  {
    label: "金融财务",
    img: service,
  },
  {
    label: "咨询招聘",
    img: ask,
  },
  {
    label: "新闻传媒",
    img: news,
  },
  {
    label: "教育培训",
    img: teach,
  },
];
function Index({}: IProps) {
  return (
    <Flex flexDirection="column" alignItems="center" as="main">
      <Box height="962px">
        <Image
          src={show}
          alt=""
          height="700px"
          width="100%"
          objectFit="contain"
        />
      </Box>
      <Flex
        position="absolute"
        top="650px"
        flexDirection="column"
        alignItems="center"
        width="1200px"
        paddingBottom="40px"
        borderRadius="40px"
        boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
        border="1px solid"
        borderColor="black.100"
        background="white.100"
      >
        <Text {...textTitleStyle} marginTop="50px">
          远程工作
        </Text>

        <Box>
          <Box
            width="100%"
            paddingTop="36px"
            marginTop="36px"
            height="1px"
            backgroundImage="linear-gradient(to right, #333333 0%, #333333 50%, transparent 50%)"
            backgroundSize="18px 1px"
            backgroundRepeat="repeat-x"
          ></Box>
          <SimpleGrid columns={4} spacingY="70px" spacingX="150px">
            {types.map((item) => {
              return (
                <Stack key={item.label} direction="row" alignItems="center">
                  <Image src={item.img} alt="" />
                  <Text fontSize="16px" fontWeight="700">
                    {item.label}
                  </Text>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Box>
      </Flex>
      <Flex marginTop="71px" justify="space-between" width="1200px">
        <Image src={family} width="368px" height="447px" alt="" />
        <Image src={metaOnline} width="368px" height="447px" alt="" />
        <Image src={workPlace} width="368px" height="447px" alt="" />
      </Flex>
    </Flex>
  );
}
export default Index;

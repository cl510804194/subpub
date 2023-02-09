import React from 'react';
import { Box, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { textSubTitleStyle, textTitleStyle } from '@/theme/style';

import show from '@/assets/images/show.png';
import dev from '@/assets/images/dev.svg';
import digic from '@/assets/images/digic.svg';
import design from '@/assets/images/design.svg';
import write from '@/assets/images/write.svg';
import service from '@/assets/images/service.svg';
import ask from '@/assets/images/ask.svg';
import news from '@/assets/images/news.svg';
import teach from '@/assets/images/teach.svg';
import workPlace from '@/assets/images/workPlace.png';
import family from '@/assets/images/family.png';
import metaOnline from '@/assets/images/metaOnline.png';
import cloud from '@/assets/images/cloud.svg';
import finger from '@/assets/images/finger.svg';
import yangshuo from '@/assets/images/yangshuo.png';
import quanzhou from '@/assets/images/quanzhou.png';
import lisiben from '@/assets/images/lisiben.png';
import publish from '@/assets/images/publish.png';
import toBottom from '@/assets/images/toBottom.png';

import position from '@/assets/images/position.svg';
import global from '@/assets/images/global.svg';
import house from '@/assets/images/house.svg';
import avatar from '@/assets/images/avatar.svg';

export interface IProps {}
export interface travelProps {
  cnName: string;
  cityImage: string;
  enName: string;
  position: string;
  global: string;
  season: string;
  cost: string;
}

const types = [
  {
    label: '研发',
    img: dev,
  },
  {
    label: '数字营销',
    img: digic,
  },
  {
    label: '图片设计',
    img: design,
  },

  {
    label: '写作翻译',
    img: write,
  },
  {
    label: '金融财务',
    img: service,
  },
  {
    label: '咨询招聘',
    img: ask,
  },
  {
    label: '新闻传媒',
    img: news,
  },
  {
    label: '教育培训',
    img: teach,
  },
];

const tarvelCitys: travelProps[] = [
  {
    cnName: '阳朔',
    cityImage: yangshuo,
    enName: 'YANG SHUO',
    position: '中国-广西省',
    global: '亚热带季风气候，热量丰富，雨量充沛，日照充足，温和湿润，四季分明',
    season: '夏、秋季',
    cost: '1800RMB~2500RMB/月',
  },
  {
    cnName: '泉州',
    cityImage: quanzhou,
    enName: 'QUAN ZHOU',
    position: '中国-福建省',
    global:
      '亚热带海洋性季风气候，光热丰富，东短无严寒，年平均气温18~20℃，无霜期310以上',
    season: '春、秋、冬季',
    cost: '1000RMB~3000RMB/月',
  },
  {
    cnName: '里斯本',
    cityImage: lisiben,
    enName: 'LISBON',
    position: '葡萄牙',
    global:
      '受大西洋暖流影响，气候很好，冬不结冰，夏不炎热。一二月份平均气温为8℃，七八月份平均气温为26℃。全年大部分时间风和日丽，温暖如春，舒适宜人',
    season: '春、夏、秋季',
    cost: '700欧元/月',
  },
];

const HotCityItem = (props: travelProps) => {
  return (
    <Flex
      zIndex={99}
      flexShrink={0}
      width="572px"
      height="600px"
      flexDirection="column"
      borderRadius="24px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Flex
        flexDirection="column"
        height="324px"
        padding="46px 35px 0"
        alignItems="center"
        backgroundImage={props.cityImage}
        backgroundSize="cover"
      >
        <Flex
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing="12px">
            <Image src={finger} alt="" width="24px" height="24px" />
            <Text fontSize="20px" fontWeight="400" color="white.100">
              热门城市
            </Text>
          </Stack>
          <Image src={cloud} width="24px" height="24px" alt="" />
        </Flex>

        <Stack marginTop="73px" alignItems="center">
          <Text {...textSubTitleStyle} color="white.100">
            {props.cnName}
          </Text>
          <Text fontSize="20px" fontWeight="700" color="white.100">
            {props.enName}
          </Text>
        </Stack>
      </Flex>
      <Flex
        flex="1"
        flexDirection="column"
        padding="60px"
        borderRadius="24px"
        backgroundColor="white.100"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing="18px">
          <Image src={position} alt="" />
          <Text fontSize="16px" fontWeight="400">
            归属地:{props.position}{' '}
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="18px">
          <Image src={global} alt="" />
          <Text fontSize="16px" fontWeight="400">
            地理优势:{props.global}{' '}
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="18px">
          <Image src={house} alt="" />
          <Text fontSize="16px" fontWeight="400">
            宜居季节:{props.season}{' '}
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="18px">
          <Image src={avatar} alt="" />
          <Text fontSize="16px" fontWeight="400">
            生活成本:{props.cost}{' '}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

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
      {/* guide */}
      <Stack
        // alignItems="center"
        spacing="49px"
        marginTop="178px"
      >
        <Text textAlign="center" {...textTitleStyle}>
          旅居指南
        </Text>
        <Stack
          direction="row"
          spacing="56px"
          padding="10px"
          width="1200px"
          overflowX="scroll"
        >
          {tarvelCitys.map((item) => {
            return <HotCityItem key={item.cnName} {...item} />;
          })}
        </Stack>
      </Stack>
      {/* publish */}
      <Image marginTop="284px" width="1114px" src={publish} alt="" />
      {/* to bottom */}
      <Image src={toBottom} alt="" height="201px" marginTop="175px" />
    </Flex>
  );
}
export default Index;

import React from 'react';
import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react';
import { textSubTitleStyle } from '@/theme/style';

import Card from '@/components/Card';

import banner2 from '@/assets/images/banner2.png';
import banner3 from '@/assets/images/banner3.png';
import partyEnglish from '@/assets/images/partyEnglish.png';
import partyPeople from '@/assets/images/partyPeople.png';
import partyRemote from '@/assets/images/partyRemote.png';
import bitjob from '@/assets/images/bitjob.png';
import brix from '@/assets/images/brix.png';
import web3Job from '@/assets/images/web3Job.png';
import linglu from '@/assets/images/linglu.png';
import ideaPad from '@/assets/images/ideaPad.png';
import zhibei from '@/assets/images/zhibei.png';

import mind from '@/assets/images/mind.svg';
import trumpet from '@/assets/images/trumpet.svg';
import voice from '@/assets/images/voice.svg';
import chat from '@/assets/images/chat.svg';
import compass from '@/assets/images/compass.svg';

export interface IProps {}

export interface InfoItemProps {
  icon: string;
  title: string;
  desc: string;
}

const InfoItem = ({ icon, title, desc }: InfoItemProps) => {
  return (
    <Flex flexDirection="column" width="280px">
      <Image width="40px" src={icon} alt="" />
      <Text
        fontSize="20px"
        fontWeight="600"
        color="#000000"
        marginTop="18px"
        marginBottom="20px"
      >
        {title}
      </Text>
      <Text
        fontSize="14px"
        fontWeight="400"
        lineHeight="23px"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </Flex>
  );
};

const infos: InfoItemProps[] = [
  {
    icon: mind,
    title: 'RW游民技能ⁿ',
    desc: 'RW游民技能ⁿ是庄园里每周固定的活动，我们会邀请一位嘉宾来给大家分享自己的游民经历、旅居生活或技能分享，希望可以给想成为数字游民的你提供一些有价值的内容～',
  },
  {
    icon: voice,
    title: '栅栏边 播客',
    desc: '栅栏边是RW实验室旗下的谈话类播客节目。在这里，我们秉持自由共生的理念，共同探讨工作与生活的多元化、丰富性。对话内容聚焦数字游民群体，有“宏大叙事”，也有“生活碎片”... <br/> 各位带上小板凳，快来来栅栏边做客啦！',
  },
  {
    icon: chat,
    title: 'RW对话',
    desc: 'RW对话一场关于人和人之间之间的对话和交流，在这里，让我们一起共同探讨工作与生活的多元化、丰富性，感知真实的生活图景与流动的生命觉察。',
  },
  {
    icon: trumpet,
    title: 'RW传播',
    desc: '为大家第一时间传播数字游民的各种活动、沙龙、Space信息📢',
  },
  {
    icon: compass,
    title: '游民指南',
    desc: '致力于为数字游民收集整理时下与“游民”身份息息相关的信息，实现信息共享～',
  },
];

const friends = [bitjob, brix, web3Job, linglu, ideaPad, zhibei];

function Index({}: IProps) {
  return (
    <Stack spacing="129px">
      <Flex
        height="700px"
        background="#EDECFF"
        alignItems="center"
        justify="center"
      >
        <Flex flexDirection="column" marginRight="129px">
          <Text fontSize="72px" fontWeight="700" lineHeight="71px">
            游民派对
          </Text>
          <Text
            marginTop="8px"
            marginBottom="60px"
            fontSize="80px"
            fontWeight="700"
            lineHeight="77px"
          >
            nomad party
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="29px"
            color="#000000"
          >
            游民派对聚集了数字游民各种活动，从职业沙龙分享到聚餐聚会交友，我们总是可以在这里找到同频的人~
          </Text>
        </Flex>
        {/* <Box position="relative" width="334px" height="334px">
          <Image
            position="absolute"
            width="618px"
            height="680px"
            src={partyBanner}
            alt=""
          />
        </Box> */}
      </Flex>
      <Stack spacing="88px" alignItems="center">
        <Text {...textSubTitleStyle}>热门Party</Text>

        <Stack direction="row" spacing="34px">
          <Card
            bgColor="rgba(166, 252, 225, 0.3)"
            cover={banner2}
            link="https://mp.weixin.qq.com/s/Y_7fuPOHuK9dIj8-E3Tibw"
            title="RW游民技能ⁿ | 文字   让我过上了理想生活"
            desc="自由撰稿跟作家有蛮大的差距。   自由撰稿，你写的东西就是以客户的需求为主。等你真的很有名气了，你这个名字放到哪里，大家都想要找你写稿的时候，那个时候才会是作家。所以，反过来说自由撰稿，也不会有太高的门槛，它的门槛还蛮低的，但是上限就比较高"
          />
          <Card
            cover={banner3}
            link="https://mp.weixin.qq.com/s/Y_7fuPOHuK9dIj8-E3Tibw"
            title="RW实验室 | @所有人  想把我说给你听"
            desc="我们一直在思考RW的意义和价值，也在思考怎么让RW发展地更好。在经过前期聚焦业务的快速发展之后，我们想选择停下来，和关注RW的你，一起真诚探讨更多的可能性。"
          />
        </Stack>
      </Stack>
      <Flex
        justifyContent="center"
        width="100%"
        padding="40px 0"
        backgroundColor="rgba(248, 248, 248, 0.6)"
      >
        <Flex
          width="1240px"
          gap="60px 175px"
          // height="607px"
          alignItems="start"
          // justifyContent="center"
          flexWrap="wrap"
          // padding="0 180px"
        >
          {infos.map((item) => (
            <InfoItem key={item.title} {...item}></InfoItem>
          ))}
        </Flex>
      </Flex>
      <Stack marginTop="80px" spacing="88px" alignItems="center">
        <Text {...textSubTitleStyle}>游民圈子</Text>

        <Stack direction="row" spacing="46px">
          <Image width="360px" src={partyPeople} alt="" />
          <Image width="360px" src={partyRemote} alt="" />
          <Image width="360px" src={partyEnglish} alt="" />
        </Stack>
      </Stack>

      {/* friends */}
      <Stack marginTop="80px" spacing="88px" alignItems="center">
        <Text {...textSubTitleStyle}>RW合作方</Text>

        <Stack direction="row" spacing="20px" justifyContent="center">
          {friends.map((item, index) => (
            <Image key={index} width="180px" src={item} alt="" />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Index;

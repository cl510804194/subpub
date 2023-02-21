import React from 'react';
import { Stack, Text, Flex, Img } from '@chakra-ui/react';

import px2vw from '@/utils/px2vw';

import banner6 from '@/assets/images/banner6.webp';
import banner7 from '@/assets/images/banner7.webp';
import banner8 from '@/assets/images/banner8.webp';
import { buttonHover } from '@/theme/style';

export interface IProps {}

export interface CardProps {
  imgSrc: string;
  title: string;
  desc: string;

  onView?: () => void;
}

const info: CardProps[] = [
  {
    imgSrc: banner6,
    title: 'Web3Fans.Club',
    desc: 'Starting from China, bring the next billion users into the Web3 world.',
  },
  {
    imgSrc: banner7,
    title: 'AdvisorClub',
    desc: 'Let professional become advisors and let advisors create business value.',
  },
  {
    imgSrc: banner8,
    title: 'ChangshaDAO',
    desc: 'Make Changsha A Web3 Celebrity City.',
  },
];

const Card = ({ imgSrc, title, desc, onView }: CardProps) => {
  return (
    <Flex
      flexDirection="column"
      width={{ base: '100%', md: '290px' }}
      height={{ base: '100%', md: '460px' }}
      bgColor="rgba(36,36,36,0.25)"
    >
      <Img width="100%" height={{ base: '100%', md: '243px' }} src={imgSrc} />
      <Flex
        padding="15px"
        flexDirection="column"
        alignItems="center"
        color="#555555"
      >
        <Text fontSize="25px" fontWeight="bold">
          {title}
        </Text>
        <Text
          height="72px"
          marginTop="13px"
          marginBottom="20px"
          fontSize="17px"
        >
          {desc}
        </Text>
        <Flex
          onClick={onView}
          justify="center"
          alignItems="center"
          width="142px"
          height="40px"
          bgColor="#000000"
          color="#ffffff"
          _hover={buttonHover}
        >
          Read More
        </Flex>
      </Flex>
    </Flex>
  );
};
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
        What we support
      </Flex>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        width="100%"
        justifyContent="space-between"
      >
        {info.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </Flex>
    </Stack>
  );
}
export default Index;

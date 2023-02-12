import { Flex, Stack, Text, Image, SimpleGrid } from '@chakra-ui/react';

import 'swiper/css';
import { useState } from 'react';

import 'swiper/css/pagination';

import builders from '@/data/build';

import island from '@/assets/images/island.png';
import rightArrow from '@/assets/images/rightArrow.svg';
import rightArrowPurple from '@/assets/images/rightArrowPurple.svg';
import polygon from '@/assets/images/polygon.svg';
import group1 from '@/assets/images/group1.png';
import coCreate from '@/assets/images/coCreate.png';
import system2 from '@/assets/images/system2.png';
import department from '@/assets/images/department.png';
import { buttonHover, textSubTitleStyle } from '@/theme/style';

const BuilderItem = ({
  name,
  department,
  avatar,
}: {
  name: string;
  department: string;
  avatar: string;
}) => {
  return (
    <Stack spacing="10px" alignItems="center" justifyContent="center">
      <Image width="180px" height="180px" src={avatar} alt="" />
      <Text fontSize="18px" fontWeight="600" lineHeight="26px" color="#000000">
        {name}
      </Text>
      <Text fontSize="12px" fontWeight="400" lineHeight="15px" color="#000000">
        {department}
      </Text>
    </Stack>
  );
};

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  return (
    <Flex flexDirection="column" alignItems="center" as="main">
      {/* Banner */}
      <Flex
        height="700px"
        bgColor="#eeeeee"
        width="100%"
        justifyContent="center"
      >
        <Image src={island} objectFit="contain" height="700px" alt="" />
      </Flex>

      <Image height="220px" src={coCreate} alt="" />
      <Stack
        alignItems="center"
        spacing="24px"
        // justifyContent="center"
        width="1200px"
        marginTop="108px"
      >
        <Text {...textSubTitleStyle}>关于共建者 </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="25px"
          width="669px"
          textAlign="center"
          color="rgba(0, 0, 0, 0.5)"
        >
          我们希望能够集结认同数字游民生活方式的“共识者”，一起推动 RW
          实验室的成长，能够在满足数字游民经济需求的同时高度关注精神需求，塑造一个有凝聚力的社区圈子，打造有力的对外影响与传播。
        </Text>
        <Flex
          direction="row"
          alignItems="center"
          height="307px"
          bgColor="#F8F8F8"
          borderRadius="12px"
        >
          <Stack
            height="180px"
            // width="400px"
            padding="0 36px"
            spacing="24px"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="20px" fontWeight="600" color="#5A57C6">
              👉🏻 如何成为共建者
            </Text>
            <Text
              width="328px"
              fontSize="14px"
              lineHeight="180%"
              fontWeight="400"
              color="#000000"
              // width="669px"
            >
              每一个人都能成为共建者，在RW发布数字游民相关的内容，不定期的参与社区活动即可成为共建者
            </Text>
          </Stack>
          <Stack
            height="180px"
            padding="0 36px"
            spacing="24px"
            justifyContent="center"
            alignItems="center"
            borderLeft="1px solid rgba(173, 173, 173, 0.2)"
            borderRight="1px solid rgba(173, 173, 173, 0.2)"
          >
            <Text fontSize="20px" fontWeight="600" color="#5A57C6">
              👉🏻 共建者进阶
            </Text>
            <Text
              width="328px"
              fontSize="14px"
              lineHeight="180%"
              fontWeight="400"
              color="#000000"
            >
              不同的共建者等级对应不同的社区权限和福利，每个人都能成为RW最重要的那个人
            </Text>
          </Stack>
          <Stack
            height="180px"
            // width="400px"
            padding="0 36px"
            spacing="24px"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="20px" fontWeight="600" color="#5A57C6">
              👉🏻 共建者权利
            </Text>
            <Text
              width="328px"
              fontSize="14px"
              lineHeight="180%"
              fontWeight="400"
              color="#000000"
            >
              社区倡导价值交换，利他的同时我们鼓励回报，因此不同等级的共建者都将获得不等的权利和权益
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack
        alignItems="center"
        spacing="24px"
        // justifyContent="center"
        width="1200px"
        marginTop="80px"
      >
        <Text {...textSubTitleStyle}>共建者等级体系 </Text>
        <Image width="1200px" src={system2} alt="" />
      </Stack>
      <Stack
        alignItems="center"
        spacing="64px"
        // justifyContent="center"
        width="1200px"
        marginTop="80px"
      >
        <Text {...textSubTitleStyle}>RW公会 </Text>
        <Image width="1200px" src={department} alt="" />
      </Stack>
      <Stack
        alignItems="center"
        spacing="64px"
        // justifyContent="center"
        width="1200px"
        marginTop="80px"
      >
        <Text {...textSubTitleStyle}>RW共建者 </Text>
        <SimpleGrid columns={5} spacingX="62px" spacingY="62px">
          {[...(isShow ? builders : builders.slice(0, 5))].map(
            (item, index) => (
              <BuilderItem
                key={index}
                name={item.name}
                department={item.department}
                avatar={item.URI}
              />
            )
          )}
        </SimpleGrid>
        <Flex
          onClick={() => {
            setIsShow(!isShow);
          }}
          flexDirection="column"
          marginTop="37px"
          alignItems="center"
          _hover={{ ...buttonHover }}
        >
          <Text
            marginBottom="6px"
            lineHeight="25px"
            fontSize="18px"
            fontWeight="600"
            color="#656565"
          >
            {isShow ? '收起' : '查看全部'}
          </Text>
          <Image
            transform={isShow ? 'rotate(180deg)' : 'rotate(0deg)'}
            width="15px"
            src={polygon}
            alt=""
          />
        </Flex>
      </Stack>
    </Flex>
  );
}

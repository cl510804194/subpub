import { Inter } from "@next/font/google";
import {
  Box,
  Divider,
  Flex,
  Stack,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import styles from "@/styles/Home.module.css";

import file from "@/assets/images/file.png";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import minyuan from "@/assets/images/minyuan.png";
import guide from "@/assets/images/guide.svg";
import contract from "@/assets/images/contract.svg";
import community from "@/assets/images/community.svg";
import rightArrow from "@/assets/images/rightArrow.svg";
import rightArrowPurple from "@/assets/images/rightArrowPurple.svg";
import rightArrowWhite from "@/assets/images/rightArrowWhite.svg";
import rightArrowBlack from "@/assets/images/rightArrowBlack.svg";
import juaner from "@/assets/images/juaner.png";
import brix from "@/assets/images/brix.png";
import fintPoints from "@/assets/images/fintPoints.png";
import group1 from "@/assets/images/group1.png";
import group2 from "@/assets/images/group2.svg";
import group3 from "@/assets/images/group3.svg";
import group4 from "@/assets/images/group4.svg";
import { useState } from "react";
import { buttonHover } from "@/theme/style";
const inter = Inter({ subsets: ["latin"] });

const NumberItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <Flex justify="space-between" alignItems="center" padding="20px 0">
      <Text fontWeight="400" fontSize="16px">
        {label}
      </Text>
      <Text fontWeight="700" fontSize={"46px"}>
        {value}
      </Text>
    </Flex>
  );
};

const WhereLinkItem = ({ imgSrc, text }: { imgSrc: string; text: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Stack
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      direction="row"
      marginRight="68px"
      spacing="14px"
      marginTop="34px"
      alignItems="center"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Flex
        justify="center"
        alignItems="center"
        width="40px"
        height="40px"
        background={isHover ? "purple.10" : "gray.50"}
        borderRadius="8px"
      >
        <Image
          objectFit="contain"
          width="24px"
          height="24px"
          src={imgSrc}
          alt=""
        />
      </Flex>
      <Text
        color={isHover ? "purple.100" : "black.100"}
        fontWeight="500"
        fontSize="16px"
      >
        {text}
      </Text>
      <Image src={isHover ? rightArrowPurple : rightArrow} alt="" />
    </Stack>
  );
};

const SwiperItem = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width={735}
      height={484}
      marginTop="89px"
      marginBottom="127px"
      backgroundImage={group1}
      backgroundSize="cover"
    >
      <Text
        marginBottom="8px"
        color="black.100"
        fontWeight="700"
        fontSize="72px"
      >
        自由共生
      </Text>
      <Text
        color="black.100"
        fontWeight="700"
        fontSize="72px"
        marginBottom="36px"
      >
        co-live, co-create
      </Text>
      <Text
        color="black.100"
        fontWeight="400"
        fontSize="16px"
        fontStyle="normal"
        lineHeight="180%"
      >
        RW实验室是一个秉持DAO理念的共创型数字游民社区。以远程工作为价值核心，全方位地帮助用户成为数字游民，让有趣的人聚在一起，形成一个自由共生的数字游民生态圈。
      </Text>
    </Flex>
  );
};

export default function Home() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      as="main"
      paddingTop="102px"
    >
      {/* swiper */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem />
        </SwiperSlide>
      </Swiper>
      {/* who We are */}
      <Flex marginTop="80px" width="1200px" justify="space-between">
        <Stack direction="column" width="536px" spacing="36px">
          <Text fontWeight="700" fontSize="46px">
            Who We Are？
          </Text>
          <Text fontWeight="400" fontSize="16px" lineHeight="180%">
            RW实验室倡导联合全球的数字游民探索者，包括个人、团队、企业、其他组织的资源，构建一个数字游民社区，社区目前有远程工作招聘这个核心模块，希望不断自组织生长涌现出一系列关于数字游民的产品和服务，引领更多人加入数字游民，成为RW实验室新公民。
          </Text>
          <Flex flexWrap="wrap">
            <WhereLinkItem imgSrc={guide} text="RW新手指南" />
            <WhereLinkItem imgSrc={file} text="RW使用说明书" />
            <WhereLinkItem imgSrc={community} text="RW社区体系" />
            <WhereLinkItem imgSrc={contract} text="RW社区公约" />
          </Flex>
        </Stack>
        <Flex direction="column" width="404px">
          <NumberItem label="用户数" value="6.5K"></NumberItem>
          <Divider />
          <NumberItem label="共建者数量" value="40+"></NumberItem>
          <Divider />
          <NumberItem label="项目数量" value="10+"></NumberItem>
          <Divider />
          <NumberItem label="合作方数量" value="20+"></NumberItem>
        </Flex>
      </Flex>
      {/* create a job */}
      <Flex marginTop="120px" width="1200px" justify="space-between">
        <Flex
          padding="32px 46px"
          width="580px"
          flexDirection="column"
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
          background="gray.300"
        >
          <Text fontWeight="700" fontSize="44px">
            Create a dream job
          </Text>
          <Text
            marginTop="20px"
            marginBottom="20px"
            fontWeight="400"
            fontSize="14px"
          >
            拥有一份远程工作，不仅仅是工作与生活平衡的调节剂，更是成为数字游民，享受地理套利和时间套利的敲门砖
          </Text>
          <Stack direction="row" marginBottom="25px" spacing="40px">
            <Link color="blue.100" fontSize="16px" fontWeight="500">
              远程工作求职/发布
            </Link>
            <Link color="blue.100" fontSize="16px" fontWeight="500">
              游民技能赋能
            </Link>{" "}
          </Stack>
          <Button
            width="115px"
            height="40px"
            background="blue.100"
            borderRadius="8px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={buttonHover}
          >
            <Text
              color="white.100"
              fontWeight="400"
              fontSize="14px"
              marginRight="10px"
            >
              探索全部
            </Text>
            <Image width="19px" height="10px" src={rightArrowWhite} alt="" />
          </Button>
        </Flex>
        <Flex
          padding="32px 46px"
          width="580px"
          flexDirection="column"
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
          background="gray.300"
        >
          <Text fontWeight="700" fontSize="44px">
            We Can Help
          </Text>
          <Text
            marginTop="20px"
            marginBottom="20px"
            fontWeight="400"
            fontSize="14px"
          >
            我们可以给数字游民提供旅途中的各种周边服务，让大家享受旅居的同时可以高效无忧的工作。
          </Text>
          <Stack direction="row" marginBottom="25px" spacing="40px">
            <Link color="blue.100" fontSize="16px" fontWeight="500">
              法务、保险、签证、数字游民基地、旅居指南等服务
            </Link>
          </Stack>
          <Button
            width="115px"
            height="40px"
            background="blue.100"
            borderRadius="8px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color="white.100"
              fontWeight="400"
              fontSize="14px"
              marginRight="10px"
              _hover={buttonHover}
            >
              全部服务
            </Text>
            <Image width="19px" height="10px" src={rightArrowWhite} alt="" />
          </Button>
        </Flex>
      </Flex>
      {/* party */}
      <Flex marginTop="120px" width="1200px" justify="space-between">
        <Flex flexDirection="column" width="306px">
          <Text fontSize="40px" fontWeight="700">
            游民派对
          </Text>
          <Text
            marginTop="28px"
            marginBottom="44px"
            fontSize="14px"
            fontWeight="400"
          >
            从社区成员到共建者再到合作方，数字游民们聚集在一起，从物质需求到精神需求，共同推动数字游民生态的繁荣。
          </Text>
          <Stack direction="column" spacing="15px">
            <Stack direction="row" spacing="15px" alignItems="center">
              <Image src={group4} alt="" />{" "}
              <Text fontSize="14px" fontWeight="400" color="purple.100">
                各个圈子的数字游民
              </Text>
            </Stack>
            <Stack direction="row" spacing="15px" alignItems="center">
              <Image src={group3} alt="" />{" "}
              <Text fontSize="14px" fontWeight="400" color="purple.100">
                线上/线下活动
              </Text>
            </Stack>
            <Stack direction="row" spacing="15px" alignItems="center">
              <Image src={group2} alt="" />{" "}
              <Text fontSize="14px" fontWeight="400" color="purple.100">
                第三方合作者
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          justify="space-between"
          // alignItems="center"
          width="814px"
          height="338px"
          padding="28px 30px"
          border="1px solid #A6FCE1"
          borderRadius="12px"
          background="rgba(166, 252, 225, 0.3)"
        >
          <Flex flexDirection="column" paddingRight="42px">
            <Stack direction="row" spacing="15px" alignItems="center">
              <Image src={group3} alt="" />{" "}
              <Text fontSize="14px" fontWeight="400" color="purple.100">
                热门活动
              </Text>
            </Stack>
            <Text marginTop="20px" fontWeight="600" fontSize="20px">
              上海线下活动：斜杠女性的∞可能性
            </Text>
            <Text margin="15px 0" fontWeight="400" fontSize="14px">
              斜杠女性，是她们的共同标签。勇往无前，则是她们的共同精神。
              <br />
              我们邀请到数位在小众领域出彩的斜杠女性，在新年到来之际，与大家分享关于女性的多元可能，分享她们的人生冒险故事，里面有犹豫与失败，也有坚持与热爱。我们一起，看见女性的无限力量。
            </Text>
            <Stack direction="row" spacing="10px">
              <Image width="12px" src={rightArrowBlack} alt="" />
              <Link
                fontSize="10px"
                paddingBottom="2px"
                borderBottom="1px solid #000000"
                _hover={{
                  textDecoration: "none",
                  ...buttonHover,
                }}
              >
                https://mp.weixin.qq.com/s/Y_7fuPOHuK9dIj8-E3Tibw
              </Link>
            </Stack>
          </Flex>
          <Image
            marginTop="67px"
            width="350px"
            height="220px"
            src={banner1}
            alt=""
          />
        </Flex>
      </Flex>
      {/* skills */}
      <Flex marginTop="120px" width="1200px" justify="space-between">
        <Flex
          padding="28px"
          width="580px"
          flexDirection="row"
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
          background="gray.300"
        >
          <Flex flexDirection="column" marginRight="40px">
            <Text fontSize="20px" fontWeight="600">
              RW游民技能ⁿ | 文字
            </Text>
            <Text fontSize="20px" fontWeight="600">
              让我过上了理想生活
            </Text>
            <Text
              marginTop="28px"
              marginBottom="44px"
              fontSize="14px"
              fontWeight="400"
              lineHeight="23px"
            >
              自由撰稿跟作家有蛮大的差距。
              <br />
              自由撰稿，你写的东西就是以客户的需求为主。等你真的很有名气了，你这个名字放到哪里，大家都想要找你写稿的时候，那个时候才会是作家。所以，反过来说自由撰稿，也不会有太高的门槛，它的门槛还蛮低的，但是上限就比较高
            </Text>
            <Stack direction="row" spacing="10px">
              <Image width="12px" src={rightArrowBlack} alt="" />
              <Link
                width="180px"
                fontSize="10px"
                paddingBottom="2px"
                borderBottom="1px solid #000000"
                _hover={{
                  textDecoration: "none",
                  ...buttonHover,
                }}
              >
                https://mp.weixin.qq.com/s/Y_7fuPOHuK9dIj8-E3Tibw
              </Link>
            </Stack>
          </Flex>
          <Image width="260px" src={banner2} alt="" />
        </Flex>
        <Flex
          padding="28px"
          width="580px"
          flexDirection="row"
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.100"
          background="gray.300"
        >
          <Flex flexDirection="column" marginRight="40px">
            <Text fontSize="20px" fontWeight="600">
              RW实验室 | @所有人
            </Text>
            <Text fontSize="20px" fontWeight="600">
              想把我说给你听
            </Text>
            <Text
              marginTop="28px"
              marginBottom="90px"
              fontSize="14px"
              fontWeight="400"
              lineHeight="23px"
            >
              我们一直在思考RW的意义和价值，也在思考怎么让RW发展地更好。在经过前期聚焦业务的快速发展之后，我们想选择停下来，和关注RW的你，一起真诚探讨更多的可能性。
            </Text>
            <Stack direction="row" spacing="10px">
              <Image width="12px" src={rightArrowBlack} alt="" />
              <Link
                width="180px"
                fontSize="10px"
                paddingBottom="2px"
                borderBottom="1px solid #000000"
                _hover={{
                  textDecoration: "none",
                  ...buttonHover,
                }}
              >
                https://mp.weixin.qq.com/s/ikZq_m8VMPd6df7O-2qFNQ
              </Link>
            </Stack>
          </Flex>
          <Image width="260px" src={banner3} alt="" />
        </Flex>
      </Flex>
      {/* intro */}
      <Flex marginTop="77px" width="1200px" justifyContent="space-between">
        <Flex width="360px" flexDirection="column">
          <Text fontSize="14px" fontWeight="400" lineHeight="23px">
            2022年夏天，在社交媒体刷到【RW实验室】，于是这场所有人都在远程的故事开始了。进入社群，认识了热情的生态共建者、技能满满的社区公民；在这里，24h不间断讨论工作和生活的丰富性和多样性，更有实践KOL专题分享在不同国家的经历和经验；除此之外，我们每日每周可获取高质量的远程工作list，按需享受到不断升级的数字游民服务…
            <br /> <br />
            RW实验室，不仅在打造一个数字游民生态圈，更是在推行一种未来的生活方式。这几年，生态变化的起伏，无论是职场的环境还是每一天的生活，都需要更加“可持续”。那么，RW不乏是我们的一种选择。只要我们足够自驱、足够真诚、富有利他思维，无疑最终自己会受到更多的启发和机会。
            <br /> <br />
            RW实验室，社区里的公民来来往往，但是共同探讨的内容会在共建者的付出中持续沉淀下来。随时欢迎新公民加入，也欢迎老公民常回家看看！
            <br /> <br />
            RW实验室，不仅在打造一个数字游民生态圈，更是在推行一种未来的生活方式
          </Text>
          <Stack
            direction="row"
            spacing="20px"
            marginTop="24px"
            alignItems="center"
          >
            <Image width="56px" height="56px" src={minyuan} alt="" />
            <Stack direction="column">
              <Text fontWeight="600" fontSize="20px">
                明媛学姐
              </Text>
              <Text fontWeight="400" fontSize="14px">
                RW社区用户
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex width="360px" flexDirection="column">
          {" "}
          <Text fontSize="14px" fontWeight="400" lineHeight="23px">
            说来俗气！真的是很有缘分地偶然遇见了RW实验室，和各种想法丰盈的伙伴相识相知，然后一发不可收拾。逐步冒出远程工作的想法，开始真正找到了不只一份远程工作，开启了充满新鲜感的半旅居生活，也见证了很多伙伴的数字游民之旅，同频共振大抵如此。或许是来自于自身最真切的感知，我想，如果你想要探索崭新的生活方式，RW实验室可以是延展探索维度的望远镜，也可以是助力内观自我觉察的放大镜，助你向内向外都达成更美好的自我实现。
          </Text>
          <Stack
            direction="row"
            spacing="20px"
            marginTop="24px"
            alignItems="center"
          >
            <Image width="56px" height="56px" src={juaner} alt="" />
            <Stack>
              <Text fontWeight="600" fontSize="20px">
                卷二-市场公会
              </Text>
              <Text fontWeight="400" fontSize="14px">
                RW共建者
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Flex width="360px" flexDirection="column">
          <Text fontSize="14px" fontWeight="400" lineHeight="23px">
            很高兴看到国内有像RW实验室这样的中文数字游民社区为各位工作者提供关于远程工作的信息和生活方式的探讨，通过RW实验室让我们觉得和国内的数字游民群体联系得更紧密了，让我们更好地理解和听到了中国数字游民的声音。
          </Text>
          <Stack
            direction="row"
            spacing="20px"
            marginTop="24px"
            alignItems="center"
          >
            <Image width="56px" height="56px" src={brix} alt="" />
            <Stack>
              <Text fontWeight="600" fontSize="20px">
                Brix Labs
              </Text>
              <Text fontWeight="400" fontSize="14px">
                RW第三方合作者
              </Text>
            </Stack>
          </Stack>
          <Text
            marginTop="82px"
            fontSize="14px"
            fontWeight="400"
            lineHeight="23px"
          >
            RW不但提供了一个平台给企业进行远程招聘，同时为让求职者多了一个选项去寻找工作，达到双赢局面。
          </Text>
          <Stack
            direction="row"
            spacing="20px"
            marginTop="24px"
            alignItems="center"
          >
            <Image width="56px" height="56px" src={fintPoints} alt="" />
            <Stack>
              <Text fontWeight="600" fontSize="20px">
                FinPoints
              </Text>
              <Text fontWeight="400" fontSize="14px">
                RW第三方合作者
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

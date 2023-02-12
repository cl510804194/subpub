import React from 'react';
import {
  Box,
  Flex,
  Image,
  Stack,
  Link,
  LinkProps,
  TextProps,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import document from '@/assets/images/document.svg';
import frame from '@/assets/images/frame.png';

export interface IProps {}

const linkStyle: LinkProps & TextProps = {
  color: 'black.40',
  fontSize: '14px',
  lineHeight: '17px',
  fontStyle: 'normal',

  _hover: {
    textDecoration: 'none',
    color: 'black.80',
    borderBottom: '1px solid',
    borderColor: 'black.80',
    paddingBottom: '2px',
  },
};

const linkActive: LinkProps & TextProps = {
  color: 'black.100',
  borderBottom: '1px solid',
  borderColor: 'black.100',
  paddingBottom: '2px',
};

const links = [
  {
    label: '首页',
    path: '/',
  },
  {
    label: '游民市集',
    path: '/market',
  },
  {
    label: '游民派对',
    path: '/party',
  },
  {
    label: '共建岛',
    path: '/land',
  },
];

function Index({}: IProps) {
  const router = useRouter();

  const render = () => {
    return links.map((item) => {
      return (
        <Link
          key={item.path}
          {...(router.pathname === item.path
            ? { ...linkStyle, ...linkActive }
            : linkStyle)}
          href={item.path}
        >
          {item.label}
        </Link>
      );
    });
  };

  return (
    <Box zIndex={9999} position="fixed" width="100%" backgroundColor="gray.100">
      <Flex
        justify="space-between"
        alignItems="center"
        height={'102px'}
        maxWidth={'1200px'}
        margin="0 auto"
      >
        <Flex alignItems="center">
          <Image src={frame} alt="frame" width="66px" height="36px"></Image>
          <Stack direction="row" spacing="64px" marginLeft={129} height="100%">
            {render()}
          </Stack>
        </Flex>
        <Flex flexDirection="row" alignItems="center">
          <Flex justify="center" alignItems="center">
            <Image
              src={document}
              alt="document"
              width="18px"
              height="18px"
              paddingTop="2px"
              marginRight="8px"
            />
            <Link
              {...linkStyle}
              fontSize="14px"
              lineHeight="17px"
              color="black.100"
              paddingBottom="3px"
            >
              文档库
            </Link>
          </Flex>
          <Button
            marginLeft="32px"
            width="102px"
            height="36px"
            borderRadius={0}
            border="1px solid"
            borderColor="black.100"
            background="transparent"
            textAlign="center"
            lineHeight="36px"
          >
            登录/注册
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Index;

import React from 'react';
import {
  Box,
  Flex,
  Image,
  Stack,
  Link,
  LinkProps,
  TextProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

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
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Support',
    path: '/support',
  },
  {
    label: 'Contact',
    path: '/contact',
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
    <Box
      zIndex={9999}
      position="fixed"
      width="100%"
      maxWidth="1920px"
      backgroundColor={'#ffffff'}
      // borderBottom="1px solid #000000"
    >
      <Flex
        justify="space-between"
        alignItems="center"
        height={'102px'}
        maxWidth={'1200px'}
        margin="0 auto"
      >
        <Flex alignItems="center">
          {/* <Image src={frame} alt="frame" width="66px" height="36px"></Image> */}
          <Stack direction="row" spacing="64px" marginLeft={129} height="100%">
            {render()}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Index;

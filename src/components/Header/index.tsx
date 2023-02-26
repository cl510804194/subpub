import React, { useEffect, useState } from 'react';
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

import logo from '@/assets/images/logo.png';
import px2vw from '@/utils/px2vw';
import { buttonHover } from '@/theme/style';

export interface IProps {}

const linkStyle: LinkProps & TextProps = {
  color: '#D1D1D1',
  fontSize: '16px',
  fontStyle: 'normal',
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
    color: 'black.80',
    // borderBottom: '1px solid',
    borderColor: 'black.80',
    paddingBottom: '2px',
  },
};

const linkActive: LinkProps & TextProps = {
  color: 'black.100',
  // borderBottom: '1px solid',
  borderColor: 'black.100',
  paddingBottom: '2px',
  textDecoration: 'none',
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
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function listener() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollTop(scrollTop);
    }
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const render = () => {
    return links.map((item, index) => {
      return (
        <Link
          key={item.path}
          height="23px"
          width={{ base: px2vw(90), md: '199px' }}
          margin={{ base: `${px2vw(10)} 0`, md: '10px 0' }}
          borderRight={index !== links.length - 1 ? '1px solid #000' : ''}
          textAlign="center"
          lineHeight="23px"
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
    <Flex
      zIndex={9999}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      width="100%"
      maxWidth="1920px"
      backgroundColor={'#ffffff'}
      opacity={scrollTop > 100 ? 0 : 1 - scrollTop / 100}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="150px"
        borderBottom="1px solid #000"
        _hover={buttonHover}
      >
        <Image height="101px" src={logo} alt="" />
      </Flex>
      {/* links */}
      <Flex height="100%">{render()}</Flex>
      {/* <Flex
        justify="space-between"
        alignItems="center"
        height={{ base: px2vw(60), md: '102px' }}
        maxWidth={'1200px'}
        margin="0 auto"
      >
        <Flex alignItems="center">
          <Stack
            direction="row"
            spacing={{ base: px2vw(20), md: '64px' }}
            marginLeft={{ base: px2vw(30), md: 129 }}
            height="100%"
          >
            {render()}
          </Stack>
        </Flex>
      </Flex> */}
    </Flex>
  );
}
export default Index;

import { Box } from '@chakra-ui/react';
import { LinkItem } from './navbar';
import { IoLogoGithub } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Rubén Ruiz. All Rights Reserved.
      <LinkItem
        _target="_blank"
        href="https://github.com/craftzdog/craftzdog-homepage"
        display="inline-flex"
        alignItems="center"
        style={{ gap: 4 }}
        pl={2}
      >
        <IoLogoGithub />
        Source Code by @craftzdog
      </LinkItem>
    </Box>
  );
};

export default Footer;

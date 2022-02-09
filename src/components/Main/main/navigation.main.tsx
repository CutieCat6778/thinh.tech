import {
  Box,
  Flex,
  Image,
  useColorMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import { NavigationToggle } from "../../../interface/state";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navigation: React.FC<NavigationToggle> = ({ toggle, setToggle }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex flexDir={"row"} justifyContent={"right"} alignItems={"center"}>
      <Box marginRight="auto" onClick={() => toggleColorMode()}>
        <Image
          src={
            colorMode === "light"
              ? "https://cutiecat6778.github.io/cdn/logo/logo_trans_238.png"
              : "https://cutiecat6778.github.io/cdn/logo/logo_trans_238_white.webp"
          }
          alt="Logo"
          boxSize={"118px"}
        />
      </Box>
      <Menu autoSelect={false} isLazy>
        <MenuButton
          as={Button}
          _hover={{
            backgroundColor: "none",
          }}
          _focus={{ boxShadow: "none" }}
          variant="ghost"
          fontFamily={"Open Sans"}
          rightIcon={<ChevronDownIcon />}
          fontSize="2xl"
          d={{ base: "none", md: "flex" }}
          textAlign="center"
        >
          Categories
        </MenuButton>
        <MenuList p={0} fontSize="2xl" fontFamily={"Open Sans"}>
          <MenuItem>
            <Text
              to="about"
              as={Link}
              href="#about"
              spy={true}
              smooth={true}
              width="100%"
            >
              About
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              to="skills"
              as={Link}
              href="#skills"
              spy={true}
              smooth={true}
              width="100%"
            >
              Skills
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              to="projects"
              as={Link}
              href="#projects"
              spy={true}
              smooth={true}
              width="100%"
            >
              Projects
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu autoSelect={false} isLazy>
        <MenuButton
          as={HamburgerIcon}
          d={{ base: "block", md: "none" }}
          boxSize={"30px"}
        />
        <MenuList p={0} maxW="200px">
          <MenuItem>
            <Text
              as={Link}
              to="about"
              href="#about"
              spy={true}
              smooth={true}
              width={"100%"}
            >
              About
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              as={Link}
              to="skills"
              href="#skills"
              spy={true}
              smooth={true}
              width={"100%"}
            >
              Skills
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              as={Link}
              to="projects"
              href="#projects"
              spy={true}
              smooth={true}
              width={"100%"}
            >
              Projects
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navigation;

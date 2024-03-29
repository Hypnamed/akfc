import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSteam, FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function Ediz() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src="https://media2.giphy.com/media/STx6D0t05pZEidimsU/giphy.gif"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Ediz Keskin
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"gray.600"} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>Boş bilgilerin kralı</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.300"}
                fontWeight={"500"}
                mb={"4"}
              >
                ÖZELLİKLER
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Warframe obezi</ListItem>
                  <ListItem>ZİH̨̢̀İ͚̹Ņ̰͟͝SE͎͔̪L ̅̏̃҉SO̅RU̵̴N</ListItem>{" "}
                  <ListItem>Her gün boş bilgi verebilir</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Bahtsız bedevi</ListItem>
                  <ListItem>İnsan (galiba)</ListItem>
                  <ListItem>Obama'nın soyismini biliyor</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems={"center"}
            justifyContent="center"
            mb={6}
          >
            <Text
              as={"a"}
              href="https://edizkeskin.com/"
              mr="6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiWorld size={"30px"} className="icon" />
            </Text>
            <Text
              as={"a"}
              href="https://www.instagram.com/sharpness_4/"
              mr="6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={"30px"} className="icon" />
            </Text>
            <Text
              as={"a"}
              href="https://steamcommunity.com/id/sharpness4"
              mr="6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSteam size={"30px"} className="icon" />
            </Text>
            <Text
              as={"a"}
              href="https://twitter.com/sharpness_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={"30px"} className="icon" />
            </Text>
          </Box>
          <Link to="/">
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"gray.50"}
              color={"gray.900"}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Ana Sayfa
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Ediz;

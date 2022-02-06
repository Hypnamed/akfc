import React from "react";

import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";

function Trap() {
  const { isOpen, onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box position={"absolute"} bottom={"0"} right={"0"}>
        <Button
          ref={btnRef}
          colorScheme="gray"
          onClick={onOpen}
          variant="ghost"
          color={"gray.500"}
          size={"sm"}
        >
          Sakın Tıklama
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="bottom"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor={"gray.800"}
          display="flex"
          justifyContent="center"
          alignContent="center"
          textAlign="center"
        >
          <DrawerHeader>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              textAlign="center"
              flexDirection="column"
            >
              <p>Tıklama yazmıştım :D</p>
              <Center>
                <Image
                  src="https://media.discordapp.net/attachments/716334154589143097/939660252725526588/freddy-fazbear-five-nights-at-freddys.gif"
                  height="20%"
                  width="20%"
                  alt="Dans Eden Freddy"
                />
              </Center>
            </Box>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Trap;

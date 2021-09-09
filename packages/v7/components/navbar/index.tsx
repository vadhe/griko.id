import * as React from "react";

import routes from "~routes";

// eslint-disable-next-line import/no-extraneous-dependencies
import { MoonIcon } from "@chakra-ui/icons";
import { Button, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const routeArray = Object.entries(routes as Record<string, string>);

const Navbar: React.FC = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const isRoute = React.useCallback(
    (route: string) => {
      return router.route == route;
    },
    [router.route],
  );

  // const [gray900] = useToken("colors", ["gray.900"]) as [string];
  const bgColor = useColorModeValue("##d6abab8c", "rgba(23, 25, 35, 0.6)");
  const colorScheme = useColorModeValue("gray", "yellow");

  return (
    <HStack
      bgColor={bgColor}
      borderBottomColor="whiteAlpha.50"
      borderBottomWidth="2px"
      d={["none", "flex"]}
      insetX={0}
      justify="center"
      p={[2, 4]}
      pos="sticky"
      sx={{
        "@supports (backdrop-filter: blur(12px))": {
          backdropFilter: "blur(12px)",
          bgColor,
        },
        "@supports (-webkit-backdrop-filter: blur(12px))": {
          WebkitBackdropFilter: "blur(12px)",
          bgColor,
        },
      }}
      top={0}
      zIndex="modal"
    >
      {routeArray.map(([route, name]) => (
        <Link key={name} href={route} passHref>
          <Button
            as="a"
            colorScheme={isRoute(route) ? colorScheme : undefined}
            fontWeight={isRoute(route) ? "bold" : "normal"}
            variant="ghost"
          >
            {name}
          </Button>
        </Link>
      ))}
      <MoonIcon onClick={toggleColorMode} />
    </HStack>
  );
};

export default Navbar;

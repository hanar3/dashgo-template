import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            textTransform="uppercase"
            fontSize="small"
            fontWeight="bold"
            color="gray.400"
          >
            Geral
            <Stack spacing="4" mt="8" align="stretch">
              <Link
                display="flex"
                alignItems="center"
                _hover={{ color: "pink.400" }}
              >
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Dashboard
                </Text>
              </Link>
              <Link
                display="flex"
                alignItems="center"
                _hover={{ color: "pink.400" }}
              >
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Usuarios
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>
        <Box>
          <Text
            textTransform="uppercase"
            fontSize="small"
            fontWeight="bold"
            color="gray.400"
          >
            Automação
            <Stack spacing="4" mt="8" align="stretch">
              <Link
                display="flex"
                alignItems="center"
                _hover={{ color: "pink.400" }}
              >
                <Icon as={RiInputMethodLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Formulário
                </Text>
              </Link>
              <Link
                display="flex"
                alignItems="center"
                _hover={{ color: "pink.400" }}
              >
                <Icon as={RiGitMergeLine} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                  Automação
                </Text>
              </Link>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

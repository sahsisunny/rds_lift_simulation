import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://pbs.twimg.com/profile_images/1279999438790881281/WHpP2Yb0_400x400.jpg"
              alt="Dan Abramov"
            />
          </Box>
          <Heading size="md">Real Dev Squad Lift Simulation</Heading>
          <Stack direction={'row'} spacing={3}>
            {/* <IconButton aria-label='Search database' icon={<SearchIcon />} /> */}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

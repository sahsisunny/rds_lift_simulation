import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { Table, Tbody, Td, Tr } from '@chakra-ui/react'
import { LiftCardProps } from '../interface/LiftCardProps'

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { TbFloatCenter } from 'react-icons/tb'
import { Avatar } from '@chakra-ui/avatar'

const LiftCard = (props: LiftCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Card maxW="sm" margin="8px">
        <CardBody>
          <iframe
            width="100%"
            height="194"
            src={props.demo_video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Stack mt="6" spacing="2">
            <Stack direction="row" alignItems="center">
              <Avatar name="Kola Tioluwani" src={props.user_image} />
              <Heading size="md">{props.name}</Heading>
            </Stack>
            <Table size="auto">
              <Tbody>
                <Tr>
                  <Td>Github</Td>
                  <Td>{props.github_username}</Td>
                  <Td>
                    <IconButton
                      aria-label="Github"
                      backgroundColor="transparent"
                      height="auto"
                      width="auto"
                      onClick={() => {
                        window.open(
                          `https://github.com/${props.github_username}`
                        )
                      }}
                      icon={<AiOutlineArrowRight />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Discord</Td>
                  <Td>{props.discord_username}</Td>
                  <Td>
                    <IconButton
                      aria-label="Discord"
                      backgroundColor="transparent"
                      height="auto"
                      width="auto"
                      onClick={() => {
                        window.open(
                          `https://discord.com/users/${props.discord_username}`
                        )
                      }}
                      icon={<AiOutlineArrowRight />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>RDS</Td>
                  <Td>{props.rds_username}</Td>
                  <Td>
                    <IconButton
                      aria-label="Real Dev Squad"
                      backgroundColor="transparent"
                      height="auto"
                      width="auto"
                      onClick={() => {
                        window.open(
                          `https://discord.com/users/${props.discord_username}`
                        )
                      }}
                      icon={<AiOutlineArrowRight />}
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              leftIcon={<AiFillGithub />}
              colorScheme="teal"
              variant="solid"
              onClick={() => {
                window.open(`https://github.com/${props.github_username}`)
              }}
            >
              Github
            </Button>
            <Button
              leftIcon={<FaEye />}
              colorScheme="teal"
              variant="solid"
              onClick={() => {
                window.open(props.liftsimulation_livelink)
              }}
            >
              Live
            </Button>
            <Button
              leftIcon={<TbFloatCenter />}
              colorScheme="teal"
              variant="solid"
              onClick={onOpen}
            >
              Q-View
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <iframe
            src={props.liftsimulation_livelink}
            width="600px"
            height="400px"
          ></iframe>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default LiftCard

import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Image,
  Stack,
  HStack,
  Spacer,
  Heading,
  Container,
  Button,
  IconButton,
  useColorMode,
  Wrap,
  SimpleGrid,
  Badge,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef } from 'react'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [dns, setDns] = useState('ð')
  fetch('https://5msb5hc-hudqfxvegkec-dnscheck.shuneara.com/', {
    method: 'HEAD',
    mode: 'no-cors',
    cache: 'no-cache',
  }).then((response) => setDns('ð'))
  const domainRef = useRef<HTMLInputElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Shuneara DNS</title>
        <meta name="description" content="ãã©ã¤ãã·ã¼ãå®ãDNS" />
        <meta
          name="viewport"
          content="width=device-width,maximum-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex minH="96vh" direction="column">
        <HStack as="header" mt={4}>
          <Link href="https://dns.shuneara.com/">
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
            >
              Shuneara DNS
            </Heading>
          </Link>
          <Text title="è¨­å®ç¶æ">{dns}</Text>
          <Spacer />
          <IconButton
            aria-label="DarkMode Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>

        <Flex direction="column" grow={1}>
          <Text fontSize="4xl" align="center" mt={20}>
            ãã©ã¤ãã·ã¼ã¨ã»ã­ã¥ãªãã£
          </Text>
          <SimpleGrid
            mt={10}
            columns={2}
            spacing={10}
            templateColumns={{ base: 'auto', md: '1fr 2fr' }}
          >
            <Box boxSize="auto">
              <Image src="pablo-prohibited-content.png" alt="å±éºãªãµã¤ã" />
            </Box>
            <Box>
              <Stack spacing={4} mt={4}>
                <Text>ããå±éºãªãµã¤ãã¨ã¯ãããã°</Text>
                <Wrap>
                  <Badge fontSize="sm">DNSSEC</Badge>
                  <Badge fontSize="sm">NO LOGS</Badge>
                  <Badge fontSize="sm">NO EDNS</Badge>
                  <Badge fontSize="sm">Null IP</Badge>
                  <Badge fontSize="sm">TCPBBR</Badge>
                  <Badge fontSize="sm">DGAS</Badge>
                  <Badge fontSize="sm">NRDS</Badge>
                  <Badge
                    fontSize="sm"
                    color="white"
                    bgGradient="linear(to-r, #aa4b6b, #6b6b83, #3b8d99)"
                    fontWeight="bold"
                    letterSpacing="tight"
                  >
                    ENS/Unstoppable Domain/Handshake
                  </Badge>
                  {/* så¥ããªã */}
                </Wrap>
                <Text>
                  æå°TTLã®æ¸ãæããCNAME Cloakingãé²ããã¨ãã§ãã¾ã
                </Text>
                <Text>
                  "ããã¯DNSã¬ãã«ã®ãã­ãã­ã³ã°ã§ã"
                  YouTubeãªã©ã®åºåã«å¯¾ãã¦ã¯å¹æãããã¾ãããã¾ãä¸é¨ã®ãµã¤ããæ­£ããåä½ããªãå¯è½æ§ãããã¾ã
                </Text>
                <HStack pt={2}>
                  <Input
                    ref={domainRef}
                    type="text"
                    placeholder="ããã§ãã­ãã¯ã®ç¢ºèªããã"
                  />
                  <Button
                    onClick={() => {
                      window.open(
                        `https://shuneara-dns.deno.dev/${domainRef.current?.value}`,
                        '_blank'
                      )
                    }}
                  >
                    ç¢ºèª
                  </Button>
                </HStack>
                <Text>
                  Illustration by{' '}
                  <a href="https://icons8.com/illustrations/author/60872b904391d1000c87ab70">
                    Marina Mogulskaya
                  </a>{' '}
                  from <a href="https://icons8.com/illustrations">Ouch!</a>
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
          <Text fontSize="2xl" mt={8}>
            DNSã®è¨­å®æ¹æ³
          </Text>
          <Accordion defaultIndex={[0]} allowMultiple mt="auto" mb="auto" p={4}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Plain DNS (éå¸¸ã®DNS)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="ã³ãã¼"
                  onClick={() => {
                    navigator.clipboard.writeText('94.140.14.14')
                  }}
                >
                  IPv4
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    DoQ
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="ã³ãã¼"
                  onClick={() => {
                    navigator.clipboard.writeText('quic://dns.shuneara.com')
                  }}
                >
                  quic://dns.shuneara.com
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    DoH
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="ã³ãã¼"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      'https://dns.shuneara.com/dns-query'
                    )
                  }}
                >
                  https://dns.shuneara.com/dns-query
                </Link>
                <br />
                <Link
                  title="ã³ãã¼"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      'https://cdn.shuneara.com/dns-query'
                    )
                  }}
                >
                  https://cdn.shuneara.com/dns-query
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    DoT (Androidåã)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="ã³ãã¼"
                  onClick={() => {
                    navigator.clipboard.writeText('dns.shuneara.com')
                  }}
                >
                  dns.shuneara.com
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    iOS & Mac
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link href="https://raw.githubusercontent.com/shuneara/shuneara-dns/main/dns.mobileconfig">
                  ã¤ã³ã¹ãã¼ã«
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    è©³ç´°
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link onClick={onOpen}>
                  ã»ã­ã¥ãªãã£å¯¾ç­ã¨ãã¦ãããã®ãã­ãã¯ããã¾ã
                </Link>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>ãã­ãã¯</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        ãããããã
                        <br />
                        C&Cãµã¼ãã¼
                        <br />
                        æå·æ¡æ
                        <br />
                        DGAãã¡ã¤ã³
                        <br />
                        DNSãã³ããªã³ã°
                        <br />
                        æ°ããç»é²ããããã¡ã¤ã³
                        <br />
                        èå¨ã«ããããããã¡ã¤ã³
                        <br />
                        ãã©ã¤ãã¼ãIPã¢ãã¬ã¹ã«è§£æ±ºããããã¡ã¤ã³
                        <br />
                        ã¿ã¤ãã¹ã¯ã¯ããã£ã³ã°
                      </Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        éãã
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Text>
                  è¦ããªããµã¤ããããå ´åã¯
                  <Link href="https://forms.office.com/r/PpJG2dBHsQ">
                    ãããã
                  </Link>
                  å ±åã§ãã¾ã
                </Text>
                <Text>
                  ã¢ã¯ã»ã¹ã­ã°(IPã¢ãã¬ã¹)ãDNSã¯ã¨ãªã­ã°ãä¿æãã¾ãã
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>

      <HStack as="footer" minH="4vh">
        <Link href="https://github.com/shuneara/shuneara-dns">
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
        <Spacer></Spacer>
        <Text>â° ( â á â )</Text>
        <Text className="hand">â¯</Text>
        <Spacer></Spacer>
      </HStack>
    </Container>
  )
}

export default Home

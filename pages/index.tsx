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
  const [dns, setDns] = useState('👋')
  fetch('https://5msb5hc-hudqfxvegkec-dnscheck.shuneara.com/', {
    method: 'HEAD',
    mode: 'no-cors',
    cache: 'no-cache',
  }).then((response) => setDns('👏'))
  const domainRef = useRef<HTMLInputElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Shuneara DNS</title>
        <meta name="description" content="プライバシーを守るDNS" />
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
          <Text title="設定状態">{dns}</Text>
          <Spacer />
          <IconButton
            aria-label="DarkMode Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>

        <Flex direction="column" grow={1}>
          <Text fontSize="4xl" align="center" mt={20}>
            プライバシーとセキュリティ
          </Text>
          <SimpleGrid
            mt={10}
            columns={2}
            spacing={10}
            templateColumns={{ base: 'auto', md: '1fr 2fr' }}
          >
            <Box boxSize="auto">
              <Image src="pablo-prohibited-content.png" alt="危険なサイト" />
            </Box>
            <Box>
              <Stack spacing={4} mt={4}>
                <Text>もう危険なサイトとはおさらば</Text>
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
                  {/* s入れない */}
                </Wrap>
                <Text>
                  最小TTLの書き換え、CNAME Cloakingを防ぐこともできます
                </Text>
                <Text>
                  "これはDNSレベルのブロッキングです"
                  YouTubeなどの広告に対しては効果がありません、また一部のサイトが正しく動作しない可能性があります
                </Text>
                <HStack pt={2}>
                  <Input
                    ref={domainRef}
                    type="text"
                    placeholder="ここでブロックの確認をする"
                  />
                  <Button
                    onClick={() => {
                      window.open(
                        `https://shuneara-dns.deno.dev/${domainRef.current?.value}`,
                        '_blank'
                      )
                    }}
                  >
                    確認
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
            DNSの設定方法
          </Text>
          {/* <Alert status="error" mt={4}>
            <AlertIcon />
            <AlertTitle mr={2}>工事中</AlertTitle>
            <AlertDescription>工事中</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert> */}
          <Accordion defaultIndex={[0]} allowMultiple mt="auto" mb="auto" p={4}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Plain DNS (通常のDNS)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="コピー"
                  onClick={() => {
                    navigator.clipboard.writeText('152.70.108.7')
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
                  title="コピー"
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
                  title="コピー"
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
                  title="コピー"
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
                    DoT (Android向け)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="コピー"
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
                    Windows
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  title="コピー"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "Add-DnsClientDohServerAddress -ServerAddress '152.70.108.7' -DohTemplate 'https://cdn.shuneara.com/dns-query'"
                    )
                  }}
                >
                  これをPowerShellで実行
                </Link>
                <br />
                <Link href="https://news.mynavi.jp/techplus/article/20210701-1912891/">
                  詳細はこちら
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
                  インストール
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    詳細
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link onClick={onOpen}>
                  セキュリティ対策としてこれらのブロックをします
                </Link>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>ブロック</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        ボットネット
                        <br />
                        C&Cサーバー
                        <br />
                        暗号採掘
                        <br />
                        DGAドメイン
                        <br />
                        DNSトンネリング
                        <br />
                        新しく登録されたドメイン
                        <br />
                        脅威にさらされるドメイン
                        <br />
                        プライベートIPアドレスに解決されるドメイン
                        <br />
                        タイポスクワッティング
                      </Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        閉じる
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Text>
                  見れないサイトがある場合は
                  <Link href="https://forms.office.com/r/PpJG2dBHsQ">
                    ここから
                  </Link>
                  報告できます
                </Text>
                <Text>
                  アクセスログ(IPアドレス)、DNSクエリログを保持しません
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
        <Text>╰ ( ◕ ᗜ ◕ )</Text>
        <Text className="hand">╯</Text>
        <Spacer></Spacer>
      </HStack>
    </Container>
  )
}

export default Home

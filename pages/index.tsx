import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Stack,
  Spacer,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Head>
        <title>Shuneara DNS</title>
        <meta name="description" content="プライバシーを守るDNS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="header" position="fixed" width="full" top={0} py={4} px={8}>
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
        <Spacer />
        <IconButton
          aria-label="DarkMode Switch"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Box className="main">
        <Stack spacing={6} textAlign="center">
          <Text>ipv4: 168.138.213.84</Text>
          <Text>DOH: dns.shuneara.com/dns-query</Text>
          <Text>国内サーバーのみです</Text>
          <Text>
            Windowsの方
            <br />
            "Add-DnsClientDohServerAddress -ServerAddress 168.138.213.84
            -DohTemplate https://dns.shuneara.com/dns-query -AutoUpgrade
            $True"をPowerShellで実行して
            <Link href="https://news.mynavi.jp/article/20210701-1912891/">
              こちら
            </Link>
            を確認してください
          </Text>
          <Text>
            Androidの方
            <br />
            <Link href="https://getintra.org/#!/">Intraを使用してください</Link>
          </Text>
        </Stack>
      </Box>
      <Flex as="footer" position="fixed" width="full" bottom={0} py={4} px={8}>
        <Link href="https://github.com/shuneara/shuneara-dns">
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
        <Spacer></Spacer>
        <Text>╰( ◕ ᗜ ◕ )</Text>
        <Text mr={6} className="hand">
          ╯
        </Text>
        <Spacer></Spacer>
      </Flex>
    </Box>
  )
}

export default Home

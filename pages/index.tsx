//import Head from 'next/head'

import { Heading, Grid, Flex, Input, Link, Button, Text } from "@chakra-ui/core";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . . '
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDirection="column" alignItems="flex-start">
        <Heading size="2xl" lineHeight="shorter">
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="blue.500"
          borderRadius="sm"
          placeholder="E-mail"
        />

        <Input
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="blue.500"
          borderRadius="sm"
          marginTop={2}
          placeholder="Senha"
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="blue.600"
          fontWeight="bold"
          _hover={{ color: 'blue.500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop={6}
          backgroundColor="blue.500"
          height="50px"
          borderRadius="sm"
          _hover={{ backgroundColor: 'blue.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="blue.600"
            fontWeight="bold"
            _hover={{ color: 'blue.500' }}
          >
            Registre-se
          </Link>
        </Text>
      </Flex>
    </Grid>
  )
}

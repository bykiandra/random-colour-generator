import React from 'react'
import { ChakraProvider, Box, Text, Code, Grid, theme } from '@chakra-ui/react'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Text>
          Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
        </Text>
      </Grid>
    </Box>
  </ChakraProvider>
)

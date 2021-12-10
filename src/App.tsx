import { ChakraProvider, Flex, theme, Box } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

import GenerateButton from './components/GenerateButton'

export const App = () => {
  const apiURL = 'https://www.thecolorapi.com/id?hex='
  
  const getRandomHex = () => {
    let hex = ''
    for (let i = 0; i < 6; i++) {
      const random = Math.random()
      const bit = (random * 16) | 0
      hex += bit.toString(16)
    }
    return hex
  }
  
  const [color, setColor] = useState<Color | string>(getRandomHex())
  const handleClick: HandleClick = () => {
    const randomColor = getRandomHex()
    axios.get(apiURL + randomColor).then((data) => {
      const reply = data.data
      const newColor: Color = {
        hex: reply.hex.clean,
        rgb: reply.rgb.value,
        hsl: reply.hsl.value,
        hsv: reply.hsv.value,
        cmyk: reply.cmyk.value,
      }
      setColor(newColor)
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        minH='100vh'
        bgColor={'#' + (typeof color === 'string' ? color : color.hex)}
        align='center'
        justify='center'
      >
        <Box bgColor='white' p={4} rounded='xl'>
          <GenerateButton handleClick={handleClick} />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

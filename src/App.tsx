import { ChakraProvider, Flex, theme, Box } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

import GenerateButton from './components/GenerateButton'
import ColorValues from './components/ColorValues'

export const App = () => {
  const apiURL = 'https://www.thecolorapi.com/id?hex='
  const startColor = {
    hex: '24B1E0',
    rgb: 'rgb(36, 177, 224)',
    hsl: 'hsl(195, 75%, 51%)',
    hsv: 'hsv(195, 84%, 88%)',
    cmyk: 'cmyk(84, 21, 0, 12)'
  }
  // TODO: have a random startColor
  const [color, setColor] = useState<Color>(startColor)
  
  const getRandomHex = () => {
    let hex = ''
    for (let i = 0; i < 6; i++) {
      const random = Math.random()
      const bit = (random * 16) | 0
      hex += bit.toString(16)
    }
    return hex
  }
  
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
        bgColor={'#' + (color.hex)}
        align='center'
        justify='center'
      >
        <Box bgColor='white' p={4} rounded='xl' minW='300px'>
          <GenerateButton handleClick={handleClick} />
          <ColorValues color={color} />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

import { VStack, useToast } from '@chakra-ui/react'

import Value from './Value'

interface Props {
  color: Color
}

const ColorValues = ({ color }: Props) => {
  const toast = useToast()

  const copyColor: CopyColor = (format) => {
    let copiedColor = ''
    switch (format) {
      case 'hex':
        copiedColor = color.hex
        break
      case 'rgb':
        copiedColor = color.rgb
        break
      case 'hsl':
        copiedColor = color.hsl
        break
      case 'hsv':
        copiedColor = color.hsv
        break
      case 'cmyk':
        copiedColor = color.cmyk
        break
      default:
        return
    }
    navigator.clipboard.writeText(copiedColor)

    toast({
      description: `${copiedColor} copied to clipboard.`,
      status: 'success',
      duration: 3000,
      isClosable: false
    })
  }

  return (
    <VStack spacing={4} my={4}>
      <Value color={color.hex} format='hex' copyColor={copyColor} />
      <Value color={color.rgb} format='rgb' copyColor={copyColor} />
      <Value color={color.hsl} format='hsl' copyColor={copyColor} />
      <Value color={color.hsv} format='hsv' copyColor={copyColor} />
      <Value color={color.cmyk} format='cmyk' copyColor={copyColor} />
    </VStack>
  )
}

export default ColorValues

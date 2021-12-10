import { CopyIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

interface Props {
  color: string
  format: string
  copyColor: CopyColor
}

const Value = ({ color, format, copyColor }: Props) => {
  return (
    <InputGroup>
      <Input value={color} isReadOnly pr='3.25rem' fontSize='sm' />
      <InputRightElement w='3.25rem'>
        <Button h='1.75rem' size='sm' onClick={() => copyColor(format)}>
          <CopyIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Value

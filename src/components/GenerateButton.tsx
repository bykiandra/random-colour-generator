import { Button } from "@chakra-ui/react"

interface Props {
  handleClick: HandleClick
}

const GenerateButton = ({ handleClick }: Props) => {
  return (
    <Button onClick={handleClick}>Generate random colour</Button>
  )
}

export default GenerateButton
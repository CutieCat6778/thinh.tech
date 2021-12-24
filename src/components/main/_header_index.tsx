import { Box } from "@chakra-ui/layout"
import { HeaderStatus } from "./_header/_header_status"
import { HeaderTitle } from "./_header/_header_title"

export function HeaderIndex() {
  return (
    <Box>
      <HeaderTitle/>
      <HeaderStatus/>
    </Box>
  )
}
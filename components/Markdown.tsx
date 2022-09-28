import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
    content: string;
}

const Markdown: FC<Props> = ({content}) => {
    return (
        <Box>
            {content}
        </Box>
    )
}

export default Markdown;
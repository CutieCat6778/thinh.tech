import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect () {
  const history = useNavigate()

  useEffect(() => {
    history('/');
  })

  return (
    <Heading>Hello world!</Heading>
  )
}

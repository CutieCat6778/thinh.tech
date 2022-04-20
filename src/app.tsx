import "@fontsource/comfortaa"
import "@fontsource/bebas-neue"
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import { theme } from './utils/theme';

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <LandingPage/>
        </ChakraProvider>
    )
}
import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  GridItem,
  useMediaQuery,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import AdviceContainer from './components/AdviceContainer';

function App() {

  const mobileWidth = useMediaQuery('max-width: 600px;')

  return (
    <ChakraProvider theme={theme} >
      <Box textAlign="center" fontSize="xl" overflow='hidden'>
        <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(12, 1fr)' height="100vh" width='100vw' p={3} >
          <GridItem
            colStart={13}
          >
            <ColorModeSwitcher />
          </GridItem>
          <GridItem
            rowStart={3}
            colStart={4}
            colSpan={7}
          >
            <AdviceContainer />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

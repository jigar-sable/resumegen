// import {
//     Box,
//     Container,
//     Stack,
//     Text,
//     Link,
//     Button,
//     Badge,
//     useColorModeValue,
//   } from '@chakra-ui/react';
//   import html2canvas from 'html2canvas';
//   import jsPDF from 'jspdf';
//   import { useRef } from 'react';
//   import { useReactToPrint } from 'react-to-print';
  
//   function App() {
//     const printElem = useRef();
  
//     const generateResume = () => {
      // console.log("works")
  
      // const resume = document.getElementById("resume");
      // html2canvas(resume)
      // .then((canvas) => {
      //   const imgData = canvas.toDataURL('image/png');
      //   const pdf = new jsPDF('p','mm','a4');
      //   var width = pdf.internal.pageSize.getWidth();
      //   var height = pdf.internal.pageSize.getHeight();
      //   pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      //   pdf.save("resume.pdf");
      // }).catch((error) => console.log(error));
      // window.print();
   
//     }
  
//     const handlePrint = useReactToPrint({
//       content: () => printElem.current,
//     });
  
//     return (
//       <>
//       {/* <div id="resume"> */}
  
//         <Box
//         bg={useColorModeValue('gray.50', 'gray.900')}
//         color={useColorModeValue('gray.700', 'gray.200')}
//         maxW={'3xl'}
//         id="resume"
//         ref={printElem}
//         p={4}>
//         <Container
//           as={Stack}
//           maxW={'6xl'}
//           py={4}
//           direction={{ base: 'column', md: 'row' }}
//           spacing={4}
//           justify={{ base: 'center', md: 'space-between' }}
//           align={{ base: 'center', md: 'center' }}>
//           <Stack direction={'row'} spacing={6}>
//             <Link href={'#'}>Home</Link>
//             <Link href={'#'}>About</Link>
//             <Link href={'#'}>Blog</Link>
//             <Link href={'#'}>Contact</Link>
//           </Stack>
//           <Text>© 2022 JS. All rights reserved</Text>
//         </Container>
//         <Container
//           as={Stack}
//           maxW={'6xl'}
//           py={4}
//           direction={{ base: 'column', md: 'row' }}
//           spacing={4}
//           justify={{ base: 'center', md: 'space-between' }}
//           align={{ base: 'center', md: 'center' }}>
//           <Stack direction={'row'} spacing={6}>
//             <Link href={'#'}>Home</Link>
//             <Link href={'#'}>About</Link>
//             <Link href={'#'}>Blog</Link>
//             <Link href={'#'}>Contact</Link>
//           </Stack>
//           <Text>© 2022 JS. All rights reserved</Text>
//         </Container>
//         <Container
//           as={Stack}
//           maxW={'6xl'}
//           py={4}
//           direction={{ base: 'column', md: 'row' }}
//           spacing={4}
//           justify={{ base: 'center', md: 'space-between' }}
//           align={{ base: 'center', md: 'center' }}>
//           <Stack direction={'row'} spacing={6}>
//             <Link href={'#'}>Home</Link>
//             <Link href={'#'}>About</Link>
//             <Link href={'#'}>Blog</Link>
//             <Link href={'#'}>Contact</Link>
//           </Stack>
//           <Text>© 2022 JS. All rights reserved</Text>
//         </Container>
//         <Container
//           as={Stack}
//           maxW={'6xl'}
//           py={4}
//           direction={{ base: 'column', md: 'row' }}
//           spacing={4}
//           justify={{ base: 'center', md: 'space-between' }}
//           align={{ base: 'center', md: 'center' }}>
//           <Stack direction={'row'} spacing={6}>
//             <Link href={'#'}>Home</Link>
//             <Link href={'#'}>About</Link>
//             <Link href={'#'}>Blog</Link>
//             <Link href={'#'}>Contact</Link>
//           </Stack>
//           <Text>© 2022 JS. All rights reserved</Text>
//         </Container>
  
//         <Stack direction='row'>
//     <Badge>Default</Badge>
//     <Badge colorScheme='green'>Success</Badge>
//     <Badge colorScheme='red'>Removed</Badge>
//     <Badge colorScheme='purple'>New</Badge>
//   </Stack>
  
//       </Box>
//       {/* </div> */}
  
//       <Button onClick={handlePrint}>Download</Button>
//       </>
//     );
//   }
  
//   export default App;
  
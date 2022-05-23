import { HStack, Box, Divider, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <HStack spacing="30px" bgColor="pink.100" padding="8px" >
                <Box><StarIcon w={8} h={6} color="white" /></Box>
                <Box><Link href="/"><a>Home</a></Link></Box>
                <Box>About</Box>
                <Divider/>
                <Button size="sm" bgColor="white" p="15px">Add Post</Button>
            </HStack>
        </> 
    );
}
 
export default Navbar;
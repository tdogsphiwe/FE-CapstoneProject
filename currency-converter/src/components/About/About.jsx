import { 
    Box, chakra, Text, Heading, Flex, Icon, 
    SimpleGrid, useColorModeValue, Container, Stack 
} from '@chakra-ui/react';

const testimonials = [
    {
        name: 'Sphiwe Lubisi',
        role: 'Frontend Web Developer',
        content:
            'Built with React JS, our Currency Converter lets you easily convert between global currencies. Key features include real-time rates, conversion history, a user-friendly interface, and responsive design. Make informed financial decisions with accurate currency conversion at your fingertips.',
    }
];

function TestimonialCard(props) {
    const { name, role, content } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.700')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '21px',
                width: '29px',
                left: '35px',
                top: '-10px',
                backgroundSize: 'cover',
                backgroundImage: `url("data:image/svg+xml, ...")`,
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
            }}
        >
            <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
                <chakra.p
                    color={'gray.400'}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                >
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={'gray.400'} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span fontFamily={'Inter'} fontWeight={'medium'} color={'gray.500'}>
                        {' '} - {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
        </Flex>
    );
}

export default function About() {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
        >
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 10, md: 10 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'100%'}
                    >
                        <Text as={'span'} color={'#3967F6'}>
                            Currency Converter
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Stay Updated with the latest Currency Rates on Our Exciting Website!
                    </Text>
                </Stack>
            </Container>
            <SimpleGrid columns={{ base: 1, xl: 1 }} spacing={'20'} mt={16} mx={'auto'}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} key={index} index={index} />
                ))}
            </SimpleGrid>
            <Box>
                <Icon viewBox="0 0 40 35" mt={4} boxSize={10} color={'purple.400'}>
                    <path
                        fill={'currentColor'}
                        d="M10.7964 0C8.66112 0 6.57374 0.633 4.79827 1.819..."
                    />
                </Icon>
            </Box>
        </Flex>
    );
}

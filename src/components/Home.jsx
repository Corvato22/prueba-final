import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDataAsync } from '../actions/getData';
import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    Checkbox,
    HStack,
    VStack,
    Spinner,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    useDisclosure,
} from '@chakra-ui/react';
import { addTotal, subsTotal } from '../actions/totalAction';
import { NavBar } from './NavBar';

export const Home = () => {

    const dispatch = useDispatch();

    const { product } = useSelector(store => store.product);
    const { total } = useSelector(store => store.total);

    useEffect(() => {
        dispatch(getDataAsync())
        // eslint-disable-next-line
    }, [])

    function changeTotal(e, ingredient) {
        let combo = e.target.checked
        if (combo !== undefined) {
            combo ? dispatch(addTotal(ingredient)) : dispatch(subsTotal(ingredient))
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <NavBar />
            <Center w='100%' h='100vh' py={6} bg='gray.400'>
                <Box
                    maxW={'400px'}
                    w={'full'}
                    bg='white'
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                    m={4}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color='gray.800'
                        align={'center'}>
                        <Text
                            fontSize={'sm'}
                            fontWeight={500}
                            bg='green.50'
                            p={2}
                            px={3}
                            color={'green.500'}
                            rounded={'full'}>
                            Ingredientes
                        </Text>
                        <Stack direction={'column'} align={'center'}>
                            <Text fontSize={'2xl'} fontWeight={600}>
                                {product.name}
                            </Text>
                        </Stack>
                    </Stack>
                    <Box bg='gray.200' px={6} py={10}>
                        <VStack spacing={2}>
                            {
                                product === '' ? <Spinner size='lg' color='green.500' /> :

                                    product.ingredients.map((ingredient, i) => (
                                        <HStack key={i} bg='white' w='100%' h='73px' rounded={'md'} p={2} justifyContent='space-between' >
                                            <HStack>
                                                <Checkbox size='md' colorScheme='green' mr='10px' onChange={(e) => { changeTotal(e, ingredient) }} ></Checkbox>
                                                <Stack direction={'column'} spacing='0px' >
                                                    <Text fontSize={'sm'} fontWeight={700}>{ingredient.product}</Text>
                                                    <Text fontSize={'xs'}>{ingredient.brand}</Text>
                                                    <Text fontSize={'xs'}>{ingredient.quantity}</Text>
                                                </Stack >
                                            </HStack>
                                            <Text fontSize={'md'} fontWeight={700} color={'green.500'}>{ingredient.price}€</Text>
                                        </HStack >
                                    ))
                            }
                        </VStack>
                    </Box>
                </Box>

                <Box
                    maxW={'400px'}
                    w={'full'}
                    bg='white'
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                    m={4}>
                    <Box bg='gray.200' px={6} py={10}>
                        <HStack bg='white' rounded={'md'} p={2} justifyContent='space-between'>
                            <VStack alignItems='flex-start'>
                                <Text fontSize={'sm'}>Items</Text>
                                <Text fontSize={'sm'}>Subtotal</Text>
                                <Text fontSize={'sm'}>Gastos de envío</Text>
                                <Text fontWeight={700}>Total</Text>
                            </VStack>
                            <VStack alignItems='flex-end'>
                                <Text fontSize={'sm'}>{total.length}</Text>
                                <Text fontSize={'sm'}>{total.reduce((acc, elem) => acc + elem.price, 0)}€</Text>
                                <Text fontSize={'sm'}>7.00</Text>
                                <Text fontWeight={700} color={'green.500'}>{total.reduce((acc, elem) => acc + elem.price, product['shipping-cost'])}€</Text>
                            </VStack>
                        </HStack>

                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            onClick={onOpen}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Comprar ingredientes: {total.reduce((acc, elem) => acc + elem.price, product['shipping-cost'])}€
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent p={4} display='flex' alignItems='center'>
                    <ModalHeader>¿Estás seguro que deseas comprar?</ModalHeader>
                    <Center>
                        <Button
                            mt={4}
                            mx={2}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            onClick={onClose}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Sí, Comprar
                        </Button>
                        <Button
                            mt={4}
                            mx={2}
                            w={'full'}
                            bg={'red.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            onClick={onClose}
                            _hover={{
                                bg: 'red.500',
                            }}
                            _focus={{
                                bg: 'red.500',
                            }}>
                            No comprar
                        </Button>
                    </Center>
                </ModalContent>
            </Modal>
        </>
    );
}
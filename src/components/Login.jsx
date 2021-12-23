import React from 'react'
import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    HStack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginGoogle, loginEmailPassword } from '../actions/loginAction';
import { useFormik } from 'formik';

export const Login = () => {

    const dispatch = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (data) => {
            dispatch(loginEmailPassword(data.email, data.password))
        }
    })

    const handleLoginGoogle = (evt) => {
        evt.preventDefault()
        dispatch(loginGoogle())
    }

    return (
        <>
            <Center w='100%' h='100vh' py={6} bg='gray.400'>
                <Box
                    rounded={'lg'}
                    bg='gray.200'
                    boxShadow={'lg'}
                    p={8}
                    minW='325px'>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Correo Electrónico</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="email" onChange={formik.handleChange} required />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Contraseña</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="password" onChange={formik.handleChange} required />
                            </FormControl>
                            <Stack spacing={4}>
                                <Button
                                    mt={3}
                                    mx={1}
                                    w={'full'}
                                    type='submit'
                                    bg={'green.400'}
                                    color={'white'}
                                    rounded={'xl'}
                                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                    _hover={{
                                        bg: 'green.500',
                                    }}
                                    _focus={{
                                        bg: 'green.500',
                                    }}>
                                    Iniciar Sesión
                                </Button>
                                <Button
                                    mx={1}
                                    w={'full'}
                                    bg='#ea4335'
                                    color={'white'}
                                    rounded={'xl'}
                                    onClick={handleLoginGoogle}
                                    boxShadow={'0 5px 20px 0px rgb(234 67 53 / 43%)'}
                                    _hover={{
                                        color: 'white',
                                        bg: '#d72a1c',
                                    }}
                                    _focus={{
                                        bg: '#ea4335',
                                    }}>
                                    Iniciar con Google
                                </Button>
                                <Button
                                    mx={1}
                                    w={'full'}
                                    bg='#3f62a9'
                                    color={'white'}
                                    rounded={'xl'}
                                    onClick={onOpen}
                                    boxShadow={'0 5px 20px 0px rgb(63 98 169 / 43%)'}
                                    _hover={{
                                        color: 'white',
                                        bg: '#2d4c8a',
                                    }}
                                    _focus={{
                                        bg: '#3f62a9',
                                    }}>
                                    Iniciar con Facebook
                                </Button>
                                <HStack
                                    align={'center'}
                                    justify={'center'}>
                                    <Text>¿Nuevo? Registrate</Text>
                                    <Link to='/register'>
                                        <Text cursor='pointer' fontWeight={700} _hover={{ textDecoration: 'underline', }} color={'blue.400'}>aquí</Text>
                                    </Link>
                                </HStack>
                                <Text fontWeight={700} color={'red'}>Después de iniciar sesión, no vuelve automáticamente al inicio.</Text>
                                <Center>
                                    <Link to='/'>
                                        <Text cursor='pointer' fontWeight={700} _hover={{ textDecoration: 'underline', }} color={'blue.400'}>Vuelve al inicio aquí</Text>
                                    </Link>
                                </Center>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Center>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent p={4} display='flex' alignItems='center'>
                    <Text textAlign='center'>No integré el login con Facebook porque tuve problemas con el Facebook Developer, me disculpo por eso</Text>
                </ModalContent>
            </Modal>
        </>
    )
}
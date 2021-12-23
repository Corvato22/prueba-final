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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { registerEmailPassword } from '../actions/registerAction';

export const Register = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
        },

        onSubmit: (data) => {
            if (data.password !== data.password2 || data.password.length < 6) {
                alert("Las contraseñas deben tener al menos 6 caracteres y coincidir entre ellas.")
            } else {
                dispatch(registerEmailPassword(data.email, data.password, data.name))
            }
        }
    })

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
                            <FormControl>
                                <FormLabel>Nombre</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="text" name='name' onChange={formik.handleChange} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Correo Electrónico</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="email" name='email' onChange={formik.handleChange} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Contraseña</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="password" name='password' onChange={formik.handleChange} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Repite tu contraseña</FormLabel>
                                <Input bg='white' borderColor='gray.400' type="password" name='password2' onChange={formik.handleChange} required />
                            </FormControl>
                            <Stack spacing={4}>
                                <Button
                                    mt={3}
                                    mx={1}
                                    w={'full'}
                                    bg={'green.400'}
                                    color={'white'}
                                    rounded={'xl'}
                                    value="Save"
                                    type="submit"
                                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                    _hover={{
                                        bg: 'green.500',
                                    }}
                                    _focus={{
                                        bg: 'green.500',
                                    }}>
                                    Registrarse
                                </Button>
                                <HStack
                                    align={'center'}
                                    justify={'center'}>
                                    <Text>¿Ya tienes cuenta? Inicia sesión</Text>
                                    <Link to='/login'>
                                        <Text cursor='pointer' fontWeight={700} _hover={{ textDecoration: 'underline', }} color={'blue.400'}>aquí</Text>
                                    </Link>
                                </HStack>
                                <Text fontWeight={700} color={'red'}>Después de registrarse, no vuelve automáticamente al inicio.</Text>
                                <Center>
                                    <Link to='/'>
                                        <Text fontWeight={700} cursor='pointer' _hover={{ textDecoration: 'underline', }} color={'blue.400'}>Vuelve al inicio aquí</Text>
                                    </Link>
                                </Center>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Center>
        </>
    )
}

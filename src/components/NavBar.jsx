import React from 'react'
import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../actions/loginAction';

export const NavBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();


    const handleLogout = () => {
        dispatch(userLogout())
        navigate("/login")
    }

    let getUserData = localStorage.getItem('userData')
    let userData
    if (getUserData === '') {
        userData = null;
    } else {
        userData = JSON.parse(getUserData)
    }

    return (
        <Box>
            <Flex
                bg='gray.600'
                color='gray.200'
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor='gray.200'
                justifyContent='space-between'
                align={'center'}>

                {
                    userData == null ? <Text fontSize={'3xl'} fontWeight={700}>Por favor, inicia sesión o registrate</Text> :
                        <Text fontSize={'3xl'} fontWeight={700}>Bienvenido: {userData.name}</Text>
                }

                {
                    userData == null ?
                        <Stack
                            flex={{ base: 1, md: 0 }}
                            direction={'row'}
                            spacing={6}>

                            <Link to='/login'>
                                <Button
                                    mx={1}
                                    w={'full'}
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
                            </Link>

                            <Link to='/register'>
                                <Button
                                    mx={1}
                                    w={'full'}
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
                                    Registrarse
                                </Button>
                            </Link>
                        </Stack> :
                        <Button
                            mx={1}
                            maxW='150px'
                            w={'full'}
                            bg={'red.400'}
                            color={'white'}
                            rounded={'xl'}
                            onClick={handleLogout}
                            boxShadow={'0 5px 20px 0px rgb(245 101 101 / 43%)'}
                            _hover={{
                                bg: 'red.500',
                            }}
                            _focus={{
                                bg: 'red.500',
                            }}>
                            Cerrar sesión
                        </Button>
                }
            </Flex>
        </Box>
    )
}
'use client'

import styles from './Auth.module.scss'
import React from "react"
import { Card, CardHeader } from "~/components/ui/card"
import { Input } from '~/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormLabel, FormMessage } from '~/components/ui/form'
import { Button } from '~/components/ui/button'
import { useSignInMutation, useSignUpMutation } from '~/gql/_generated'
import { useRouter } from 'next/navigation'
import { PAGES_DASHBOARD } from '~/configs/pages'

export default function Auth() {
    const { push } = useRouter()
    const arr = ['Register', 'Log-in']
    const [index, setIndex] = React.useState(0)
    const formSchemaRegister = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        password: z.string().min(3, { message: 'min 3 characters' })
    })
    const formSchemaLogin = z.object({
        email: z.string().email(),
        password: z.string().min(3, { message: 'min 3 characters' })
    })
    const formRegister = useForm<z.infer<typeof formSchemaRegister>>({
        resolver: zodResolver(formSchemaRegister),
        defaultValues: {
            email: '',
            password: '',
            username: ''
        }
    })
    const formLogin = useForm<z.infer<typeof formSchemaLogin>>({
        resolver: zodResolver(formSchemaLogin),
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const [signUp, { data: dataRegister }] = useSignUpMutation({
        variables: {
            input: {
                email: formRegister.getValues().email,
                password: formRegister.getValues().password,
                username: formRegister.getValues().username,
            }
        }
    })
    const [signIn, { data: dataLogin }] = useSignInMutation({
        variables: {
            input: {
                email: formLogin.getValues().email,
                password: formLogin.getValues().password,
            }
        }
    })
    if (dataRegister?.signUp.accessToken) {
        push(PAGES_DASHBOARD.HOME)
        localStorage.setItem('Bearer', dataRegister?.signUp.accessToken)
    }
    if (dataLogin?.signIn.accessToken) {
        push(PAGES_DASHBOARD.HOME)
        localStorage.setItem('Bearer', dataLogin?.signIn.accessToken)
    }

    function handleRegister(value: z.infer<typeof formSchemaRegister>) {
        signUp()
    }
    function handleLogin(value: z.infer<typeof formSchemaLogin>) {
        signIn()
    }

    return (
        <Card className={styles.Card}>
            <Tabs className={styles.Tabs} defaultValue={arr[0]}>
                <CardHeader className={styles.Header}>
                    <TabsList className={styles.List}>
                        {arr.map((el, i) => (
                            <TabsTrigger value={el} key={i} className={i === index ? styles.Arter : ''} onClick={() => setIndex(i)}>{el}</TabsTrigger>
                        ))}
                    </TabsList>
                </CardHeader>
                <TabsContent value={arr[0]}>
                    <Form {...formRegister}>
                        <form onSubmit={formRegister.handleSubmit(handleRegister)} className='flex flex-col gap-3'>
                            <FormField
                                name='username'
                                control={formRegister.control}
                                render={({ field }) => (
                                    <>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter youre username' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <FormField
                                name='email'
                                control={formRegister.control}
                                render={({ field }) => (
                                    <>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter youre email' type='email' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <FormField
                                name='password'
                                control={formRegister.control}
                                render={({ field }) => (
                                    <>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter youre password' type='password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <Button variant={'default'} type='submit' className='mb-6'>Regiter</Button>
                        </form>
                    </Form>
                </TabsContent>
                <TabsContent value={arr[1]}>
                    <Form {...formLogin}>
                        <form onSubmit={formLogin.handleSubmit(handleLogin)} className='flex flex-col gap-3'>
                            <FormField
                                name='email'
                                control={formLogin.control}
                                render={({ field }) => (
                                    <>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter youre email' type='email' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <FormField
                                name='password'
                                control={formLogin.control}
                                render={({ field }) => (
                                    <>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter youre password' type='password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <Button variant={'default'} type='submit' className='mb-6'>Login</Button>
                        </form>
                    </Form>
                </TabsContent>
            </Tabs>
        </Card >
    )
}
'use client'

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='bg-white w-96 h-96 rounded-3xl ml-auto mr-auto mt-auto mb-auto'>
        <Image className='ml-auto mr-auto mt-5' src='/logo.jpg' width={100} height={20} />
        <div className='flex flex-col justify-center items-center mt-12'>
            <p className='font-mono text-black'>E-mail</p>
            <input
            className='bg-zinc-300 rounded-lg w-64  border-black border-2'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='font-mono text-black mt-10'>Password</p>
            <input
            className='bg-zinc-300 rounded-lg w-64 border-black border-2'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input className='bg-black w-36 h-10 rounded-xl mt-8 font-mono' type='submit' value="Login" />
            <p className='text-xs mt-2 text-red-600 font-mono'>Create an account</p>
        </div>
    </div>
  )
}

export default login
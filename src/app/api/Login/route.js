


import connectDb from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

import bcript from 'bcryptjs';
import User from '@/app/models/User';


export async function POST(req ) {

    try {

        await connectDb();


        const {email, password} = await req.json();

        // find user by email
        const isExist=await User.findOne({email});

        if(!isExist){
            return NextResponse.json({error: 'Invalid email or password', success: false});
        }


        // compare password

        const isMatch=await bcript.compare(password, isExist.password);

        if(!isMatch){
            return NextResponse.json({error: 'Invalid email or password', success: false});
        }


        // store cookies

        const User_token={
            id: isExist._id,
            email: isExist.email
        }

        req.cookies.set('User_token', User_token, {
            httpOnly: true,
            secure: process.env
        });



        
    } catch (error) {
        

        return NextResponse.json({error: error.message, success: false});
    }
        
    }
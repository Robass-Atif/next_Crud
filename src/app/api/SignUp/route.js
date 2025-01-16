
import connectDb from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

import bcript from 'bcryptjs';
import User from '@/app/models/User';


 export async function POST(req ){
     

    try {
        
        await connectDb();

        const {name, email, password} = await req.json();

    

        // encripted password by using bcrypt
        const salt = await bcript.genSalt(10);

        const hashedPassword = await bcript.hash(password, salt);


        // save user to database

        const new_user=new User({
            name,
            email,
            password: hashedPassword
        });

        await new_user.save();

        return NextResponse.json({success: true, message: 'User created successfully'});

        



    } catch (error) {
        
        return NextResponse.json({error: error.message, success: false});

    }
 }
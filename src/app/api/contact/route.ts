
import connectDb from "@/app/lib/mongodb";
import Contact from "@/app/Model/Contact";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';


export async function  GET(req: Request, res: Response) {

    await connectDb();



    try {
        const result = await Contact.find();
        return NextResponse.json({result,success:true});
    } catch (error) {
        return NextResponse.json({success:false});
    }


    
}

export async function  POST(req: Request, res: Response) {

    
    await connectDb();

    const result = await req.json();

    try {
        console.log(result);
         await Contact.create(result);
    
        return NextResponse.json({success:true});
    }
    catch (error) {
        return NextResponse.json({success:false});
    }   




    
}








import connectDb from "@/app/lib/mongodb";
import Contact from "@/app/Model/Contact";
import { NextResponse } from "next/server";


export async function PUT(req: Request, content: any) {
    
    
    const  contactId  = content.params.contactId;

    const filter= { _id: contactId };

    const hel=await req.json();
    console.log(hel);

    await connectDb();
    const contact = await Contact.findOneAndUpdate(filter, hel);






    return NextResponse.json({contact, success: true});



}
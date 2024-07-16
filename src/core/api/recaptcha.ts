import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response){
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();

    const {gRecapthaToken} = postData; 

    let res;

    const formData = `secret=${secretKey}&response=${gRecapthaToken}`

    try{
        res = await axios.post("https://www.google.com/recaptcha/api/sitevarify", formData, {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
    }
    catch(ex: any){
        return NextResponse.json({success: false})
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        console.log("res.data?.score:", res.data?.score);

        return NextResponse.json({
            success: true,
            score: res.data.score,
        });
    } else {
        return NextResponse.json({ success: false });
    }
}
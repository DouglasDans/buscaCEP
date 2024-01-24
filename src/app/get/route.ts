import { NextRequest, NextResponse } from "next/server"

require('dotenv').config()

const API_PATH : string = 'https://www.cepaberto.com/api/v3'

export async function GET( request : NextRequest ){
   const searchParams = request.nextUrl.searchParams
   const requestType = searchParams.get('request')
   const params = searchParams.get('params')
   
   const res = await fetch((API_PATH + `/${requestType}/` + `?${requestType}=${params}`), {
      method: 'GET',
      headers: {
         'Authorization': `Token ${process.env.API_KEY}`,
         'Content-Type': 'application/json'
      },
   })

   const data = await res.json()

   return NextResponse.json( data )

}

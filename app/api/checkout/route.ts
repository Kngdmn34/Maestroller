import { NextResponse } from 'next/server';

import {stripe} from '@/app/lib/stripe';
import useCart from '@/app/hooks/use-cart';
import Stripe from 'stripe';




export async function POST (
    req: Request
) 
{
    const { productIds } = await req.json()
console.log(productIds)
    if(!productIds || productIds.length === 0){
        return new NextResponse("Product id are required",{status: 400})

    }


  


    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

   
      
    
productIds.forEach((element:any) => {
    line_items.push({
        quantity: 1,
        
        price_data: {
            currency: 'USD',
            product_data: {
                
                name: element.name,
                description: element.color
                
            },
            
            
            unit_amount: element.price * 100
            
        },
        
        
        
        
        
    })
    
});
    
       
    

const session = await stripe.checkout.sessions.create({
    line_items,
   
    mode: 'payment',
    
    billing_address_collection: 'required',
    phone_number_collection: {
        enabled: true,
        
    },


    payment_method_types: ['card'],
    success_url: `${process.env.FRONTEND_STORE_URL}/?success=1`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/?canceled=1`,
    
    
})

return NextResponse.json({url: session.url})
 }


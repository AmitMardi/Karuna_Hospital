import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the payload as requested
    console.log('Received contact form submission:', body);
    
    // In a real application, you would send an email or save to a database here.
    return NextResponse.json({ success: true, message: 'Message logged successfully.' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
  }
}

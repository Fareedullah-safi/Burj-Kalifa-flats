import connectDB from '@/DB/DB';
import User from '@/Models/model';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectDB();
        const { floor } = await req.json();

        // Find if a user booking exists on that floor
        const floorExists = await User.findOne({ 'flat.floor': floor });

        if (floorExists) {
            return NextResponse.json({ success: false, message: 'Floor already booked' }, { status: 201 });
        } else {
            return NextResponse.json({ success: true, message: 'Floor is available' }, { status: 200 });
        }
    } catch (error) {
        console.error('Error in check-floor API:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

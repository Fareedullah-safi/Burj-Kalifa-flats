'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { userSchema } from "@/lib/validations/user";
import { toast, Toaster } from 'sonner';
import { Mail, User, Phone } from "lucide-react"; // Icon set

function useFlatFromSearchParams() {
    const searchParams = useSearchParams();
    return {
        title: searchParams.get('title') || '',
        description: searchParams.get('description') || '',
        floor: searchParams.get('floor') || '',
        bedrooms: searchParams.get('bedrooms') || '',
        size: searchParams.get('size') || '',
        price: searchParams.get('price') || '',
        image: searchParams.get('image') || '',
    };
}

function TextInput({ id, label, type = "text", value, onChange, error, icon: Icon }) {
    return (
        <div className="space-y-1">
            <Label htmlFor={id} className="text-white">{label}</Label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                    <Icon size={18} />
                </span>
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className={`w-full pl-10 pr-4 py-2 bg-zinc-800 text-white border ${error ? 'border-red-500' : 'border-zinc-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    required
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default function ClientComponent() {
    const flat = useFlatFromSearchParams();
    const router = useRouter();

    const [form, setForm] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = userSchema.safeParse(form);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            const res = await axios.post(`api/booking`, { ...form, flat });

            if (res.data.success) {
                toast.success("🎉 Booking successful!");
                setForm({ username: '', email: '', phonenumber: '' });
                router.push('/flats');
            } else {
                toast.error(res.data.message || "Something went wrong");
            }
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.errors || error.message
                : "Unexpected error occurred";
            toast.error(`Booking error: ${message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-12 bg-gradient-to-br from-zinc-950 to-black">
            <Toaster richColors position="top-right" />

            <Card className="max-w-md w-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-2xl rounded-3xl px-4 sm:px-6 py-6">
                <CardHeader>
                    <CardTitle className="text-2xl text-cyan-400 text-center font-bold drop-shadow">
                        Book a Flat
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <TextInput
                            id="username"
                            label="Username"
                            value={form.username}
                            onChange={handleChange}
                            error={errors.username?.[0]}
                            icon={User}
                        />
                        <TextInput
                            id="email"
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            error={errors.email?.[0]}
                            icon={Mail}
                        />
                        <TextInput
                            id="phonenumber"
                            label="Phone Number"
                            value={form.phonenumber}
                            onChange={handleChange}
                            error={errors.phonenumber?.[0]}
                            icon={Phone}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-semibold rounded-full shadow-md"
                        >
                            {loading ? 'Booking...' : 'Book Now'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

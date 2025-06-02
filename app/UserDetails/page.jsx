'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { userSchema } from "@/lib/validations/user";
import { toast, Toaster } from 'sonner';

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

function TextInput({ id, label, type = "text", value, onChange, error }) {
    return (
        <div className="space-y-1">
            <Label htmlFor={id} className="text-white">{label}</Label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete="off"
                className={`w-full px-4 py-2 bg-zinc-800 text-white border ${error ? 'border-red-500' : 'border-zinc-700'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                required
                disabled={false} // keep enabled
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default function BookPage() {
    const flat = useFlatFromSearchParams();
    const router = useRouter();

    const [form, setForm] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);  // <-- loading state

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
        setLoading(true);  // start loading

        try {
            const res = await axios.post("/api/booking", { ...form, flat });

            if (res.data.success) {
                toast.success("Booking successful!");
                setForm({ username: '', email: '', phonenumber: '' });
                router.push('/Flats');
            } else {
                toast.error(res.data.message || "Something went wrong");
            }
        } catch (error) {
            const message = axios.isAxiosError(error)
                ? error.response?.data?.errors || error.message
                : "Unexpected error occurred";
            toast.error(`Booking error: ${message}`);
        } finally {
            setLoading(false);  // stop loading after try/catch
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen pt-12 pb-12 bg-zinc-950 px-4">
            <Toaster richColors position="top-right" />

            <Card className="max-w-md w-full bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-cyan-400 text-center">Book a Flat</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <TextInput
                            id="username"
                            label="Username"
                            value={form.username}
                            onChange={handleChange}
                            error={errors.username?.[0]}
                        />
                        <TextInput
                            id="email"
                            label="Email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            error={errors.email?.[0]}
                        />
                        <TextInput
                            id="phonenumber"
                            label="Phone Number"
                            value={form.phonenumber}
                            onChange={handleChange}
                            error={errors.phonenumber?.[0]}
                        />
                        <Button
                            type="submit"
                            disabled={loading}  // disable while loading
                            className="cursor-pointer w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-semibold rounded-full"
                        >
                            {loading ? 'Booking...' : 'Book Now'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

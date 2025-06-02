'use client'

export default function page() {
    const admin = {
        username: 'fareedullah',
        email: '4@gmial.com',
        phonenumber: '03171445697',
    };

    const flat = {
        title: 'Luxury Sky Villa',
        description: 'Stunning 2-bedroom flat with Burj & Fountain view.',
        floor: '1',
        bedrooms: '2',
        size: '1800',
        price: '4200000',
        image: '/images/1.jpg',
        createdAt: '2025-05-28T11:59:10.913+00:00',
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
            {/* Admin Info */}
            <div className="bg-gray-800 p-4 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-2">👤 Admin Info</h2>
                <p><strong>Username:</strong> {admin.username}</p>
                <p><strong>Email:</strong> {admin.email}</p>
                <p><strong>Phone:</strong> {admin.phonenumber}</p>
            </div>

            {/* Flat Info */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow">
                <img src={flat.image} alt={flat.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{flat.title}</h3>
                    <p className="text-gray-300 mb-4">{flat.description}</p>
                    <div className="text-sm text-gray-400 space-y-1">
                        <p><strong>Floor:</strong> {flat.floor}</p>
                        <p><strong>Bedrooms:</strong> {flat.bedrooms}</p>
                        <p><strong>Size:</strong> {flat.size} sq ft</p>
                        <p><strong>Price:</strong> ${flat.price}</p>
                        <p><strong>Listed:</strong> {new Date(flat.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

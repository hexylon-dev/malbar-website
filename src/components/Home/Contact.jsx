import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="text-center mb-6 mt-16">
                <h1 className="text-2xl font-bold text-orange-500">Contact Us</h1>
                <p className="text-sm text-gray-600 mt-1">Any question or remarks? Just write us a message!</p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                {/* Left Orange Section */}
                <div className="bg-orange-500 text-white p-8 md:w-1/3 relative">
                    <div className="mb-8">
                        <h2 className="font-bold text-xl mb-2">Contact information</h2>
                        <p className="text-sm opacity-80">Say something to start a live chat!</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-6 mr-4">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span>+123-456-789</span>
                        </div>

                        <div className="flex items-center">
                            <div className="w-6 mr-4">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>demo@gmail.com</span>
                        </div>

                        <div className="flex items-center">
                            <div className="w-6 mr-4">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span>3671 Roosevelt, Richmond, California</span>
                        </div>
                    </div>

                    {/* Decorative circle */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full -mb-16 -mr-16 opacity-20"></div>
                </div>

                {/* Right Form Section */}
                <div className="p-8 md:w-2/3">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="example@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                    placeholder="+01 XXXX XXXXX"
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <div className="text-right">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
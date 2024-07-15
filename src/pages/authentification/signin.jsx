// 
import React from "react";
import { UserPlusIcon } from "lucide-react";
import signup from "../../assets/images/signup.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { apiLogin } from "../../services/auth";

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const res = await apiLogin({
                email: data.email,
                password: data.password
            })
            console.log("Response:", res);
          
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden"
            >
                <motion.div
                    className="w-full md:w-1/2 hidden md:block relative overflow-hidden"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.img
                        className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                        src={signup}
                        alt="Signup"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>

                <div className="w-full md:w-1/2 p-8 bg-gray-100">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold text-gray-800 mb-2"
                    >
                        Welcome back! 🚀
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 mb-6"
                    >
                        Enter your details to join our amazing community
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className="group">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username/Email</label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
                                placeholder="johndoe@example.com"
                                {...register("username", { required: "Username is required" })}
                            />
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
                        </div>

                        <div className="group">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
                                placeholder="••••••••"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
                        >
                            <span>Sign In</span>
                            <UserPlusIcon className="ml-2 h-5 w-5" />
                        </motion.button>
                    </motion.form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-6 text-sm text-gray-600 text-center"
                    >
                        Don't have an account?{' '}
                        <a onClick={() => navigate("/Signup")} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline transition duration-300">
                            Sign Up
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
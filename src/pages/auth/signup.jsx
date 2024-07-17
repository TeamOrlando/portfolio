// import { useForm } from "react-hook-form"


// const Signup = () => {
//     const navigate = useNavigate()
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = (data) => {
//         console.log(data)
//     }
//     return (
//         <div className="h-[1200px] w-full bg-[#e6e8ec] flex items-center justify-center">
//             <div className="h-[1000px] w-[1200px] bg-white flex flex-row items-center pl-5 pr-5">

//                 <div className="w-1/2 h-[950px] bg-pink-400 ">
//                     <img className="w-full h-full" src={signup} alt="" />
//                 </div>

//                 <div className="w-1/2 h-[950px] bg-white flex flex-col justify-center text-center ">
//                     <h2 className="font-bold">Let's get started!</h2>
//                     <p>Enter the fields below to join our community</p>
//                     <form className="w-[300px] mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
//                         <div>
//                             <label htmlFor="name"
//                                 className="text-gray-500 text-2 mb-1 mr-0"
//                             ></label>

//                             First Name:
//                             <input type="text"
//                                 id="firstName"
//                                 name="name"
//                                 className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter first name"
//                                 {
//                                 ...register("firstName", { required: "First name required" })
//                                 }
//                             />

//                             {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}

//                         </div>








//                         <div>
//                             <label htmlFor="name"
//                                 className="text-gray-500 text-2 mb-1 mr-0"
//                             ></label>
//                             Surname:
//                             <input type="text"
//                                 id="surname"
//                                 name="name"
//                                 className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter surname"
//                                 {
//                                 ...register("surname", { required: "Surname required " })
//                                 }
//                             />
//                             {errors.surname && (<p className="text-red-500">{errors.surname.message}</p>)}

//                         </div>
//                         <div>
//                             <label htmlFor="name"
//                                 className="text-gray-500 text-2 mb-1 mr-0"
//                             ></label>
//                             Email address:
//                             <input type="name"
//                                 id="name"
//                                 name="name"
//                                 className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter email"
//                                 {
//                                 ...register("emailAddress", { required: "Email required" })
//                                 }
//                             />
//                             {errors.emailAddress && (<p className="text-red-500">{errors.emailAddress.message}</p>)}

//                         </div>
//                         <div>
//                             <label htmlFor="name"
//                                 className="text-gray-500 text-2 mb-1 mr-0"
//                             ></label>
//                             Username:
//                             <input type="name"
//                                 id="username"
//                                 name="name"
//                                 className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter username"
//                                 {
//                                 ...register("username", { required: "username required" })
//                                 }
//                             />
//                             {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}



//                         </div>
//                         <div>
//                             <label htmlFor="name"
//                                 className="text-gray-500 text-2 mb-1 mr-0"
//                             ></label>
//                             Password:
//                             <input type="name"
//                                 id="password"
//                                 name="name"
//                                 className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter password "
//                                 {
//                                 ...register("password", { required: "password required" })
//                                 }
//                             />
//                             {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

//                         </div>
//                         <div className="pt-4 items-center justify-center flex flex-row">
//                             <button type="submit" className="w-[150px] h-[30px] bg-blue-200 text-black flex flex-row gap-2 pt-1 items-center justify-center">

//                                 <span>Sign Up</span>
//                                 <UserPenIcon className="bg-white rounded-full" />
//                             </button>

//                         </div>

//                         <p>Already have an account?
//                             <a href="#" onClick={() => navigate("/Signin")}>Sign In</a> </p>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup

import React from "react";
import { UserPenIcon } from "lucide-react";
import signup from "../../assets/images/signup.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden"
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
                        className="text-3xl font-bold text-gray-800 mb-2 text-center"
                    >
                        Let's get started!
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 mb-6 text-center"
                    >
                        Enter the fields below to join our community
                    </motion.p>

                    <motion.form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <InputField 
                            label="First Name" 
                            id="firstName" 
                            register={register} 
                            errors={errors} 
                            placeholder="Enter first name" 
                        />
                        <InputField 
                            label="Surname" 
                            id="surname" 
                            register={register} 
                            errors={errors} 
                            placeholder="Enter surname" 
                        />
                        <InputField 
                            label="Email address" 
                            id="emailAddress" 
                            register={register} 
                            errors={errors} 
                            placeholder="Enter email" 
                        />
                        <InputField 
                            label="Username" 
                            id="username" 
                            register={register} 
                            errors={errors} 
                            placeholder="Enter username" 
                        />
                        <InputField 
                            label="Password" 
                            id="password" 
                            register={register} 
                            errors={errors} 
                            placeholder="Enter password" 
                            type="password"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-700 to-black text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
                        >
                            <span>Sign Up</span>
                            <UserPenIcon className="ml-2 h-5 w-5" />
                        </motion.button>
                    </motion.form>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-6 text-sm text-gray-600 text-center"
                    >
                        Already have an account?{' '}
                        <a onClick={() => navigate("/Signin")} className="text-gray-800 hover:text-gray-600 cursor-pointer hover:underline transition duration-300">
                            Sign In
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

const InputField = ({ label, id, register, errors, placeholder, type = "text" }) => (
    <div className="group">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform group-hover:scale-[1.02] bg-white"
            placeholder={placeholder}
            {...register(id, { required: `${label} is required` })}
        />
        {errors[id] && <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>}
    </div>
);

export default Signup;
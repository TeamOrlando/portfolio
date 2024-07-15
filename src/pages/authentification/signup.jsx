import { UserPenIcon } from "lucide-react"
import signup from "../../assets/images/signup.jpg"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


const Signup = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="h-[1200px] w-full bg-[#e6e8ec] flex items-center justify-center">
            <div className="h-[1000px] w-[1200px] bg-white flex flex-row items-center pl-5 pr-5">

                <div className="w-1/2 h-[950px] bg-pink-400 ">
                    <img className="w-full h-full" src={signup} alt="" />
                </div>

                <div className="w-1/2 h-[950px] bg-white flex flex-col justify-center text-center ">
                    <h2 className="font-bold">Let's get started!</h2>
                    <p>Enter the fields below to join our community</p>
                    <form className="w-[300px] mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name"
                                className="text-gray-500 text-2 mb-1 mr-0"
                            ></label>

                            First Name:
                            <input type="text"
                                id="firstName"
                                name="name"
                                className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter first name"
                                {
                                ...register("firstName", { required: "First name required" })
                                }
                            />

                            {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}

                        </div>








                        <div>
                            <label htmlFor="name"
                                className="text-gray-500 text-2 mb-1 mr-0"
                            ></label>
                            Surname:
                            <input type="text"
                                id="surname"
                                name="name"
                                className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter surname"
                                {
                                ...register("surname", { required: "Surname required " })
                                }
                            />
                            {errors.surname && (<p className="text-red-500">{errors.surname.message}</p>)}

                        </div>
                        <div>
                            <label htmlFor="name"
                                className="text-gray-500 text-2 mb-1 mr-0"
                            ></label>
                            Email address:
                            <input type="name"
                                id="name"
                                name="name"
                                className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter email"
                                {
                                ...register("emailAddress", { required: "Email required" })
                                }
                            />
                            {errors.emailAddress && (<p className="text-red-500">{errors.emailAddress.message}</p>)}

                        </div>
                        <div>
                            <label htmlFor="name"
                                className="text-gray-500 text-2 mb-1 mr-0"
                            ></label>
                            Username:
                            <input type="name"
                                id="username"
                                name="name"
                                className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter username"
                                {
                                ...register("username", { required: "username required" })
                                }
                            />
                            {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}



                        </div>
                        <div>
                            <label htmlFor="name"
                                className="text-gray-500 text-2 mb-1 mr-0"
                            ></label>
                            Password:
                            <input type="name"
                                id="password"
                                name="name"
                                className="h-9 bg-[#f1f1f1] w-full mt-2 border-2 rounded-lg" placeholder="Enter password "
                                {
                                ...register("password", { required: "password required" })
                                }
                            />
                            {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

                        </div>
                        <div className="pt-4 items-center justify-center flex flex-row">
                            <button type="submit" className="w-[150px] h-[30px] bg-blue-200 text-black flex flex-row gap-2 pt-1 items-center justify-center">

                                <span>Sign Up</span>
                                <UserPenIcon className="bg-white rounded-full" />
                            </button>

                        </div>

                        <p>Already have an account?
                            <a href="#" onClick={() => navigate("/Signin")}>Sign In</a> </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup
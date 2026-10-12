import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

function Signup () {

    const [form, setForm] = useState({name:'' , email:'', password: '', confirmPassword:''});
    const [error, setError] = useState ('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if(form.password !== form.confirmPassword){
            setError('Password does not match');
            toast.error('Password does not match');
            setLoading(false);
            return;
        }

        try{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify({name: form.name, email: form.email, password: form.password}),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Signup failed');
                toast.error(data.message || 'Signup failed');
                return;
            }

            localStorage.setItem('token',data.token);
            localStorage.setItem('user', JSON.stringify(data.data));

            toast.success('Account created successfully');
            navigate('/login');

        } catch {
            setError('Could not reach the server');
            toast.error('Could not reach the server');
        } finally {
            setLoading(false);
        }

    };


  return (

    <section  className="min-h-dvh flex items-center justify-center bg-[#1c1c1c] px-4" >
        <div className="w-full max-w-[420px] bg-white p-10" >

            <Link to="/" className="inline-block text-[#848484] text-[20px] hover:text-brand mb-6" >
                <FaHome/>
            </Link>

                <h1 className="text-[30px] uppercase text-center mb-8" >Sign Up</h1>

               <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none"
                    
                    
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none"
                    
                    
                    />

                <div  className="relative mb-2.5" >
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none"
                    
                    
                    />

                    <button  
                        type="button"
                        onClick={()=> setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#848484]"
                    >

                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </button>

                </div>
                    
                <div className="relative mb-2.5" >
                    <input 
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none"
                    
                    
                    />

                    <button
                        type="button"
                        onClick={()=> setShowConfirmPassword(!setShowConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#848484]"
                    >
                        {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}
                    </button>
                </div>
                    
                
                    {error && <p className="text-red-500 text-[13px] mb-2.5" >{error}</p>}

                    <button
                        type="submit"
                        disabled= {loading}
                        className="w-full text-white text-[14px] uppercase py-[19px] bg-brand hover:opacity-80"
                    >

                        {loading ? 'Creating account...' : 'Sign up'}
                        
                    </button>
                
                
                </form>     

            <p className="text-[13px] text-center mt-5 text-[#848484]">
                Already have an account? <Link to="/login" className="text-brand" >Log in</Link>
            </p>


        </div>
    </section>



  );
}

export default Signup;
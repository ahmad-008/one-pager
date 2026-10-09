import {Link, useNavigate} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

function Login() {

    const [form, setForm] =  useState({email: '', password: ''});

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });

    };

    const [error, setError]= useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError('');
        setLoading(true);

        try {
                
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });


            const data = await res.json();

            if (!res.ok){
                setError(data.message || 'Login failed' );
                return;
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.data));

            navigate('/');

        } catch {
            setError('Could not reach the server');

        } finally {
            setLoading(false);
        }




    };



  return (

    <section className="min-h-dvh flex items-center justify-center bg-[#1c1c1c] px-4" >

         <div className="w-full max-w-[420px] bg-white p-10" >

                <Link to="/" className="inline-block  text-[#848484] text-[20px] hover:text-brand mb-6" >
                    <FaHome/>
                </Link>

                <h1 className='text-[30px] uppercase text-center mb-8' >Log in</h1>

                <form onSubmit={handleSubmit} >
                    <input
                    
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className='w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none'                    
                    
                    />

                    <input
                    
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className='w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none'                    
                    
                    />

                    {error && <p className='text-red-500 text-[13px] mb-2.5'>{error}</p>}

                    <button
                    
                        type='submit'
                        className='w-full text-white text-[14px] uppercase py-[19px] bg-brand hover:opacity-80'
                    
                    >
                       {loading ? 'Logging in..' : 'Log in'}
                    </button>



                </form>

                <p className='text-[13px] text-center mt-5 text-[#848484]'>

                No Accout? <Link to="/signup" className='text-brand'  >Sign Up</Link>

                </p>


        </div>    


    </section>
   
  );
}

export default Login
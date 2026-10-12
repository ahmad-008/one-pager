import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import toast from 'react-hot-toast';


function ForgotPassword() {
  
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const res = await fetch (`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,{

                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({email}),
            });

            const data = await res.json();

            if(!res.ok){
                toast.error(data.message || 'Something went wrong');
                return;
            }

            toast.success('If that email exists, a reset link has been sent');



        } catch {
            toast.error('Something went wrong')

        } finally {
            setLoading(false);
        }


    };
  
  
    return (
        <section className='min-h-dvh flex items-center justify-center bg-[#1c1c1c] px-4' >
            <div className='w-full max-w-[420px] bg-white p-10' >
                
            <Link to="/" className='inline-block text-[#848484] text-[20px] hover:text-brand mb-6'>
                <FaHome/>
            </Link>

            <h1 className='text-[30px] uppercase text-center mb-8' >Forgot Password</h1>

            <form onSubmit={handleSubmit} >
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                    className='w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none'
                
                />

                <button
                    type="submit"
                    disabled={loading}
                    className='w-full text-white text-[14px] uppercase py-[19px] bg-brand hover:opacity-80'
                
                >


                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>

                <p className='text-[13px] text-center mt-5 text-[#848484]' >

                    Remembered your password? <Link to='/login' className='text-brand'  >Log in</Link>
                </p>


            </form>



            </div>

        </section>
    
  );
}

export default ForgotPassword;
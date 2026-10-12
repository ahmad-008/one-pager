import {useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHome,FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

function ResetPassword() {

    const {token} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({password: '' , confirmPassword:''});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (e)=> {
        setForm({...form,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();

        if (form.password !== form.confirmPassword){
            toast.error('Password does not match');
            return;
        }

        setLoading(true);

        try{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({password: form.password})
            });
            
            const data = await res.json();

            if(!res.ok){
                toast.error(data.message || 'Reset failed');
                return;
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.data));

            toast.success('Password reset successfully');
            navigate('/');


        } catch {
             toast.error('Could not reach the server');

        } finally {
            setLoading(false);

        };





    };



  return (
     <section className="min-h-dvh flex items-center justify-center bg-[#1c1c1c] px-4">
            <div className="w-full max-w-[420px] bg-white p-10">

                <Link to="/" className="inline-block text-[#848484] text-[20px] hover:text-brand mb-6">
    <FaHome/>
</Link>

<h1 className="text-[30px] uppercase text-center mb-8">Reset Password</h1>

<form onSubmit={handleSubmit}>
    <div className="relative mb-2.5">
        <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New Password"
            required
            className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] pr-12 outline-none"
        />
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#848484]"
        >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
    </div>

    <div className="relative mb-2.5">
        <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            required
            className="w-full text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] pr-12 outline-none"
        />
        <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#848484]"
        >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
    </div>

    <button
        type="submit"
        disabled={loading}
        className="w-full text-white text-[14px] uppercase py-[19px] bg-brand hover:opacity-80"
    >
        {loading ? 'Resetting...' : 'Reset Password'}
    </button>
</form>



            </div>
        </section>
  );
}

export default ResetPassword
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaUser, FaRegEnvelope, FaLink } from "react-icons/fa";
import { useState } from "react";


function Contact () {

    const [form, setForm] = useState ({
        name:'',
        email:'',
        website:'',
        message:'',
    });

    const [status, setStatus] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setStatus('sending');
        setFeedback('');

        try{
            const res = await fetch (`${import.meta.env.VITE_API_URL}/api/contact`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if(!res.ok){
                setStatus('error');
                setFeedback(data.message || 'Something went wrong');
                return;
            }

            setStatus('success');
            setFeedback('Message sent Successfully');
            setForm ({name:'', email:'', website:'', message:''});
        } catch (error) {
            setStatus('error');
            setFeedback('Could not reach the server');
        }

    };

    


    return (

        <section id="contact" className="relative bg-[#1c1c1c] pt-[100px] pb-[70px]">
            <div className="relative z-10" >

                <Container>
                    <SectionTitle 
                    
                        title="Get in touch!"
                        subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                        white

                    />

                    <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-x-[30px]" >
                        <div>
                            <div>
                             <h1 className="text-[30px] text-white mb-2.5" >Contact Info</h1>
                                 <p className="text-[15px] text-white leading-[21px] mb-[17px]" >
                                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.
                                 </p>

                                <p className="text-[15px] text-white leading-[21px] mb-[17px]" >
                                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.
                                Sed ut imperd iet nisi. Proin condimentum
                                </p>
                            </div>
                            
                           <ul className="flex flex-wrap gap-x-5 text-[14px] text-white leading-[22px] mb-[35px] min-[992px]:mb-0 " > 
                                <li className="flex items-center gap-2" >
                                    <FaHome className="text-[17px]" />
                                    lorem ipsum street
                                </li>

                                <li className="flex items-center gap-2" >
                                    <FaPhone className="text-[17px]" />
                                    +399 (500) 321 9548
                                </li>

                                <li className="flex items-center gap-2" >
                                    <FaEnvelope className="text-[17px]" />
                                    <a href="#" className="text-white" >info@domain.com</a>
                                </li>
                            
                            
                            
                            
                            </ul> 
                            
                            
                            
                            
                        </div>
                        
                    <form onSubmit={handleSubmit}  className="grid grid-cols-1 md:grid-cols-2 gap-x-2.5" >

                        <div>
                            <div className="relative pl-[58px]">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full text-[14px] text-[#848484] border-[#eaeaea] border border-l-0 p-[18px] mb-2.5 outline-none "
                                />

                                <span className="absolute top-0 left-0 w-[58px] h-[58px] border border-[#eaeaea] bg-white flex items-center justify-center">

                                    <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                                        <FaUser className="text-[12px] text-black" />
                                    </span>


                                </span>



                            </div>

                            <div className="relative pl-[58px]" >
                                <input
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="email"
                                    className="w-full text-[14px] text-[#848484] border border-[#eaeaea] border-l-0 p-[18px] mb-2.5 outline-none"
                                />
                                <span className="absolute top-0 left-0 w-[58px] h-[58px] border border-[#eaeaea] bg-white flex items-center justify-center" >
                                    <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center" >
                                        <FaRegEnvelope className="text-[12px] text-black"  />
                                    </span>

                                </span>

                            </div>


                             <div className="relative pl-[58px]" >
                                <input
                                    type="text"
                                    name="website"
                                    value={form.website}
                                    onChange={handleChange}
                                    placeholder="website"
                                    className="w-full text-[14px] text-[#848484] border border-[#eaeaea] border-l-0 p-[18px] mb-2.5 outline-none"
                                />
                                <span className="absolute top-0 left-0 w-[58px] h-[58px] border border-[#eaeaea] bg-white flex items-center justify-center" >
                                    <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center" >
                                        <FaLink className="text-[12px] text-black"  />
                                    </span>

                                </span>

                            </div>

                            






                        </div>
                            <div className="flex flex-col" >
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        className="w-full h-[126px] text-[14px] text-[#848484] border border-[#eaeaea] p-[18px] mb-2.5 outline-none"
                                    
                                    
                                    >

                                      

                                    </textarea>

                                      <button
                                            type="submit"
                                            disabled = {status === 'sending'}
                                           className="w-full text-center text-white text-[14px] uppercase py-[19px] bg-[#1ab5b3] hover:opacity-80"
                                        >

                                           {status === 'sending' ? 'Sending...' : 'Send Message'}
                                        </button>

                                {feedback && (
                                    <p className={`text-[13px] mt-2 ${status === 'success' ? 'text-brand' : 'text-red-400'}`} >

                                        {feedback}
                                    </p>

                                )

                                }


                            </div>



                    </form>
                    
                    </div>



                </Container>




            </div>





        </section>





    );




}

export default Contact;
import Container from "./Container";
import AboutTitle from "./AboutTitle";
import clientLogo1 from "../assets/client-logo1.png";
import clientLogo2 from "../assets/client-logo2.png";
import clientLogo3 from "../assets/client-logo3.png";
import clientLogo4 from "../assets/client-logo4.png";
import { useState } from "react";




const clients = [ clientLogo1, clientLogo2, clientLogo3, clientLogo4 ];

function About() {

    const [ clientSlide, setClientSlide ] = useState(0);

    const rotatedClients = [...clients.slice(clientSlide), ...clients.slice(0, clientSlide)];

    return (

        <section id="about" className="pt-[100px]" >

            <Container>
                <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-x-[30px]">

                    <div className="mb-[50px]" >
                        <AboutTitle heading="Company Biography" label="Short story about us" />
                        <p className="text-[20px] text-[#8b8b8b] mb-5" >
                            This is <span className="text-brand font-bold"  >Photoshop's</span> version of Lorem Ipsum. Proin gravida nibh vel velit auctor
                            aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                        </p>

                        <p className="text-[20px] leading-[26px] text-[#8b8b8b] mb-5">
                            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                            velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                            consequat auctor eu in elit. <span className="text-brand font-bold">Class aptent taciti</span> sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>

                        <p className="text-[20px] leading-[26px] text-[#8b8b8b]">
                            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
                        </p>


                    </div>

                    <div className="mb-[50px]">
                        <AboutTitle heading="Our Clients" label="We love our clients" />

                        <div className="flex justify-end mb-3" >
                            {clients.map((_,i) => (
                                <button
                                    key={i}
                                    onClick={()=> setClientSlide(i)}
                                    className={`w-4 h-4 mx-[5px] rounded-full border border-[#c7c7c7] ${clientSlide === i ? 'bg-[#c7c7c7]' : 'bg-transparent' }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                
                                > </button>


                            )





                            )


                            }



                        </div>

                        <ul className="grid grid-cols-2 gap-x-[30px] gap-y-[23px]" >
                            {rotatedClients.map((logo, i) => (
                                
                                <li key={i} >
                                    <a
                                        href="#"
                                        className="flex items-center justify-center h-[149px] bg-brand hover:bg-[#6f6f6f]"
                                     >
                                        <img src={logo} alt="" className="max-w-full" />
                                     </a>

                                </li>
                            ))}
   
                            </ul>




                    </div>


                </div>




            </Container>




        </section>

    );


}

export default About;
import Container from "./Container";
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaLinkedinIn, FaPinterestP } from "react-icons/fa";



const socials = [FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaLinkedinIn, FaPinterestP];

function Footer() {

    return (

        <footer className="bg-brand py-10">

            <Container>

                <div className="flex flex-col min-[992px]:flex-row items-center justify-between gap-6" >
                    
                    <p className="text-[16px] text-white" >
                        © 2014 OnePager, All Rights Reserved
                    </p>

                    <ul className="flex flex-wrap justify-center gap-[5px] md:gap-3" >
                        {socials.map((Icon, i) => (

                            <li key={i}>
                                <a
                                    href="#"
                                    className="group flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-white hover:bg-white"

                                >

                                    <Icon className="text-white text-[24px] md:text-[31px] group-hover:text-brand" />
                                </a>

                            </li>





                        )












                        )





                        }



                    </ul>





                </div>



            </Container>




        </footer>





    );


}

export default Footer;
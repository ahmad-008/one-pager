import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaBullhorn, FaPlane, FaRegCopy, FaThumbsUp, FaRegImage, FaCss3} from "react-icons/fa";
import servicesImage from '../assets/services-image.png';

const services = [

        {
            title: 'Web Design',
            icon: FaBullhorn,
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },

        {
            title: 'Photography',
            icon: FaPlane,
            iconClass: '-rotate-45',
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },

        {
            title: 'HTML5',
            icon: FaRegCopy,
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },

        {
            title: 'Jquery',
            icon: FaThumbsUp,
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },

        {
            title: 'Seo',
            icon: FaRegImage,
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },

        {
            title: 'CSS3',
            icon: FaCss3,
            text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.'
        },
    ];




function Services() {

       return (

        <section id="services" className="pt-[100px]">

            <Container>

                <SectionTitle
                    title="Our Services"
                    subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                />


                <div className="grid grid-cols-1 min-[992px]:grid-cols-3 gap-x-[30px]">
                    {services.map((service, i) => (

                        <div key={i} className="mb-10 group flex gap-[29px]" >
                           
                            <a href="#" className="relative shrink-0 w-14 h-20 ml-[15px] flex items-center justify-center" >

                                <span className="absolute inset-0 bg-brand -skew-x-[20deg] group-hover:skew-x-0 transition-transform duration-200 " ></span>
                                <service.icon className={`relative z-10 text-white ${service.iconClass || ''}`} size={28}   />
                            </a>
                        

                        <div className="flex-1 text-center" >

                            <h3 className="text-[20px] text-[#181818] uppercase mb-1">
                                {service.title}
                            </h3>
                            <p className="text-[15px] text-[#a8a8a8] leading-[22px]" >
                                {service.text}
                            </p>

                        </div>

                         </div>


                    ))}

                    </div>

                    <div  className="text-center mt-[30px]"  >
                        <img src={servicesImage} alt="" className="inline-block max-w-full"  />
                    </div>

            </Container>
        </section>
    );




}

export default Services;
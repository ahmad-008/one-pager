import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaFlask, FaCoffee, FaUsers, FaBriefcase } from "react-icons/fa";


const stats = [

    {icon:FaFlask,
        number: '956779',
        label: 'Lines of code written'
    },

    {icon:FaCoffee,
        number: '1479',
        label: 'Coffe Drinked'
    },

    {icon:FaUsers,
        number: '578',
        label: 'Happy Clients'
    },

    {icon:FaBriefcase,
        number: '2178',
        label: 'Projects Done'
    },


];

function Stats() {

    return(

        <section className="pb-[50px]" >
            <Container>

                <SectionTitle
                    title="Company stats"
                    subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:grid-cols-4 gap-x-[30px]" >
                    {stats.map((stat, i) => (

                        <div
                            key={i}
                            className="text-center px-2.5 py-[50px] border border-[#e4e4e4] rounded-md mb-[25px]"
                        >

                            <span className="inline-block mb-[35px]" >
                                    <stat.icon className="text-brand" size={44} />
                            </span>

                            <p className="text-[56px] text-[#060606] leading-9 mb-5" >
                                {stat.number}
                            </p>

                            <p className="text-[18px] text-[#c7c7c7]" >
                                {stat.label}
                            </p>


                        </div>



                    )








                    )





                    }


                </div>






            </Container>
        </section>












    );


}

export default Stats;
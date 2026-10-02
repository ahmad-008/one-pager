import Container from "./Container";
import SectionTitle from "./SectionTitle";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import teamBg from "../assets/team-bg.jpg";
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG } from "react-icons/fa";
import { useState } from "react";



const members= [

    { name: 'Owen Miller',  role: 'developer', image: team1 },
    { name: 'Mike William', role: 'developer', image: team2 },
    { name: 'Besim Dauti',  role: 'developer', image: team3 },
    { name: 'Faton Avdiu',  role: 'developer', image: team4 },



];

const socials = [FaFacebookF, FaTwitter ,FaRss, FaGooglePlusG];


function Team () {
    
    const [startIndex, setStartIndex]= useState(0);

    const prev = () => {
    if (startIndex === 0) {
        setStartIndex(members.length - 1);
    } else {
        setStartIndex(startIndex - 1);
    }
};

const next = () => {
    if (startIndex === members.length - 1) {
        setStartIndex(0);
    } else {
        setStartIndex(startIndex + 1);
    }
};

    const rotated = [...members.slice(startIndex), ...members.slice(0, startIndex)];
    return (

        <section  id="team" 
        style={{ backgroundImage : `url(${teamBg})`}}
        className="relative bg-cover bg-center bg-[#262b36] pt-[100px] pb-[35px]" >
            
            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[89px] bg-[rgba(0,0,0,0.6)] text-white text-2xl flex items-center justify-center"
            >

                &lsaquo;
            </button>

            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[50px] h-[89px] bg-[rgba(0,0,0,0.6)] text-white text-2xl flex items-center justify-center"
            >

                &rsaquo;
            </button>

            <div className="absolute inset-0 bg-[rgba(43,48,60,0.9)]"  >
            </div>
            <div className="relative z-10"  >
               
                <Container>

                <SectionTitle
                
                    title="Meet the Team"
                    subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                    white
    
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:grid-cols-4 gap-x-[30px] gap-y-10">
                        {rotated.map( (member) => (
                                <div key={member.name}>
                                    <img  src={member.image} alt={member.name} className="w-full"  />

                                    <div className="bg-[rgba(0,0,0,0.5)] px-5 py-[17px]">

                                        <h5 className="text-white text-[20px] font-bold"  >{member.name}</h5>
                                        <span className="text-[#aeaeae] text-[14px]" >{member.role}</span>


                                    </div>

                                                        <ul className="flex gap-2 bg-brand px-5 py-[23px]">
                        {socials.map((Icon, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="group flex items-center justify-center w-[30px] h-[30px] rounded-full border border-white hover:bg-white "
                                >

                                    <Icon className="text-white text-[15px] group-hover" />
                                </a>



                            </li>    )   )       }
                    </ul>

                                </div>))  }


                </div>





            </Container>
            </div>
           




        </section>





    );

}

export default Team;
import { useState } from "react"
import heroImg from '../assets/hero.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const slides = [

    {
        titleParts: [
            { text: 'WELCOME TO ' },
            { text: 'ONE', bold: true, color: 'text-brand' },
            { text: 'PAGER', bold: true },
        ],
        subtitle: "we design and develop awesome websites and smart applications, impactful identities using the latest",
        btn: "Learn More"
    },
    {
        titleParts: [
            { text: "WE ARE GREAT " },
            { text: "COMPANY", bold: true },
        ],
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        btn: "Learn More"
    },
    {
        titleParts: [
            { text: 'ONE', bold: true, color: 'text-brand' },
            { text: 'PAGER', bold: true },
            { text: ' IS ' },
            { text: 'VERY ', break: true },
            { text: 'SUITABLE', break: true },
        ],
        subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit",
        btn: null
    },

]


function Hero() {

    const [index, setIndex] = useState(0)
    const slide = slides[index];

    const prev = () => {
        if (index === 0) {
            setIndex(slides.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const next = () => {
        if (index === slides.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (

        <section
            id="home"
            style={{ backgroundImage: `url(${heroImg})` }}
            className="relative text-white h-dvh bg-cover bg-center flex items-center justify-center py-4"
        >


            <div className="relative z-10 text-center ">
                <div className="max-w-[1170px] px-[90px] sm:px-[90px] mx-auto" >

                    <h1 className="text-[36px] md:text-[45px] min-[992px]:text-[60px]  font-normal leading-tight mb-2.5 md:mb-0">
                        {slide.titleParts.map((part, i) => (

                            <span key={i} className={`${part.bold ? 'font-bold' : ''} ${part.color || ''}`}>
                                {part.break && <br className="md:hidden" />}
                                {part.text}
                            </span>

                        ))}
                    </h1>
                    <p className="text-[16px] md:text-[18px] min-[992px]:text-[20px] leading-[27px] max-w-[640px] mx-auto mb-[25px]">{slide.subtitle}</p>

                    {slide.btn && (
                        <a
                            href="#portfolio"
                            className="relative inline-block text-[17px] font-bold uppercase text-white px-[30px] py-[14px]"
                        >
                            <span className="absolute inset-0 bg-brand -skew-x-[25deg]"></span>
                            <span className="relative">{slide.btn}</span>
                        </a>


                    )}

                </div>

            </div>

            <button onClick={prev}
                className="absolute left-[7px] min-[992px]:left-[70px] top-1/2 -translate-y-1/2 z-20 text-[30px] text-bold"
            >
                <FaArrowLeft />

            </button>

            <button onClick={next}
                className="absolute right-[7px] min-[992px]:right-[70px] top-1/2 -translate-y-1/2 z-20 text-[30px] text-bold"
            >
                <FaArrowRight />

            </button>

        </section>

    );

}

export default Hero;
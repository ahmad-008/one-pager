import { useState } from "react"
import Container from './Container';
import heroImg from '../assets/hero.jpg';



const slides = [

    {
        titleParts: [
            { text: 'Welcome to ' },
            { text: 'one', bold: true, color: 'text-brand' },
            { text: 'pager', bold: true},
        ],
        subtitle: "we design and develop awesome websites and smart applications, impactful identities using the latest",
        btn: "Learn More"
    },
    {
        titleParts: [
            { text: "We are great " },
            { text: "company", bold: true},
        ],
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        btn: "Learn More"
    },
    {
        titleParts: [
            { text: 'one', bold: true, color: 'text-brand' },
            { text: 'pager', bold: true },
            { text: ' is very suitable' },
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
            className="relative text-white h-dvh bg-cover bg-center flex items-center justify-center "
        >
            

            <div className="relative z-10 text-center ">
                <Container>
                    <h1 className="text-[36px] md:text-[45px] min-[992px]:text-[60px] font-normal mb-6">
                        {slide.titleParts.map((part, i) => (
                            
                            <span key={i} className={`${part.bold ? 'font-bold' : ''} ${part.color || ''}`}>

                                {part.text}
                            </span>
                            
                        ))}
                    </h1>
                    <p className="text-[16px] md:text-[18px] min-[992px]:text-[20px] leading-[27px] max-w-[640px] mx-auto mb-[25px]">{slide.subtitle}</p>

                    {slide.btn && (
                        <a
                            href="#portfolio"
                            className="inline-block bg-brand px-8 py-3 uppercase text-sm font-bold"
                        >{slide.btn}</a>

                    )}
                </Container>
            </div>

            <button onClick={prev}
                className="absolute left-[7px] min-[992px]:left[70px] top-1/2 -translate-y-1/2 z-20 border px-4 py-2"
            >
                &lt;

            </button>

            <button onClick={next}
                className="absolute right-[7px] min-[992px]:right-[70px] top-1/2 -translate-y-1/2 z-20 border px-4 py-2"
            >
                &gt;

            </button>

        </section>

    );

}

export default Hero;
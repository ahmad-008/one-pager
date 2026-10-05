import Container from "./Container";
import portfolioBg from "../assets/portfoliobg.jpg";
import { useState, useEffect } from "react";
import img1 from "../assets/portfolio/1.jpg";
import img2 from "../assets/portfolio/2.jpg";
import img3 from "../assets/portfolio/3.jpg";
import img4 from "../assets/portfolio/4.jpg";
import img5 from "../assets/portfolio/5.jpg";
import img6 from "../assets/portfolio/6.jpg";
import img7 from "../assets/portfolio/7.jpg";
import img8 from "../assets/portfolio/8.jpg";
import img9 from "../assets/portfolio/9.jpg";
import img10 from "../assets/portfolio/10.jpg";
import modal1Img from "../assets/portfolio/modal1.jpg";
import modal2Img from "../assets/portfolio/modal2.jpg";
import modal3Img from "../assets/portfolio/modal3.jpg";
import SectionTitle from "./SectionTitle";
import { FaSearch, FaRegFile, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";





function distributeItemsIntoColumns(list, columnCount) {
    const columns = Array.from({ length: columnCount},()=> [])
    const heights = Array(columnCount).fill(0)

    list.forEach((item)=>{
        let shortest = 0
        for (let i = 1; i < columnCount; i++){
            if (heights[i] < heights[shortest]){
                shortest = i
            }
        }
        columns[shortest].push(item)
        heights[shortest] += item.height
    })

    return columns
}

const categories = ['All', 'Web Design', 'Photography', 'Illustration', 'Branding'];


function Portfolio() {

    const [activeCategory, setActiveCategory] = useState('All');

    const items = [
        { id: 1, categories: ['Web Design', 'Photography'], image: img1, height: 236 },
        { id: 2, categories: ['Branding', 'Illustration'], image: img2, height: 328 },
        { id: 3, categories: ['Photography', 'Illustration'], image: img3, height: 178 },
        { id: 4, categories: ['Web Design', 'Branding'], image: img4, height: 379 },
        { id: 5, categories: ['Web Design', 'Photography'], image: img5, height: 218 },
        { id: 6, categories: ['Branding', 'Photography'], image: img6, height: 218 },
        { id: 7, categories: ['Web Design', 'Illustration'], image: img7, height: 200 },
        { id: 8, categories: ['Web Design', 'Branding'], image: img8, height: 172 },
        { id: 9, categories: ['Photography', 'Illustration'], image: img9, height: 293 },
        { id: 10, categories: ['Photography', 'Web Design'], image: img10, height: 179 },
        { id: 11, categories: ['Web Design', 'Photography'], image: img1, height: 236 },
    ]

    const modalImages = [modal1Img, modal2Img, modal3Img];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const [columnCount, setColumnCount] = useState(4);
    useEffect( () => {
        const updateColumns = () => {
            const width = window.innerWidth;

            if(width < 768){
                    setColumnCount(1);
            }else if(width <992){
                    setColumnCount(2);
            }else if(width < 1200){
                setColumnCount(3);
            }else{
                setColumnCount(4);
            }




        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, [] );

    useEffect(()=>{

        if (isModalOpen) {
            document.body.style.overflow ='hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };


    }, [isModalOpen]);




    const prevModalImage = () => {
        if (modalIndex === 0) {
            setModalIndex(modalImages.length - 1);
        } else {
            setModalIndex(modalIndex - 1);
        }
    }

    const nextModalImage = () => {
        if (modalIndex === modalImages.length - 1) {
            setModalIndex(0);
        } else {
            setModalIndex(modalIndex + 1);
        }

    }

    const filteredItems = items.filter(
        (item) => activeCategory === 'All' || item.categories.includes(activeCategory)
    )

    const columns = distributeItemsIntoColumns(filteredItems, columnCount);

    return (
        <section
            id="portfolio"
            style={{ backgroundImage: `url(${portfolioBg})` }}
            className="bg-cover bg-center py-20"
        >
            <Container>

            
                <SectionTitle
                    title="Our Portfolio"
                    subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                
                
                />



                {/* <h2

                    className="text-3xl font-bold text-center uppercase mb-2"

                >
                    Our Portfolio

                </h2>
                <p

                    className="text-center text-gray-500 mb-8"

                >
                    This is Photoshop's version of Lorem Ipsum. Proin gravida

                </p>    */}
                
                <ul className="flex flex-wrap justify-center gap-[5px] py-[26px] border-t border-b border-[#d2d2d2] mb-[30px]"   >
                    {categories.map((cat) => (
                        <li key={cat}>

                            <button

                                onClick={() => setActiveCategory(cat)}
                                className={`group relative whitespace-nowrap text-[18px] px-[15px] py-1.5 
                                ${activeCategory === cat ? ' text-white' : 'text-black hover:text-white'}`}
                            >
                            <span className={`absolute inset-0 bg-brand -skew-x-[25deg] ${activeCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                            <span className="relative" >{cat}</span>

                            </button>


                        </li>

                    ))}






                    



                </ul>


                {/* <ul className="flex justify-center gap-8 py-4 border-t border-b border-gray-300 mb-10">

                    <li>
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={activeCategory === 'All' ? 'bg-brand text-white px-3 py-1' : 'text-gray-700'}
                        >
                            All
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setActiveCategory('Web Design')}
                            className={activeCategory === 'Web Design' ? 'bg-brand text-white px-3 py-1' : 'text-gray-700'}
                        >
                            Web Design
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setActiveCategory('Photography')}
                            className={activeCategory === 'Photography' ? 'bg-brand text-white px-3 py-1' : 'text-gray-700'}
                        >
                            Photography
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setActiveCategory('Illustration')}
                            className={activeCategory === 'Illustration' ? 'bg-brand text-white px-3 py-1' : 'text-gray-700'}
                        >
                            Illustration
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setActiveCategory('Branding')}
                            className={activeCategory === 'Branding' ? 'bg-brand text-white px-3 py-1' : 'text-gray-700'}
                        >
                            Branding
                        </button>
                    </li>

                </ul> */}

                <div className="flex gap-[30px]">
                    {columns.map((column, colIndex)=> ( 
                        <div key={colIndex} className="flex-1 flex flex-col gap-[30px]">
                            {column.map((item) => (

                            <div
                                key={item.id}
                                className="group relative overflow-hidden"
                            >
                                <img src={item.image} alt="" className="w-full " />
                                <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center text-white text-center px-4">

                                    <h3 className="text-lg font-bold text-white">Cool App Design</h3>
                                    <span className="text-sm" >development, mobile</span>

                                </div>


                                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 ">
                                    <a
                                        href={item.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 -skew-x-12 bg-white text-brand flex items-center justify-center"
                                    >
                                        <FaSearch className="w-4 h-4 skew-x-12" />


                                    </a>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-9 h-9 -skew-x-12 bg-white text-brand flex items-center justify-center"
                                    >
                                        <FaRegFile className="w-4 h-4 skew-x-12" />

                                    </button>

                                </div>

                            </div>
                            ))}
                        </div>

                    ))}
                    
                </div>

                {isModalOpen && (
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.8)] flex items-center justify-center overflow-y-auto p-4  "
                    >


                        <div
                            className="relative w-full max-w-[600px] py-10"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-9 right-0 w-11 h-11 text-[#c2c2c2] text-[28px] opacity-65 hover:opacity-100"
                            >
                                <IoClose/>

                            </button>      
 
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white p-12"
                            >
                                <div className="relative mb-6">
                                    <img src={modalImages[modalIndex]} alt="" className="w-full " />

                                    <button
                                        onClick={prevModalImage}
                                        className="absolute left-[7px] top-1/2 -translate-y-1/2 text-white text-[30px] leading-none"
                                    >
                                        <FaArrowLeft/>
                                    </button>

                                    <button
                                        onClick={nextModalImage}
                                        className="absolute right-[7px] top-1/2 -translate-y-1/2 text-white text-[30px] leading-none"
                                    >
                                        <FaArrowRight/>
                                    </button>



                                </div>

                                <h2 className=" font-Arial text-3xl mb-5">Useful Seo Icons</h2>

                                <p className=" font-Arial text-[13px] leading-6 text-gray-600 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="font-Arial text-[13px] leading-6 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolorei
                                </p>
                            </div>

                                <p className="text-center font-bold text-[13px] text-white mt-1 leading-3">
                                    You can view the project <a href="#" className="text-brand">here</a>
                                </p>

                        </div>






                    </div>

                )}




        

            </Container>
        </section>

    )

}

export default Portfolio;
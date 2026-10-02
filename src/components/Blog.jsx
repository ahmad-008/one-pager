import Container from "./Container";
import SectionTitle from "./SectionTitle";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import { FaComments, FaRegClock } from "react-icons/fa";



const posts = [
    {   image: blog1, 
        date: '19 oct', 
        comments: '10', 
        title: 'Mobile Friendly Comments Dashboardnow launched!', 
        text: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu' },
    
    {       image: blog2, 
            date: '19 oct', 
            comments: '10', title: 'Mobile Friendly Comments Dashboardnow launched!', 
            text: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu' },
    
    { image: blog3, 
        date: '19 oct', 
        comments: '10', 
        title: 'Mobile Friendly Comments Dashboardnow launched!', 
        text: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu' },
    
    
    { image: blog4, date: '19 oct', 
        comments: '10', title: 'Mobile Friendly Comments Dashboardnow launched!', 
        text: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu' },
];



function Blog (){

    return(
        <section id="blog" className="pt-[80px] pb-10">
            <Container>
                <SectionTitle
                        title="Latest Posts"
                        subtitle="This is Photoshop's version of Lorem Ipsum. Proin gravida"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 min-[992px]:grid-cols-4 gap-x-[30px]" >
                    { posts.map( (posts, i)=> (
                       


                            <div key={i} className="mb-[30px] pb-5 " >

                                <img src={posts.image} alt="" className="w-full"    />

                                <div className="text-center mb-[13px] -mt-7" >

                                    <ul className="inline-block bg-[#54baba] p-[18px]" >

                                        <li className="inline-block mr-2.5" >
                                            <a href="#" className="inline-flex items-center text-white text-[15px] font-bold leading-4" >
                                                <FaRegClock   className="mr-[7px] text-[16px]"               />

                                                {posts.date}
                                            </a>
                                        </li>

                                        <li className="inline-block" >
                                            <a href="#" className="inline-flex items-center text-white text-[15px] font-bold leading-4" >
                                                <FaComments   className="mr-[7px] text-[16px]"               />

                                                {posts.comments}
                                            </a>
                                        </li>


                                    </ul>




                                </div>

                                <h2  className="text-center text-[19px] leading-[26px] text-[#454545] mb-[15px]" >
                                    <a  href="#" className="inline-block pb-[15px] border-b border-[#cccccc] text-[#454545] hover:opacity-70" >
                                        {posts.title}
                                    </a>


                                </h2>

                                <p className="text-center text-[15px] leading-[22px] text-[#919191] max-h-[63px] overflow-hidden " >
                                    {posts.text}
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

export default Blog;
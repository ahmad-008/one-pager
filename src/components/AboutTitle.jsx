

function AboutTitile({heading, label}){

return(
        <div className="mb-10">
            <h2 className="text-[35px] font-bold uppercase text-black mb-1.5" >
                {heading}
            </h2>

            <span className="inline-block text-[18px] uppercase text-white bg-brand px-1.5">
                {label}
            </span>

        </div>



);

}

export default AboutTitile


function SectionTitle({ title, subtitle, white }) {

    return (

        <div className="text-center mb-10">
            <h1 className={`text-[45px] font-bold uppercase ${white ? 'text-white' : 'text-black'} `}>

                {title}

            </h1>

            <p className={`text-[18px] leading-6 ${white ? 'text-white' : 'text-[#838383]'}`} >

                {subtitle}
            </p>



        </div>



    );

}


export default SectionTitle;
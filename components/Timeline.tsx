
function Timeline(props:any): JSX.Element{
    return(
        <section className="mt-4 mb-6 pb-4 px-10 flex mx-auto max-w-screen-md">
            <ol className="relative border-l border-white">
                {props.events?.map((event:any)=>(                  
                <li className="mb-10 ml-10 inline-block ">            
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                        <svg aria-hidden="true" className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{event.name}</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-white">{event.date}</time>
                    <p className="block mb-4 text-base font-normal text-white line-clamp-2">{event.desc}</p>
                    <a href={event.link} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> Learn More</a>
                </li>
                ))}
            </ol>

        </section>
    )
}

export default Timeline
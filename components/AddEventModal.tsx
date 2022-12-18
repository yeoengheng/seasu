import emailjs from '@emailjs/browser';

function AddEventModal( { visible = true , closeModal =()=>{}}):JSX.Element{
    const SERVICE_ID = process.env.SERVICE_ID
    const TEMPLATE_ID = process.env.TEMPLATE_ID
    const EMAIL_KEY = process.env.EMAIL_KEY
    
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm("service_vczsqn9", "template_rwklaj2" , e.target, "uOk49p-HyZQnqg6EI")
        .then((result) => {
            closeModal()
            console.log(result.text);
        }, (error) => {
            closeModal()
            console.log(error.text);
        });
    }
    if (!visible) return null as any;
    const handleonClose = (e:any) =>{
        if (e.target.id === "popup-modal")
            closeModal()
    }
    return(    
        <div id="popup-modal" aria-hidden="true" onClick={handleonClose} className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm justify-center items-center p-4 flex overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal X button */}
                    <button type="button" onClick={closeModal}  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    {/* Modal Content */}
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Thanks in advance!</h3>
                        <form className="space-y-6" onSubmit={sendEmail}>
                            <div>
                                <label className="inputLabel">Your email</label>
                                <input type="email" name="email" id="email" className="inputStyle" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label className="inputLabel">Event name</label>
                                <input type="text" name="name" id="name" placeholder="Stripe Meetup" className="inputStyle" required/>
                            </div>
                            <div>
                                <label className="inputLabel">Event date</label>
                                <input type="date" name="date" id="date" placeholder="-" className="inputStyle" required/>
                            </div>
                            <div>
                                <label className="inputLabel">Event link</label>
                                <input type="text" name="link" id="date" placeholder="www.url.com" className="inputStyle" required/>
                            </div>
                            <div>
                                <label className="inputLabel">Event description (optional)</label>
                                <input type="text" name="desc" id="date" placeholder="What is this event about" className="inputStyle"/>
                            </div>
                            <button type="submit" className="primaryButton w-full">Submit Event</button>
                            <p className="text-sm text-gray-400">All submissions will be reviewed before posting. The review process will take about 1-2 working days.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default AddEventModal
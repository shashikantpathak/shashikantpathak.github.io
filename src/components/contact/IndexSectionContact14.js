import React from 'react';

export default function IndexSectionContact14() {
    return (
        <React.Fragment>
            <>
                <section className="px-8 md:px-24 py-32">
  <div className="flex flex-wrap -m-4">
    <div className="w-full lg:w-2/3 p-4">
      <p className="tracking-tight text-gray-600 mb-4">Contact us</p>
      <h1 className="font-heading tracking-tight text-5xl md:text-6xl font-medium mb-14">Get In Touch</h1>
      <form action="#">
        <div className="max-w-2xl">
          <div className="flex flex-wrap -m-4 mb-3">
            <div className="w-full sm:w-1/2 p-4">
              <label htmlFor="contact1-input1" className="block mb-3 text-sm font-medium tracking-tight">Your name</label>
              <input type="text" id="contact1-input1" className="w-full px-6 py-4 rounded-full border border-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-orange-200 outline-none transition duration-200" placeholder="John Doe" />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <label htmlFor="contact1-input2" className="block mb-3 text-sm font-medium tracking-tight">Email</label>
              <input type="email" id="contact1-input2" className="w-full px-6 py-4 rounded-full border border-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-orange-200 outline-none transition duration-200" placeholder="john@email.com" />
            </div>
          </div>
          <label htmlFor="contact1-input3" className="block mb-3 text-sm font-medium tracking-tight">Subject</label>
          <input type="text" id="contact1-input3" className="w-full mb-3 px-6 py-4 rounded-full border border-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-orange-200 outline-none transition duration-200" placeholder="Add a subject" />
          <label htmlFor="contact1-input4" className="block mb-3 text-sm font-medium tracking-tight">Message</label>
          <textarea id="contact1-input4" rows={5} className="w-full mb-4 px-6 py-4 rounded-3xl resize-none border border-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-orange-200 outline-none transition duration-200" placeholder="Write your message" defaultValue={""} />
          <button type="submit" className="bg-black h-16 rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200">
            <span className="text-white font-bold tracking-tight">Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </form>
    </div>
    <div className="w-full lg:w-1/3 p-4">
      <img className="rounded-2xl w-full object-cover" style={{height: 600}} src="consulty-assets/contact/picture1.png" alt />
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}


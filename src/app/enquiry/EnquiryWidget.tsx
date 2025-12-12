import { useEffect, useState } from "react";
import "./custom.css";

const EnquiryWidget = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 800);
  }, []);

  return (
    <>
      {/* Floating Enquiry Button */}
      <button
  onClick={() => setOpen(true)}
  className="
    fixed top-1/2 right-2 -translate-y-1/2 z-50
    bg-white text-black border border-gray-300 
    rounded-l-xl px-4 py-2 shadow-lg font-semibold 
    transition-all duration-300 ease-in-out
    hover:bg-green-600 hover:text-white 
    rotate-90 hover:rotate-0 origin-right
  "
>
  Let’s Talk
</button>

      {/* Popup Overlay */}
      {open && (
        <div className="fixed inset-0   bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999]">

          {/* Popup Card */}
          <div className="enquiry-card animate-popIn relative">

            {/* Close Icon */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-white text-center mb-1">
             Let’s Work Together
            </h2>
            <p className="text-gray-200 text-center mb-4 text-sm">
              I’ll turn your idea into a real project.
            </p>

            {/* FORM */}
            <form className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="text-gray-200 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input-box mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-200 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input-box mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-200 text-sm">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 Enter Your Number"
                  className="input-box mt-1"
                />
              </div>

              {/* Enquiry Type */}
              {/* <div>
                <label className="text-white-200 text-sm">Enquiry Type</label>
                <select className="input-box mt-1">
                  <option>Select option</option>
                  <option>Hire for a Project</option>
                  <option>Internship</option>
                  <option>Collaboration</option>
                  <option>Freelance Work</option>
                </select>
              </div> */}

              <div>
  <label className="text-white text-sm">Enquiry Type</label>
  <select className="input-box mt-1 ">
    <option value="">Select Option</option>
<option>Hire for a Project</option>
<option>Website Development</option>
<option>Freelance Services</option>
<option>Buy a Ready-Made Website</option>
<option>Collaboration / Partnership</option>
<option>Technical Support & Maintenance</option>
<option>Custom Web App Development</option>

  </select>
</div>


              {/* Message / Description */}
              <div>
                <label className="text-gray-200 text-sm">Message / Project Description</label>
                <textarea
                  placeholder="Write your message here..."
                  className="input-box mt-1 h-24 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700 mt-3"
              >
                Submit Enquiry
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryWidget;

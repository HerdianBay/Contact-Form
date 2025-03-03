export default function InputField({ onChange, errors, formData, type }) {
  function handleChange(e) {
    onChange(e);
  }

  if (type == "email") {
    return (
      <>
        <div className="mt-2.5 w-full">
          <label htmlFor="email" className="text-[0.6rem]">
            Email Address *
          </label>
          <input
            type="text"
            id="inputEmailAddress"
            name="email"
            className={`w-full h-8 px-2 border border-gray-300 rounded-sm mt-1 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 text-sm cursor-pointer ${
              errors.email && !formData.email.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
          />
          <p
            className={`text-[0.6rem] mt-1 text-red-500 ${
              errors.email ? "block" : "hidden"
            } `}
          >
            Please enter a valid email address
          </p>
        </div>
      </>
    );
  } else if (type == "message") {
    return (
      <>
        <div className="mt-2.5 w-full lg:mt-0">
          <label htmlFor="message" className="text-[0.6rem]">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className={`w-full border border-gray-300 rounded-md mt-2 hover:border-teal-500 px-4 py-2 text-sm cursor-pointer ${
              errors.message && !formData.message.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
          ></textarea>
          <p
            className={`text-[0.6rem] mt-0.5 text-red-500 ${
              errors.message && !formData.message.trim() ? "block" : "hidden"
            } `}
          >
            This field is required
          </p>
        </div>
      </>
    );
  }
}

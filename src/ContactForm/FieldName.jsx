export default function FieldName({ onChange, errors, formData }) {
  function handleChange(e) {
    onChange(e);
  }
  return (
    <>
      <div className="block lg:flex lg:gap-3">
        <div className="mt-2.5 w-full">
          <label htmlFor="firstName" className="text-[0.6rem]">
            First Name *
          </label>
          <input
            type="text"
            id="inputFirstName"
            name="firstName"
            className={`w-full h-8 px-2 border border-gray-300 rounded-sm mt-1 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 text-sm cursor-pointer ${
              errors.firstName && !formData.firstName.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
          />
          <p
            className={`text-[0.6rem] mt-1 text-red-500 ${
              errors.firstName && !formData.firstName.trim()
                ? "block"
                : "hidden"
            } `}
          >
            This field is required
          </p>
        </div>
        <div className="mt-2.5 w-full">
          <label htmlFor="lastName" className="text-[0.6rem]">
            Last Name *
          </label>
          <input
            type="text"
            id="inputLastName"
            name="lastName"
            className={`w-full h-8 px-2 border border-gray-300 rounded-sm mt-1 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-500 text-sm cursor-pointer ${
              errors.lastName && !formData.lastName.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
          />
          <p
            className={`text-[0.6rem] mt-1 text-red-500 ${
              errors.lastName && !formData.lastName.trim() ? "block" : "hidden"
            } `}
          >
            This field is required
          </p>
        </div>
      </div>
    </>
  );
}

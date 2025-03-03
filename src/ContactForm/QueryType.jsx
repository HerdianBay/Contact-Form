export default function QueryType({ onChange, errors }) {
  function handleChange(e) {
    onChange(e);
  }
  return (
    <>
      <div className="mt-2.5 w-full">
        <label htmlFor="inputQueryType" className="text-[0.6rem]">
          Query Type *
        </label>
        <div className="block lg:flex lg:justify-between lg:gap-3">
          <div className="flex items-center gap-2 lg:w-full border border-gray-300 px-5 py-2 rounded-md mb-3 mt-2">
            <input
              type="radio"
              id="generalEnquiry"
              name="typeQuery"
              value="General Enquiry"
              onChange={handleChange}
            />
            <label htmlFor="generalEnquiry" className="text-xs pb-0.5">
              General Enquiry
            </label>
          </div>
          <div className="flex items-center gap-2 lg:w-full border border-gray-300 px-5 py-2 rounded-md lg:mb-3 lg:mt-2">
            <input
              type="radio"
              id="supportRequest"
              name="typeQuery"
              value="Support Request"
              onChange={handleChange}
            />
            <label htmlFor="supportRequest" className="text-xs pb-0.5">
              Support Request
            </label>
          </div>
        </div>
        <p
          className={`text-[0.6rem] mt-1 lg:-mt-2 text-red-500 ${
            errors.typeQuery ? "block" : "hidden"
          } `}
        >
          Please select a query type
        </p>
      </div>
    </>
  );
}

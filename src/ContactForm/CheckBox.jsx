export default function CheckBox({ onChange, errors }) {
  function handleChange(e) {
    onChange(e);
  }
  return (
    <>
      <div className="mt-2.5 w-full">
        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            name="agreement"
            id="checkboxContent"
            className="accent-teal-500"
            onChange={handleChange}
          />
          <label htmlFor="checkboxContent" className="text-[0.8rem]">
            I consent to being contacted by the team *
          </label>
        </div>
        <p
          className={`text-[0.6rem] mt-1 text-red-500 ${
            errors.agreement ? "block" : "hidden"
          } `}
        >
          To submit this form, please consent to being contacted
        </p>
      </div>
    </>
  );
}

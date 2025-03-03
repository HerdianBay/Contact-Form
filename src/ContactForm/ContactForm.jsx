import { useImmer } from "use-immer";
import FieldName from "./FieldName";
import InputField from "./InputField";
import QueryType from "./QueryType";
import CheckBox from "./CheckBox";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useImmer({
    firstName: "",
    lastName: "",
    email: "",
    typeQuery: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useImmer({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((draft) => {
      draft[name] = type === "checkbox" ? checked : value;
    });
  }

  function validateForm() {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.typeQuery) newErrors.typeQuery = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }

    if (!formData.agreement) newErrors.agreement = true;

    setErrors(() => newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      toast.success(
        <div>
          <strong>✅ Message Sent!</strong>
          <br />
          <p className="mt-2 text-xs">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <section className="lg:h-screen lg:flex lg:items-center">
        <div className="container mx-auto p-6">
          <div className="w-full bg-white p-5 rounded-lg lg:w-[476px] lg:mx-auto">
            <h1 className="font-bold text-xl text-gray-900">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <FieldName
                onChange={handleChange}
                errors={errors}
                formData={formData}
              />
              <InputField
                onChange={handleChange}
                errors={errors}
                formData={formData}
                type="email"
              />
              <QueryType onChange={handleChange} errors={errors} />
              <InputField
                onChange={handleChange}
                errors={errors}
                formData={formData}
                type="message"
              />
              <CheckBox onChange={handleChange} errors={errors} />
              <Button />
            </form>
          </div>
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            icon: null,
            duration: 3000,
            style: {
              width: "500px",
              background: "#1e3a32", // Warna hijau gelap sesuai gambar
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "8px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      </section>
    </>
  );
}

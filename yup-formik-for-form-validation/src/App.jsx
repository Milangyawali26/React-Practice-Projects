import "./App.css";
import { string, object, number } from "yup";

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactFormSchema = object({
      email: string().required().email(),
      password: string().required().min(7).max(30),
      address: string().required().min(8),
      contact: number().positive().required(),
    });

    console.log("form submitted");
    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };

    const isValid = await contactFormSchema.isValid(formData);

    console.log(formData);
    console.log(isValid);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="text" name="address" placeholder="address" />
        <br />
        <input type="number" name="contact number" placeholder="contact" />
        <br />
        <input type="submit" className="bg-gray-500 font-medium text-2xl rounded-xl" />
      </form>
    </>
  );
}

export default App;

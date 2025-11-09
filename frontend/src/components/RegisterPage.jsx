import { useForm } from "react-hook-form";
import '../index.css';
import axios from "axios";


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

 
  // async function onSubmit(data) {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   console.log("Submitting the form", data);
  // }
async function onSubmit(data) {
  try {
    const response = await axios.post("http://localhost:5000/register", {
      ...data,
      source: "registered", // Mark user type
    });
    console.log("User registered:", response.data);
  } catch (error) {
    console.error("Registration error:", error.message);
  }
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h3 className="form-heading">Register Page</h3>

      {/* First Name */}
      <div className="form-group">
        <label>First Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: { value: true, message: "First name is required" },
            minLength: { value: 3, message: "Min length must be at least 3" },
            maxLength: { value: 8, message: "Max length must be at most 8" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br />

      {/* Middle Name */}
      <div className="form-group">
        <label>Middle Name:</label>
        <input {...register("middleName")} />
      </div>
      <br />

      {/* Last Name */}
      <div className="form-group">
        <label>Last Name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            required: { value: true, message: "Last name is required" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name must contain only letters",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
     <br />


      {/* Email */}
      <div className="form-group">
        <label>Email:</label>
        <input
          className={errors.email ? "input-error" : ""}
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}
      </div>
      <br />

      {/* Password */}
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className={errors.password ? "input-error" : ""}
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="error-msg">{errors.password.message}</p>
        )}
      </div>
      <br />

      {/* Submitting Message */}
      {isSubmitting && <p className="info-msg">Submitting, please wait...</p>}

      {/* Submit Button */}
      <div className="form-group">
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </div>
    </form>
  );
}

export default App;



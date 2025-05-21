import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const OtpVerification = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    // Fake OTP validation
    if (data.otp === "123456") {
      router.push("/dashboard"); // Redirect to protected route
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center  h-screen overflow-hidden">
        <div className="authImage-wrapper w-[70%]">
          <img
            src="https://mkt.cdnpk.net/web-app/media/freepik-15-2000.webp"
            alt=""
            className="img-fluid object-cover"
          />
        </div>
        <div className="authDiv-wrapper w-[30%]">
          <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
            <h2 className="text-xl font-semibold text-center">Enter OTP</h2>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              {...register("otp")}
              className="w-full p-2 border rounded-md my-4"
            />

            <button
              type="submit"
              className="cusBtn w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;

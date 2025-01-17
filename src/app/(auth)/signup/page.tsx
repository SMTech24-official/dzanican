import bg from "@/assets/images/bg.png";
import Signup from "@/components/ui/auth/Signup";

const SignupPage = () => {
  return (
    <div>
      <div
        className="h-[90vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;

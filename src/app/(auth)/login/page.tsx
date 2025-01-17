import Login from "@/components/ui/auth/Login";
import bg from "@/assets/images/bg.png";

const LoginPage = () => {
  return (
    <div>
      <div
        className="h-[90vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;

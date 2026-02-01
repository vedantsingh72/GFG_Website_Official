import Dashboard from "../components/dashboard";
import LoginForm from "../components/loginform";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      
      {/* Header */}
      <Dashboard />

      {/* Main content fills rest of screen */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black">
        
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-600/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-teal-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;

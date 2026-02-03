import EventForm from "../components/eventform";

function Admin() {
  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-gradient-to-br from-black via-gray-900 to-black
        relative overflow-hidden
      "
    >
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="relative z-10">
        <EventForm />
      </div>
    </div>
  );
}

export default Admin;

import bg from '@/assets/images/bg.png'

export default function Home() {
  return (
    <div className="h-[90vh] overflow-hidden">
      <div
        className="h-[90vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="text-white text-center">
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}

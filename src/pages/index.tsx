
export default function Home() {
  return (
    <div className={
      `
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `
    }>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
      <br />
      <h2 className="text-lg text-gray-700">This is a simple page using Tailwind CSS.</h2>
    </div>
  );
}
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-gradient">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">🐱‍💻 Auth</h1>
        <p className="text-white text-lg">A simple authentication service app built 
          <br /> with <a className="text-blue-400 hover:underline" href="https://authjs.dev/" target="_blank">
            Next Auth V5</a> by <a className="text-blue-400 hover:underline" href="https://github.com/iEarlG" target="_blank">EARL</a>.
        </p>
        <div>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
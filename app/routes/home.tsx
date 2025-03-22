import Sculpture from "@/components/sculpture";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1>Home</h1>
      <Sculpture />
      <Profile name="John Doe" email="john@doe.com" />
    </main>
  );
}

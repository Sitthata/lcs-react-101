import Profile from "@/components/profile";
import { Welcome } from "@/components/welcome";
import Backpack from "@/components/backpack";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1>Home</h1>
      <Welcome />
      <Profile name="First" email="john@doe.com" />
      <Backpack />
    </main>
  );
}

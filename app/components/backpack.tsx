type BackpackItem = {
  name: string;
  isPacked: boolean;
};

const items: BackpackItem[] = [
  { name: "Sleeping bag", isPacked: false },
  { name: "Laptop", isPacked: true },
  { name: "Jacket", isPacked: true },
];

export default function Backpack() {
  return (
    <div>
      <h1>Backpack</h1>
      <ul className="list-none flex flex-col">
        {items.map((item) => (
          <BackpackItem key={item.name} name={item.name} isPacked={item.isPacked} />
        ))}
      </ul>
    </div>
  );
}

function BackpackItem({ name, isPacked }: BackpackItem) {
  return (
    <li className="inline-flex gap-2">
      {isPacked ? "✅" : "❌"}
      <h1>{name}</h1>
    </li>
  );
}

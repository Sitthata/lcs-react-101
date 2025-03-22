import sculptureList from '@/data/sculpture';

export default function Gallery() {
  let index = 0;

  const sculpture = sculptureList[index];

  return (
    <>
      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <p>{sculpture.description}</p>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

const Card = ({nombre, info, img, link})  => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-36 object-cover"
        src={img}
        alt="green iguana"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{nombre}</h5>
        <p className="text-gray-600 text-sm">
            {info}
        </p>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <button className="text-sm text-blue-600 hover:underline">
            <a href={link}>
                Wiki
            </a>
        </button>
        <button className="text-sm text-blue-600 hover:underline">Learn More</button>
      </div>
    </div>
  );
}

export default Card


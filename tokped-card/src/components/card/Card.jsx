const Card = (props) => {
  const { link, images, title, price, city, cashback } = props.isi;
  return (
    <div className="w-56 shadow-md rounded-md h-96 relative">
      <a href={link}>
        <img src={images} alt="img" className="rounded-t-md" />

        <div className="p-2 space-y-1 -tracking-wide">
          <div className="text-title leading-4 line-clamp-2">{title}</div>

          <div className="font-bold text-price">Rp{price}</div>

          {cashback === true && (
            <button className="bg-green-200 p-1 text-green-600 text-tokped rounded-sm font-extrabold">
              <b className="">Cashback</b>
            </button>
          )}

          <div className="text-city font-medium text-gray-500 flex items-center">
            <img src="https://pbs.twimg.com/media/E2txKPEUcAEyjMB?format=jpg&name=small" alt="" className="w-4 mr-1 bg-none" />
            {city}
          </div>
        </div>
      </a>

      <button className="absolute bottom-1 right-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Card;

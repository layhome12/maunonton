import Image from "next/image";

const CardMovie = ({ options }) => {
  return (
    <div className="card px-1 cursor-pointer">
      <figure className="!relative rounded-[15px] h-[260px] lg:h-[285px]">
        <Image
          className="w-full"
          src={options.image}
          alt={options.image}
          fill
          sizes="100%"
        />
      </figure>
      <div className="card-body justify-end p-2 gap-1">
        <ul className="flex gap-3 text-[13px] text-[#eaeaea] font-thin">
          <li className="text-warning">{options.genre}</li>
          <li>{options.year}</li>
        </ul>
        <h2 className="card-title font-normal text-[16px] text-white line-clamp-2">
          {options.name}
        </h2>
      </div>
    </div>
  );
};

export default CardMovie;

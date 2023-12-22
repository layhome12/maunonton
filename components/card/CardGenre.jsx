import "@/assets/css/components/cards.css";
import Image from "next/image";

const CardGenre = ({ options }) => {
  return (
    <div className="card card-genre cursor-pointer shadow-xl image-full h-[130px] md:h-[175px]">
      <figure className="!relative">
        <Image
          className="w-full"
          src={options.image}
          alt={options.image}
          fill
          sizes="100%"
        />
      </figure>
      <div className="card-body justify-end p-6">
        <div className="flex justify-between items-end gap-4">
          <div className="name">
            <h3 className="text-[17px] lg:text-[20px] text-white">
              {options.label}
            </h3>
          </div>
          <div className="ammout">
            <span className="badge badge-lg rounded-[10px] bg-opacity-90 border-0 text-white text-[14px] lg:text-[16px]">
              {options?.ammount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGenre;

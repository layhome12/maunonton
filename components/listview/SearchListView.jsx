import Image from "next/image";
import FeatherIcon from "../icons/FeatherIcon";
import Link from "next/link";

const SearchListView = ({ list }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((val, key) => {
        return (
          <div key={key} className="search-items grid grid-cols-3 gap-4">
            <figure className="!relative h-[175px]">
              <Image
                className="w-full rounded-[12px]"
                src={val.image}
                alt={val.image}
                fill
                sizes="100%"
              />
            </figure>
            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <div className="title mb-2">
                  <Link href={`/play/${val.id}`} className="line-clamp-2 text-[17px] font-medium hover:text-primary transition duration-300">
                    {val.name}
                  </Link>
                </div>
                <div className="genre text-[13px]">
                  <span className="font-medium">Genre</span> : Action, Anime,
                  Sci-Fi
                </div>
                <div className="rating text-[13px]">
                  <span className="font-medium">Rating&nbsp;</span> : {val.rating}
                </div>
                <div className="year text-[13px]">
                  <span className="font-medium">Tahun</span> : {val.year}
                </div>
              </div>
              <div>
                <Link
                  href={`/play/${val.id}`}
                  className="btn btn-secondary btn-sm text-[14px] font-medium"
                >
                  <FeatherIcon icons={"play"} width={16} height={16} /> Putar
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchListView;

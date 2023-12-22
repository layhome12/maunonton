import FeatherIcon from "@/components/icons/FeatherIcon";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment-send mt-5 flex items-start gap-5">
        <div className="avatar">
          <div className="w-[56px] mask mask-squircle">
            <Image
              className="w-full"
              src="/player/user-img.jpeg"
              alt={"user-img.jpeg"}
              fill
              sizes="100%"
            />
          </div>
        </div>
        <div className="grow">
          <div className="px-1">
            <input
              type="text"
              placeholder="Tambahkan komentar.."
              className="input w-full input-comment"
            />
          </div>
          <div className="flex justify-between mt-2">
            <button className="btn btn-circle btn-ghost btn-sm">
              <FeatherIcon icons={"smile"} width={20} />
            </button>
            <div>
              <button className="btn btn-sm btn-neutral font-normal mx-1">
                Batal
              </button>
              <button className="btn btn-sm btn-primary font-normal mx-1">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-list mt-5">
        <div className="card bg-neutral shadow-xl">
          <div className="card-body p-4">
            <div className="user-info flex gap-4">
              <div className="avatar">
                <div className="w-[50px] mask mask-squircle">
                  <Image
                    className="w-full"
                    src="/player/user-img.jpeg"
                    alt={"user-img.jpeg"}
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
              <div className="grow profile-info">
                <h4 className="text-[15px] text-white">Jane Doe</h4>
                <span className="text-[11px]">5 jam yang lalu</span>
              </div>
            </div>
            <div className="user-comment mt-3 text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="user-action mt-1 flex gap-3">
              <div className="flex items-center gap-1">
                <button className="btn btn-circle btn-ghost btn-sm">
                  <FeatherIcon icons={"thumbs-up"} width={20} height={20} />
                </button>
                <span className="text-[15px]">20</span>
              </div>
              <button className="btn btn-circle btn-ghost btn-sm">
                <FeatherIcon icons={"thumbs-down"} width={20} height={20} />
              </button>
              <button className="btn btn-ghost btn-active btn-sm font-normal">
                Balas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

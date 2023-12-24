import logo from "@/assets/image/logo/logo.png";
import FeatherIcon from "@/components/icons/FeatherIcon";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('/player/player-cover.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card bg-base-100 shadow-xl w-[22rem] md:w-[25rem]">
          <div className="card-body">
            <div className="logo !relative h-[70px]">
              <Image
                src={logo}
                alt="logo.jpg"
                sizes="100%"
                priority
                fill
                className="object-contain"
              />
            </div>
            <div>
              <label className="form-control w-full my-1">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-neutral rounded-[15px] text-[15px]"
                />
              </label>
              <label className="form-control w-full my-1">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full bg-neutral rounded-[15px] text-[15px]"
                />
              </label>
              <div className="form-control my-2">
                <label className="cursor-pointer label justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-secondary" />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <div className="mt-5">
                <button className="btn btn-info font-medium rounded-[15px] w-full uppercase">
                  Sign In
                </button>
              </div>
            </div>
            <div className="divider text-[13px] my-2">OR</div>
            <div className="flex gap-3 justify-center">
              <button className="btn btn-neutral btn-square">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 9 17"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z"></path>
                </svg>
              </button>
              <button className="btn btn-neutral btn-square">
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 512 512"
                >
                  <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

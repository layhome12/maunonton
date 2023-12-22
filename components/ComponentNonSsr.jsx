import dynamic from "next/dynamic";
import FeatherIcon from "./icons/FeatherIcon";

const ComponentNonSsr = ({ children }) => {
  return <>{children}</>;
};

const LoadingNonSsr = () => {
  return (
    <div className="w-full h-[180px] flex items-center justify-center">
      <div className="loading-csr flex flex-col items-center">
        <div className="w-[38px] mb-2">
          <FeatherIcon icons={"alert-triangle"} width={38} height={38} />
        </div>
        <progress className="progress w-40 mb-2"></progress>
        <small>Initializing media player</small>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ComponentNonSsr), {
  ssr: false,
  loading: LoadingNonSsr,
});

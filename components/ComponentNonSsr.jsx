import dynamic from "next/dynamic";

const ComponentNonSsr = ({ children }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ComponentNonSsr), {
  ssr: false,
});

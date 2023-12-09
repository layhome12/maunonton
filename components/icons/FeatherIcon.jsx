import feather from "feather-icons";
const FeatherIcon = ({ icons, width = 24, height = 0 }) => {
  return (
    <>
      {height != 0 ? (
        <span
          dangerouslySetInnerHTML={{
            __html: feather.icons[icons].toSvg({
              width: width,
              height: height,
            }),
          }}
        ></span>
      ) : (
        <span
          dangerouslySetInnerHTML={{
            __html: feather.icons[icons].toSvg({
              width: width,
            }),
          }}
        ></span>
      )}
    </>
  );
};

export default FeatherIcon;
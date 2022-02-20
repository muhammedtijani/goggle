import { Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Oval type="Puff" color="#00bfff" height={550} width={80} />
    </div>
  );
};

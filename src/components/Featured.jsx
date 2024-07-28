import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Featured() {
  return (
    <div className="flex flex-col shadow-md featured basis-1/3 shadow-slate-400 p-7">
      <div className="flex items-center justify-between w-full text-gray-400 top">
        <h1 className="text-xl font-semibold">Total Revenue</h1>
        <MoreVert className="text-sm" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-5 bottom">
        <div className="featured-chart w-[150px] h-[150px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="text-xl font-semibold text-gray-400 title">
          Total sales made today
        </p>
        <p className="text-4xl amount">$420</p>
        <p className="text-[16px] text-center text-gray-400 sm:text-lg desc">
          Previous transactions processing. Last payments many not be included.
        </p>
        <div className="flex items-center justify-between w-full mt-1 summary">
          <div className="text-center item">
            <div className="flex justify-center text-[15px] text-gray-400 sm:text-xl item-title">
              Target
            </div>
            <div className="flex items-center mt-2 item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="text-sm sm:text-lg result-amount">$12.4k</div>
            </div>
          </div>
          <div className="text-center item">
            <div className="flex justify-end text-[15px] text-gray-400 sm:text-xl item-title ">
              Last Week
            </div>
            <div className="flex items-center mt-2 item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="text-sm sm:text-lg result-amount">$12.4k</div>
            </div>
          </div>
          <div className="text-center item">
            <div className="flex justify-center text-[15px] text-gray-400 sm:justify-end sm:text-xl item-title ">
              Last Month
            </div>
            <div className="flex items-center mt-2 item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="text-sm sm:text-lg result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

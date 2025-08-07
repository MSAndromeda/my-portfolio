import { RingLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="h-screen dark:text-slate-100 text-slate-800 flex justify-center items-center">
      <RingLoader
        loading={true}
        color="currentColor"
        size={65}
        speedMultiplier={1.5}
        aria-label="Loading..."
      />
    </div>
  );
}

// components/LoadingSpinner.jsx
const LoadingSpinner = ({ label = 'Loading...' }) => (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col items-center gap-3 animate-pulse">
        <div className="w-10 h-10 border-4 border-amber-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-sm text-zinc-400">{label}</p>
      </div>
    </div>
  );
  
  export default LoadingSpinner;
  
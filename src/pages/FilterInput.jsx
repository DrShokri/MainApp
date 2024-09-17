export default function FilterInput({ value, onChange, children }) {
  return (
    <>
      <span className="text-xl font-['rokhMedum] text-[#1c7ed6]">
        {children}
      </span>

      <input
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        type="text"
        className="bg-[#e7f5ff] h-[50px] w-1/2 rounded-rounded-b-2xl text-3xl text-[#868e96] pr-2"
      />
    </>
  );
}

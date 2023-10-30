export default function Input({ type, placeholder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      className=" bg-white/90 p-4 border-2 border-b1/70 rounded-xl md:min-w-[300px] min-w-[200px] outline-none "
    />
  );
}

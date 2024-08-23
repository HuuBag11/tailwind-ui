interface InputProps {
  title?: string;
  placeholder?: string;
  type: "text" | "textarea";
}

export const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="font-semibold text-[14px] mb-1">{title}</label>
      {type === "text" && (
        <input
          id={title}
          type="text"
          className="border p-4 text-[16px] h-[56px] outline-none rounded-[6px] border-[#EEF2FF]"
          placeholder={placeholder}
        />
      )}

      {type === "textarea" && (
        <textarea
          id={title}
          className="border p-4 text-[16px] min-h-[80px] outline-none rounded-[6px] border-[#EEF2FF]"
          rows={4}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

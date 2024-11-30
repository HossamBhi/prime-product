import { Input } from "@/components/ui/input";
import { forwardRef } from "react";

const SearchInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex w-full max-w-xl max-h-[44px] items-center bg-primary px-2 py-1.5 rounded-[15px]">
        <Input
          placeholder="البحث"
          className={`bg-[#E4A4FB] border-none shadow-none placeholder:text-[#8B4AA3] text-[#8B4AA3] outline-none ${className}`}
          ref={ref}
          {...props}
        />
        <img src={"./icons/search_icon.png"} className="size-7" />
      </div>
    );
  }
);

export default SearchInput;

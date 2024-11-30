import {
  IconBell,
  IconLanguage,
  IconStar,
  IconSun,
  IconUserCircle,
} from "@tabler/icons-react";
import InputWithIcon from "./SearchInput";

const PageHeader = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <InputWithIcon placeholder="البحث" />
      <div className="flex items-center space-x-4">
        <IconLanguage size={20} />
        <IconSun size={20} />
        <IconStar size={20} />
        <IconBell size={20} />
        <IconUserCircle size={20} />
      </div>
    </div>
  );
};

export default PageHeader;

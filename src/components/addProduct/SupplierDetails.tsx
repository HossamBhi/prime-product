import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormItemWithIcon = ({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon: string;
  className?: HTMLDivElement["className"];
}) => {
  return (
    <div className={"flex flex-row gap-3 items-center " + className}>
      {icon && <img src={icon} className="size-[25px]" />}
      {children}
    </div>
  );
};

const SupplierDetails = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="pl-[120px]">
        <CardTitle className="text-[#8B4AA3] flex flex-row justify-between items-center">
          بيانات الموردين
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <FormItemWithIcon icon={"./icons/category_svgrepo.com.svg"}>
              <Select>
                <SelectTrigger
                  id="framework"
                  className="text-[#959595] rounded-[10px] flex-row-reverse border-[#8B4AA350] outline-none text-[12px]"
                >
                  <SelectValue placeholder="اختيار المورد " />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              <p
                className="text-[10px] text-[#959595] w-[120px]"
                onClick={() => alert("hello")}
              >
                + اضف مورد جديد
              </p>
            </FormItemWithIcon>
            <div className="pl-[96px] w-full items-center gap-4 grid">
              <FormItemWithIcon
                icon={
                  "./icons/store-inventory-inventory-stock-supply_svgrepo.com.svg"
                }
              >
                <Input
                  placeholder="باركود المورد"
                  className="border-[#8B4AA350] rounded-[10px]"
                />
              </FormItemWithIcon>
              <div className="flex flex-row gap-1 items-center px-[37px]">
                <img
                  src="./icons/add-circle_svgrepo.com.svg"
                  className="size-[30px]"
                />
                <p className="text-[12px] text-[#8B4AA3]">اختيار مورد اضافي</p>
              </div>
              <div className="items-center justify-start flex flex-row px-[37px] gap-4">
                <p className="text-[#959595] px-4 py-[2px] text-[12px]">
                  لمشاهدة الموردين
                </p>
                <Button className="bg-[#E4A4FB] rounded-[15px] text-[12px] px-12 py-4">
                  استعراض الموردين
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SupplierDetails;

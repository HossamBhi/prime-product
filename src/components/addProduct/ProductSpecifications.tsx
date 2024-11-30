import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import FormItemWithIcon from "./FormItemWithIcon";

const ProductSpecifications = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Card className="rounded-none">
      <CardHeader className="pl-[120px]">
        <CardTitle className="text-[#8B4AA3] flex flex-row justify-between items-center">
          تعريف مواصفات المنتج
          <div className="flex flex-col gap-2 items-center text-[10px]">
            <Switch checked={checked} onCheckedChange={setChecked} />
            متوفر
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <FormItemWithIcon icon={"./icons/category_svgrepo.com.svg"}>
            <Select>
              <SelectTrigger
                id="framework"
                className="text-[#959595] rounded-[10px] flex-row-reverse border-[#8B4AA350] outline-none text-[12px]"
              >
                <SelectValue placeholder="اختيار المواصفة" />
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
              + اضف مواصفة جديدة
            </p>
          </FormItemWithIcon>
          <FormItemWithIcon icon={"./icons/product-required_svgrepo.com.svg"}>
            <Select>
              <SelectTrigger
                id="framework"
                className="text-[#959595] rounded-[10px] flex-row-reverse border-[#8B4AA350] outline-none text-[12px]"
              >
                <SelectValue placeholder="اختيار القيم" />
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
              اختيار متعدد
            </p>
          </FormItemWithIcon>
          <div className="pl-[96px] w-full items-center gap-4 grid">
            <FormItemWithIcon icon={"./icons/stock_svgrepo.com.svg"}>
              <Input
                placeholder="الكمية الافتتاحية"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-[#FF0000] text-[10px]">
        يجب ادخال معلومات اللغة الانجليزية لانك اخترت لغتين للعرض
      </CardFooter>
    </Card>
  );
};

export default ProductSpecifications;

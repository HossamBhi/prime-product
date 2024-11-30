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
import { Textarea } from "../ui/textarea";
import FormItemWithIcon from "./FormItemWithIcon";

const MainProductDetails = () => {
  return (
    <Card className="rounded-none h-full">
      <CardHeader className="pl-[120px]">
        <CardTitle className="text-[#8B4AA3] flex flex-row justify-between items-center">
          بيانات المنتج الرئيسية
          <div className="text-sm relative flex flex-row">
            <p className="bg-primary px-2 py-1 text-white rounded-full absolute left-6">
              عــربي
            </p>
            <p className="bg-[#8B4AA3] px-2 py-1 text-white rounded-full">
              English
            </p>
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
                <SelectValue placeholder="اختيار التصنيف" />
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
              + اضف تصنيف جديد{" "}
            </p>
          </FormItemWithIcon>
          <div className="pl-[96px] w-full items-center gap-4 grid">
            <FormItemWithIcon icon={"./icons/write_svgrepo.com.svg"}>
              <Input
                placeholder="اسم المنتج"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
            <FormItemWithIcon icon={"./icons/write_svgrepo.com.svg"}>
              <Input
                placeholder="رمز المنتج SKU"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
            <FormItemWithIcon icon={"./icons/barcode_svgrepo.com.svg"}>
              <Input
                placeholder="باركود المنتج "
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
            <FormItemWithIcon
              icon={"./icons/description_svgrepo.com.svg"}
              className="!items-start"
            >
              <Textarea
                placeholder="وصف مختصر"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
            <FormItemWithIcon
              icon={"./icons/description_svgrepo.com.svg"}
              className="!items-start"
            >
              <Textarea
                placeholder="الوصف الكامل"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
          </div>
          <FormItemWithIcon icon={"./icons/language_svgrepo.com.svg"}>
            <Select>
              <SelectTrigger
                id="framework"
                className="text-[#959595] rounded-[10px] flex-row-reverse border-[#8B4AA350] outline-none text-[12px]"
              >
                <SelectValue placeholder="لغات العرض" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[8px] text-[#959595] w-[120px]">
              يمكنك اختيار اكثر من لغة
            </p>
          </FormItemWithIcon>
        </div>
      </CardContent>
      <CardFooter className="text-[#FF0000] text-[10px]">
        يجب ادخال معلومات اللغة الانجليزية لانك اخترت لغتين للعرض
      </CardFooter>
    </Card>
  );
};

export default MainProductDetails;

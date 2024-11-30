import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FormItemWithIcon from "./FormItemWithIcon";

const SEODetails = () => {
  return (
    <Card className="rounded-none h-full border-[#8B4AA3] rounded-tr-[15px] rounded-bl-[15px] shadow-none">
      <CardHeader className="pl-[120px]">
        <CardTitle className="text-[#8B4AA3] flex flex-row justify-between items-center">
          تعريفات محركات البحث
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-8 grid-cols-3 items-start">
          <div className="col-span-1 flex-1 h-full flex-col gap-6 flex">
            <FormItemWithIcon icon={"./icons/url-1423_svgrepo.com.svg"}>
              <Input
                placeholder="اسم الصفحة"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
            <FormItemWithIcon icon={"./icons/tags_svgrepo.com.svg"}>
              <Input
                placeholder="Meta Tags"
                className="border-[#8B4AA350] rounded-[10px]"
              />
            </FormItemWithIcon>
          </div>

          <FormItemWithIcon
            icon={"./icons/search-alt_svgrepo.com.svg"}
            className="!items-start col-span-1"
          >
            <Textarea
              placeholder="الكلمات المفتاحية"
              className="border-[#8B4AA350] rounded-[10px] h-[100px]"
            />
          </FormItemWithIcon>
          <FormItemWithIcon
            icon={"./icons/description_svgrepo.com.svg"}
            className="!items-start col-span-1"
          >
            <Textarea
              placeholder="وصف التصنيف"
              className="border-[#8B4AA350] rounded-[10px] h-[100px]"
            />
          </FormItemWithIcon>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEODetails;

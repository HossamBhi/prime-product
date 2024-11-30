import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

const StockProduct = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="pl-[120px]">
        <CardTitle className="text-[#8B4AA3] flex flex-row justify-between items-center">
          بيانات المخزون
          <div className="flex flex-col gap-2 items-center text-[10px]">
            <Switch />
            متوفر
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="pl-[96px] w-full items-center gap-4 grid">
            <div className="flex flex-row gap-3 items-center">
              <img
                src={"./icons/stock_svgrepo.com.svg"}
                className="size-[25px]"
              />
              <Input
                placeholder="الكمية الافتتاحية"
                className="rounded-[10px]"
              />
              <Input placeholder="الحد الادنى" className="rounded-[10px]" />
            </div>
          </div>
          <div className="items-center justify-start flex flex-row px-[60px] gap-8">
            <p className="bg-[#8B4AA3] text-white rounded-full px-4 py-[2px] flex flex-col text-[22px] justify-center items-center">
              52
              <span className="text-[#E4A4FB] text-[12px] shadow-sm">قطعة</span>
            </p>
            <Button className="bg-[#E4A4FB] rounded-[15px] text-[12px] px-12 py-4">
              استعراض المخازن
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-[#FF0000] text-[10px]">
        لايمكن التعديل على الكمية الافتتاحية
      </CardFooter>
    </Card>
  );
};

export default StockProduct;

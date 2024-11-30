const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[100px]">
      <div className="flex flex-row w-full justify-start px-[15px]">
        <div className="flex flex-row gap-4 mb-[20px]">
          <button className="bg-white border border-[#8B4AA3] text-[#8B4AA3] text-[12px] flex justify-center items-center flex-col px-5 py-2 rounded-md">
            <img src="./icons/Vector.svg" className="size-[30px]" />
            حفظ
          </button>
          <button className="bg-white border border-[#8B4AA3] text-[#8B4AA3] text-[12px] flex justify-center items-center flex-col px-5 py-2 rounded-md">
            <img src="./icons/print_svgrepo.com.svg" className="size-[30px]" />
            طباعة
          </button>
          <button className="bg-white border border-[#8B4AA3] text-[#8B4AA3] text-[12px] flex justify-center items-center flex-col px-2 py-2 rounded-md">
            <img
              src="./icons/barcode_svgrepo.com.svg"
              className="size-[30px]"
            />
            طباعة باركود
          </button>
        </div>
        <button className="bg-[#8B4AA3] text-white px-2 py-2 rounded-md mx-20 mb-[20px]">
          <img src="./icons/delete_svgrepo.com.svg" className="size-[50px]" />
        </button>
        <div className="flex flex-row gap-1 self-end mr-auto items-center px-[15px] mb-2">
          <img src="./icons/add-circle-color.svg" className="size-[30px]" />
          <p className="text-[12px] text-[#8B4AA3]">اضافة فواتير شراء </p>
        </div>
      </div>
      <div className="bg-[#8B4AA3] w-full h-[60px] rounded-t-[20px]"></div>
    </div>
  );
};

export default Footer;

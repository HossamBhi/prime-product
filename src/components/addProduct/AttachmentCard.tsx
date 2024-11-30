const SelectedImage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <img src="./icons/active-image.svg" className="size-[60px]" />
      <img src="./icons/delete.svg" className="size-[20px]" />
    </div>
  );
};

const AttachmentCard = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pr-[20px] pl-[50px] pb-[90px] pt-[14px]">
        <div className="flex flex-col gap-12 items-start justify-center">
          <div className="flex flex-row gap-3 items-center justify-start">
            <img src="./icons/upload_svgrepo.com.svg" className="size-[25px]" />
            <p className="text-[12px] text-[#959595]">ارفع الصورة</p>
          </div>
          <p className="text-[10px] text-[#8B4AA3]">تم رفع الصورة بنجاح</p>
        </div>
        <img
          src="./icons/image-missing_svgrepo.com.svg"
          className="size-[209px]"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-[22px] items-end justify-end">
        <SelectedImage />
        <SelectedImage />
        <SelectedImage />
      </div>
    </div>
  );
};

export default AttachmentCard;

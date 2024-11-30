import AttachmentCard from "@/components/addProduct/AttachmentCard";
import Footer from "@/components/addProduct/Footer";
import MainProductDetails from "@/components/addProduct/MainProductDetails";
import ProductSpecifications from "@/components/addProduct/ProductSpecifications";
import SEODetails from "@/components/addProduct/SEODetails";
import StockProduct from "@/components/addProduct/StockProduct";
import SupplierDetails from "@/components/addProduct/SupplierDetails";
import { Layout } from "@/components/custom/layout";
import PageHeader from "@/components/custom/PageHeader";

const AddProduct = () => {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header className="flex flex-col pb-0">
        <PageHeader />
        <div className="flex items-center justify-between w-full pt-5">
          <h1 className="text-[#49296A] text-[20px]">اضافة منتج جديد</h1>
          <div className="text-sm relative flex flex-row w-[140px] h-[30px]">
            <p className="bg-[#A3D936] px-2 py-1 text-white rounded-full top-0 bottom-0 text-center absolute w-[110px] right-0">
              مفعل
            </p>
            <p className="bg-[#ACACAC] w-full px-2 py-1 text-white rounded-full"></p>
          </div>
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body className="pt-[12px] pb-0">
        <div className="space-y-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"></div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <div className="col-span-1 lg:col-span-3 flex-1 h-full">
              <MainProductDetails />
            </div>
            <div className="flex flex-col col-span-1 lg:col-span-3 gap-8">
              <StockProduct />
              <SupplierDetails />
            </div>
            <div className="col-span-1 lg:col-span-3 flex-1 h-full">
              <ProductSpecifications />
            </div>
            <div className="col-span-1 lg:col-span-3 flex-1 h-full">
              <AttachmentCard />
            </div>
            <div className="col-span-1 lg:col-span-6">
              <SEODetails />
            </div>
            <div className="col-span-1 lg:col-span-6">
              <Footer />
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default AddProduct;

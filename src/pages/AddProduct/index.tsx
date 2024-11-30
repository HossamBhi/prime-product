import MainProductDetails from "@/components/addProduct/MainProductDetails";
import ProductSpecifications from "@/components/addProduct/ProductSpecifications";
import StockProduct from "@/components/addProduct/StockProduct";
import SupplierDetails from "@/components/addProduct/SupplierDetails";
import { Layout } from "@/components/custom/layout";
import PageHeader from "@/components/custom/PageHeader";

const AddProduct = () => {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <PageHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className="space-y-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"></div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <div className="col-span-3 flex-1 h-full">
              <MainProductDetails />
            </div>
            <div className="flex flex-col col-span-3 gap-8">
              <StockProduct />
              <SupplierDetails />
            </div>
            <div className="col-span-3 flex-1 h-full">
              <ProductSpecifications />
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default AddProduct;

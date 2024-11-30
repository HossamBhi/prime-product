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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"></div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
            {/* <LatestUsers />
            <LatestAds /> */}
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default AddProduct;

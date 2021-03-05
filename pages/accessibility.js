import dynamic from 'next/dynamic'
const Layout = dynamic(() => import("../components/Layouts/Layout"), {
  ssr: false,
});
const Heading = dynamic(() => import("../components/Heading"), {
  ssr: false,
});
import { projectName } from "../constants/projectSettings";

const Accessibility = () => {
  return (
    <Layout headerVersions={["bg-dark"]} fixed={true} headerTheme="black">
      <div className="c-accessibility__page-title">
        <Heading
          versions={["large"]}
          parentClass="c-accessibility"
          style={{
            fontFamily: "futuraBT-medium",
            fontSize: "32px",
            fontWeight: 500,
            opacity: 0.9,
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          Website accessibility
        </Heading>
      </div>
      <div className="c-accessibility__content">
        <Heading
          className="c-accessibility__content--heading"
          style={{
            fontFamily: "futuraBT-medium",
            fontSize: "20px",
            fontWeight: 500,
            color: "#000000",
            textTransform: "uppercase",
            marginBottom: 0,
          }}
        >
          Welcome to CBD {projectName}
        </Heading>
        <div className="c-accessibility__content--content-div">
          {projectName} LLC, a Delaware limited liability company d/b/a CBD{" "}
          {projectName} collectively referred to in this privacy policy as “CBD
          {projectName},” the “Company” or sometimes “we” or “us” or “our”),
          operates the website located at the URL www.CBDbene.com (together with
          any other website or applications branded as CBD {projectName}{" "}
          (collectively, the “Website”). CBD bene is committed to making our
          website accessible to all our customers. We have been making changes
          to improve website accessibility and will continue to monitor and make
          improvements going forward. If you would like to send us feedback
          about our website, please contact us using the email: <a
                style={{ color: "black", fontWeight: "bold" }}
                href="mailto:customerservice@cbdbene.com"
              >
                customerservice@cbdbene.com
              </a>
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;

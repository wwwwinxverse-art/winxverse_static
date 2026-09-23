import CloudMigration from "../components/Services/CloudMigration";
import LegacySystemModernization from "../components/Services/LegacySystemModernization";
import MaintenanceAndSupport from "../components/Services/MaintenanceAndSupport";
import MVPDevelopment from "../components/Services/MVPDevelopment";
import PostLaunchGrowth from "../components/Services/PostLaunchGrowth";
import ServiceContent from "../components/Services/ServiceContent";
import ServiceHeader from "../components/Services/ServiceHeader";
import SoftwareConsulting from "../components/Services/SoftwareConsulting";
import ThirdPartyIntegrations from "../components/Services/ThirdPartyIntegrations";
import UIUXTransformation from "../components/Services/UIUXTransformation";

const Services = () => {
  return (
    <>
      <ServiceHeader />
      <ServiceContent />
      <MVPDevelopment />
      <LegacySystemModernization />
      <ThirdPartyIntegrations />
      <UIUXTransformation />
      <SoftwareConsulting />
      <CloudMigration />
      <MaintenanceAndSupport />
      <PostLaunchGrowth />

    </>
  );
};

export default Services;


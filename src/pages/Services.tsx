import CloudMigration from "../components/Services/CloudMigration";
import LegacySystemModernization from "../components/Services/LegacySystemModernization";
import MaintenanceAndSupport from "../components/Services/MaintenanceAndSupport";
import MVPDevelopment from "../components/Services/MVPDevelopment";
import ServiceContent from "../components/Services/ServiceContent";
import ServiceHeader from "../components/Services/ServiceHeader";
import SoftwareConsulting from "../components/Services/SoftwareConsulting";

const Services = () => {
  return (
    <>
      <ServiceHeader />
      <ServiceContent />
      <MVPDevelopment />
      <LegacySystemModernization />
      <SoftwareConsulting />
      <CloudMigration />
      <MaintenanceAndSupport />

    </>
  );
};

export default Services;


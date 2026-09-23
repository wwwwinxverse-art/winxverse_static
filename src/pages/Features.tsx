import AdvancedFilters from "../components/Features/AdvancedFilters";
import BackupRecovery from "../components/Features/BackupRecovery";
import CustomWorkflows from "../components/Features/CustomWorkflows";
import DigitalApprovalSystem from "../components/Features/DigitalApprovalSystem";
import DocumentManagement from "../components/Features/DocumentManagement";
import FaceRecognition from "../components/Features/FaceRecognition";
import FeaturesContent from "../components/Features/FeaturesContent";
import FeaturesHeader from "../components/Features/FeaturesHeader";
import IntelligentSearch from "../components/Features/IntelligentSearch";
import LocationBasedFeatures from "../components/Features/LocationBasedFeatures";
import MultiTenantArchitecture from "../components/Features/MultiTenantArchitecture";
import OneClickAutomation from "../components/Features/OneClickAutomation";
import QRBasedSolutions from "../components/Features/QRBasedSolutions";
import RealTimeCollaboration from "../components/Features/RealTimeCollaboration";
import SmartDashboard from "../components/Features/SmartDashboard";
import SubscriptionManagement from "../components/Features/SubscriptionManagement";

export default function Features() {
    return (
        <>
           <FeaturesHeader />
           <SmartDashboard />
           <OneClickAutomation />
           <IntelligentSearch />
           <AdvancedFilters />
           <CustomWorkflows />
           <DigitalApprovalSystem />
           <MultiTenantArchitecture />
           <LocationBasedFeatures />
           <SubscriptionManagement />
           <QRBasedSolutions />
           <FaceRecognition />
           <DocumentManagement />
           <BackupRecovery />
           <RealTimeCollaboration />
           <FeaturesContent />
        </>
    )
}
import BaseTable from "@/components/custom-ui/BaseTable";
import LoginPage from "@/components/template-page/LoginPage";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      {/* <div className="w-full mx-auto max-w-7xl p-4 text-center "> */}
      <div className="flex flex-col gap-4 w-full h-full">
        <LoginPage />
      </div>
      {/* </div> */}
    </div>
  );
};
export default HomePage;

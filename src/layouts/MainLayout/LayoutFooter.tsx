import config from "@/config";

export const LayoutFooter = () => {
  return (
    <footer>
      <div className="print-show">
        <p>{config.APP_FULL_NAME}</p>
      </div>
    </footer>
  );
};

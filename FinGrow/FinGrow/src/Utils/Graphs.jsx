import { useEffect } from "react";

const FinlogixWidget = () => {
  useEffect(() => {
    // Load the Finlogix script dynamically
    const script = document.createElement("script");
    script.src = "https://widget.finlogix.com/Widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Widget) {
        window.Widget.init({
          widgetId: "95141abf-e721-4343-a984-c0a41edbc66e",
          type: "SingleSymbol",
          language: "en",
          showBrand: true,
          isShowTradeButton: true,
          isShowBeneathLink: true,
          isShowDataFromACYInfo: true,
          symbolName: "Apple",
          withButton: false,
          isAdaptive: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="finlogix-container"></div>;
};

export default FinlogixWidget;

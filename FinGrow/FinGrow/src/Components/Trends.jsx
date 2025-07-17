import React, { useEffect } from "react";
import SimpleMouseFollower from "./SimpleMouseFollower";

const TradingViewWidgets = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector(`script[src="https://widget.finlogix.com/Widget.js"]`)) {
      const script = document.createElement("script");
      script.src = "https://widget.finlogix.com/Widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Widget) {
          const symbols = [
            { id: "83", name: "INDIA50", icon: "fas fa-chart-line" },
            { id: "20273", name: "HDFC Bank", icon: "fas fa-university" },
            { id: "20281", name: "ICICI Bank", icon: "fas fa-piggy-bank" },
            { id: "20070", name: "Infosys", icon: "fas fa-laptop-code" },
            { id: "20199", name: "AXIS Capital", icon: "fas fa-building" },
            { id: "10029", name: "Microsoft", icon: "fab fa-microsoft" },
            { id: "66", name: "BTC/USD", icon: "fab fa-bitcoin" },
            { id: "20317", name: "Reliance Steel", icon: "fas fa-industry" },
            { id: "10007", name: "Apple", icon: "fab fa-apple" },
            { id: "19", name: "EUR/USD", icon: "fas fa-euro-sign" }
          ];

          window.Widget.init({
            widgetId: "720e589b-b9f1-40f8-904d-79ecc0ff2d18",
            type: "StripBar",
            language: "en",
            symbolPairs: symbols.map(sym => ({
              symbolId: sym.id,
              symbolName: sym.name
            })),
            isAdaptive: true,
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const widgets = [
    {
      title: "Timeline Widget",
      src: "https://www.tradingview-widget.com/embed-widget/timeline/#%7B%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22utm_source%22%3A%22deploy-preview-2932--getfinveda.netlify.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22deploy-preview-2932--getfinveda.netlify.app%2Ftrends%22%7D",
      height: "445px",
    },
    {
      title: "Crypto Coins Heatmap",
      src: "https://www.tradingview-widget.com/embed-widget/crypto-coins-heatmap/?locale=in#%7B%22dataSource%22%3A%22Crypto%22%2C%22blockSize%22%3A%22market_cap_calc%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22light%22%2C%22hasTopBar%22%3Afalse%2C%22isDataSetEnabled%22%3Afalse%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22width%22%3A%22auto%22%2C%22height%22%3A500%7D",
      height: "500px",
    },
    {
      title: "Stock Heatmap",
      src: "https://www.tradingview-widget.com/embed-widget/stock-heatmap/?locale=in#%7B%22dataSource%22%3A%22SENSEX%22%2C%22grouping%22%3A%22sector%22%2C%22blockSize%22%3A%22market_cap_basic%22%2C%22blockColor%22%3A%22change%22%2C%22symbolUrl%22%3A%22%22%2C%22colorTheme%22%3A%22light%22%2C%22hasTopBar%22%3Afalse%2C%22isDataSetEnabled%22%3Afalse%2C%22isZoomEnabled%22%3Atrue%2C%22hasSymbolTooltip%22%3Atrue%2C%22width%22%3A%22auto%22%2C%22height%22%3A500%7D",
      height: "500px",
    },
    {
      title: "Forex Heatmap",
      src: "https://www.tradingview-widget.com/embed-widget/forex-heat-map/?locale=in#%7B%22width%22%3A%22auto%22%2C%22height%22%3A500%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%2C%22INR%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%7D",
      height: "500px",
    },
  ];

  return (
    <div>
      <SimpleMouseFollower/>
      {/* Finlogix Market Widget */}
      <div className="finlogix-container w-full bg-gray-100 shadow-lg rounded-lg mt-1 px-0 py-0">
          <iframe
            src="https://widget.finlogix.com"
            referrerPolicy="origin"
            scrolling="yes"
            sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-downloads allow-presentation allow-popups-to-escape-sandbox"
            className="w-full h-2 border-none"
          ></iframe>
        </div>
    <div className="container mx-auto pt-20 px-4 py-8 space-y-12">
       


      {widgets.map((widget, index) => (
        <div
          key={index}
          className="tradingview-widget-container bg-gray-100 shadow-lg rounded-lg p-4"
          style={{ height: widget.height }}
        >
          <iframe
            title={widget.title}
            scrolling="no"
            allowTransparency="true"
            frameBorder="0"
            src={widget.src}
            className="w-full h-full"
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TradingViewWidgets;

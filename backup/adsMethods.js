import AdSense from "react-adsense";

const client = "ca-pub-9670179252828195";
const slot_square = "6478931561";
const slot_horizontal = "1992653961";
const slot_vertical = "5391470746";

export function AdsVertical() {
  return (
    <div className="adsVertical">
      <AdSense.Google
        client={client}
        slot={slot_vertical}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}

export function AdsVerticalHomeContent() {
  return (
    <div className="adsVerticalHome">
      <AdSense.Google
        client={client}
        slot={slot_vertical}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}
export function AdsHorizontal() {
  return (
    <div className="adsHorizontal ">
      <div className="sticky">
        <AdSense.Google
          client={client}
          slot={slot_horizontal}
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />
      </div>
    </div>
  );
}

export function AdsFeaturdSection() {
  return (
    <div className="adsFeaturedSection">
      <AdSense.Google
        client={client}
        slot={slot_square}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}

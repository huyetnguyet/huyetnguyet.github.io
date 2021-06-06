import AdSense from "react-adsense";

const client = "ca-pub-9670179252828195";
const slot = "1992653961";
export function AdsVertical() {
  return (
    <div className="ads-vertical">
      <AdSense.Google
        client={client}
        slot={slot}
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
    <div className="ads-horizontal sticky">
      <AdSense.Google
        client={client}
        slot={slot}
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
    <div className="ads-vertical-home">
      <AdSense.Google
        client={client}
        slot={slot}
        style={{ width: 700, height: 200, float: "left" }}
        format=""
      />
    </div>
  );
}

export function AdsFeaturdSection() {
  return (
    <div className="ads-featured-section grip_6">
      <AdSense.Google
        client={client}
        slot={slot}
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}

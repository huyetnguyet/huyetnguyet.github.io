import AdSense from "react-adsense";

const client = "ca-pub-9670179252828195";
const slot = "1992653961";

export function AdsVertical() {
  return (
    <div className="adsVertical">
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
    <div className="adsHorizontal sticky">
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
    <div className="adsVerticalHome">
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

export function AdsFeaturdSection() {
  return (
    <div className="adsFeaturedSection">
      <AdSense.Google
        client={client}
        slot={slot}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}

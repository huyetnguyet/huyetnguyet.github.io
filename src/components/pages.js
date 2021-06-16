import React from "react";

import { MainContent } from "components/homeComponents/homeContentSection";
import { Pages } from "components/content";

import { dataContent02 } from "storages/database";

export function Page02() {
  return (
    <Pages>
      <MainContent data={dataContent02}></MainContent>
      <Pagenavi02 />
    </Pages>
  );
}

export function Pagenavi01() {
  return (
    <>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 1 OF 2</div>
        <div className="pagenaviBox pageCurrent"> 1 </div>
        <a href="/page02">
          <div className="pagenaviBox">2</div>
        </a>
      </div>
    </>
  );
}

export function Pagenavi02() {
  return (
    <>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 2 OF 2</div>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <div className="pagenaviBox pageCurrent">2</div>
      </div>
    </>
  );
}

import React from "react";

import { MainContent } from "components/homeComponents/homeContentSection";
import { Pages } from "components/content";

import * as data from "storages/database";

export function Page02() {
  return (
    <Pages>
      <MainContent data={data.dataContent02}></MainContent>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 2 OF 4</div>
        <a href="/page01">
          <div className="pagenaviBox">{"<"}</div>
        </a>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <div className="pagenaviBox pageCurrent">2</div>
        <a href="/page03">
          <div className="pagenaviBox">3</div>
        </a>
        <a href="/page04">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page03">
          <div className="pagenaviBox">{">"}</div>
        </a>
      </div>
    </Pages>
  );
}

export function Page03() {
  return (
    <Pages>
      <MainContent data={data.dataContent03}></MainContent>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 3 OF 4</div>
        <a href="/page02">
          <div className="pagenaviBox">{"<"}</div>
        </a>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <a href="/page02">
          <div className="pagenaviBox">2</div>
        </a>
        <div className="pagenaviBox pageCurrent">3</div>
        <a href="/page04">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page04">
          <div className="pagenaviBox">{">"}</div>
        </a>
      </div>
    </Pages>
  );
}

export function Page04() {
  return (
    <Pages>
      <MainContent data={data.dataContent04}></MainContent>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 4 OF 4</div>
        <a href="/page03">
          <div className="pagenaviBox">{"<"}</div>
        </a>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <a href="/page02">
          <div className="pagenaviBox">2</div>
        </a>
        <a href="/page03">
          <div className="pagenaviBox">3</div>
        </a>
        <div className="pagenaviBox pageCurrent">4</div>
      </div>
    </Pages>
  );
}

export function Pagenavi01() {
  return (
    <>
      <div className="pagenavi">
        <div className="pagenaviBox pageTotal">PAGE 1 OF 4</div>
        <div className="pagenaviBox pageCurrent"> 1 </div>
        <a href="/page02">
          <div className="pagenaviBox">2</div>
        </a>
        <a href="/page03">
          <div className="pagenaviBox">3</div>
        </a>
        <a href="/page04">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page02">
          <div className="pagenaviBox">{">"}</div>
        </a>
      </div>
    </>
  );
}

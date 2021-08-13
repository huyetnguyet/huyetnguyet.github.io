import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { MainContent } from "components/homeComponents/homeContentSection";
import { PageContent } from "components/content";

import * as data from "storages/database";

const total_pages = "13";
const last_page = "/page13";

export function Pages() {
  return (
    <Switch>
      <Route exact path="/page2" component={Page02} />
      <Route exact path="/page3" component={Page03} />
      <Route exact path="/page4" component={Page04} />
      <Route exact path="/page5" component={Page05} />
      <Route exact path="/page6" component={Page06} />
      <Route exact path="/page7" component={Page07} />
      <Route exact path="/page8" component={Page08} />
      <Route exact path="/page9" component={Page09} />
      <Route exact path="/page10" component={Page10} />
      <Route exact path="/page11" component={Page11} />
      <Route exact path="/page12" component={Page12} />
      <Route exact path="/page13" component={Page12} />
    </Switch>
  );
}
export function Page13() {
  return <AutoPageNavi database={data.dataContent13} currentPage={13} />;
}
export function Page12() {
  return <AutoPageNavi database={data.dataContent12} currentPage={12} />;
}
export function Page11() {
  return <AutoPageNavi database={data.dataContent11} currentPage={11} />;
}
export function Page10() {
  return <AutoPageNavi database={data.dataContent10} currentPage={10} />;
}
export function Page09() {
  return <AutoPageNavi database={data.dataContent09} currentPage={9} />;
}
export function Page08() {
  return <AutoPageNavi database={data.dataContent08} currentPage={8} />;
}

export function Page07() {
  return <AutoPageNavi database={data.dataContent07} currentPage={7} />;
}

export function Page06() {
  return <AutoPageNavi database={data.dataContent06} currentPage={6} />;
}

export function Page05() {
  return <AutoPageNavi database={data.dataContent05} currentPage={5} />;
}

export function Page04() {
  return <AutoPageNavi database={data.dataContent04} currentPage={4} />;
}

export function Page03() {
  return (
    <PageContent>
      <MainContent data={data.dataContent03}></MainContent>
      <div className="pagenavi">
        <div>
          <div className="pagenaviBox pageTotal  mobile mobile_sm">
            PAGE 3 OF {total_pages}
          </div>
        </div>
        <a href="/page2">
          <div className="pagenaviBox mobile">{"<<"}</div>
        </a>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <a href="/page2">
          <div className="pagenaviBox">2</div>
        </a>
        <div>
          <div className="pagenaviBox pageCurrent">3</div>
        </div>
        <a href="/page4">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page5">
          <div className="pagenaviBox">5</div>
        </a>
        <a href="/page4">
          <div className="pagenaviBox mobile">{">>"}</div>
        </a>
        <a href={last_page}>
          <div className="pagenaviBox mobile_sm">{"LAST >>"}</div>
        </a>
      </div>
    </PageContent>
  );
}

export function Page02() {
  return (
    <PageContent>
      <MainContent data={data.dataContent02}></MainContent>
      <div className="pagenavi">
        <div>
          <div className="pagenaviBox pageTotal  mobile mobile_sm">
            PAGE 2 OF {total_pages}
          </div>
        </div>
        <a href="/">
          <div className="pagenaviBox mobile">{"<<"}</div>
        </a>
        <a href="/">
          <div className="pagenaviBox">1</div>
        </a>
        <div>
          <div className="pagenaviBox pageCurrent">2</div>
        </div>
        <a href="/page3">
          <div className="pagenaviBox">3</div>
        </a>
        <a href="/page4">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page5">
          <div className="pagenaviBox">5</div>
        </a>
        <a href="/page3">
          <div className="pagenaviBox mobile">{">>"}</div>
        </a>
        <a href={last_page}>
          <div className="pagenaviBox mobile_sm">{"LAST >>"}</div>
        </a>
      </div>
    </PageContent>
  );
}

export function Pagenavi01() {
  return (
    <>
      <div className="pagenavi">
        <div>
          <div className="pagenaviBox pageTotal mobile mobile_sm">
            PAGE 1 OF {total_pages}
          </div>
          <div className="pagenaviBox pageCurrent"> 1 </div>
        </div>
        <a href="/page2">
          <div className="pagenaviBox">2</div>
        </a>
        <a href="/page3">
          <div className="pagenaviBox">3</div>
        </a>
        <a href="/page4">
          <div className="pagenaviBox">4</div>
        </a>
        <a href="/page5">
          <div className="pagenaviBox">5</div>
        </a>
        <a href="/page2">
          <div className="pagenaviBox  mobile">{">>"}</div>
        </a>
        <a href={last_page}>
          <div className="pagenaviBox mobile_sm">{"LAST >>"}</div>
        </a>
      </div>
    </>
  );
}

export function AutoPageNavi(props) {
  const previousPage2 = props.currentPage - 2;
  const previousPage1 = props.currentPage - 1;
  const nextPage1 = props.currentPage + 1;
  const nextPage2 = props.currentPage + 2;

  const link_previousePage2 = "/page" + previousPage2;
  const link_previousePage1 = "/page" + previousPage1;
  const link_nextPage1 = "/page" + nextPage1;
  const link_nextPage2 = "/page" + nextPage2;
  console.log(props.database.length);
  return (
    <PageContent>
      <MainContent data={props.database}></MainContent>
      <div className="pagenavi">
        <div>
          <div className="pagenaviBox pageTotal mobile mobile_sm">
            PAGE {props.currentPage} OF {total_pages}
          </div>
        </div>
        <a href="/">
          <div className="pagenaviBox mobile_sm">{"<< FIRST"}</div>
        </a>
        <a href={link_previousePage1}>
          <div className="pagenaviBox mobile">{"<<"}</div>
        </a>
        <a href={link_previousePage2}>
          <div className="pagenaviBox">{previousPage2}</div>
        </a>
        <a href={link_previousePage1}>
          <div className="pagenaviBox">{previousPage1}</div>
        </a>
        <div>
          <div className="pagenaviBox pageCurrent">{props.currentPage}</div>
        </div>
        <a href={link_nextPage1}>
          <div className="pagenaviBox">{nextPage1}</div>
        </a>
        <a href={link_nextPage2}>
          <div className="pagenaviBox">{nextPage2}</div>
        </a>
        <a href={link_nextPage1}>
          <div className="pagenaviBox mobile">{">>"}</div>
        </a>
        <a href={last_page}>
          <div className="pagenaviBox mobile_sm">{"LAST >>"}</div>
        </a>
      </div>
    </PageContent>
  );
}

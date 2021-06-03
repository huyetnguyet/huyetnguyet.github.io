import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "./home";
import Games from "./games";

import page_202106021159 from "../storages/content/202106021159-dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau";
import page_202106030950 from "../storages/content/202106030950-linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu";
import page_202106021319 from "../storages/content/202106021319-ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim";
import page_202106011900 from "../storages/content/202106011900-vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my";
import page_202106021031 from "../storages/content/202106021031-sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to";
import page_202106021223 from "../storages/content/202106021223-one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi";
import page_202106020330 from "../storages/content/202106020330-hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6";
import page_202106031010 from "../storages/content/202106031010-ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao";
import page_202106030305 from "../storages/content/202106030305-gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
      <Route
        exact
        path="/dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau"
        component={page_202106021159}
      />
      <Route
        exact
        path="/linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu"
        component={page_202106030950}
      />
      <Route
        exact
        path="/ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim"
        component={page_202106021319}
      />{" "}
      <Route
        exact
        path="/vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my"
        component={page_202106011900}
      />{" "}
      <Route
        exact
        path="/sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to"
        component={page_202106021031}
      />{" "}
      <Route
        exact
        path="/one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi"
        component={page_202106021223}
      />{" "}
      <Route
        exact
        path="/hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6"
        component={page_202106020330}
      />{" "}
      <Route
        exact
        path="/ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao"
        component={page_202106031010}
      />{" "}
      <Route
        exact
        path="/gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao"
        component={page_202106030305}
      />
    </Switch>
  );
}

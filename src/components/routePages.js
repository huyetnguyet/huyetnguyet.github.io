import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "./home";
import Games from "./games";
import ContentExport from "./contentExport";
import page_202106021159 from "../storages/content/202106021159-dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau";
import page_202106030950 from "../storages/content/202106030950-linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu";
import page_202106021319 from "../storages/content/202106021319-ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim";
import page_202106011900 from "../storages/content/202106011900-vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my";
import page_202106021031 from "../storages/content/202106021031-sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to";
import page_202106021223 from "../storages/content/202106021223-one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi";
import page_202106020330 from "../storages/content/202106020330-hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6";
import page_202106031010 from "../storages/content/202106031010-ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao";
import page_202106030305 from "../storages/content/202106030305-gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao";
import page_20210603053727 from "../storages/content/202106030537-tai-ngay-game-turn-based-cuc-dinh-warhammer-quest-silver-tower-mien-phi-100.js";
import page_20210603054034 from "../storages/content/202106030540-he-lo-ket-cau-cot-truyen-cua-game-thuan-viet-300475.js";
import page_20210603054155 from "../storages/content/202106030541-3-cpu-gia-re-duoi-2-trieu-nhung-van-choi-game-ngon-ma-khong-can-card-do-hoa.js";
import page_20210603054326 from "../storages/content/202106030543-nhung-tua-game-hay-nhat-trong-10-nam-qua-theo-binh-chon-cua-game-thu.js";
import page_20210603054509 from "../storages/content/202106030545-ken-shimizu-chi-ra-doi-tac-loi-hai-nhat-tung-gap-khien-anh-chang-phai-dau-hang-chi-sau-3-phut-khong-dam-dong-cung-lan-hai.js";
import page_20210603054621 from "../storages/content/202106030546-hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming.js";
import page_202106030700 from "../storages/content/202106030700-2-game-mien-phi-cho-playstation-4-trong-thang-6.js";
import page_202106030443 from "../storages/content/202106030443-atomi-shuri-chan-nghiep-dien-vien-nguoi-dep-18-bat-ngo-giai-nghe-khien-fan-ngo-ngang.js";
import page_20210603065007 from "../storages/content/202106030650-no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no.js";
import page_20210603065223 from "../storages/content/202106030652-bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin.js";
import page_20210603065324 from "../storages/content/202106030653-dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac.js";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/content" component={ContentExport} />
      <></>
      <Route
        exact
        path="/no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no"
        component={page_20210603065007}
      />
      <Route
        exact
        path="/bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin"
        component={page_20210603065223}
      />
      <Route
        exact
        path="/dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac"
        component={page_20210603065324}
      />

      <Route
        exact
        path="/atomi-shuri-chan-nghiep-dien-vien-nguoi-dep-18-bat-ngo-giai-nghe-khien-fan-ngo-ngang"
        component={page_202106030443}
      />

      <Route
        exact
        path="/tai-ngay-game-turn-based-cuc-dinh-warhammer-quest-silver-tower-mien-phi-100"
        component={page_20210603053727}
      />

      <Route
        exact
        path="/2-game-mien-phi-cho-playstation-4-trong-thang-6"
        component={page_202106030700}
      />
      <Route
        exact
        path="/he-lo-ket-cau-cot-truyen-cua-game-thuan-viet-300475"
        component={page_20210603054034}
      />
      <Route
        exact
        path="/3-cpu-gia-re-duoi-2-trieu-nhung-van-choi-game-ngon-ma-khong-can-card-do-hoa"
        component={page_20210603054155}
      />
      <Route
        exact
        path="/nhung-tua-game-hay-nhat-trong-10-nam-qua-theo-binh-chon-cua-game-thu"
        component={page_20210603054326}
      />
      <Route
        exact
        path="/ken-shimizu-chi-ra-doi-tac-loi-hai-nhat-tung-gap-khien-anh-chang-phai-dau-hang-chi-sau-3-phut-khong-dam-dong-cung-lan-hai"
        component={page_20210603054509}
      />
      <Route
        exact
        path="/hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming"
        component={page_20210603054621}
      />
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
      />
      <Route
        exact
        path="/vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my"
        component={page_202106011900}
      />
      <Route
        exact
        path="/sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to"
        component={page_202106021031}
      />
      <Route
        exact
        path="/one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi"
        component={page_202106021223}
      />
      <Route
        exact
        path="/hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6"
        component={page_202106020330}
      />
      <Route
        exact
        path="/ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao"
        component={page_202106031010}
      />
      <Route
        exact
        path="/gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao"
        component={page_202106030305}
      />
    </Switch>
  );
}

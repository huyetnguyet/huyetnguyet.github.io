import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "./home";
import Games from "./games";
import News from "./news";
import Tech from "./tech";

import * as pages from "storages/content/2021/06";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/news" component={News} />
      <Route exact path="/tech" component={Tech} />
      <></>

<Route exact path="/dau-truong-chan-ly-toc-thay-ma-va-kayle-nhan-nhung-nerf-vo-cung-nang-ne-tu-riot-tai-ban-1112" component={pages.page_20210607104018}/>

<Route exact path="/thien-than-eimi-fukada-hot-hoang-khi-bi-fan-phat-hien-dia-chi-nha-trong-dem-phai-chuyen-di-ngay-tap-lu" component={pages.page_20210607104004}/>

<Route exact path="/fan-xuc-dong-khi-biet-y-nghia-day-so-tren-ao-lee-kwang-soo-trong-tap-cuoi-ghi-hinh-running-man" component={pages.page_20210607103948}/>

<Route exact path="/dien-vay-xe-nguc-sau-tao-bao-duong-mich-khien-nguoi-tinh-hua-khai-boi-roi-khong-dam-nhin-ngay-tren-san-khau" component={pages.page_20210607103935}/>

<Route exact path="/game-mobile-fanmade-cua-viet-nam-dung-top-1-bxh-cong-game-noi-tieng-trung-quoc-vuot-qua-ca-dtcl-mobile" component={pages.page_20210607103429}/>

      <Route
        exact
        path="/anh-team-qua-duong-huyen-thoai-cua-jennie-cam-thuong-ma-dep-khong-che-noi-chac-moi-sang-thich-lam-khi-tu-soi-guong"
        component={pages.page_20210607003803}
      />

      <Route
        exact
        path="/cuc-tinh-y-e-ap-ben-phi-cong-moi-luu-diec-phi-ve-nha-cung-tran-hieu-sau-tham-hoa-mulan-o-le-ky-niem-10-nam-tencent"
        component={pages.page_20210607003747}
      />

      <Route
        exact
        path="/song-ji-hyo-bat-ngo-nhay-bo-om-chat-jong-kook-thuyen-spartace-lan-nua-ra-khoi"
        component={pages.page_20210607003730}
      />

      <Route
        exact
        path="/nu-streamer-dang-hinh-khoe-giam-can-thanh-cong-nhung-vong-1-lon-bat-thuong-lai-phan-chu"
        component={pages.page_20210607003706}
      />

      <Route
        exact
        path="/cap-nhat-su-kien-khung-thap-quang-thinh-dien-duong-mich-sexy-het-nac-luu-diec-phi-gay-that-vong-vi-du-chat-so-voi-cuc-tinh-y"
        component={pages.page_20210607003652}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-3-combo-hoan-hao-giua-cac-quan-co-item-giup-game-thu-ha-guc-doi-phuong-de-dang"
        component={pages.page_20210607003603}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-khong-phai-dieu-tot-kho-vu-khi-kha-nang-se-con-dao-hai-luoi-doi-voi-game-thu"
        component={pages.page_20210607003553}
      />

      <Route
        exact
        path="/nhung-mau-chuyen-cam-dong-khien-fan-cung-doraemon-phai-bat-khoc"
        component={pages.page_20210607003540}
      />

      <Route
        exact
        path="/lmht-co-gang-sua-loi-cua-phep-trung-phat-nhung-riot-games-lai-vo-tinh-tao-ra-them-3-bug-moi"
        component={pages.page_20210607003527}
      />

      <Route
        exact
        path="/cong-dong-steam-phat-sot-voi-game-sinh-ton-moi-toan-diem-9-voi-10-lai-con-mien-phi-100"
        component={pages.page_20210607003313}
      />

      <Route
        exact
        path="/vao-vai-co-hau-gai-sexy-nu-streamer-thu-hut-su-chu-y-cua-nam-huan-luyen-vien-tuyen-lien-quan-noi-tieng"
        component={pages.page_20210607002607}
      />

      <Route
        exact
        path="/lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat"
        component={pages.page_20210606074256}
      />
      <Route
        exact
        path="/canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc"
        component={pages.page_20210606074311}
      />

      <Route
        exact
        path="/dich-le-nhiet-ba-lai-len-top1-tim-kiem-vi-qua-dep-mat-hinh-the-deu-vang-muoi"
        component={pages.page_20210606113000}
      />
      <Route
        exact
        path="/apple-cap-nhat-airstags-sau-nhung-lo-ngai-rinh-rap"
        component={pages.page_20210606112900}
      />
      <Route
        exact
        path="/nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3"
        component={pages.page_20210606084411}
      />
      <Route
        exact
        path="/sana-twice-gay-xon-xao-khi-dien-trang-phuc-hut-mat-khoe-kheo-vong-1-goi-cam"
        component={pages.page_20210606084512}
      />
      <Route
        exact
        path="/nhay-sexy-roi-tu-coi-ao-luoi-ngay-tren-song-nu-streamer-buc-xuc-khi-bi-chi-trich-xem-cho-suong-roi-nem-da"
        component={pages.page_20210606084605}
      />
      <Route
        exact
        path="/lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client"
        component={pages.page_20210606084710}
      />
      <Route
        exact
        path="/hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd"
        component={pages.page_20210606084722}
      />
      <Route
        exact
        path="/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2"
        component={pages.page_20210606084735}
      />
      <Route
        exact
        path="/9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi"
        component={pages.page_20210606084757}
      />
      <Route
        exact
        path="/mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song"
        component={pages.page_20210606084830}
      />

      <Route
        exact
        path="/csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn"
        component={pages.page_20210605090549}
      />
      <Route
        exact
        path="/dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem"
        component={pages.page_20210605090617}
      />
      <Route
        exact
        path="/dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong"
        component={pages.page_20210605090601}
      />
      <Route
        exact
        path="/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1"
        component={pages.page_20210605090338}
      />
      <Route
        exact
        path="/ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem"
        component={pages.page_20210605090405}
      />
      <Route
        exact
        path="/sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam"
        component={pages.page_20210605090443}
      />
      <Route
        exact
        path="/tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem"
        component={pages.page_20210605090509}
      />
      <Route
        exact
        path="/valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich"
        component={pages.page_20210605090159}
      />
      <Route
        exact
        path="/xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam"
        component={pages.page_20210605090417}
      />

      <Route
        exact
        path="/mi-van-du-trend-tiktok-voi-bao-ngu-con-gai-sap-thanh-thieu-nu-ma-sao-chi-khong-chiu-gia-di-mot-xiu"
        component={pages.page_20210604043337}
      />
      <Route
        exact
        path="/thanh-nu-dota-2-mung-tuoi-moi-chieu-dai-fan-bang-bo-anh-khoe-vong-mot-cuc-pham-tren-instagram"
        component={pages.page_20210604043413}
      />
      <Route
        exact
        path="/so-lo-noi-y-se-bi-phat-nu-streamer-outplay-bang-cach-khong-mac-buoc-ao-ho-hung-che-vong-mot"
        component={pages.page_20210604043529}
      />
      <Route
        exact
        path="/viet-tus-tha-thinh-tao-bao-nu-streamer-goi-cam-khang-dinh-dung-nhin-ve-ngoai-danh-dong-tat-ca"
        component={pages.page_20210604043625}
      />
      <Route
        exact
        path="/ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay"
        component={pages.page_20210604043806}
      />
      <Route
        exact
        path="/gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu"
        component={pages.page_20210604043950}
      />
      <Route
        exact
        path="/hoa-khoi-tiep-vien-hang-khong-buoc-vao-dai-hoi-sexy-voi-vong-1-cang-day-lap-lo"
        component={pages.page_20210604044036}
      />
      <Route
        exact
        path="/lan-ngoc-da-khoe-anh-dien-do-boi-nong-bong-don-he-tien-the-cho-be-mo-di-choi-cung-cho-vui"
        component={pages.page_20210604044125}
      />
      <Route
        exact
        path="/loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng"
        component={pages.page_20210604044225}
      />
      <Route
        exact
        path="/ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len"
        component={pages.page_20210604044318}
      />
      <Route
        exact
        path="/dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5"
        component={pages.page_20210604044331}
      />
      <Route
        exact
        path="/chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18"
        component={pages.page_20210604044342}
      />
      <Route
        exact
        path="/kham-pha-thi-truong-quang-cao-game-nua-dau-nam-2021"
        component={pages.page_20210604044355}
      />
      <Route
        exact
        path="/chap-nhan-khong-mac-ao-de-quang-cao-san-pham-nu-streamer-lien-quan-chinh-thuc-lap-ky-luc-ve-su-nong-bong-cua-minh"
        component={pages.page_20210604044426}
      />

      <Route
        exact
        path="/no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no"
        component={pages.page_20210603065007}
      />
      <Route
        exact
        path="/bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin"
        component={pages.page_20210603065223}
      />
      <Route
        exact
        path="/dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac"
        component={pages.page_20210603065324}
      />

      <Route
        exact
        path="/atomi-shuri-chan-nghiep-dien-vien-nguoi-dep-18-bat-ngo-giai-nghe-khien-fan-ngo-ngang"
        component={pages.page_202106030443}
      />

      <Route
        exact
        path="/tai-ngay-game-turn-based-cuc-dinh-warhammer-quest-silver-tower-mien-phi-100"
        component={pages.page_20210603053727}
      />

      <Route
        exact
        path="/2-game-mien-phi-cho-playstation-4-trong-thang-6"
        component={pages.page_202106030700}
      />
      <Route
        exact
        path="/he-lo-ket-cau-cot-truyen-cua-game-thuan-viet-300475"
        component={pages.page_20210603054034}
      />
      <Route
        exact
        path="/3-cpu-gia-re-duoi-2-trieu-nhung-van-choi-game-ngon-ma-khong-can-card-do-hoa"
        component={pages.page_20210603054155}
      />
      <Route
        exact
        path="/nhung-tua-game-hay-nhat-trong-10-nam-qua-theo-binh-chon-cua-game-thu"
        component={pages.page_20210603054326}
      />
      <Route
        exact
        path="/ken-shimizu-chi-ra-doi-tac-loi-hai-nhat-tung-gap-khien-anh-chang-phai-dau-hang-chi-sau-3-phut-khong-dam-dong-cung-lan-hai"
        component={pages.page_20210603054509}
      />
      <Route
        exact
        path="/hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming"
        component={pages.page_20210603054621}
      />
      <Route
        exact
        path="/dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau"
        component={pages.page_202106021159}
      />
      <Route
        exact
        path="/linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu"
        component={pages.page_202106030950}
      />
      <Route
        exact
        path="/ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim"
        component={pages.page_202106021319}
      />
      <Route
        exact
        path="/vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my"
        component={pages.page_202106011900}
      />
      <Route
        exact
        path="/sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to"
        component={pages.page_202106021031}
      />
      <Route
        exact
        path="/one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi"
        component={pages.page_202106021223}
      />
      <Route
        exact
        path="/hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6"
        component={pages.page_202106020330}
      />
      <Route
        exact
        path="/ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao"
        component={pages.page_202106031010}
      />
      <Route
        exact
        path="/gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao"
        component={pages.page_202106030305}
      />
    </Switch>
  );
}

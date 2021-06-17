import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "components/home";
import Games from "components/games";
import News from "components/news";
import Tech from "components/tech";

import { Page02 } from "components/pages";

import * as pages from "storages/content/2021/06";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/news" component={News} />
      <Route exact path="/tech" component={Tech} />
      <Route exact path="/page02" component={Page02} />
      <></>

<Route exact path="/bi-ga-combo-150-trieu-1-can-nha-cho-mot-dem-o-canh-nang-hot-girl-viet-hai-huoc-dap-tra-em-co-nha-roi" component={pages.page_20210617140755}/>

<Route exact path="/top-7-manga-bong-da-giup-ban-giai-tri-trong-thoi-gian-cho-doi-vong-loai-world-cup-2022-cuoi-cung-cua-doi-tuyen-viet-nam" component={pages.page_20210617140743}/>

<Route exact path="/tan-binh-18-bay-to-chuyen-qua-khu-ke-chuyen-an-tap-bao-nhieu-vao-het-go-bong-dao" component={pages.page_20210617140720}/>

<Route exact path="/nhin-nhung-guong-mat-tuyet-sac-nay-thi-ai-con-dam-noi-dien-anh-nhat-thieu-bong-dang-my-nhan" component={pages.page_20210617140532}/>

<Route exact path="/so-huu-vong-mot-nang-nhat-lang-phim-18-nhat-ban-nang-hot-girl-mo-lat-do-yua-mikami-toi-muon-la-nguoi-gioi-nhat" component={pages.page_20210617140500}/>

<Route exact path="/bat-ngo-dung-len-sap-xep-vong-mot-day-goi-cam-tren-song-nu-streamer-khien-nguoi-xem-ban-loan-khong-hieu-ly-do" component={pages.page_20210617140424}/>

<Route exact path="/nhung-nhan-vat-dang-yeu-bac-nhat-duoc-nhieu-game-thu-ua-thich" component={pages.page_20210617140409}/>

<Route exact path="/top-game-kinh-dien-hay-nhat-tren-mobile-co-mot-phan-final-fantasy-huyen-thoai" component={pages.page_20210617140357}/>

<Route exact path="/do-sac-trong-ta-ao-dai-trang-tinh-khoi-cac-hot-girl-esports-hoa-nang-tho-trong-sang" component={pages.page_20210617140309}/>

<Route exact path="/lo-danh-tinh-nang-hot-girl-goi-cam-dang-anh-co-vu-tuyen-viet-nam-gay-bao-mang-hoa-ra-la-guong-mat-quen-thuoc" component={pages.page_20210616113329}/>

<Route exact path="/top-6-tro-choi-open-world-duoc-game-thu-bau-chon-hay-nhat-moi-thoi-dai" component={pages.page_20210616113318}/>

<Route exact path="/tha-rong-vong-mot-nu-streamer-xinh-dep-chi-len-song-buoc-toc-uong-nuoc-cung-thu-hut-ca-ngan-nguoi-theo-doi" component={pages.page_20210616113259}/>

<Route exact path="/bi-phu-huynh-khan-cau-roi-tu-mat-nang-hot-girl-phim-18-van-quyet-tam-theo-nghe-tro-thanh-thanh-nu-de-khang-dinh-ban-than" component={pages.page_20210616113238}/>

<Route exact path="/lien-tuc-gap-tai-nan-khoe-than-ho-henh-voi-cac-clip-lookbook-nu-youtuber-bat-ngo-duoc-len-trang-bia-cua-tap-chi-18" component={pages.page_20210616113119}/>

<Route exact path="/nhung-tua-game-bao-luc-18-khien-nguoi-choi-phai-tranh-xa-vi-qua-dang-so" component={pages.page_20210616113102}/>

<Route exact path="/top-10-nu-than-trong-game-khien-ban-tin-vao-tinh-yeu-dich-thuc" component={pages.page_20210616113051}/>

<Route exact path="/cot-truyen-day-bi-kich-it-nguoi-biet-toi-cua-contra-tua-game-quoc-dan-cua-the-he-8-9x" component={pages.page_20210616113041}/>

<Route exact path="/quang-cao-game-moi-nu-hoang-sexy-lai-thieu-dot-thi-giac-game-thu" component={pages.page_20210616113021}/>

<Route exact path="/so-huu-vong-mot-ca-met-hot-girl-phim-18-vua-debut-da-lap-ky-luc-chia-se-thuong-tha-rong-vi-khong-tim-duoc-noi-y-vua-co" component={pages.page_20210616113003}/>

<Route exact path="/gay-tranh-cai-tai-nong-cung-euro-hot-girl-le-bong-dang-anh-goi-cam-nhung-lien-tuc-bi-fan-troll-sap-mat" component={pages.page_20210616112918}/>

<Route exact path="/cung-ngam-trieu-le-dinh-va-7749-tao-dang-gia-tran-khi-quang-cao-trang-suc" component={pages.page_20210616112833}/>

<Route exact path="/hoa-ra-jennie-tung-co-thoi-mac-dep-den-muc-antifan-cung-phai-cam-nin-khong-che-duoc-diem-nao" component={pages.page_20210616112719}/>

<Route exact path="/nong-buc-hot-girl-con-lai-viet-trung-mac-ao-day-tre-nai-thu-hut-su-chu-y-cua-cong-dong" component={pages.page_20210614093056}/>

<Route exact path="/on-troi-cuoi-cung-trieu-le-dinh-cung-da-bot-mot-mau-va-chuyen-sang-mau-moi-roi" component={pages.page_20210614093016}/>

<Route exact path="/hlv-park-hang-seo-bi-cam-chi-dao-tran-uae" component={pages.page_20210614093003}/>

<Route exact path="/cong-dong-mang-phat-cuong-voi-man-trinh-dien-dinh-cao-cua-manuel-david-de-tan-truong" component={pages.page_20210614092946}/>

<Route exact path="/nu-coser-goc-viet-cung-quyet-dinh-coi-de-bien-thanh-nu-tro-ly-ao-samsung-khoe-tron-nhung-thu-18" component={pages.page_20210614092821}/>

<Route exact path="/nhung-tua-game-hay-tuyet-nhung-khien-game-thu-phat-cau-vi-cai-ket-vo-van" component={pages.page_20210614092810}/>

<Route exact path="/ben-canh-dota-d-day-day-chinh-la-nhung-custom-map-huyen-thoai-mot-thoi-cua-warcraft-3-ma-hiem-ai-khong-biet-toi-p1" component={pages.page_20210614092757}/>

<Route exact path="/nhung-pokemon-duoc-thiet-ke-dua-tren-nhan-vat-co-that" component={pages.page_20210614092742}/>

<Route exact path="/top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh-p2" component={pages.page_20210614092729}/>

<Route exact path="/cong-dong-game-thu-me-man-bo-anh-nong-bong-mat-cua-nu-cosplayer-hiino-yuki" component={pages.page_20210614092648}/>

<Route exact path="/lien-tuc-tha-dang-goi-cam-voi-bikini-nong-bong-jun-vu-khien-fan-khong-khoi-tram-tro-chay-mau-mui" component={pages.page_20210614092614}/>

<Route exact path="/len-song-ve-tranh-khong-ai-xem-nu-streamer-xinh-dep-quyet-ho-bao-rung-lac-vong-mot-bang-man-vu-dao-de-doi" component={pages.page_20210614092543}/>

<Route exact path="/dam-me-tha-rong-vong-mot-khoe-them-nguc-quyen-ru-cac-hot-girl-lang-game-duoc-va-mat-nhung-gi" component={pages.page_20210614092507}/>

<Route exact path="/10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-2" component={pages.page_20210614092454}/>

<Route exact path="/kwang-soo-viet-thu-tay-gui-cac-thanh-vien-va-fan-moi-nguoi-bay-gio-hay-quen-em-di" component={pages.page_20210614092438}/>

<Route exact path="/my-nu-titanic-tung-gay-soc-voi-loat-canh-nong-ho-100-ben-nguoi-tinh-kem-15-tuoi-nhan-luon-oscar-vi-qua-xuat-sac" component={pages.page_20210614092415}/>

<Route exact path="/1-a-hau-viet-nam-gay-soc-vi-tha-rong-loa-lo-tuong-dot-pha-ai-de-an-gach-da-tu-cu-dan-mang" component={pages.page_20210614092349}/>

<Route exact path="/bay-gio-thu-dat-song-hye-kyo-va-son-ye-jin-len-ban-can-dien-do-2-day-e-ap-vong-1-toi-na-tho-ai-moi-ngoi-mam-tren" component={pages.page_20210614092054}/>

<Route exact path="/se-chan-khoc-guc-xuong-ban-so-min-va-pd-nhoe-le-khi-chia-tay-kwang-soo" component={pages.page_20210614092039}/>

<Route exact path="/chu-tich-van-toan-day-ban-lam-giau-bi-fan-malaysia-cong-kich-chop-co-hoi-ra-luon-mau-ao-in-hinh-cu-nga-penalty" component={pages.page_20210614092027}/>

<Route exact path="/lee-kwang-soo-trong-mat-nsx-running-man-truoc-gio-chia-tay-cau-ay-khong-phai-la-do-ngoc" component={pages.page_20210614092016}/>

<Route exact path="/nhin-clip-dien-bikini-cua-ngoc-trinh-do-ban-tim-duoc-chut-dau-hieu-con-sot-lai-cua-vong-eo-56" component={pages.page_20210614091942}/>

<Route exact path="/coi-ao-nguc-ngay-tren-song-nu-streamer-xinh-dep-vo-tinh-gay-soc-khi-vo-tinh-ho-henh-nhu-hoa-truoc-hang-ngan-nguoi-xem" component={pages.page_20210614091903}/>

<Route exact path="/top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh" component={pages.page_20210614091850}/>

<Route exact path="/vo-tu-gac-chan-len-ghe-nu-streamer-xinh-dep-ho-henh-lo-ngay-diem-nhay-cam-gay-chu-y" component={pages.page_20210614091818}/>

<Route exact path="/nu-coser-goc-viet-cung-quyet-dinh-coi-de-bien-thanh-nu-tro-ly-ao-samsung-khoe-tron-nhung-thu-18" component={pages.page_20210611132832}/>

<Route exact path="/nhung-tua-game-hay-tuyet-nhung-khien-game-thu-phat-cau-vi-cai-ket-vo-van" component={pages.page_20210611132820}/>

<Route exact path="/ben-canh-dota-d-day-day-chinh-la-nhung-custom-map-huyen-thoai-mot-thoi-cua-warcraft-3-ma-hiem-ai-khong-biet-toi-p1" component={pages.page_20210611132807}/>

<Route exact path="/game-tap-lam-nong-dan-my-time-at-portia-sap-co-mat-tren-nen-tang-di-dong" component={pages.page_20210611011115}/>

<Route exact path="/than-thu-nien-tung-bi-hong-quan-lao-to-danh-bai-trong-than-thoai-trung-hoa-quyen-luc-ra-sao" component={pages.page_20210611011104}/>

<Route exact path="/he-lo-cuoc-song-sau-giai-nghe-cua-thanh-nu-mot-thoi-rina-ishihara-hoa-ra-van-lam-cong-viec-lien-quan-toi-nghe-cu" component={pages.page_20210611011047}/>

<Route exact path="/mo-ngo-song-ji-hyo-tung-dong-canh-nong-40-lan-cho-mot-bo-phim-bi-chi-trich-ham-hu-danh-nen-moi-lot-do" component={pages.page_20210611011022}/>

<Route exact path="/ngoc-trinh-lai-dot-mat-netizen-trong-bo-anh-dien-noi-y-cuc-nong-bong-vong-3-ngon-ngon-khong-chut-che-chan-chiem-het-spotlight" component={pages.page_20210611010946}/>

      <Route
        exact
        path="/xuat-hien-tua-game-ban-khung-long-sinh-ton-trong-thoi-tien-su-cuc-cuon-hua-hen-se-la-sieu-pham-trong-thoi-gian-toi-day"
        component={pages.page_20210610131850}
      />

      <Route
        exact
        path="/10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-1"
        component={pages.page_20210610131836}
      />

      <Route
        exact
        path="/vi-sao-pokemon-huyen-thoai-mewtwo-dung-cerulean-lam-nha-cua-no"
        component={pages.page_20210610131823}
      />

      <Route
        exact
        path="/hien-ho-gia-nhap-duong-dua-underwear-cua-ck-nhung-body-muot-mai-mlem-the-kia-thi-ai-chiu-noi"
        component={pages.page_20210610131807}
      />

      <Route
        exact
        path="/dan-sao-do-bo-le-trao-giai-bach-ngoc-lan-cuc-tinh-y-dep-nhu-tien-tu-de-bep-nghe-ni-quan-hieu-dong-khoe-vong-1-het-co"
        component={pages.page_20210610131755}
      />

      <Route
        exact
        path="/top-5-meo-giup-dan-pc-yeu-quy-mat-me-quanh-nam"
        component={pages.page_20210609212527}
      />

      <Route
        exact
        path="/ke-chuyen-bi-ban-dien-bao-luc-nang-hot-girl-phim-18-nhat-ban-khien-fan-thuong-cam-khen-ngoi-su-chuyen-nghiep"
        component={pages.page_20210609212513}
      />

      <Route
        exact
        path="/game-dinh-cua-nguoi-viet-dang-mien-phi-tren-app-store-game-thu-nuoc-ngoai-het-loi-khen-ngoi"
        component={pages.page_20210609212503}
      />

      <Route
        exact
        path="/loat-cac-vu-khi-tran-phai-cua-cac-vo-tuong-trong-dynasty-warriors"
        component={pages.page_20210609094259}
      />

      <Route
        exact
        path="/truc-tiep-tu-uae-hinh-anh-buoi-tap-dau-tien-cua-tuyen-viet-nam-sau-tran-gap-indonesia-nin-tho-huong-ve-tuan-anh-van-toan"
        component={pages.page_20210608140647}
      />

      <Route
        exact
        path="/top-5-cau-thu-viet-co-luong-nguoi-theo-doi-khung-nhat-tren-facebook-cai-ten-mlem-mlem-doan-van-hau-xep-thu-may"
        component={pages.page_20210608140634}
      />

      <Route
        exact
        path="/dan-trai-dep-u23-sau-3-nam-dong-loat-lay-vo-co-con-nhung-do-mlem-mlem-khong-he-suy-giam"
        component={pages.page_20210608140622}
      />

      <Route
        exact
        path="/bao-thai-lan-bat-ngo-oan-trach-cho-rang-tuyen-viet-nam-qua-manh-khien-doi-nha-bi-loai"
        component={pages.page_20210608140609}
      />

      <Route
        exact
        path="/bao-indonesia-quay-sang-oan-trach-doi-nha-diem-mat-6-cai-ten-da-toi-nhat"
        component={pages.page_20210608140554}
      />

      <Route
        exact
        path="/6-bi-kip-sieu-huu-ich-ma-ai-cung-can-hoc-vi-chung-co-the-cuu-lay-ban-vao-mot-ngay-nao-do"
        component={pages.page_20210608140543}
      />

      <Route
        exact
        path="/mua-chung-cu-72m2-vo-chong-moi-cuoi-tu-tay-thiet-ke-tung-goc-theo-phong-cach-han-quoc-choi-them-ca-be-ca-ban-cong"
        component={pages.page_20210608140529}
      />

      <Route
        exact
        path="/khi-cac-nu-streamer-viet-khoe-vong-mot-lap-lung-tu-than-thai-cho-den-do-quyen-ru-deu-khien-nguoi-xem-nghet-tho"
        component={pages.page_20210608140515}
      />

      <Route
        exact
        path="/ngam-nhin-nhan-sac-tuyet-pham-cua-em-gai-quoc-dan-kudo-mio-nguoi-tung-hoa-than-thanh-sieu-nhan-hong"
        component={pages.page_20210608140447}
      />

      <Route
        exact
        path="/top-10-game-bong-da-hay-nhat-cho-anh-em-quay-quen-sau"
        component={pages.page_20210608140437}
      />

      <Route
        exact
        path="/sbtc-esports-cong-bo-doi-hinh-tham-du-vcs-mua-he-2021-thay-giao-ba-phan-cau-xanh-roi-tru-hang-duoc-la-hay-roi"
        component={pages.page_20210608140425}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-nhung-doi-hinh-ba-dao-dau-mua-nhung-su-dung-bay-gio-la-tu-huy-cuc-manh"
        component={pages.page_20210608140412}
      />

      <Route
        exact
        path="/khong-o-ep-minh-trong-hinh-mau-idol-sexy-dai-tra-nu-streamer-chap-nhan-lam-nguoi-toi-co-tu-tin-voi-phong-cach-rieng"
        component={pages.page_20210608140402}
      />

      <Route
        exact
        path="/huong-dan-bao-ve-suc-khoe-di-kem-anh-bikini-goi-cam-nu-bac-si-xinh-dep-khien-cdm-phat-sot"
        component={pages.page_20210608140350}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-leo-rank-de-dang-hon-voi-meo-xoay-trang-bi-cho-chu-luc-tu-ky-thu-thach-dau"
        component={pages.page_20210608140340}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-3-doi-hinh-bong-nhien-duoc-tin-dung-tro-lai-nho-kha-nang-khac-che-meta-thay-ma"
        component={pages.page_20210608140326}
      />

      <Route
        exact
        path="/bo-tien-ve-tuan-anh-con-toi-nhieu-lan-chan-thuong-roi-nhin-indonesia-da-the-thay-so-qua"
        component={pages.page_20210607183934}
      />

      <Route
        exact
        path="/ca-mxh-khong-ngu-de-co-vu-dt-viet-nam-da-bong-gay-can-qua-roi"
        component={pages.page_20210607183917}
      />

      <Route
        exact
        path="/cau-thu-indonesia-chap-tay-xin-loi-tuan-anh-trong-duong-ham-vi-pham-loi-nguy-hiem"
        component={pages.page_20210607183906}
      />

      <Route
        exact
        path="/chum-anh-oi-gioi-oi-van-hau-dep-trai-qua"
        component={pages.page_20210607183855}
      />

      <Route
        exact
        path="/chung-kien-cau-thu-indonesia-lien-tuc-vao-bong-triet-ha-nam-vuong-boxing-truong-dinh-hoang-hien-ke-cho-thay-tro-hlv-park-hang-seo"
        component={pages.page_20210607183844}
      />

      <Route
        exact
        path="/day-dich-thi-la-bo-vay-kem-duyen-nhat-cbiz-hom-qua-lai-con-tong-teng-1-vat-o-ngay-cho-nhay-cam"
        component={pages.page_20210607183825}
      />

      <Route
        exact
        path="/duy-manh-bop-co-cau-thu-indonesia-sau-pha-pham-loi-nguy-hiem-voi-tuan-anh"
        component={pages.page_20210607183631}
      />

      <Route
        exact
        path="/fan-viet-nam-che-loat-anh-hai-huoc-sau-tran-thang-indonesia"
        component={pages.page_20210607183618}
      />

      <Route
        exact
        path="/nga-ngua-nhan-sac-that-cua-dan-sao-o-su-kien-thap-quang-nhiet-ba-gay-soc-vi-da-chay-xe-luu-diec-phi-gay-that-vong-tran-tre"
        component={pages.page_20210607183602}
      />

      <Route
        exact
        path="/nhiet-ba-ngay-cang-tao-bao-toi-ngop-tho-het-khoe-lung-tran-sexy-lai-bat-lu-voi-vay-xuyen-thau-khoe-vong-1-cang-tran"
        component={pages.page_20210607183550}
      />

      <Route
        exact
        path="/nhin-nhiet-ba-ganh-tam-vay-nhin-ma-phat-ngot-nay-ta-nhu-hieu-duoc-tam-quan-trong-cua-nhan-sac-trong-chuyen-an-mac"
        component={pages.page_20210607183535}
      />

      <Route
        exact
        path="/nhung-khoanh-khac-tuyet-dep-cua-tuyen-viet-nam-khien-nguoi-ham-mo-do-ran-ran"
        component={pages.page_20210607183435}
      />

      <Route
        exact
        path="/noi-cau-truoc-trong-tai-nhung-hlv-park-hang-seo-vo-cung-tinh-cam-om-hoc-tro-sau-tran-thang-indonesia"
        component={pages.page_20210607183422}
      />

      <Route
        exact
        path="/tien-linh-cau-thu-mlem-mlem-chua-co-bo-hot-nhat-hom-nay-la-ai"
        component={pages.page_20210607183406}
      />

      <Route
        exact
        path="/top-10-hoa-hau-thuc-ca-dem-co-vu-doan-van-hau-nhu-nay-khong-yeu-phi-qua"
        component={pages.page_20210607183356}
      />

      <Route
        exact
        path="/tran-bong-qua-di-btv-bien-cuong-de-lai-ro-quote-day-khong-phai-bong-da-day-la-vo-thuat"
        component={pages.page_20210607183344}
      />

      <Route
        exact
        path="/van-toan-duoc-dong-doi-cong-len-xe-tro-ve-khach-san-sau-tran-thang-indonesia"
        component={pages.page_20210607183313}
      />

      <Route
        exact
        path="/xuc-dong-hinh-anh-tuyen-viet-nam-dat-tay-len-nguc-trai-thuc-hien-le-chao-co-sau-gan-2-nam-khong-thi-dau-quoc-te"
        component={pages.page_20210607183256}
      />

      <Route
        exact
        path="/dau-truong-chan-ly-toc-thay-ma-va-kayle-nhan-nhung-nerf-vo-cung-nang-ne-tu-riot-tai-ban-1112"
        component={pages.page_20210607104018}
      />

      <Route
        exact
        path="/thien-than-eimi-fukada-hot-hoang-khi-bi-fan-phat-hien-dia-chi-nha-trong-dem-phai-chuyen-di-ngay-tap-lu"
        component={pages.page_20210607104004}
      />

      <Route
        exact
        path="/fan-xuc-dong-khi-biet-y-nghia-day-so-tren-ao-lee-kwang-soo-trong-tap-cuoi-ghi-hinh-running-man"
        component={pages.page_20210607103948}
      />

      <Route
        exact
        path="/dien-vay-xe-nguc-sau-tao-bao-duong-mich-khien-nguoi-tinh-hua-khai-boi-roi-khong-dam-nhin-ngay-tren-san-khau"
        component={pages.page_20210607103935}
      />

      <Route
        exact
        path="/game-mobile-fanmade-cua-viet-nam-dung-top-1-bxh-cong-game-noi-tieng-trung-quoc-vuot-qua-ca-dtcl-mobile"
        component={pages.page_20210607103429}
      />

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

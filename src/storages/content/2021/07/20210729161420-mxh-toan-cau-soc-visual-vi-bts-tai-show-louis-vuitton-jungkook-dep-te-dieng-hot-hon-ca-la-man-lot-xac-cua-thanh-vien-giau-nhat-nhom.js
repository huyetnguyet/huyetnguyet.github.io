import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/07/2021 04:14 PM',
"title": 'MXH toàn cầu "sốc visual" vì BTS tại show Louis Vuitton: Jungkook đẹp tê điếng, hot hơn cả là màn lột xác của thành viên giàu nhất nhóm',
"description": 'BTSxLouisVuitton đã trở thành hashtag nóng nhất mạng xã hội hiện tại.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20480873342068777127434615991189081392576798n-162566155003360307880.jpg',
"alt": 'BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/mxh-toan-cau-soc-visual-vi-bts-tai-show-louis-vuitton-jungkook-dep-te-dieng-hot-hon-ca-la-man-lot-xac-cua-thanh-vien-giau-nhat-nhom',
"zcomponent": 'page_20210729161420',
"filepath": './20210729161420-mxh-toan-cau-soc-visual-vi-bts-tai-show-louis-vuitton-jungkook-dep-te-dieng-hot-hon-ca-la-man-lot-xac-cua-thanh-vien-giau-nhat-nhom.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'MXH toàn cầu "sốc visual" vì BTS tại show Louis Vuitton: Jungkook đẹp tê điếng, hot hơn cả là màn lột xác của thành viên giàu nhất nhóm';
const author = "HỒNG HẢI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "BTSxLouisVuitton đã trở thành hashtag nóng nhất mạng xã hội hiện tại.";
const link =
  "mxh-toan-cau-soc-visual-vi-bts-tai-show-louis-vuitton-jungkook-dep-te-dieng-hot-hon-ca-la-man-lot-xac-cua-thanh-vien-giau-nhat-nhom";
const tagparam = [
  "BTS",
  "bangtan boys (bts)",
  "v (bts)",
  "jungkook (bts)",
  "Jimin (BTS)",
  "Jin (BTS)",
  "suga (bts)",
  "RM (BTS)",
  "j-hope (bts)",
  "sao Hàn",
  "Louis Vuitton",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210729161420() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Vào ngày 7/7, <strong>BTS</strong> đã tham dự sự kiện show
                    diễn <strong>Louis Vuitton</strong> Men Show 2021 tại Seoul.
                    7 chàng trai đã mở đầu show diễn và ngay lập tức gây nổ mạng
                    xã hội toàn cầu nhờ visual đỉnh cao, thần thái cuốn hút.
                    Hiện tại hashtag #BTSxLouisVuitton đang là chủ đề hot nhất
                    trên mạng xã hội.
                  </p>
                  <p>
                    Từng khoảnh khắc phô diễn visual đỉnh cao, diện mạo mới mẻ
                    của 7 thành viên đã khiến fan không thể rời mắt ngắm nhìn,
                    bàn tán không ngừng. Tất cả đều lên đồ đẳng cấp, phô diễn
                    visual trong những bộ cánh đắt đỏ bậc nhất. Trong đó,
                    Jungkook và J-Hope đã khiến dân tình "sốc visual" toàn tập.
                    Với mái tóc ngắn, em út vàng của nhóm khoe trọn vẹn được
                    gương mặt cực phẩm, nhưng thành viên giàu nhất nhóm J-Hope
                    mới là yếu tố gây bão với màn lên hương visual ngoạn mục nhờ
                    mái tóc bạch kim mới toanh khiến fan không ngừng hú hét.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5sffcmvuamkbeh-1625660455744633625107.jpg"
                    alt="1, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Dù để tóc ngắn hay tóc dài, em út BTS vẫn đẹp hút hồn. Mái tóc ngắn mới giúp tôn lên đường nét gương mặt cực phẩm của Jungkook, làm nổi bật quai hàm sắc sảo, sống mũi cao thẳng đầy nam tính"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5r-8d8xwaiwsie-1625661142820263420514.jpg"
                    alt="2, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Ở Jungkook toát lên thần thái cực cuốn hút, quá sang chảnh trong thiết kế của nhà mốt Louis Vuitton"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5sfg2zucayyczr-1625661153262408477462.jpg"
                    alt="3, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Em út BTS ngày càng quyến rũ, càng ngắm càng không thể rời mắt khỏi gương mặt cực phẩm trời cho này"
                  />
                  <p>
                    Cận cảnh gương mặt cực phẩm của Jungkook khiến dân tình "hú
                    hét" vì quá hoàn hảo
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20279013813696797634847557514897288608481742n-1625667149296503237495.jpg"
                    alt="4, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Diện áo choàng dài, Jungkook sang chảnh như quý tộc châu Âu"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5r8ep5vcaanvr-16256611432261921549583.jpg"
                    alt="5, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Từng bị netizen coi là thành viên mờ nhạt trong nhóm, thế nhưng với kiểu tóc mới, visual của J-Hope đã lên hương trông thấy, trở nên cuốn hút, bí ẩn và không kém phần ma mị"
                  />
                  <p>
                    Đường nét gương mặt của J-Hope là sự pha trộn giữa nam tính
                    và dịu dàng, khiến mọi fangirl đều "gục ngã"
                  </p>
                  <p>
                    Dù quay trong cảnh "tranh tối tranh sáng", nhưng J-Hope vẫn
                    khoe được gương mặt cực phẩm, sống mũi cao vút...
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5sepw8vkaueorr-1625660455613692413755.jpg"
                    alt="6, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="... cùng màn đi catwalk điệu nghệ không kém người mẫu chuyên nghiệp"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5senwzveayulof-16256604556701644374109.jpg"
                    alt="7, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="J-Hope chính là thành viên có màn lột xác visual ấn tượng nhất trong show diễn này"
                  />
                  <p>
                    Không hổ danh "gương mặt đẹp nhất thế giới", gương mặt sắc
                    nét như đồ họa của V khiến ai nấy đều choáng váng khi nhìn
                    vào
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20487679313696799868180661018276866659500329n-1625667148739112897019.jpg"
                    alt="8, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Nhiều netizen nhận xét V toát lên vẻ sang chảnh và vô cùng quyền lực, pha chút lạnh lùng ma mị cuốn hút"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20508013813696796368181013878691217806250907n-16256671491971574021386.jpg"
                    alt="9, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Ánh mắt mạnh mẽ, đường nét gương mặt sắc sảo, V đẹp như 1 tác phẩm nghệ thuật đúng nghĩa"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/base64-1625661447035630207164.png"
                    alt="10, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Cận cảnh gương mặt không tìm ra khuyết điểm để chê bai của V"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/21449473413696798168180833450381079963973157n-16256671491811537039353.jpg"
                    alt="11, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="V hoàn toàn có thể lấn sân làm người mẫu chuyên nghiệp"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20744393113696799534847366456047482531982309n-16256671490261099172474.jpg"
                    alt="12, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Vẻ đẹp unisex của nam idol đa năng rất được lòng các fangirl. Diện chiếc kính sang chảnh, Jimin càng thêm phần cuốn hút"
                  />
                  <p>
                    Thần thái và ánh mắt của nam idol khiến fan phải thốt lên:
                    "Sao có thể xuất sắc đến vậy!"
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20965573613696799134847407751779442444184111n-16256671491261081808401.jpg"
                    alt="13, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Theo thời gian, nhan sắc và thần thái của Jimin cũng ngày càng thăng hạng"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/2072501361369679836818081431816990515653592n-16256671491441516999245.jpg"
                    alt="14, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Thần thái sang chảnh, lạnh lùng “chết người”"
                  />
                  <p>
                    "Trai đẹp toàn cầu" đẹp lãng tử, ôn hòa với kiểu tóc bồng
                    bềnh, toát lên thần thái sang như quý tộc nhờ mái tóc vàng
                    bắt mắt
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20859525013696796801514305326864137083480961n-16256671493181811429418.jpg"
                    alt="15, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Gương mặt hoàn hảo của Jin không có góc chết, nên quay từ góc độ nào anh cũng đẹp miễn chê"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/base64-1625661723951385474709.png"
                    alt="16, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Jin sở hữu làn da căng bóng hoàn hảo, sống mũi cao, đôi mắt ấm áp v à đôi môi dày cực sexy"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20149922613696797334847584512401091085728841n-16256671489542075455136.jpg"
                    alt="17, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Bờ vai Thái Bình Dương khiến Jin vô cùng nổi bật trong thiết kế cao cấp"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5scfmqxoasevzh-16256618814952090323582.jpg"
                    alt="18, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note="Không fan nào có thể bỏ qua vẻ lạnh lùng, quyến rũ của Suga. Mái tóc xanh càng khiến visual của anh chàng thêm nổi bật"
                  />
                  <p>
                    Ánh mắt sắc sảo đầy thần thái từng biểu cảm của Suga đều
                    khiến fan "lịm tim"
                  </p>
                  <p>
                    Bên cạnh V, Jungkook, Jin, Suga cũng từng lọt top những
                    gương mặt đẹp nhất thế giới, đủ thấy visual của nam rapper
                    đỉnh cỡ nào
                  </p>
                  <p>
                    RM đẹp chuẩn quý ông lịch lãm với bộ vest cao cấp, chuẩn
                    từng milimet
                  </p>
                  <p>Và "biến hình" trở lại làm nam rapper chất phát ngất</p>
                  <p>
                    Sang chảnh đẳng cấp như thế này thì làm gì có fan nào chưa
                    "đổ gục"?
                  </p>
                  <p>Nguồn ảnh: Sưu tầm</p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/20480873342068777127434615991189081392576798n-162566155003360307880.jpg"
                    alt="19, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5srwsoxiae7zzh-1625661143003460328862.jpg"
                    alt="20, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/21471549913696798001514186609057632988581037n-1625667149277753241189.jpg"
                    alt="21, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5semlouyayssyp-16256604557011252989664.jpg"
                    alt="22, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/base64-16256616150172126126353.png"
                    alt="23, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/base64-1625661681621196606469.png"
                    alt="24, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/7/e5scfmqxoasevzh-16256618814952090323582.jpg"
                    alt="25, BTS,bangtan boys (bts),v (bts),jungkook (bts),Jimin (BTS),Jin (BTS),suga (bts),RM (BTS),j-hope (bts),sao Hàn,Louis Vuitton,"
                    note=""
                  />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

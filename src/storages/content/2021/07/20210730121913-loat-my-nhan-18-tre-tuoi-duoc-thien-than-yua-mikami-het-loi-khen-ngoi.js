import React from "react";
import "components/page.scss";
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
"timestamp": '30/07/2021 12:19 PM',
"title": 'Loạt mỹ nhân 18+ trẻ tuổi được thiên thần Yua Mikami hết lời khen ngợi',
"description": 'Những cô gái này đều là các đàn em được Yua Mikami yêu thích và cũng được đánh giá cao bởi công chúng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/-162755398443429398537.jpg',
"alt": 'RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,',
"category": 'images',
"date": '30/07/2021',
"time": '12:19 PM',
"link": '/loat-my-nhan-18-tre-tuoi-duoc-thien-than-yua-mikami-het-loi-khen-ngoi',
"zcomponent": 'page_20210730121913',
"filepath": './20210730121913-loat-my-nhan-18-tre-tuoi-duoc-thien-than-yua-mikami-het-loi-khen-ngoi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Loạt mỹ nhân 18+ trẻ tuổi được thiên thần Yua Mikami hết lời khen ngợi";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:19 PM";
const description =
  "Những cô gái này đều là các đàn em được Yua Mikami yêu thích và cũng được đánh giá cao bởi công chúng.";
const link =
  "loat-my-nhan-18-tre-tuoi-duoc-thien-than-yua-mikami-het-loi-khen-ngoi";
const tagparam = ["RIKKA ONO", "IDOL", "YUA MIKAMI", "NOZOMI ISHIHARA"];
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

export default function page_20210730121913() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <h5>1. Rikka Ono</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/-162755398443429398537.jpg"
                      alt="1, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      {" "}
                      <strong>Rikka Ono</strong> sinh năm 2002, mới chỉ gia nhập
                      ngành giải trí vào tháng 4/2020 với tư cách diễn viên phim
                      người lớn. Hiện tại, cô nàng đang là diễn viên độc quyền
                      của công ty Moodyz và là 1 trong những cái tên trẻ nhất
                      trong lịch sử tham gia vào ngành công nghiệp này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/-16275540317471132883849.jpg"
                      alt="2, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      Ngay từ khi mới xuất hiện, <strong>Rikka Ono</strong> đã
                      tạo nên ấn tượng mạnh với nhan sắc xinh đẹp, mong manh,
                      trong sáng và vô cùng đáng yêu. Cô nàng chỉ cao có 148 cm,
                      với số đo 3 vòng lần lượt là 81 - 58 - 82. Dù vậy, điều
                      này cũng không quá ảnh hưởng tới tình cảm của fan hâm mộ
                      dành cho cô nàng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi trình làng, <strong>Rikka Ono</strong> đã ngay lập
                      tức leo lên top 1 bảng xếp hạng trong vòng 3 ngày liên
                      tiếp. Cô nàng cũng được giới chuyên môn đánh giá khá cao,
                      khi được xếp thứ 2 trong số các tân binh phim 18+ trình
                      làng trong năm 2020, còn sản phẩm trình làng cũng nằm
                      trong top 5 những sản phẩm bán chạy nhất của năm.
                    </p>
                    <h5>2. Nozomi Ishihara</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627554056874791606921.jpg"
                      alt="3, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      {" "}
                      <strong>Nozomi Ishihara</strong> sinh năm 2001, gia nhập
                      ngành công nghiệp 18+ vào tháng 6/2020. Với khuôn mặt xinh
                      đẹp, thân hình nóng bỏng cùng tính cách duyên dáng, cô
                      nàng nhanh chóng được các cư dân mạng chú ý và đem so sánh
                      với các "nữ thần AV" trước đây. Trong khoảng 3 tháng giữa
                      năm 2020, Nozomi Ishihara liên tục giữ vị trí số 1 trong
                      bảng xếp hạng của các nền tảng 18+. Nhận thấy sức hút của
                      cô gái trẻ, thậm chí các studio lớn của ngành công nghiệp
                      AV cũng đã vào cuộc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627554058555416943705.jpg"
                      alt="4, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      {" "}
                      Trước đây, <strong>Nozomi Ishihara</strong> chỉ là 1 nữ
                      diễn viên tự do và được trả lương ở mức khá thấp, nếu so
                      sánh với các diễn viên độc quyền. Tuy nhiên, hãng phim
                      Moodyz đã chìa tay ra với Nozomi mời 1 bản hợp đồng với
                      mức lót tay có giá trị lớn để mời cô gái này ký hợp đồng
                      độc quyền. Theo thống kê từ bảng xếp hạng, Nozomi Ishihara
                      đứng hạng 7 trong số các diễn viên 18+ ăn khách nhất, và
                      cũng là tân binh thành công nhất năm 2020.
                    </p>

                    <h5>3. Marin Hinata</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275543377811536616262.jpg"
                      alt="5, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      {" "}
                      Marin Hinata sinh năm 1997, gia nhập ngành giải trí vào
                      tháng 7/2018 với tư cách 1 người mẫu gravure. Tới giữa năm
                      2019, cô nàng quyết định chuyển sang gia nhập ngành công
                      nghiệp phim người lớn khi đầu quân cho công ty S1 và từ đó
                      đã trở thành 1 trong những cái tên đáng chú ý nhất của
                      công ty này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275541538391304608369.jpg"
                      alt="6, RIKKA ONO,IDOL,YUA MIKAMI,NOZOMI ISHIHARA,"
                      note=""
                    />
                    <p>
                      Không giống như nhiều cô gái khác, cô gái có biệt danh
                      Tamarin có 1 hình thể thật sự mang chuẩn của 1 người mẫu
                      thời trang thực thụ. Cô nàng cao tới 171cm, với số đô 3
                      vòng là 86/60/88 cm. Bản thân Marin cũng chia sẻ, trước
                      khi chuyển sang ngành công nghiệp 18+, cô gái trẻ cũng đã
                      hoạt động với tư cách là người mẫu và vũ công. Tuy nhiên,
                      điều này cũng gây ảnh hưởng lớn đến thói quen của cô nàng
                      khi luôn có thói quen nhìn thẳng và máy quay và đã mất kha
                      khá thời gian để sửa lại điều này.
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

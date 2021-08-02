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
"timestamp": '02/08/2021 01:19 AM',
"title": 'One Piece: Biến thành động vật và 3 đặc điểm của trái ác quỷ hệ Zoan khác hẳn những hệ khác',
"description": 'Người sở hữu năng lực trái ác quỷ hệ Zoan có khả năng biến thành một loài động vật, kèm theo đó là các đặc điểm cũng như khả năng của loài vật đó.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627800104680345133960.jpg',
"alt": 'ONE PIECE,TRÁI ÁC QUỶ,TRÁI ZOAN,ZOAN CỔ ĐẠI,LOẠI TRÁI ÁC QUỶ,',
"category": 'games',
"date": '02/08/2021',
"time": '01:19 AM',
"link": '/one-piece-bien-thanh-dong-vat-va-3-dac-diem-cua-trai-ac-quy-he-zoan-khac-han-nhung-he-khac',
"zcomponent": 'page_20210802011936',
"filepath": './20210802011936-one-piece-bien-thanh-dong-vat-va-3-dac-diem-cua-trai-ac-quy-he-zoan-khac-han-nhung-he-khac.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "One Piece: Biến thành động vật và 3 đặc điểm của trái ác quỷ hệ Zoan khác hẳn những hệ khác";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:19 AM";
const description =
  "Người sở hữu năng lực trái ác quỷ hệ Zoan có khả năng biến thành một loài động vật, kèm theo đó là các đặc điểm cũng như khả năng của loài vật đó.";
const link =
  "one-piece-bien-thanh-dong-vat-va-3-dac-diem-cua-trai-ac-quy-he-zoan-khac-han-nhung-he-khac";
const tagparam = [
  "ONE PIECE",
  "TRÁI ÁC QUỶ",
  "TRÁI ZOAN",
  "ZOAN CỔ ĐẠI",
  "LOẠI TRÁI ÁC QUỶ",
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

export default function page_20210802011936() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    So với <strong>trái ác quỷ</strong> hệ Paramecia và Logia,
                    năng lực của trái ác quỷ hệ Zoan không hề bị lép vế. Dưới
                    đây là 4 đặc điểm của <strong>trái Zoan</strong> trong{" "}
                    <strong>One Piece</strong> so với các{" "}
                    <strong>loại trái ác quỷ</strong> khác:
                  </p>
                  <h5>
                    1. Giúp tăng khả năng thể chất, cả tấn công và phòng thủ cho
                    người sử dụng
                  </h5>
                  <p>
                    <strong>Trái ác quỷ</strong> hệ Zoan giúp tăng cường khả
                    năng thể chất cho người dùng. Điều này bao gồm cả sức mạnh
                    tấn công, cũng như độ dẻo dai để tiếp nhận các cuộc tấn
                    công. Tùy thuộc vào từng loại Zoan khác khác mà người ăn nó
                    cũng có thể được tăng cường thính giác, cải thiện thị lực
                    hoặc khả năng bay.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627800104680345133960.jpg"
                    alt="1, ONE PIECE,TRÁI ÁC QUỶ,TRÁI ZOAN,ZOAN CỔ ĐẠI,LOẠI TRÁI ÁC QUỶ,"
                    note=""
                  />
                  <p>
                    Đối với những chiến binh muốn tăng sức công phá của các đòn
                    tấn công vật lý và độ dẻo dai, <strong>trái ác quỷ</strong>{" "}
                    hệ Zoan sẽ vô cùng thích hợp, hơn cả hệ Logia hay hệ
                    Paramecia. Đặc biệt là khi sức mạnh và sự dẻo dai này được
                    kết hợp với Busoshoku Haki, người sử dụng hệ Zoan sẽ trở nên
                    khó bị đánh bại và có thể hạ gục kẻ thù một cách nhanh
                    chóng.
                  </p>
                  <p>
                    <strong>Trái Zoan</strong> cổ đại thậm chí còn có độ dẻo dai
                    cao hơn hệ Zoan bình thường. Lấy ví dụ là khi Page One có
                    thể chịu được đòn tấn công của Sanji và tiếp tục đứng dậy.
                    Hay Ulti vẫn tiếp tục chiến đấu mặc dù bị Yamato đánh gục
                    bởi Raimei Hakke.
                  </p>
                  <h5>
                    2. Hệ Zoan thần thoại cung cấp khả năng "biến thân" thành
                    những sinh vật vô cùng mạnh mẽ kèm thêm năng lực đặc biệt
                  </h5>
                  <p>
                    Những người có thể tìm thấy và ăn được{" "}
                    <strong>trái Zoan</strong> thần thoại là những người rất may
                    mắn. Bởi ngoài việc có được các khả năng cơ bản của người
                    dùng hệ Zoan, cụ thể là biến thân thành động vật, họ cũng sẽ
                    nhận được thêm các siêu năng lực khác.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-16278001069011647927399.jpg"
                    alt="2, ONE PIECE,TRÁI ÁC QUỶ,TRÁI ZOAN,ZOAN CỔ ĐẠI,LOẠI TRÁI ÁC QUỶ,"
                    note=""
                  />
                  <p>
                    Ví dụ hình dạng cáo chín đuôi của Catharina Devon có thể cải
                    trang thành người khác một cách hoàn hảo. Hình dạng rồng của
                    Kaido có thể "bay" bằng cách giẫm lên các đám mây. Hay hình
                    dạng phượng hoàng của Marco có thể thể dùng ngọn lửa xanh
                    chữa lành cho người khác và chính mình.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>3. Có thể tạo hoạt ảnh cho các đối tượng</h5>

                  <p>
                    Khi một <strong>trái Zoan</strong> được "ăn" bởi một đối
                    tượng đặc biệt (súng, kiếm,...) thì nó có thể trở thành sinh
                    vật sống. Vẫn chưa biết phương pháp cho vật vô tri ăn{" "}
                    <strong>trái ác quỷ</strong> như thế nào, nhưng điều này
                    thực sự có thể thực hiện trong thế giới{" "}
                    <strong>One Piece</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-2-1627800105893943334481.jpg"
                    alt="3, ONE PIECE,TRÁI ÁC QUỶ,TRÁI ZOAN,ZOAN CỔ ĐẠI,LOẠI TRÁI ÁC QUỶ,"
                    note=""
                  />
                  <p>
                    Chúng ta cũng đã thấy một số trường hợp như thế, chẳng hạn
                    như Funkfreed của Spandam thực chất là một thanh kiếm, nhưng
                    lại trở thành một con voi. Hay Lassoo -bazooka của Mr. 4 có
                    thể trở thành chó.
                  </p>
                  <p>
                    Vẫn chưa biết liệu <strong>trái ác quỷ</strong> hệ Paramecia
                    và Logia có thể làm được điều này hay không. Ngay cả khi có
                    thể, tôi nghĩ cũng sẽ không tuyệt vời bằng Zoan. Ví dụ như
                    một thanh kiếm có khả năng cao su, hoặc một thanh kiếm với
                    nguyên tố sét, chứ không thể trở thành sinh vật sống.
                  </p>
                  <h5>
                    4. Có được các đặc điểm của động vật tương ứng cũng rất hữu
                    ích
                  </h5>
                  <p>
                    Như đã biết, những người ăn <strong>trái ác quỷ</strong> hệ
                    Zoan có khả năng biến hóa thành loại động vật mà trái cho
                    năng lực, cũng như có được kỹ năng, khả năng của loài động
                    vật ấy sở hữu. Ở dạng này, người dùng dường như mạnh hơn,
                    khỏe hơn và nguy hiểm hơn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-3-16278001063911250751497.jpg"
                    alt="4, ONE PIECE,TRÁI ÁC QUỶ,TRÁI ZOAN,ZOAN CỔ ĐẠI,LOẠI TRÁI ÁC QUỶ,"
                    note=""
                  />
                  <p>
                    Trái hệ Zoan không chỉ được dựa trên những loài động vật
                    thông thường, chúng có thể là những loài động vật tiền sử đã
                    bị tuyệt chủng như khủng long hay những loài thần thoại như
                    rồng. Những trái hệ Zoan tiền sử và thần thoại có sức mạnh
                    vượt trội hơn so với những <strong>trái Zoan</strong> bình
                    thường. Thậm chí, những Zoan thần thoại còn hiếm hơn cả hệ
                    Logia
                  </p>
                  <p>
                    Ví dụ <strong>trái Zoan</strong> model chim có thể cấp cho
                    người dùng đôi cánh để bay lượn trên không trung. Những nhân
                    vật như Marco và Pell trở nên nguy hiểm hơn vì khả năng này.
                    Hay trái <strong>Zoan cổ đại</strong> có thể khiến cơ thể
                    người dùng trở nên to lớn hơn và nguy hiểm hơn. Ví dụ cơ thể
                    của Queen khi biến thành khủng long Brachiosaurus, nó quá
                    lớn và việc đánh bại hắn ở dạng này sẽ khó khăn hơn.
                  </p>
                  <p>
                    Ngoài ra, người sử dụng hệ Zoan cũng có thể sử dụng các bộ
                    phận cơ thể động vật của họ để trợ giúp trong trận chiến.
                    Người ăn cũng có khả năng hóa thân thành dạng bán thú, nửa
                    người nửa động vật. Hệ Zoan cũng có thể giúp người ăn nó
                    biến hóa thành súng hoặc gươm.
                  </p>
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

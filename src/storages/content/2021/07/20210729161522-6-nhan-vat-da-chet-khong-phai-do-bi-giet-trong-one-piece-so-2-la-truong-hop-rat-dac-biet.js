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
"timestamp": '29/07/2021 04:15 PM',
"title": '6 nhân vật đã chết không phải do bị giết trong One Piece, số 2 là trường hợp rất đặc biệt',
"description": 'Không phải cái chết nào trong One Piece cũng do bị giết đâu nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257367946381870341655.jpg',
"alt": 'ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,',
"category": 'games',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/6-nhan-vat-da-chet-khong-phai-do-bi-giet-trong-one-piece-so-2-la-truong-hop-rat-dac-biet',
"zcomponent": 'page_20210729161522',
"filepath": './20210729161522-6-nhan-vat-da-chet-khong-phai-do-bi-giet-trong-one-piece-so-2-la-truong-hop-rat-dac-biet.js'
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
  "6 nhân vật đã chết không phải do bị giết trong One Piece, số 2 là trường hợp rất đặc biệt";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:15 PM";
const description =
  "Không phải cái chết nào trong One Piece cũng do bị giết đâu nhé!";
const link =
  "6-nhan-vat-da-chet-khong-phai-do-bi-giet-trong-one-piece-so-2-la-truong-hop-rat-dac-biet";
const tagparam = [
  "ONE PIECE",
  "CÁI CHẾT ONE PIECE",
  "NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH",
  "PORTGAS D. ROUGE",
  "VINSMOKE SORA",
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

export default function page_20210729161522() {
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
                    <p>
                      Trong các anime shonen, nguyên nhân cái chết của một nhân
                      vật thường là do bị giết hoặc hy sinh bản thân vì người
                      khác. Ví dụ điển hình là trong series Naruto, thế giới
                      nhẫn giả khốc liệt đến mức hầu như tất cả các nhân vật đã
                      chết đều mất mạng vì họ bị giết hoặc vì họ hy sinh bản
                      thân.
                    </p>
                    <p>
                      Và điều này cũng đã xảy ra trong{" "}
                      <strong>One Piece</strong>, ngay cả những hải tặc huyền
                      thoại như Gol D. Roger và Râu Trắng dù bản thân mắc bệnh
                      nặng cũng bị giết bởi những người khác. Cụ thể Gol D.
                      Roger bị xử tử, và Râu Trắng chết trong trận chiến ở Tổng
                      bộ hải quân.
                    </p>
                    <p>
                      Tuy nhiên, cũng có 1 số nhân vật{" "}
                      <strong>One Piece</strong> bị chết vì bệnh tật, cùng điểm
                      qua những cái tên này ở dưới đây nhé!
                    </p>
                    <h5>1. Banchina</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257367946381870341655.jpg"
                      alt="1, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      Banchina là mẹ của Usopp, người phụ nữ này đã phải 1 mình
                      vất vả nuôi con vì người chồng Yasopp đã bỏ đi làm hải tặc
                      và thực hiện chuyến phiêu lưu ngoài khơi. Khi Usopp còn
                      nhỏ, Banchina đã chết vì bệnh tật. Vẫn chưa biết liệu
                      Yasopp có biết về điều này hay không.
                    </p>
                    <h5>2. Portgas D. Rouge</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257367957161957878896.jpg"
                      alt="2, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      <strong>Portgas D. Rouge</strong> là mẹ của Portgas D.
                      Ace. Bà đã chết vì kiệt sức sau khi trì hoãn sự ra đời của
                      Ace trong một thời gian dài để bảo vệ tính mạng con trai
                      mình khỏi sự truy lùng gắt gao của kẻ thù. Cho đến nay,
                      Rouge là nhân vật có chữ D. duy nhất trong tên được biết
                      là chết không phải do bị giết.
                    </p>
                    <h5>3. Vinsmoke Sora</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-2-16257367973761791643083.jpg"
                      alt="3, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      <strong>Vinsmoke Sora</strong> phản đối quyết định chỉnh
                      sửa gen của chồng. Thế nên Sora đã sử dụng chất kích thích
                      để chống lại tác động của một cuộc phẫu thuật có thể biến
                      những đứa con của cô thành những "siêu nhân vô cảm".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thật không may, thuốc đã ảnh hưởng xấu đến sức khỏe của
                      Sora. Tình trạng sức khỏe của cô ngày càng xấu đi và đó là
                      một trong những nguyên nhân khiến cô qua đời. Trong khi
                      đó, đứa trẻ duy nhất không bị ảnh hưởng bởi tác dụng của
                      loại thuốc mà cô uống là Sanji, tuy không có sức mạnh "vô
                      địch" nhưng anh vẫn giữ được cảm xúc của mình, đúng như
                      mong muốn của Sora.
                    </p>
                    <h5>4. Vợ của Donquixote Homing</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-3-16257367968711983906572.jpg"
                      alt="4, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      Vợ của Donquixote Homing và mẹ của Rosinante cùng
                      Doflamingo cũng chết vì bạo bệnh. Sau khi rời bỏ vùng đất
                      thành để sống cuộc sống như những người dân bình thường,
                      gia đình Donquixote buộc phải sống trong cảnh nghèo khó
                      sau khi mọi người phát hiện ra họ là Tenryuubito. Có những
                      người vì tức giận còn đốt ngôi nhà của gia đình này. Cuối
                      cùng, điều kiện sống tồi tệ này đã dẫn đến cái chết của vợ
                      Homing.
                    </p>
                    <h5>5. Gimlet</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-4-16257367962721207968562.jpg"
                      alt="5, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      Gimlet là con trai của Russian và Senor Pink. Thật không
                      may, đứa trẻ này đã chết vì sốt khi không có cha ở nhà.
                    </p>
                    <h5>6. Russian</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/8/photo-5-1625736795737744408225.jpg"
                      alt="6, ONE PIECE,CÁI CHẾT ONE PIECE,NHÂN VẬT ONE PIECE CHẾT VÌ BỊ BỆNH,PORTGAS D. ROUGE,VINSMOKE SORA,"
                      note=""
                    />
                    <p>
                      Sau khi mất đi đứa con, Russian - vợ của Senor Pink đã rơi
                      vào trạng thái sống thực vật. Senor Pink thậm chí còn mặc
                      bộ quần áo trẻ em và ngậm núm ti giả trong nỗ lực cổ vũ vợ
                      của mình. Vợ anh ta đã có phản ứng ngạc nhiên khi anh mặc
                      đồ cho em bé. Thế nhưng Russian không bao giờ có thể hồi
                      phục và cuối cùng cô ấy đã chết.
                    </p>
                  </div>
                  <AdsHorizontal />
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

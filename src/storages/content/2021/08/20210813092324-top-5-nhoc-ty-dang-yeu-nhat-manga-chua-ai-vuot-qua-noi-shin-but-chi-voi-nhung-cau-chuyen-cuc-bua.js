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
"timestamp": '13/08/2021 09:23 AM',
"title": 'Top 5 nhóc tỳ đáng yêu nhất manga, chưa ai vượt qua nổi "Shin bút chì" với những câu chuyện cực bựa',
"description": 'Phải công nhận là em bé và con nít trong thế giới anime/manga thật dễ thương vô cùng. Mắt to tròn lấp lánh, hành động ngây ngô, đôi khi việc tỏ ra già trước tuổi của những đứa nhóc này thật "đốn tim".',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/11/anh-1-1628667756366728369037.jpg',
"alt": 'ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,',
"category": 'games',
"date": '13/08/2021',
"time": '09:23 AM',
"link": '/top-5-nhoc-ty-dang-yeu-nhat-manga-chua-ai-vuot-qua-noi-shin-but-chi-voi-nhung-cau-chuyen-cuc-bua',
"zcomponent": 'page_20210813092324',
"filepath": './20210813092324-top-5-nhoc-ty-dang-yeu-nhat-manga-chua-ai-vuot-qua-noi-shin-but-chi-voi-nhung-cau-chuyen-cuc-bua.js'
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
  'Top 5 nhóc tỳ đáng yêu nhất manga, chưa ai vượt qua nổi "Shin bút chì" với những câu chuyện cực bựa';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:23 AM";
const description =
  'Phải công nhận là em bé và con nít trong thế giới anime/manga thật dễ thương vô cùng. Mắt to tròn lấp lánh, hành động ngây ngô, đôi khi việc tỏ ra già trước tuổi của những đứa nhóc này thật "đốn tim".';
const link =
  "top-5-nhoc-ty-dang-yeu-nhat-manga-chua-ai-vuot-qua-noi-shin-but-chi-voi-nhung-cau-chuyen-cuc-bua";
const tagparam = [
  "ANIME NHẬT BẢN",
  "NHÓC TỲ",
  "NHÂN VẬT ANIME",
  "SHIN CẬU BÉ BÚT CHÌ",
  "CHIE CÔ BÉ HẠT TIÊU",
  "NHÓC MARUKO",
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

export default function page_20210813092324() {
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
                      Dưới đây là top 5 <strong>nhóc tỳ</strong> đáng yêu nhất,
                      nhận được nhiều sự yêu thích của khán giả khắp thế giới.
                    </p>
                    <h5>Asari tinh nghịch</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/anh-1-1628667756366728369037.jpg"
                      alt="1, ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,"
                      note=""
                    />
                    <p>
                      Các <strong>nhóc tỳ</strong> mê truyện tranh không thể bỏ
                      qua những câu chuyện thú vị của hai chị em Tatami và
                      Asari. Cô bé Asari "nhanh như thỏ" là một cô nhóc hồn
                      nhiên và hiếu động. Với khả năng chơi thể thao cực đỉnh
                      nhưng lại học kém, suốt ngày bị mẹ la mắng, trong khi đó
                      cô chị Tatami vừa học giỏi vừa có quan hệ tốt với mọi
                      người, mỗi tội không biết bơi. Hai chị em chung một nhà mà
                      hai tính cách đối lập hoàn toàn, do đó Asari suốt ngày
                      tranh cãi với Tatami, đem đến những tình huống hài hước,
                      vui nhộn cho fan.
                    </p>
                    <h5>Chie cô bé Hạt Tiêu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-2-1628667756373499765477.jpg"
                      alt="2, ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,"
                      note=""
                    />
                    <p>
                      Chie là một cô bé nhỏ nhắn dễ thương. Tuy còn rất nhỏ tuổi
                      nhưng cô đã phải đương đầu với cuộc sống cơm áo gạo tiền
                      bằng cách mở cửa hàng chả nướng. Mẹ cô bé vì không chịu
                      nổi người cha đã bỏ nhà đi. Tuy nhiên, cô bé rất kiên
                      cường và nghị lực, cô quán xuyến gia đình rất thành thạo.
                      Cô bé có những suy nghĩ vừa già dặn, lại vừa đáng yêu, hồn
                      nhiên.
                    </p>
                    <h5>Miko nhí nhảnh</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-3-16286677813291518156778.jpg"
                      alt="3, ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,"
                      note=""
                    />
                    <p>
                      Manga này kể về những mẩu chuyện đời thường của nhóc
                      Yamada Miko cùng bạn bè trong lớp. Bọn trẻ đều có nỗi niềm
                      riêng, khó khăn mà ai cũng từng gặp khi còn là học sinh,
                      không thể chia sẻ với người lớn. Ví dụ như bị bạn bè ghép
                      đôi trêu ghẹo, bị bắt nạt trong trường hay crush một ai
                      đó. Chuyện gia đình, trường lớp và chuyện "tình củm" của
                      Miko khiến ai cũng thấy gần gũi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Nhóc Maruko</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-4-16286677563771603279078.jpg"
                      alt="4, ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,"
                      note=""
                    />
                    <p>
                      Maruko là cô bé đầu nấm với tóc mái ngố vô cùng dễ thương.
                      Maruko có nụ cười tươi, tính cách ngây thơ với những suy
                      nghĩ "bà cụ non" rất hài hước. Cô bé 9 tuổi, học lớp 3 này
                      rất hậu đậu, lười biếng, nhát gan và ghét đi học nhưng lại
                      rất biết quan tâm, yêu thương những người xung quanh mình.
                      Có thể nói sự trong sáng, hồn nhiên của cô bé đã lan tỏa
                      niềm vui và trở thành ký ức tuổi thơ ngọt ngào cho rất
                      nhiều người.
                    </p>
                    <h5>Shin cậu bé Bút Chì</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-5-1628667756398797204709.png"
                      alt="5, ANIME NHẬT BẢN,NHÓC TỲ,NHÂN VẬT ANIME,SHIN CẬU BÉ BÚT CHÌ,CHIE CÔ BÉ HẠT TIÊU,NHÓC MARUKO,"
                      note=""
                    />
                    <p>
                      Shin, cậu bé 5 tuổi nghịch nhất xóm, sống trong một gia
                      đình Nhật Bản bình thường. Bố Shin là trưởng phòng công ty
                      Futaba, mẹ là một người nội trợ bình thường. Mỗi ngày Shin
                      bày đủ trò nghịch ngợm cùng bạn bè ở trường mẫu giáo khiến
                      các thầy cô "đau tim", về nhà quậy tưng bừng. Những câu
                      chuyện của Shin tuy hơi "bựa" nhưng đã mang lại vô vàn
                      những tiếng cười, niềm vui, niềm hạnh phúc cũng như vun
                      đắp ước mơ cho bao "cánh chim non".
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

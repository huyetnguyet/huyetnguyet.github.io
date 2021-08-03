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
"timestamp": '29/07/2021 04:23 PM',
"title": 'Những quái vật đáng sợ từng được đồn đại xuất hiện trong lịch sử loài người (P.2)',
"description": 'Thế giới tồn tại rất nhiều loài sinh vật kinh dị, gây nên sự sợ hãi đối với con người.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/24/photo-1-162713687304154013119.png',
"alt": 'QUÁI VẬT,TRUYỀN THUYẾT,',
"category": 'news',
"date": '29/07/2021',
"time": '04:23 PM',
"link": '/nhung-quai-vat-dang-so-tung-duoc-don-dai-xuat-hien-trong-lich-su-loai-nguoi-p2',
"zcomponent": 'page_20210729162344',
"filepath": './20210729162344-nhung-quai-vat-dang-so-tung-duoc-don-dai-xuat-hien-trong-lich-su-loai-nguoi-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Những quái vật đáng sợ từng được đồn đại xuất hiện trong lịch sử loài người (P.2)";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:23 PM";
const description =
  "Thế giới tồn tại rất nhiều loài sinh vật kinh dị, gây nên sự sợ hãi đối với con người.";
const link =
  "nhung-quai-vat-dang-so-tung-duoc-don-dai-xuat-hien-trong-lich-su-loai-nguoi-p2";
const tagparam = ["QUÁI VẬT", "TRUYỀN THUYẾT"];
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

export default function page_20210729162344() {
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
                    <h5>4. Goatman</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/24/photo-1-162713687304154013119.png"
                      alt="1, QUÁI VẬT,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Người dê là một sinh vật lai tạp, nửa người, nửa dê
                      (thường là phần thân trên), xuất hiện chủ yếu trong các{" "}
                      <strong>truyền thuyết</strong> đô thị vùng with Louisiana,
                      Maryland và Texas, Mỹ. Goatman là một sinh vật cao từ 2-3
                      mét, có đuôi và sừng dê. Ở một vài vùng, Goatman và{" "}
                      <strong>quái vật</strong> hút máu Chupacabra được xem là
                      một.
                    </p>
                    <p>
                      <strong>Truyền thuyết</strong> đô thị đề cập đến việc
                      chúng giết những cặp đôi trẻ trong công viên, bãi đỗ xe,
                      hay giết các động vật nuôi quanh vùng. Chúng thậm chí còn
                      đột nhập vào nhà để sát hại người dân, cưỡng bức họ, dù
                      nạn nhân là nam hay là nữ.
                    </p>
                    <p>
                      Mặc dù không nổi tiếng như <strong>quái vật</strong>{" "}
                      Bigfoot, quái vật hồ Loch Ness, hay ác quỷ vùng New
                      Jersey, nhưng Goatman mang đến nỗi sợ riêng dành cho những
                      ai sợ hãi các khu rừng, nơi hoang vắng, hoặc những địa
                      điểm vắng vẻ ban tối. Câu chuyện cổ nhất về sinh vật tương
                      tự Người Dê đã có từ trước Công Nguyên, không ai khác
                      chính là Satyrs – vị thần rừng trong thần thoại Hy Lạp.
                    </p>
                    <h5>5. Chupacabra</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-1627137124040418463700.jpg"
                      alt="2, QUÁI VẬT,TRUYỀN THUYẾT,"
                      note=""
                    />

                    <p>
                      Các thuyết về chupacabra xuất hiện lần đầu tiên vào những
                      năm 90 tại tại khu vực Mỹ Latinh. Cuộc tấn công được cho
                      là do chupacabra gây ra được báo cáo đầu tiên vào tháng
                      3/1995 tại Puerto Rico: 8 con cừu đã chết, mỗi con có ba
                      vết đâm ở ngực và máu bị hút sạch. Tại Puerto Rico vào 5
                      tháng sau, người phụ nữ tên Madelyne Tolentino trình báo
                      bà đã nhìn thấy một sinh vật kì lạ như người ngoài hành
                      tinh xuất hiện trước cửa sổ nhà bà, tại thị trấn
                      Canovanas.{" "}
                    </p>
                    <p>
                      Câu chuyện kỳ quái này nhanh chóng lan khắp các quốc gia
                      vùng Mỹ Latinh cho đến một số bang phía nam của Mỹ và
                      nhiều nơi cũng báo cáo tình trạng gia súc bị giết hại
                      tương tự. Tại thời điểm đó, đây cũng là chủ đề đầy tranh
                      cãi và cũng dấy lên rất nhiều thuyết âm mưu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tại các thời điểm cũng như địa điểm khác nhau, loài vật
                      hút máu này cũng được miêu tả khác. Năm 1995, theo Loren
                      Coleman – giám đốc Bảo tàng International Cryptozoology
                      cho biết chupacabra được miêu tả như một loài vật cao tầm
                      1m, lông xám, ngắn và có những gai nhọn trên lưng. Đến
                      cuối những năm 90, miêu tả về chúng lại một lần nữa thay
                      đổi. Những điều này thực chất đều do tác động của truyền
                      thông vì kể cả người dân tại vùng Puerto Rico - nơi được
                      cho là lần đầu nó xuất hiện, vẫn chưa lên tiếng nhiều.
                    </p>
                    <h5>6. Mothman</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/24/photo-1-16271373092771975446700.jpeg"
                      alt="3, QUÁI VẬT,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Trong khoảng thời gian kéo dài suốt 13 tháng kể từ tháng
                      11 năm 1966 tại phía nam Virginia liên tiếp chứng kiến sự
                      xuất hiện của một loài động vật kỳ lạ với cái tên Mothman.
                      Đây cũng là lần đầu tiên ở Mỹ có tới hàng trăm người khẳng
                      định rằng mình đã thấy một sinh vật giống người có cánh
                      như vậy.
                    </p>
                    <p>
                      Mothman cao tối thiểu hơn 2 m với đôi cánh rộng hơn 3 m.
                      Làn da của nó có vảy, màu xám trong khi đôi mắt lại to,
                      sáng đỏ đầy mê hoặc. Mothman có thể bay xa với tốc độ 100
                      dặm/giờ và tiếng rít của nó còn có khả năng gây nhiễu sóng
                      truyền hình và vô tuyến.
                    </p>
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

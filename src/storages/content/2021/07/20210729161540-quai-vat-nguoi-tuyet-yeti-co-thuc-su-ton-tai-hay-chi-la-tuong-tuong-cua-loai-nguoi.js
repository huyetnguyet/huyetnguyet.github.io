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
"title": 'Quái vật người tuyết Yeti có thực sự tồn tại, hay chỉ là tưởng tượng của loài người?',
"description": 'Yeti, dịch theo ngôn ngữ địa phương có nghĩa là "Người tuyết", là một sinh vật huyền bí, khổng lồ và được cho là sống tại khu vực dãy núi Himalaya lạnh giá và một vài vùng núi phương Bắc.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625736015746304669013.jpg',
"alt": 'QUÁI VẬT,YETI,TRUYỀN THUYẾT,',
"category": 'news',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/quai-vat-nguoi-tuyet-yeti-co-thuc-su-ton-tai-hay-chi-la-tuong-tuong-cua-loai-nguoi',
"zcomponent": 'page_20210729161540',
"filepath": './20210729161540-quai-vat-nguoi-tuyet-yeti-co-thuc-su-ton-tai-hay-chi-la-tuong-tuong-cua-loai-nguoi.js'
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
  "Quái vật người tuyết Yeti có thực sự tồn tại, hay chỉ là tưởng tượng của loài người?";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:15 PM";
const description =
  'Yeti, dịch theo ngôn ngữ địa phương có nghĩa là "Người tuyết", là một sinh vật huyền bí, khổng lồ và được cho là sống tại khu vực dãy núi Himalaya lạnh giá và một vài vùng núi phương Bắc.';
const link =
  "quai-vat-nguoi-tuyet-yeti-co-thuc-su-ton-tai-hay-chi-la-tuong-tuong-cua-loai-nguoi";
const tagparam = ["QUÁI VẬT", "YETI", "TRUYỀN THUYẾT"];
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

export default function page_20210729161540() {
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
                  <h5>Sinh vật huyền thoại trong truyền thuyết</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625736015746304669013.jpg"
                    alt="1, QUÁI VẬT,YETI,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <p>
                    <strong>Yeti</strong>, dịch theo ngôn ngữ địa phương có
                    nghĩa là "Người tuyết", là một sinh vật huyền bí, khổng lồ
                    và được cho là sống tại khu vực dãy núi Himalaya lạnh giá và
                    một vài vùng núi phương Bắc. Theo miêu tả, Yeti tại khu vực
                    núi Himalaya của cao nguyên Tây Tạng, Nepal và Bhutan. Sinh
                    vật này mang hình dáng giống vượn, to lớn hơn người thường,
                    có chiều cao tới 2 mét.
                  </p>
                  <p>
                    Câu truyện về <strong>Yeti</strong> được truyền bá đến
                    phương Tây vào thế kỷ 19. Nhiều đồn đoán được dấy lên rằng,
                    Yeti chính là tổ tiên của loài người. Thậm chí, có ý kiến
                    cho rằng, nó có thể là thành viên còn sống sót của một loài
                    người đã tuyệt chủng, sống lẩn khuất mà khoa học vẫn chưa
                    biết tới. Trong suốt thế kỷ 20, các thợ săn, nhà thám hiểm,
                    nhà nghiên cứu đến từ trời Tây đã sục sạo khắp dãy núi
                    Himalaya để tìm kiếm sinh vật bí ẩn này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257369900461368690146.jpg"
                    alt="2, QUÁI VẬT,YETI,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <p>
                    Năm 1951, nhà leo núi người Anh Eric Shipton đã chụp được
                    hàng dấu chân khổng lồ trên tuyết tại Everest và được cho là
                    những bằng chứng cho thấy <strong>Yeti</strong> có tồn tại.
                    Sau đó, người ta lại tiếp tục truy tìm và phát hiện thấy
                    nhiều mẫu lông, xương, răng, da tại khu vực núi cao
                    Himalaya. Những mẫu vật này được coi là bằng chứng then chốt
                    để giải mã sự tồn tại của người tuyết hiếm gặp ở châu Á.
                  </p>
                  <h5>
                    Sự thực về con <strong>quái vật</strong> huyền thoại
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257372107631796898097.jpg"
                    alt="3, QUÁI VẬT,YETI,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <p>
                    Từ những mẫu vật tìm thấy, trong nhiều năm qua, các nhà khoa
                    học đã dày công tiến hành nghiên cứu. Thế nhưng, mọi kết quả
                    đều chỉ r rằng, đây nhiều khả năng chỉ là một loài gấu sống
                    tại Himalaya mà thôi. Các nghiên cứu đều đưa ra nhận định
                    cho thấy đây là một chủng gấu lớn, nhưng vẫn bị nhiều nhà
                    chuyên môn bác bỏ. Bí mật về <strong>Yeti</strong> tưởng
                    chừng sẽ lại bị lãng quên một lần nữa.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Vào năm 2017, các nhà nghiên cứu đến từ Đại học Buffalo, New
                    York, Hoa Kỳ đã tiến hành phân tích ADN từ các mẫu vật nổi
                    tiếng nhất được cho là của <strong>Yeti</strong>. Kết quả họ
                    thu được có tới 8 mẫu vật được phát hiện ở núi Himalaya đều
                    có nguồn gốc từ gấu nâu. Chỉ có một mẫu vật duy nhất là của
                    loài chó.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625737223756583079414.jpg"
                    alt="4, QUÁI VẬT,YETI,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <p>
                    {" "}
                    Do đó, các nhà nghiên cứu càng tin tưởng rằng, sự tồn tại
                    của người tuyết khổng lồ <strong>Yeti</strong> thực chất chỉ
                    là một loài gấu nâu Himalaya, không phải vượn, cũng không
                    phải người, càng không phải tổ tiên của con người, như những
                    nhầm tưởng trong suốt nhiều thế kỷ qua. Tiến sĩ Charlotte
                    Lindqvist, một trong những tác giả nghiên cứu cho biết rằng
                    kết quả nghiên cứu của họ đều chỉ ra những bằng chứng sinh
                    học của Yeti đều thuộc về những con gấu trong khu vực.
                  </p>
                  <p>
                    Để có được kết quả này, các chuyên gia đã so sánh các ADN
                    thu được với mẫu gene của 23 con gấu châu Á được lưu trữ
                    trong kho dữ liệu thế giới. Kết quả đồng thời cho thấy, loài
                    gấu nâu Tây Tạng có chung một tổ tiên với gấu nâu Bắc Mỹ và
                    gấu Á - Âu.Trong khi đó, gấu nâu Himalaya lại thuộc một
                    nhánh khác, tách ra sớm hơn so với tất cả các loài gấu còn
                    lại. Sự tách rời này xảy ra vào khoảng 650 nghìn năm trước
                    khi kỷ Băng Hà xảy ra.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625737254605853120952.jpg"
                    alt="5, QUÁI VẬT,YETI,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <p>
                    Nhóm nhà khoa học nhấn mạnh thêm, đây không phải là nghiên
                    cứu đầu tiên phanh phui bí ẩn về người tuyết, nhưng nghiên
                    cứu này được cung cấp đầy đủ nhất các bằng chứng về gen, thu
                    được từ các mẫu xương, răng, da, lông và phân từng được cho
                    là thuộc về sinh vật huyền bí.
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

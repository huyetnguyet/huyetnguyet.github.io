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
"timestamp": '13/08/2021 10:38 PM',
"title": 'Người thổi sáo thành Hamelin – Câu chuyện rùng rợn về vụ mất tích của 130 đứa trẻ',
"description": 'Người thổi sáo thành Hamelin là câu chuyện cổ tích về cái giá phải trả cho sự vô ơn. Tuy nhiên, dường như rất ít người biết rằng câu chuyện trên có ẩn chứa những sự kiện có thật.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/pied-piper-of-hamelin0-16287569571352025403046.jpg',
"alt": 'KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,',
"category": 'news',
"date": '13/08/2021',
"time": '10:38 PM',
"link": '/nguoi-thoi-sao-thanh-hamelin-cau-chuyen-rung-ron-ve-vu-mat-tich-cua-130-dua-tre',
"zcomponent": 'page_20210813223802',
"filepath": './20210813223802-nguoi-thoi-sao-thanh-hamelin-cau-chuyen-rung-ron-ve-vu-mat-tich-cua-130-dua-tre.js'
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
  "Người thổi sáo thành Hamelin – Câu chuyện rùng rợn về vụ mất tích của 130 đứa trẻ";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 10:38 PM";
const description =
  "Người thổi sáo thành Hamelin là câu chuyện cổ tích về cái giá phải trả cho sự vô ơn. Tuy nhiên, dường như rất ít người biết rằng câu chuyện trên có ẩn chứa những sự kiện có thật.";
const link =
  "nguoi-thoi-sao-thanh-hamelin-cau-chuyen-rung-ron-ve-vu-mat-tich-cua-130-dua-tre";
const tagparam = ["KHÁM PHÁ", "CỔ TÍCH", "NGƯỜI THỔI SÁO"];
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

export default function page_20210813223802() {
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
                      Rất nhiều thế hệ đã được nghe kể về câu chuyện{" "}
                      <strong>người thổi sáo</strong> ma thuật đã bắt cóc hơn
                      100 đứa trẻ. Người ta xem đó là câu chuyện răn dạy đạo
                      đức, khuyên trẻ con nên giữ lời và biết ơn kẻ khác. Thế
                      nhưng, có vẻ như đằng sau câu chuyện bí ẩn này còn ẩn giấu
                      nhiều sự kiện lịch sử khá rùng rợn khác nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/pied-piper-of-hamelin0-16287569571352025403046.jpg"
                      alt="1, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <h5>
                      Câu chuyện <strong>người thổi sáo</strong> thành Hamelin
                    </h5>
                    <p>Khi nào, Io! Lúc họ đến bên sườn núi,</p>
                    <p>Một cảnh cổng diệu kỳ mở rộng,</p>
                    <p>Cứ như thể cái hang đột nhiên bị khoét sâu;</p>
                    <p>
                      Và <strong>người thổi sáo</strong> đi trước, lũ trẻ theo
                      sau,
                    </p>
                    <p>Thế rồi tất cả bước cho đến kẻ cuối cùng,</p>
                    <p>Cánh cửa trên sườn núi vụt đóng lại.</p>
                    <p>
                      Đoạn thơ của Robert Browning trong tác phẩm The Pied Piper
                      of Hamelin: A Child’s Story đã tóm tắt lại câu chuyện{" "}
                      <strong>cổ tích</strong> kỳ quái này. Chuyện kể rằng vào
                      khoảng năm 1284, thị trấn Hamelin ở Hạ Saxony, Đức xảy ra
                      nạn chuột hoành hành. Chúng cắn phá các kho chứa ngô, lúa
                      mì… Vì thế, thị trưởng ở đây đã treo giải thưởng 1000 đồng
                      guider vàng cho ai đuổi được chuột.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/pied-piper-and-children0-1628756986559894459249.jpg"
                      alt="2, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Ngay ngày hôm sau, có một thanh niên ăn bận sặc sỡ đến ngỏ
                      ý sẽ đuổi chuột giúp người dân trong thị trấn để nhận
                      thưởng. Anh ta dùng âm nhạc dẫn dụ lũ chuột ra khỏi
                      Hamelin. Tuy nhiên, khi đã sạch chuột, người dân trong thị
                      trấn lại nuốt lời. Thay vì trả 1000 đồng vàng như đã hứa,
                      thị trưởng lại chỉ trả 50 đồng. Sự bội bạc và vô ơn của
                      người dân lẫn thị trưởng khiến{" "}
                      <strong>người thổi sáo</strong> rời đi trong giận dữ, anh
                      ta thề rằng sẽ trả thù họ. Vào ngày 26 tháng 7 năm đó,
                      người thổi sáo quay lại Hamelin và dẫn lũ trẻ đi mất dạng,
                      giống như đã làm với lũ chuột.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/oldest-known-picture-of-the-pied-piper-16287570134881806818927.jpg"
                      alt="3, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Cả thị trấn chỉ còn sót lại một hoặc ba đứa trẻ, tùy từng
                      phiên bản kể. Một đứa bị què không thể đuổi kịp, đứa khác
                      bị điếc không nghe được gì và đứa còn lại bị mù nên không
                      thấy những đứa trẻ khác đi đâu.
                    </p>
                    <h5>Một sự kiện có thật trong lịch sử</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/pied-piper-of-hamelin-drawing-16287573620181348935210.jpg"
                      alt="4, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Ghi chép được biết đến sớm nhất về câu chuyện này đến từ
                      chính thị trấn Hamelin. Nó được miêu tả trong một bức
                      tranh kính trên cửa sổ ở nhà thờ Hamelin, chế tác vào
                      khoảng năm 1300 SCN. Dù đã bị phá hủy vào năm 1660, nhưng
                      nhiều nguồn ghi chép vẫn còn sót lại. Văn bản cổ nhất nhắc
                      đến sự việc là bản thảo của Lueneburg (1440-50), với những
                      lời thuật như sau: "Vào năm 1284, vào lễ Thánh John và
                      Thánh Paul ngày 26 tháng 6, một{" "}
                      <strong>người thổi sáo</strong>, ăn mặc sặc sỡ màu mè, đã
                      dẫn dụ 130 trẻ em sinh ra ở Hamelin và biến mất ở nơi hành
                      quyết gần ngọn đồi". Một mục cập nhật năm 1394 trong sổ
                      sách của thị trấn Hamelin cũng ghi lại ngắn gọn "Đã 100
                      năm kể từ khi con cháu chúng ta ra đi".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Con phố được cho là nơi lũ trẻ xuất hiện lần cuối được gọi
                      là Bungelosen Strasse (phố không có trống), vì không ai
                      được phép chơi nhạc hay nhảy múa ở đó. Tuy nhiên, một điều
                      lạ lùng là không có bất kỳ ghi chép nào đề cập đến chuột
                      hay nạn chuột phá kho trong tất cả các nguồn tài liệu này.
                    </p>
                    <h5>
                      Những giả thuyết rùng rợn về số phận lũ trẻ thành Hamelin
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/episode-of-the-child-crusade-162875750300040966663.jpg"
                      alt="5, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Nếu lũ trẻ không biến mất vì{" "}
                      <strong>người thổi sáo</strong> báo thù như truyện{" "}
                      <strong>cổ tích</strong> viết, vậy thì chuyện gì đã xảy ra
                      với chúng? Có rất nhiều giả thuyết giải thích cho câu
                      chuyện:
                    </p>
                    <p>
                      - Lũ trẻ không bỏ đi mà thật ra đều qua đời trong dịch
                      bệnh Cái Chết Đen và <strong>người thổi sáo</strong> là ẩn
                      dụ cho tử thần. Tuy nhiên, giả thuyết này không thuyết
                      phục về mặt thời gian, vì Cái Chết Đen xảy ra nghiêm trọng
                      nhất trong giai đoạn 1348 – 1350, tức là hơn nửa thế kỷ
                      sau sự kiện ở thành Hamelin.
                    </p>
                    <p>
                      - Lũ trẻ không bị ai dụ dỗ mà bị chính cha mẹ gửi đi vì
                      hoàn cảnh nghèo đói.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/darker-pictures-of-pied-piper-of-hamelin-16287575939201590402526.jpg"
                      alt="6, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Bức tranh "The Departure: An Episode of the Child's
                      Crusade 13th Century" của Joanna Mary Boyce về cuộc thập
                      tự chinh trẻ em
                    </p>
                    <p>
                      - Lũ trẻ tham gia vào những cuộc thập tự chinh trẻ em và
                      tất cả đều đã bỏ mạng ở khu vực tương ứng với Romani ngày
                      nay.
                    </p>
                    <p>
                      - Một giả thuyết khác, tươi sáng hơn, đó là lũ trẻ gắn với
                      chuyến di cư của một vài người Đức đến các thuộc địa ở
                      Đông Âu. Và <strong>người thổi sáo</strong> với bộ dạng
                      lòe loẹt, sặc sỡ đóng vai trò như người chiêu mộ, chịu
                      trách nhiệm tổ chức cuộc di cư.
                    </p>
                    <p>
                      Ngoài ra, cũng không loại trừ khả năng sự kiện tại Hamelin
                      có liên quan đến chứng "cuồng nhảy múa" vốn được ghi nhận
                      ở châu Âu vào khoảng từ thế kỷ 14 đến 17. Hầu hết nạn nhân
                      đều được miêu tả là "nhảy múa cuồng loạn trên đường phố
                      trong nhiều giờ, nhiều ngày và thậm chí nhiều tháng, cho
                      đến khi họ ngã gục vì kiệt sức hoặc đau tim, đột quỵ".
                    </p>
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/01/phot-1609988157328.jpeg"
                      alt="7, KHÁM PHÁ,CỔ TÍCH,NGƯỜI THỔI SÁO,"
                      note=""
                    />
                    <p>
                      Dù bí ẩn về <strong>người thổi sáo</strong> thành Hamelin
                      chưa được làm sáng tỏ, nhưng qua những ghi chép còn sót
                      lại, có lẽ sự kiện mà nó đề cập đến quá ám ảnh. Đến mức là
                      người ta kể về nó qua hàng thế hệ.
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

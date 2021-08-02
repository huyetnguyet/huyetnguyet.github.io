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
"timestamp": '29/07/2021 04:19 PM',
"title": 'Chàng trai mang món "pháp khí" đi kiểm định khiến cả trường quay kinh hãi, chuyên gia lắc đầu: Cầm về đi, tôi không định giá!',
"description": 'Khi nghe tới vật liệu làm nên món "pháp khí", toàn bộ khán giả trong trường quay đều "toát mồ hôi hột".',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/photo-1-16266781826341961459693.jpeg',
"alt": 'toát mồ hôi,toát mồ hôi hột,người dân địa phương,giá trị vật chất,sức hấp dẫn,',
"category": 'news',
"date": '29/07/2021',
"time": '04:19 PM',
"link": '/chang-trai-mang-mon-phap-khi-di-kiem-dinh-khien-ca-truong-quay-kinh-hai-chuyen-gia-lac-dau-cam-ve-di-toi-khong-dinh-gia',
"zcomponent": 'page_20210729161909',
"filepath": './20210729161909-chang-trai-mang-mon-phap-khi-di-kiem-dinh-khien-ca-truong-quay-kinh-hai-chuyen-gia-lac-dau-cam-ve-di-toi-khong-dinh-gia.js'
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
  'Chàng trai mang món "pháp khí" đi kiểm định khiến cả trường quay kinh hãi, chuyên gia lắc đầu: Cầm về đi, tôi không định giá!';
const author = "TAMMY,";
const source = "Pháp luật";
const timestamp = "29/07/2021 04:19 PM";
const description =
  'Khi nghe tới vật liệu làm nên món "pháp khí", toàn bộ khán giả trong trường quay đều "toát mồ hôi hột".';
const link =
  "chang-trai-mang-mon-phap-khi-di-kiem-dinh-khien-ca-truong-quay-kinh-hai-chuyen-gia-lac-dau-cam-ve-di-toi-khong-dinh-gia";
const tagparam = [
  "toát mồ hôi",
  "toát mồ hôi hột",
  "người dân địa phương",
  "giá trị vật chất",
  "sức hấp dẫn",
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

export default function page_20210729161909() {
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
                    Trong 10 năm trở lại đây, các chương trình kiểm định bảo vật
                    trở nên cực kỳ phổ biến tại đất nước tỷ dân, mỗi đài truyền
                    hình địa phương đều sản xuất những show kiểm định riêng, nổi
                    bật phải kể tới Kiểm định bảo vật (CCTV), Hoa Dự Chi Môn
                    (Đài truyền hình tỉnh Hà Nam) hay Thiên hạ sưu tầm (Đài
                    truyền hình Bắc Kinh).
                  </p>
                  <p>
                    Điều tạo nên <strong>sức hấp dẫn</strong> của chương trình
                    này không phải <strong>giá trị vật chất</strong> mà chính là
                    những câu chuyện lịch sử, văn hóa đằng sau mỗi bộ sưu tập,
                    điều chỉ những chuyên gia hàng đầu mới có khả năng khơi gợi
                    nên.
                  </p>
                  <p>
                    Trong tập phát sóng lần này của Kiểm định bảo vật, một chàng
                    trai trẻ tuổi đã phát hiện ra câu chuyện khó tin bên trong
                    món bảo vật mà cha con anh luôn trân trọng cất giữ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/photo-1-16266781826341961459693.jpeg"
                    alt="2, toát mồ hôi,toát mồ hôi hột,người dân địa phương,giá trị vật chất,sức hấp dẫn,"
                    note=""
                  />
                  <p>
                    Chàng trai trẻ mang tới Kiểm định bảo vật một món "pháp khí"
                    của Mật Tông Tây Tạng (Ảnh: Sohu)
                  </p>
                  <p>
                    Chàng trai mang tới sân khấu một món "pháp khí" có hình dạng
                    giống cái bát. Anh cho biết vào những năm 1950, cha anh là
                    một trong những bác sĩ xung phong lên vùng cao nguyên Tây
                    Tạng giúp đỡ người dân nghèo. Tại đây, ông đã cứu chữa cho
                    rất nhiều người bệnh, được{" "}
                    <strong>người dân địa phương</strong> quý mến.
                  </p>
                  <p>
                    Để tỏ lòng biết ơn với người y sĩ, một vị lạt ma (cao tăng
                    Mật Tông - pháp môn bắt nguồn từ sự kết hợp giữa Ấn độ giáo
                    và Phật giáo Đại thừa) đã trao cho ông một món "pháp khí".
                    Theo đó, "pháp khí" là những dụng cụ để kính lễ, tán tụng,
                    cúng dường... nay vị lạt ma tặng lại cho ân nhân như một lời
                    chúc phúc.
                  </p>
                  <p>
                    Món "pháp khí" trong chương trình có hình dạng giống cái
                    bát, màu trắng hơi trong như làm bằng nhựa hoặc thủy tinh.
                    Song cảm giác khi chạm vào vật liệu rất lạ, chàng trai thú
                    nhận mình cũng không rõ nó làm từ chất liệu gì.
                  </p>
                  <p>
                    Vị chuyên gia quan sát món "pháp khí" rồi từ tốn giải thích:
                    "Không phải nhựa hay thủy tinh đâu, món đồ này được làm từ
                    pha lê, vàng và sọ người!"
                  </p>
                  <p>
                    Nghe tới đây, cả trường quay đều kinh hãi, tại sao lại có
                    món đồ được làm từ sọ người?
                  </p>
                  <p>
                    Chuyên gia cho biết thật ra đây không phải điều bất thường.
                    Từ xa xưa, Mật Tông Tây Tạng đã thịnh hành việc dùng xương
                    người để chế tạo các loại pháp khí, với ý chỉ sinh mệnh con
                    người là ngắn ngủi, vô thường.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    "Pháp khí" này có tên chính xác là bát Ca Ba Lạp hay còn
                    được gọi là "cúng lư pháp khí", thường dùng để cúng dường.
                    "Ca Ba Lạp" dịch từ âm tiếng Phạn, nghĩa là "giữ gìn niềm
                    vui", tượng trưng cho "đại bi" và "tính không".
                  </p>
                  <p>
                    Theo các ghi chép trong các thư tịch truyền lại của Mật Tông
                    Tây Tạng, có không ít những "pháp khí" được chế tạo từ xương
                    người
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/photo-3-16266781866601596819371.jpg"
                    alt="3, toát mồ hôi,toát mồ hôi hột,người dân địa phương,giá trị vật chất,sức hấp dẫn,"
                    note=""
                  />
                  <p>
                    Hộp sọ dùng làm bát thường được hiến bởi một vị lạt ma lỗi
                    lạc, uyên thâm để trí tuệ của họ được lưu truyền tới hậu
                    thế. Bát Ca Ba Lạp có thể được dùng trong các nghi lễ hoặc
                    để người tu hành dùng khi đi khất thực.
                  </p>
                  <p>
                    Nghe tới đây, chủ nhân món bảo vật và cả trường quay đều ngỡ
                    ngàng, không ai ngờ rằng đằng sau chiếc bát tưởng như bình
                    thường lại có câu chuyện đặc biệt tới vậy.
                  </p>
                  <p>
                    Bát Ca Ba Lạp chàng trai mang tới ngày hôm nay còn có đế
                    bằng vàng ròng, bên trong bát khảm những hoa văn hình ngọn
                    lửa, bông hoa, tượng trưng cho công đức và trí tuệ. Đây chắc
                    chắn là một bảo vật thật, không thể là hàng nhái!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/19/photo-5-1626678185622922649440.jpeg"
                    alt="1, toát mồ hôi,toát mồ hôi hột,người dân địa phương,giá trị vật chất,sức hấp dẫn,"
                    note="Chuyên gia khuyên chàng trai đừng đem bán một bảo vật có giá trị văn hóa, tâm linh (Ảnh: CCTV)"
                  />
                  <p>
                    Chàng trai vui mừng hỏi thêm chiếc bát của mình đáng giá bao
                    nhiêu tiền. Chuyên gia chỉ mỉm cười lắc đầu: "Món pháp khí
                    này có giá trị văn hóa, tâm linh rất lớn. Không dễ gì mà một
                    cao tăng trao pháp khí của mình cho người khác, cậu nên trân
                    trọng nó chứ đừng đem đổi lấy tiền bạc. Cậu về đi, tôi sẽ
                    không định giá!"
                  </p>
                  <p>
                    Chàng trai trẻ nghe câu trả lời thì hơi ngại ngùng, xấu hổ
                    anh cúi đầu cảm ơn chuyên gia rồi hứa sẽ mang bảo vật về gìn
                    giữ cẩn thận.
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

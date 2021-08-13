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
"timestamp": '12/08/2021 05:32 PM',
"title": 'TOP 4 nhân vật có thể "bán hành" cho Đông Phương Bất Bại: Top 1 "ngồi chơi xơi nước" vẫn "ez win"',
"description": 'Không phải đánh hòa, mà là đánh bại.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287608828061340195011.jpg',
"alt": 'TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,',
"category": 'news',
"date": '12/08/2021',
"time": '05:32 PM',
"link": '/top-4-nhan-vat-co-the-ban-hanh-cho-dong-phuong-bat-bai-top-1-ngoi-choi-xoi-nuoc-van-ez-win',
"zcomponent": 'page_20210812173230',
"filepath": './20210812173230-top-4-nhan-vat-co-the-ban-hanh-cho-dong-phuong-bat-bai-top-1-ngoi-choi-xoi-nuoc-van-ez-win.js'
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
  'TOP 4 nhân vật có thể "bán hành" cho Đông Phương Bất Bại: Top 1 "ngồi chơi xơi nước" vẫn "ez win"';
const author = "Đô Đô";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:32 PM";
const description = "Không phải đánh hòa, mà là đánh bại.";
const link =
  "top-4-nhan-vat-co-the-ban-hanh-cho-dong-phuong-bat-bai-top-1-ngoi-choi-xoi-nuoc-van-ez-win";
const tagparam = [
  "TÂN MINH CHỦ",
  "GAME MOBILE",
  "GAME DI ĐỘNG",
  "GAME ONLINE",
  "KIM DUNG",
  "GAME CHIẾN THUẬT",
  "ĐÔNG PHƯƠNG BẤT BẠI",
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

export default function page_20210812173230() {
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
                      <strong>Đông Phương Bất Bại</strong> là một trong số những
                      nhân vật mạnh nhất trong tiểu thuyết Tiếu Ngạo Giang Hồ
                      nói riêng và toàn bộ vũ trụ <strong>Kim Dung</strong> nói
                      chung. Y bình sinh là đàn em của Nhậm Ngã Hành, được
                      truyền cho pho bí kíp thượng thặng Quỳ Hoa Bảo Điển. Xin
                      nói thêm đây chỉ là 1 phần nhỏ so với bản gốc, riêng phần
                      mà Lâm Viễn Đồ lấy được xem ra còn kém hơn, nhưng với tài
                      năng và ngộ tính của mình, Đông Phương Bất Bại đã thi
                      triển đến độ xuất quỷ nhập thần.
                    </p>
                    <p>
                      Trong <strong>game online</strong>,{" "}
                      <strong>Đông Phương Bất Bại</strong> cũng luôn là một
                      trong số những nhân vật được đầu tư bậc nhất, thường luôn
                      là một thế lực đáng nể sở hữu sức mạnh gánh team. Ngay như
                      trong sản phẩm mobile mới nhất của Hiker Games -{" "}
                      <strong>Tân Minh Chủ</strong>, ngay từ giai đoạn đầu tiên
                      ra mắt, Đông Phương Bất Bại đã được dân tình "kháo nhau"
                      nuôi với chiến thuật kẹp Quách Tương để ôm bom cảm tử, gây
                      damage cực khỏe.
                    </p>
                    <p>
                      Đương nhiên, tuyệt kỹ "phi kim" cũng được tái hiện nguyên
                      vẹn trong <strong>Tân Minh Chủ</strong>, góp phần biến{" "}
                      <strong>Đông Phương Bất Bại</strong> trở thành 1 trong số
                      những tượng được săn đón nhiều nhất trong các vòng quay
                      tướng vô hạn ban đầu. Sau này, khi meta thay đổi, đợt
                      tướng mới đổ bộ ngày càng nhiều, vị trí của Đông Phương
                      Bất Bại cũng có thêm nhiều cạnh tranh, nhiều lựa chọn mới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287605038881527059488.jpg"
                      alt="1, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note="Bộ kỹ năng của Đông Phương Bất Bại nổ AOE cực mạnh trong Tân Minh Chủ"
                    />
                    <p>
                      Với một nhân vật mà ngay cả Độc Cô Cửu Kiếm, kiếm pháp chí
                      cao vô thượng mà Độc Cô Cầu Bại sáng tạo ra cũng chưa thể
                      làm gì nhiều trước y, liệu trong 15 tiểu thuyết của cụ
                      Kim, những ai có đủ thực lực để đánh bại Giáo chủ Nhật
                      Nguyệt Thần Giáo, có thể chơi lại thứ kim thêu đầy bá đạo
                      mà pho Quỳ Hoa Bảo Điển kia đã ban cho?
                    </p>
                    <h5>Thiên Sơn Đồng Lão</h5>
                    <p>
                      Là 1 tướng sở hữu khả năng phân thân bá đạo, Thiên Sơn
                      Đồng Lão cũng là 1 vị tướng đa dụng trong{" "}
                      <strong>Tân Minh Chủ</strong> và trong BXH này, nếu không
                      nhắc đến bà ta thì quả là 1 sai sót lớn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/-16287609608781438185459.jpg"
                      alt="5, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />

                    <p>
                      Thiên Sơn Đồng Lão là sư tỉ của Vô Nhai Tử và Lý Thu Thủy,
                      sống lâu nhất, tu vi có lẽ vượt trội hơn cả. Đặc biệt, bà
                      ta may mắn hơn đệ tử đồng môn khi được{" "}
                      <strong>Kim Dung</strong> miêu tả và ban cho nhiều skill
                      bá đạo. Trong đó phải kể đến Bát Hoang Lục Hợp Duy Ngã Độc
                      Tôn Công, bộ đôi Thiên Sơn Lục Dương Chưởng và Thiên Sơn
                      Chiết Mai Thủ, Bắc Minh Chân Khí và đặc biệt là Sinh Tử
                      Phù - những bí kíp cũng được mô tả rất chuẩn trong game{" "}
                      <strong>Tân Minh Chủ</strong>.
                    </p>
                    <p>
                      Độc Cô Cửu Kiếm có thể phá giải toàn bộ võ công trong
                      thiên hạ, từ kiếm, quyền, cước, chưởng. Còn Thiên Sơn
                      Chiết Mai Thủ cũng có thể làm được như thế. Có 1 điều khá
                      buồn cười, đó là Cửu Kiếm không phá giải được tốc độ,
                      nhưng Thiên Sơn Chiết Mai Thủ thì... chưa biết được. Thiên
                      Sơn Đồng Mỗ đối đầu với{" "}
                      <strong>Đông Phương Bất Bại</strong>, ngoài đánh cận chiến
                      thì còn có thể dùng Sinh Tử Phù khắc chế đối phương. Tốc
                      độ Đông Phương Bất Bại nhanh ư? Sinh Tử Phù cũng ghê gớm
                      và huyền ảo không kém. Chỉ sợ rằng giáo chủ Nhật Nguyệt
                      Thần Giáo chưa kịp phóng kim thì có thể đã trúng bùa ngứa
                      ngáy rồi.
                    </p>
                    <h5>Trương Tam Phong</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287610500071423329347.jpg"
                      alt="7, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />
                    <p>
                      Là tướng mới được update trong{" "}
                      <strong>Tân Minh Chủ</strong>, Trương Tam Phong đương
                      nhiên phải được nhắc đến tại đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628761066871542037673.jpg"
                      alt="8, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />
                    <p>
                      Trong 3 người được đánh giá là mạnh nhất{" "}
                      <strong>Kim Dung</strong> thì Trương Ba Phong có "trình độ
                      thể hiện" kém hơn cả. Nhưng cho dù có thế nào đi chăng
                      nữa, thì chưởng môn phái Võ Đang vẫn là 1 cao thủ thâm sâu
                      không biết đâu mà lường. Bằng chứng là có thể dễ dàng tóm
                      sống Hạc Bút Ông, cũng là một cao thủ có "bằng Thạc sĩ"
                      trong Ỷ Thiên Đồ Long Ký. Đến cả chính Trương Thúy Sơn còn
                      không thể phán đoán về năng lực thật sự của sư phụ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287610806121365968888.jpg"
                      alt="9, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />
                    <p>
                      Trên Băng Hoa Đảo, Tạ Tốn từng kể về Không Kiến Thần Tăng:
                      "Ta làm sao so sánh được với ông ấy. Ta kém xa, kém xa
                      lắm, nói đúng ra là cách xa 1 trời 1 vực". Khi y nói câu
                      đó, trên mặt, giọng nói đầy vẻ kính ngưỡng khâm phục.
                      Trương Thúy Sơn lấy làm lạ, trong lòng không thể tin nổi,
                      tự biết ân sư Trương Tam Phong là 1 võ học gia trước nay
                      ít có, nhưng so với Tạ Tốn, e rằng cũng chỉ thắng y 1 ít,
                      nếu như Không Kiến Đại Sư so với Tạ Tốn cách xa như thế,
                      nói đến 1 trời 1 vực thì không lẽ còn giỏi hơn ân sư hay
                      sao?
                    </p>
                    <p>
                      Thế nhưng cũng biết rằng Tạ Tốn kiêu ngạo, nếu ông ấy
                      không hơn y thực sự thì cũng nhất định không thể nào nhận
                      không bằng. Thế nhưng sau 10 năm trở về Trung Nguyên,
                      Trương Thúy Sơn khi thấy Tống Viễn Kiều tỏ rõ nội lực thâm
                      hậu đã phải nghĩ khác. "Nội công của phái Võ Đang càng
                      luyện lâu, tiến bộ càng nhanh. Khi ta ở trên đảo Vương Bàn
                      Sơn, nội lực so với nghĩa huynh 1 trời 1 vực, thế nhưng
                      lúc chia tay nhau trên Băng Hỏa Đảo, xem chừng hai bên
                      không còn chênh lệch bao nhiêu. Năm xưa khi nghe nghĩa
                      huynh ở Lạc Dương mưu toan giết đại sư ca, lúc đó đại sư
                      ca quả nhiên không chống nổi. Thế nhưng dẫu cho nghĩa
                      huynh 2 mắt chưa mù, giờ này chưa chắc đã hơn được đại sư
                      ca bao nhiêu. Chỉ thêm 10 năm nữa, đại ca nhị ca nhất định
                      không kém nghĩa huynh chút nào".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng nói gì thì nói, tinh lực của 1 ông lão trăm
                      tuổi, đối với <strong>Đông Phương Bất Bại</strong> - một
                      kẻ chỉ khoảng trên dưới bốn chục thì thật là chênh lệch.
                      Cho dù Thê Vân Tung của Võ Đang tinh diệu tới mức nào cũng
                      khó có thể so được với tốc độ chập chờn như bóng ma chơi
                      của Giáo chủ Nhật Nguyệt Thần Giáo. Trương Tam Phong muốn
                      thắng Đông Phương Bất Bại thì cần phải lấy tĩnh chế động,
                      lấy chậm thắng nhanh, chờ đối phương sơ hở và ra đòn quyết
                      định.
                    </p>
                    <h5>Độc Cô Cầu Bại</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287611002561738461610.jpg"
                      alt="10, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />
                    <p>
                      Không có gì quá đáng khi nói, Độc Cô Cầu Bại là phiên bản
                      kết hợp hoàn hảo của Phong Thanh Dương và Dương Quá, bởi
                      Kiếm Ma có kiếm chiêu thượng thừa của Độc Cô Cửu Kiếm và
                      Kiếm Ý đỉnh cao trong các ngôi mộ kiếm. Cảnh giới của Độc
                      Cô Cầu Bại là cảnh giới vô chiêu thắng hữu chiêu, thảo mộc
                      trúc thạch đều có thể dùng làm kiếm. Khi Độc Cô Cầu Bại
                      solo với <strong>Đông Phương Bất Bại</strong>, một nhát
                      kiếm của Kiếm Ma, có lẽ cũng có lực đạo ngàn cân, chẳng
                      khác gì truyền nhân của Dương Quá, kèm theo đó là những
                      thứ tinh diệu nhất, hiểm độc nhất, tột cùng nhất, khiến
                      đối thủ chỉ có nước quay kiếm về thủ.
                    </p>
                    <h5>Vô Danh Thần Tăng</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287612125731367792196.jpg"
                      alt="11, TÂN MINH CHỦ,GAME MOBILE,GAME DI ĐỘNG,GAME ONLINE,KIM DUNG,GAME CHIẾN THUẬT,ĐÔNG PHƯƠNG BẤT BẠI,"
                      note=""
                    />
                    <p>
                      Đây là 1 cuộc chiến không cân sức. Bởi đây là "Phật sống",
                      là người có pháp lực vô biên. Trong Ỷ Thiên Đồ Long Ký,
                      Trương Vô Kỵ đã sử dụng võ công trong Thánh Hỏa Lệnh để tỉ
                      đấu Tam Độ, thế nhưng Kim Cương Phục Ma Khuyên là trận
                      pháp hàng đầu để hàng phục tà ma. Trương Vô Kỵ chỉ có nước
                      nhảy múa mà chết thôi.
                    </p>
                    <p>
                      Nói về tu tâm đắc đạo, khó ai có thể bằng được Vô Danh
                      Thần Tăng. Thế nên dù <strong>Đông Phương Bất Bại</strong>{" "}
                      có bản lĩnh cao đến thế nào cũng gần như không có cơ hội
                      để chiến thắng. Cho dù nhà sư chỉ cần ngồi chơi xơi nước
                      chứ chẳng cần sử dụng bản lĩnh siêu thượng thừa.
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

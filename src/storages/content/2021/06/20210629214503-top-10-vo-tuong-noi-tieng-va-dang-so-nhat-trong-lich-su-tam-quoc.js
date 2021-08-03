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
"timestamp": '29/06/2021 09:45 PM',
"title": 'Top 10 võ tướng nổi tiếng và đáng sợ nhất trong lịch sử Tam Quốc',
"description": 'Những người như Lã Bố, Mã Siêu, Triệu Vân, Quan Vũ... đều chiếm được địa vị nhất định trong thời Tam Quốc nhờ vào võ công cao cường của mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-16241154185281758165110.jpg',
"alt": 'TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,',
"category": 'games',
"date": '29/06/2021',
"time": '09:45 PM',
"link": '/top-10-vo-tuong-noi-tieng-va-dang-so-nhat-trong-lich-su-tam-quoc',
"zcomponent": 'page_20210629214503',
"filepath": './20210629214503-top-10-vo-tuong-noi-tieng-va-dang-so-nhat-trong-lich-su-tam-quoc.js'
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
  "Top 10 võ tướng nổi tiếng và đáng sợ nhất trong lịch sử Tam Quốc";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:45 PM";
const description =
  "Những người như Lã Bố, Mã Siêu, Triệu Vân, Quan Vũ... đều chiếm được địa vị nhất định trong thời Tam Quốc nhờ vào võ công cao cường của mình.";
const link = "top-10-vo-tuong-noi-tieng-va-dang-so-nhat-trong-lich-su-tam-quoc";
const tagparam = [
  "TAM QUỐC",
  "VÕ TƯỚNG",
  "TRIỆU VÂN",
  "QUAN VŨ",
  "TRƯƠNG PHI",
  "LÃ BỐ",
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

export default function page_20210629214503() {
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
                      Có rất nhiều vị tướng đáng gờm trong lịch sử{" "}
                      <strong>Tam Quốc</strong>. Dưới đây cùng điểm qua 10 cái
                      tên nổi bật nhất trong số đó nhé!
                    </p>
                    <h5>1. Zhao Yun - Triệu Vân</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-16241154185281758165110.jpg"
                      alt="1, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Zhao Yun hay còn được gọi là Zilong là một phần của Ngũ Hổ
                      Tướng nổi tiếng của phe Thục. Ông là công thần khai quốc
                      nhà Thục Hán, là một vị tướng uy dũng, có mưu lược và tận
                      trung vì nước, được binh sĩ Thục Hán ca ngợi là "Hổ uy
                      tướng quân".
                    </p>
                    <h5>2. Guan Yu - Quan Vũ</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-1624115420988847416694.jpg"
                      alt="2, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Người anh em kết nghĩa này của Lưu Bị nổi tiếng là vị
                      tướng chỉ huy mạnh nhất dưới ngọn cờ của nhà Thục và là
                      người đứng đầu trong số Ngũ hổ tướng.{" "}
                      <strong>Quan Vũ</strong> là được đánh giá là vị tướng có
                      tài năng, võ nghệ dũng mãnh, được người đương thời nhận
                      xét là "sức địch vạn người, hổ thần một thời, có phong độ
                      quốc sĩ". Ngay cả Tào Tháo cũng khâm phục và coi ông là
                      một "nghĩa sĩ thiên hạ". Ông được người đời sau coi là một
                      biểu tượng của những đức tính "Danh lợi không đổi lòng,
                      Giàu sang không dâm loạn, Nghèo hèn không nhụt chí, Oai vũ
                      không khuất phục".
                    </p>
                    <h5>3. Zhang Fei - Trương Phi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-2-1624115420441170065432.jpg"
                      alt="3, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      <strong>Trương Phi</strong> là em út trong bộ 3 anh em kết
                      nghĩa vườn đào cùng với Lưu Bị và <strong>Quan Vũ</strong>
                      . La Quán Trung mô tả ước lệ trong{" "}
                      <strong>Tam quốc</strong> diễn nghĩa về Trương Phi rằng:
                      “Tiếng vang như sấm, chạy nhanh như ngựa, râu cọp hàm én,
                      đầu beo mắt lồi, lấy thủ cấp tướng giặc trong muôn quân
                      như lấy đồ trong túi…”. Cái tên Trương Phi đều khiến cả
                      hai phe Ngụy và Ngô khiếp sợ.
                    </p>
                    <h5>4. Lu Bu - Lã Bố</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-3-1624115421458410694456.jpg"
                      alt="4, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      <strong>Lã Bố</strong> nổi tiếng võ nghệ dũng mãnh, giỏi
                      cưỡi ngựa bắn cung, được xưng tụng là Phi tướng. Ông có
                      một con ngựa chiến đặc biệt, thường được gọi là Xích Thố
                      nên người thời đó có câu "Nhân trung Lã Bố, mã trung Xích
                      Thố" (Người có Lã Bố, ngựa có Xích Thố). Tuy nhiên, Lã Bố
                      không có tài mưu lược như nhiều đối thủ chính trị khác,
                      lại mang tiếng xấu là phản phúc vô thường khi hai lần trở
                      mặt giết chủ, cuối cùng bại trận và bị Tào Tháo ra lệnh xử
                      tử.
                    </p>
                    <h5>5. Zhang Liao - Trương Liêu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-4-1624115420474332894776.jpg"
                      alt="5, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Trương Liêu là một trong những vị tướng giỏi nhất của phe
                      Tào Ngụy từng tham gia nhiều trận đánh lớn và nổi tiếng
                      nhất qua trận Hợp Phì với quân Đông Ngô. Đỉnh cao sự
                      nghiệp của Trương Liêu là khi phục vụ nước Ngụy, đặc biệt
                      là chiến dịch Hợp Phì. Ông và Lý Điển chỉ dùng 800 bộ binh
                      mà đánh bại 10 vạn quân địch, điều mà tự cổ dùng binh chưa
                      có ai được như thế.
                    </p>
                    <h5>6. Ma Chao - Mã Siêu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-5-1624115422012560367910.jpg"
                      alt="6, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />

                    <p>
                      Mã Siêu là một phần của Ngũ Hổ Tướng, thân tín của Lưu Bị
                      trong suốt sự nghiệp lãnh đạo nước Thục. Đương thời Mã
                      Siêu được ca ngợi là võ dũng hơn người, nhưng bị nhiều
                      người phê phán vì thói hung hăng thô bạo (do ảnh hưởng của
                      việc từ nhỏ sống với người Khương) và những hành động
                      thiếu cân nhắc như nổi dậy chống Tào Tháo, khiến gia đình
                      đều bị Tào Tháo giết.
                    </p>
                    <h5>7. Zhang He - Trương Cáp</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-6-1624115421500200150526.jpg"
                      alt="7, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Trương Cáp bắt đầu tham gia chiến trận năm mới 16 tuổi khi
                      có khởi nghĩa Hoàng Cân. Thời Hán mạt ra ứng mộ đánh dẹp
                      Khăn Vàng. Sau này ông đã trở thành danh tướng nước Ngụy,
                      được xếp vào hàng năm danh tướng của Ngụy. Trong những
                      chiến tích của ông thì trận giao tranh với{" "}
                      <strong>Trương Phi</strong> ở Ba Tây được xem là nổi bật
                      nhất, dù thất bại nhưng cuối cùng Trương Cáp cũng bày kế
                      và giết được Lôi Đồng của Trương Phi.
                    </p>
                    <h5>8. Zhou Yu - Chu Du</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-7-16241154205071651554820.jpg"
                      alt="8, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Chu Du là vị tướng nổi tiếng nhất của nước Ngô không chỉ
                      về tài thao lược mà còn về khả năng lãnh đạo trực tiếp với
                      tư cách là một vị tướng chỉ huy. Chu Du nổi tiếng với
                      chiến thắng ở Xích Bích trước đại quân của Tào Tháo. Trận
                      Xích Bích là trận chiến lớn bậc nhất thời đó, là một bước
                      ngoặt quan trọng trong lịch sử giúp phân định cục diện{" "}
                      <strong>Tam Quốc</strong>.
                    </p>
                    <h5>9. Taishi Chi - Thái Sử Từ</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-8-1624115422508457741342.jpg"
                      alt="9, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Thái Sử Từ là mãnh tướng của Đông Ngô trong thời kỳ đầu,
                      vốn là thuộc hạ của Lưu Do và đi theo Tôn Sách trong quá
                      trình ông gây dựng sự nghiệp ở Giang Đông. Nhờ sở hữu võ
                      lực xuất chúng, Thái Sử Từ nhanh chóng nhận được sự tin
                      tưởng và tín nhiệm của Tôn Sách.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Chiến tích nổi bật nhất trong cuộc đời của nhân vật này
                      chính là trận đại chiến ba trăm hiệp giữa ông và Tiểu bá
                      vương võ lực xuất chúng Tôn Sách. Thái Sử Từ được xem là
                      người có cơ trí, uy dũng xuất chúng, coi trọng giữ chữ
                      tín, được người đời khen ngợi.
                    </p>
                    <h5>10. Lu Meng - Lã Mông</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-9-16241154210131102310187.jpg"
                      alt="10, TAM QUỐC,VÕ TƯỚNG,TRIỆU VÂN,QUAN VŨ,TRƯƠNG PHI,LÃ BỐ,"
                      note=""
                    />
                    <p>
                      Lã Mông là danh tướng cuối thời Đông Hán, từng theo Tôn
                      Sách chinh chiến sa trường, nổi danh nhờ tài năng và sự
                      dũng cảm. Sau khi Tôn Quyền kế vị, Lã Mông cũng được Tôn
                      Quyền trọng dụng, nhờ công tiên phong phá Hoàng Tổ được
                      phong làm Hoành Dã Trung lang tướng.
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

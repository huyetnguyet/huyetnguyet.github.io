import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:46 PM',
"title": '5 lí do đế chế nội y Victoria's Secret sụp đổ: Buôn bán và tiếp thị tình dục, phân biệt phụ nữ, thiên vị chị em Gigi và Kendall?',
"description": 'Sau hơn 40 năm thành lập, Victoria's Secret đã đánh mất ngôi vương và xuống dốc liên tục do hàng loạt nguyên nhân gây tranh cãi.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214618--17-638593.jpg',
"alt": 'victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,',
"category": 'images',
"date": '29/06/2021',
"time": '09:46 PM',
"link": '/5-li-do-khien-de-che-noi-y-victorias-secret-sup-do-buon-ban-va-tiep-thi-tinh-duc-phan-biet-phu-nu-thien-vi-chi-em-gigi-va-kendall',
"zcomponent": 'page_20210629214618',
"filepath": './20210629214618-5-li-do-khien-de-che-noi-y-victorias-secret-sup-do-buon-ban-va-tiep-thi-tinh-duc-phan-biet-phu-nu-thien-vi-chi-em-gigi-va-kendall.js'
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
  "5 lí do đế chế nội y Victoria's Secret sụp đổ: Buôn bán và tiếp thị tình dục, phân biệt phụ nữ, thiên vị chị em Gigi và Kendall?";
const author = "CHIZ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:46 PM";
const description =
  "Sau hơn 40 năm thành lập, Victoria's Secret đã đánh mất ngôi vương và xuống dốc liên tục do hàng loạt nguyên nhân gây tranh cãi.";
const link =
  "5-li-do-khien-de-che-noi-y-victorias-secret-sup-do-buon-ban-va-tiep-thi-tinh-duc-phan-biet-phu-nu-thien-vi-chi-em-gigi-va-kendall";
const tagparam = [
  "victorias secret",
  "sao us uk",
  "sao hollywood",
  "kendall jenner",
  "gigi hadid",
  "bella hadid",
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

export default function page_20210629214618() {
  return (
    <>
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
                <div className="contentBody">
                  <p>
                    <strong>Victoria's Secret</strong> được coi là đế chế nội y
                    khổng lồ của nước Mỹ với những đêm diễn được săn đón trên
                    toàn cầu. Họ đã thành công rực rỡ trong nhiều năm và chạm
                    mức doanh thu 7,7 tỷ đô (177 nghìn tỷ đồng) trong thời kì
                    đỉnh cao vào giai đoạn 2010 - 2012. Nhưng hiện tại gió đã
                    xoay chiều, Victoria's Secret và cả show diễn triệu đô đang
                    bộc lộ những yếu kém trong việc xây dựng hình ảnh của 1
                    thương hiệu đồ lót nữ.
                  </p>
                  <p>
                    Có nhiều lí do góp phần gây nên sự xuống dốc của của thương
                    hiệu xa xỉ này dù <strong>Victoria's Secret</strong> Fashion
                    Show đã gặt hái được thành công vang dội và sản sinh ra
                    nhiều siêu mẫu nổi tiếng. Những nguyên nhân không chỉ đến từ
                    đội ngũ quản lí, bộ máy bên trong mà còn nằm ở cách công ty
                    này đối xử với các "thiên thần" và cả "thượng đế" - khách
                    hàng của họ. Đặc biệt bê bối ngập trời và mặt tối bên trong
                    dần bị bóc trần theo thời gian, chính điều này góp phần tạo
                    nên cơn lốc cuốn sạch thành công, đưa đế chế này xuống con
                    dốc không phanh.
                  </p>
                  <p>
                    Năm 2019, Jeffrey Epstein đã bị bắt sau khi lợi dụng danh
                    tiếng của <strong>Victoria's Secret</strong> để hoạt động
                    mua bán mại dâm dối với phụ nữ, thậm chí trẻ vị thành niên.
                    Tên này thậm chí còn lấy danh nghĩa là nhà quản lí tiền tệ
                    để mở các buổi thử vai và tấn công tình dục những người đến
                    tham dự. Wexner - CEO của công ty đã phủ nhận việc quen biết
                    tên tội phạm tình dục này nhưng sự thật là Wexner cũng đã
                    từng làm việc với Jeffrey.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--10-849553.jpg")
                        .default
                    }
                    alt="1, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Jeffrey Epstein bị bắt với tội danh buôn bán tình dục trẻ vị thành niên. Không chỉ vậy, hắn ta còn đứng sau nhiều vụ lừa lọc để trục lợi từ những người muốn gia nhập Victoria's Secret"
                  />
                  <p>
                    Từ khi mới thành lập, <strong>Victoria's Secret</strong> đã
                    chú trọng đến nhóm khách hàng là những người phụ nữ cao gầy,
                    chân dài. Với các bộ sưu tập nội y như Very Sexy, Dream
                    Angels và Sexy Illusions, các nhà phân tích cho rằng công ty
                    đã xây dựng một thương hiệu xoay quanh ham muốn tình dục của
                    nam giới đối với phụ nữ. Mặc dù cách tiếp cận này đã từng có
                    tác dụng nhưng ở thời điểm hiện tại, tư duy trên đã quá lỗi
                    thời.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--11-703066.jpg")
                        .default
                    }
                    alt="2, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Các nhà phân tích cho rằng hình ảnh những thiên thần siêu gầy nhưng ngực khủng cùng đôi cánh và bộ nội y bốc lửa được sử dụng để đánh vào ham muốn tình dục của đàn ông"
                  />
                  <p>
                    Trong thời đại con người thay đổi, phụ nữ hướng đến sự đa
                    dạng và hiện đại thì những bộ đồ lót chỉ dành cho người gầy
                    lại chính là lỗ hổng của <strong>Victoria's Secret</strong>.
                    Trong gần 2 thập kỷ, Victoria's Secret đã dựa vào những buổi
                    trình diễn thời trang, nơi có hàng loạt chiếc áo lót nạm đá
                    quý cùng đôi cánh thiên thần nổi bật, để gây tiếng vang cho
                    thương hiệu.
                  </p>
                  <p>
                    Tuy nhiên khi show diễn bốc lửa này không còn phát huy tác
                    dụng, <strong>Victoria's Secret</strong> phải thay đổi và
                    cho khách hàng thấy một thương hiệu chân thực, ít gợi dục
                    hơn. Bên cạnh đó, "ông lớn" của nước Mỹ cũng gặp khó khăn
                    khi xóa bỏ định kiến "chỉ gầy mới đẹp" mà họ đã đề ra và
                    theo đuổi trong nhiều năm.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--12-523289.jpg")
                        .default
                    }
                    alt="3, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Những bộ đồ lót gợi dục rực rỡ sắc màu với mục đích chính để phô diễn cơ thể dần khiến khán giả ngán ngẩm"
                  />
                  <p>
                    Khi phụ nữ càng ưa chuộng những mẫu bra thể thao, bra không
                    gọng thì những chiếc áo lót có gọng nâng ngực của{" "}
                    <strong>Victoria's Secret</strong> đã không còn thắng thế.
                    Những bộ đồ lót sặc sỡ, diêm dúa và chỉ dành cho những người
                    siêu gầy đã bị nhiều đối thủ khác vượt mặt - nơi mà bất kì
                    ai với bất kì hình dáng cơ thể nào đều có thể tìm được món
                    đồ ưng ý. Thương hiệu này đã vô tình tạo ra khuôn mẫu kìm
                    kẹp sự phát triển của họ.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--13-726906.jpg")
                        .default
                    }
                    alt="4, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Những bộ đồ lót rườm rà và nóng bỏng không thể ứng dụng quá nhiều trong cuộc sống"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--14-300117.jpg")
                        .default
                    }
                    alt="5, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Những bộ nội y nạm kim cương chỉ có thể mặc khi diễn thời trang hoặc trưng bày"
                  />
                  <p>
                    Một điều dễ dàng nhận thấy ở các thiên thần của{" "}
                    <strong>Victoria's Secret</strong> là họ đều là siêu mẫu với
                    đôi chân dài, thân hình gầy nhưng vòng 1 vẫn đầy đặn. Thậm
                    chí cựu giám đốc tiếp thị của công ty còn nói rằng những phụ
                    nữ quá béo hoặc là người chuyển giới thì không nên đứng trên
                    sàn diễn. Vì vậy, việc khách hàng không thể đồng cảm với
                    thương hiệu là điều dễ hiểu khi chỉ có số ít phụ nữ đủ tiêu
                    chuẩn mặc những bộ đồ nội y kén dáng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--15-902474.jpg")
                        .default
                    }
                    alt="6, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Dù khác màu da nhưng người mẫu của Victoria's Secret đều sở hữu đôi chân dài miên man, vòng 1 đầy đặn cùng thân hình cao gầy mảnh mai"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--16-923710.jpg")
                        .default
                    }
                    alt="7, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Những bộ đồ lót của Victoria's Secret đều vô cùng sexy, khêu gợi và được mặc bởi những mỹ nhân có body bốc lửa"
                  />
                  <p>
                    Không quá khó hiểu những siêu mẫu đắt giá nhất thế giới như{" "}
                    <strong>Kendall Jenner</strong>, <strong>Gigi Hadid</strong>{" "}
                    và <strong>Bella Hadid</strong> trở thành đối tác yêu thích
                    của <strong>Victoria's Secret</strong>. Dù không phải thiên
                    thần dưới trướng nhưng bộ 3 người mẫu này vẫn thường xuyên
                    được công ty mời biểu diễn trong các show diễn. Tuy nhiên,
                    cả 3 cô nàng đều được miễn casting và khiến khán giả khá bức
                    xúc vì sự thiên vị của thương hiệu. Nhiều người cho rằng
                    việc bộ 3 được vào thẳng mà không cần qua vòng tuyển chọn là
                    bất công với những siêu mẫu khác.
                  </p>
                  <p>
                    Được mệnh danh là "bảo chứng rating" của show diễn, người
                    mẫu đắt giá Kendall nghiễm nhiên có vé vào thẳng mà không
                    cần trải qua vòng casting
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--18-522376.jpg")
                        .default
                    }
                    alt="8, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Kendall luôn được diện những bộ cánh sặc sỡ và nổi bật trên sàn diễn nóng bỏng bậc nhất thế giới"
                  />
                  <p>
                    Khi Kendall, Gigi và Bella được tuyển thẳng đồng nghĩa với
                    việc nhiều người mẫu tiềm năng khác sẽ bị gạch tên để nhường
                    chỗ cho họ. Khi biết đến việc những gương mặt tài năng bị
                    loại vô cớ, nữ ca sĩ Rihanna thậm chí còn quyết định không
                    hát trong <strong>Victoria's Secret</strong> Fashion Show để
                    bày tỏ sự không đồng tình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--19-590488.jpg")
                        .default
                    }
                    alt="9, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Gigi cũng nhiều lần tham gia show của Victoria's Secret mà không cần casting dù nhiều người chỉ trích và cho rằng cô không chủ động đăng ký dự tuyển"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--20-483367.jpg")
                        .default
                    }
                    alt="10, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Gigi đẹp xuất sắc trong bộ đồ lót sexy nghẹt thở"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--21-592241.jpg")
                        .default
                    }
                    alt="11, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Giống như chị gái Gigi, Bella cũng không cần tham gia vòng tuyển chọn mà vẫn được biểu diễn"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--22-934735.jpg")
                        .default
                    }
                    alt="12, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note="Những bộ cánh của Bella cũng rực rỡ và hoành tráng không kém gì chị gái và Kendall"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--17-638593.jpg")
                        .default
                    }
                    alt="13, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214618--23-934735.jpg")
                        .default
                    }
                    alt="14, victorias secret,sao us uk,sao hollywood,kendall jenner,gigi hadid,bella hadid,"
                    note=""
                  />
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

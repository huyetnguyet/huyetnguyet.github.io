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
"timestamp": '17/06/2021 02:03 PM',
"title": 'Đọ sắc trong tà áo dài trắng tinh khôi, các hot girl Esports hoá “nàng thơ" trong sáng',
"description": 'Khác với hình ảnh trên sóng livestream, những cô nàng nổi tiếng giới Esports thướt tha trong tà áo dài trắng học đường.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210617140309--10-30061.jpeg',
"alt": 'Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, ',
"category": 'stars',
"date": '17/06/2021',
"time": '02:03 PM',
"link": '/do-sac-trong-ta-ao-dai-trang-tinh-khoi-cac-hot-girl-esports-hoa-nang-tho-trong-sang',
"zcomponent": 'page_20210617140309',
"filepath": './20210617140309-do-sac-trong-ta-ao-dai-trang-tinh-khoi-cac-hot-girl-esports-hoa-nang-tho-trong-sang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Đọ sắc trong tà áo dài trắng tinh khôi, các hot girl Esports hoá “nàng thơ" trong sáng';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "17/06/2021 02:03 PM";
const description =
  "Khác với hình ảnh trên sóng livestream, những cô nàng nổi tiếng giới Esports thướt tha trong tà áo dài trắng học đường.";
const link =
  "do-sac-trong-ta-ao-dai-trang-tinh-khoi-cac-hot-girl-esports-hoa-nang-tho-trong-sang";
const tagparam = ["streamer", "esports", "hot-girl", "ao-dai", "cuoi-cap"];
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

export default function page_20210617140309() {
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
              >
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
                    Vào khoảng thời gian này mỗi năm cũng là khi diễn ra lễ chia
                    tay lứa học sinh cuối cấp, vậy nên hình ảnh những tà áo dài
                    trắng trong những ngày này đã trở thành ký ức và kỷ niệm
                    không thể thiếu. Tuy nhiên, do diễn biến của dịch COVID-19
                    nên năm nay, sự kiện đáng nhớ của học sinh lớp 12 sẽ khó,
                    thậm chí không thể diễn ra.
                  </p>
                  <p>
                    Để vơi bớt cảm giác nhớ nhung này, hãy ngắm nhìn những bức
                    hình diện áo dài trắng của các <strong>hot girl</strong>{" "}
                    <strong>Esports</strong> Việt nhé!
                  </p>
                  <p>
                    <strong>Streamer Hường Lulii</strong>{" "}
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140309--10-30061.jpeg")
                          .default
                      }
                      alt="10Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                      note=""
                    />
                  </p>
                  <p>
                    Không sở hữu chân dài nuột nà, hay ba vòng quyến rũ, nữ{" "}
                    <strong>streamer</strong> "bé hạt tiêu" Hường Lulii mang đến
                    một luồng gió mới.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--11-39589.jpeg")
                        .default
                    }
                    alt="11Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note=""
                  />
                  <p>
                    Hình tượng cô nàng này diện áo dài trắng được người hâm mộ
                    liên tưởng đến "nhỏ bạn thân bàn bên" mà bất kỳ chàng trai
                    nào cũng từng chú ý. Sự đáng yêu và lém lỉnh của cô nàng
                    được thể hiện trọn vẹn trong từng khung hình.
                  </p>
                  <p>
                    <strong>Streamer Mina Young</strong>
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--12-81878.jpeg")
                        .default
                    }
                    alt="1Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Mina Young không phải là cái tên xa lạ với anh em fan game."
                  />
                  <p>
                    Trước khi bước chân vào làm <strong>streamer</strong>, cô
                    nàng từng khiến cộng đồng mạng phát sốt với hình ảnh "
                    <strong>hot girl</strong> quân nhân" trong lần biểu diễn
                    nghệ thuật cho trường Đại học Văn hóa Nghệ thuật Quân đội.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--13-84993.jpeg")
                        .default
                    }
                    alt="12Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--14-73080.jpeg")
                        .default
                    }
                    alt="13Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note=""
                  />
                  <p>
                    Với ương mặt thanh tú hơi nét <strong>hot girl</strong> xứ
                    Hàn, làn da trắng ngần, còn nhớ những ngày đầu làm{" "}
                    <strong>streamer</strong>, Mina Young đã khiến cộng đồng
                    mạng phát "sốt" bởi hình ảnh cô nữ sinh mặc áo dài trắng
                    thướt tha. Không ít người đùa rằng, Mina Young là hình mẫu
                    của cô nữ sinh trong mơ của bao thế hệ học trò.
                  </p>
                  <p>
                    <strong>Streamer Trang Banana</strong>
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--15-74038.jpeg")
                        .default
                    }
                    alt="2Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Xuất hiện trong bộ áo dài trắng tinh khôi, cùng với mái tóc xõa dài uốn xoăn nhẹ, nữ streamer Trang Banana đã làm xiêu lòng hết thảy người đối diện."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--16-48669.jpeg")
                        .default
                    }
                    alt="3Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Sở hữu gương mặt nhỏ nhắn, đôi mắt to tròn long lanh và rất có hồn, cô nàng dường như thu hút hết mọi sự chú ý trong bộ ảnh mới với áo dài trắng."
                  />
                  <p>
                    Chỉ nở nụ cười nhẹ nhàng, trong trẻo, nữ{" "}
                    <strong>streamer</strong> này cũng đủ làm "mềm lòng" người
                    xem khó tính nhất.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--18-45802.jpeg")
                        .default
                    }
                    alt="4Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Trang Banana có tên đầy đủ là Hà Kiều Trang (SN 1997) là một streamer được dân tình chú ý và khen ngợi hết lời vì nhan sắc nổi bật."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--19-91284.jpeg")
                        .default
                    }
                    alt="5Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Nữ streamer 9X này được nhận xét là sở hữu gương mặt ưa nhìn, đáng yêu cùng phong cách khá năng động, thân thiện."
                  />

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--17-50739.jpeg")
                        .default
                    }
                    alt="14Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note=""
                  />
                  <h3>MC Mai Dora</h3>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--20-90867.jpeg")
                        .default
                    }
                    alt="6Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Mai Dora xuất phát điểm là sinh viên Ngân hàng nhưng cô nàng lại rẽ ngang sang làm nghệ thuật. May mắn mỉm cười với Mai khi cô lọt vào mắt xanh của một kênh YouTube vào năm 2017. Bằng sự nỗ lực không ngừng, cô nàng nhanh chóng trở thành người mẫu ảnh sáng giá."
                  />
                  <p>
                    Cùng một bộ áo dài, nữ MC của VETV đầy nóng bỏng, "đốt mắt"
                    với số đo 3 vòng cực chuẩn.
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--21-03624.jpeg")
                        .default
                    }
                    alt="15Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note=""
                  />
                  <p>
                    <strong>Hot girl Xoài Non</strong>
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--22-11431.jpeg")
                        .default
                    }
                    alt="7Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Xoài Non (Thùy Trang) sở hữu gương mặt xinh xắn, đôi mắt sâu, sống mũi cao, làn da trắng và nụ cười tươi rói."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--23-21628.jpeg")
                        .default
                    }
                    alt="8Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Điểm khiến cô nàng trở nên nổi bật giữa rất nhiều bóng hồng khác đó là gương mặt lai Tây."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--24-49655.jpeg")
                        .default
                    }
                    alt="9Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
                    note="Vợ của nam streamer giàu nhất Việt Nam từng gây xôn xao cộng đồng mạng khi cho ra lò bộ ảnh thướt tha với tà áo dài Việt Nam."
                  />
                  <p>
                    Không ít người nhận xét nhìn cô nàng như "gái Tây mặc áo dài
                    Việt".
                  </p>

                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140309--25-04971.jpeg")
                        .default
                    }
                    alt="16Streamer, Esports, Hot Girl, Ao Dai, Cuoi Cap, "
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

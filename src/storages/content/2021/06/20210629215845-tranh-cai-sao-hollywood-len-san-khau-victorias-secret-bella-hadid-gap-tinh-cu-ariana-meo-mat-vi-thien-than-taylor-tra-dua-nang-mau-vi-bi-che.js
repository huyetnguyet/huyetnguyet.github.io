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
"timestamp": '29/06/2021 09:58 PM',
"title": 'Tranh cãi sao Hollywood lên sân khấu Victoria's Secret: Bella Hadid gặp tình cũ, Ariana méo mặt vì thiên thần, Taylor trả đũa nàng mẫu vì bị chê',
"description": 'Ngoài sự nóng bỏng của dàn thiên thần chân dài, khán giả còn vô cùng chú ý đến những ngôi sao Hollywood đình đám góp mặt trong show diễn của Victoria's Secret.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215845--11-613621.jpg',
"alt": 'gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:58 PM',
"link": '/tranh-cai-sao-hollywood-len-san-khau-victorias-secret-bella-hadid-gap-tinh-cu-ariana-meo-mat-vi-thien-than-taylor-tra-dua-nang-mau-vi-bi-che',
"zcomponent": 'page_20210629215845',
"filepath": './20210629215845-tranh-cai-sao-hollywood-len-san-khau-victorias-secret-bella-hadid-gap-tinh-cu-ariana-meo-mat-vi-thien-than-taylor-tra-dua-nang-mau-vi-bi-che.js'
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
  "Tranh cãi sao Hollywood lên sân khấu Victoria's Secret: Bella Hadid gặp tình cũ, Ariana méo mặt vì thiên thần, Taylor trả đũa nàng mẫu vì bị chê";
const author = "CHIZ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:58 PM";
const description =
  "Ngoài sự nóng bỏng của dàn thiên thần chân dài, khán giả còn vô cùng chú ý đến những ngôi sao Hollywood đình đám góp mặt trong show diễn của Victoria's Secret.";
const link =
  "tranh-cai-sao-hollywood-len-san-khau-victorias-secret-bella-hadid-gap-tinh-cu-ariana-meo-mat-vi-thien-than-taylor-tra-dua-nang-mau-vi-bi-che";
const tagparam = [
  "gigi hadid",
  "sao us uk",
  "sao hollywood",
  "victoria's secret",
  "bella hadid",
  "taylor swift",
  "Ariana Grande",
  "The Weeknd",
  "irina shayk",
  "Kanye West",
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

export default function page_20210629215845() {
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
                      Là một trong những chương trình ăn khách nhất thế giới,{" "}
                      <strong>Victoria's Secret</strong> Fashion Show luôn được
                      khán giả săn đón và mong chờ. Không chỉ có dàn siêu mẫu
                      danh tiếng và chuyên nghiệp, show diễn còn mời những ngôi
                      sao đình đám Hollywood đến biểu diễn khuấy động sân khấu.
                    </p>
                    <p>
                      Tuy nhiên, show diễn được đầu tư mạnh tay của{" "}
                      <strong>Victoria's Secret</strong> cũng không thể tránh
                      khỏi những sự cố trong quá trình diễn ra. Những ngôi sao
                      nổi tiếng tham gia show đã nhiều lần gây bão MXH với những
                      khoảnh khắc thú vị và những câu chuyện đằng sau ít người
                      biết đến.
                    </p>
                    <p>
                      Ngay từ khi chưa diễn ra, show diễn nội y của{" "}
                      <strong>Victoria's Secret</strong> năm 2016 đã thu hút sự
                      chú ý của cộng đồng mạng khi trong dàn siêu mẫu có tên{" "}
                      <strong>Bella Hadid</strong> và nghệ sĩ biểu diễn là{" "}
                      <strong>The Weeknd</strong>. Cuộc gặp mặt định mệnh của
                      cặp đôi đình đám còn được nhiều cư dân mạng quan tâm hơn
                      cả... chuyện học hành của họ. Cả thế giới đều hồi hộp chờ
                      đến khoảnh khắc Bella bước ra sàn diễn và đụng độ tình cũ
                      ngay trên sóng trực tiếp.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--10-280878.jpg")
                          .default
                      }
                      alt="1, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Trong lịch sử show diễn chưa từng có cặp tình cũ nào gặp nhau trên sân khấu như Bella và The Weeknd"
                    />
                    <p>
                      Và điều gì đến cũng đã đến, <strong>Bella Hadid</strong>{" "}
                      sải bước trên đường băng và <strong>The Weeknd</strong>{" "}
                      đứng đợi để giao lưu như những siêu mẫu khác. Khi nhìn
                      nhau, cả 2 đều nở nụ cười nhưng chỉ 1 giây sau, nàng mẫu
                      đã "lật mặt" và trở lại thần thái lạnh lùng kiêu sa. Biểu
                      cảm bất cần lạnh nhạt của người đẹp chân dài đã gây bão
                      trên MXH và khiến dân tình vô cùng "mãn nguyện".
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--11-613621.jpg")
                          .default
                      }
                      alt="13, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Vẻ đẹp lộng lẫy và khí chất sang chảnh của Bella khiến khán giả tin rằng The Weeknd sẽ phải khóc trong cánh gà vì... quá tiếc"
                    />
                    <p>
                      Trong khi đó, chị gái của Bella cũng có một phần diễn
                      không trọn vẹn trong show diễn ở Paris.{" "}
                      <strong>Gigi Hadid</strong> diện một bộ nội y màu đen nổi
                      bật trên làn da trắng mịn cùng đôi cánh lớn ở phía sau
                      lưng. Tuy nhiên khi đang đi catwalk, 1 chiếc dây áo của cô
                      đã bị đứt và khiến bộ đồ không còn đẹp đẽ như ban đầu.
                      Nhiều khán giả cũng tỏ ra thất vọng vì màn xuất hiện của
                      cô đào hot nhất chương trình không được diễn ra trọn vẹn.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--12-795733.jpg")
                          .default
                      }
                      alt="2, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--13-887071.jpg")
                          .default
                      }
                      alt="3, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="1 bên dây áo lót của Gigi Hadid bị đứt khiến tổng thể bộ đồ trở nên thiếu tinh tế và cân đối"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--14-457653.jpg")
                          .default
                      }
                      alt="4, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Dù vậy, Gigi vẫn hoàn thành màn trình diễn xuất sắc với thần thái hút hồn và body hoàn mỹ không chỗ chê"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Khi được mời hát trong show diễn năm 2014,{" "}
                      <strong>Ariana Grande</strong> mới 21 tuổi nhưng đã là
                      ngôi sao đình đám được nhiều người yêu mến.{" "}
                      <strong>Victoria's Secret</strong> Fashion Show năm ấy đã
                      chộp được khoảnh khắc để đời của nữ ca sĩ. Cụ thể, khi
                      đang biểu diễn cực sung, Ariana đã suýt bị đôi cánh lớn
                      của 1 người mẫu va vào đầu. Ngay lập tức, cô nàng đã cúi
                      thấp đầu và lộ biểu cảm hoang mang ngơ ngác lẫn một chút
                      sợ hãi. Khoảnh khắc này đã nhanh chóng trở nên viral vì vẻ
                      mặt dễ thương của giọng ca Position.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--15-693320.jpg")
                          .default
                      }
                      alt="5, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--16-921957.jpg")
                          .default
                      }
                      alt="6, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Ariana nhảy nhót nhiệt tình trong show thời trang nóng bỏng nhất hành tinh"
                    />{" "}
                    <p>
                      Trước khi "biến cố" ập đến, <strong>Ariana Grande</strong>{" "}
                      vẫn thoải mái "bung xõa" cùng các siêu mẫu cao hơn cô cả
                      cái đầu một cách vô cùng dễ thương
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--17-045860.jpg")
                          .default
                      }
                      alt="14, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--18-647803.jpg")
                          .default
                      }
                      alt="7, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Khi siêu mẫu xoay người, đôi cánh lớn sau lưng cô đã suýt nữa đập vào đầu Ariana đứng sát bên cạnh. Nữ ca sĩ đã bị giật mình và cúi thấp người một cách sợ sệt"
                    />
                    <p>
                      Biểu cảm đáng yêu của Ariana khiến khán giả phải bật cười
                      vì quá hài hước và "lệch pha" so với show diễn sexy được
                      nhiều người mong chờ
                    </p>
                    <p>
                      <strong>Victoria's Secret</strong> Fashion Show không
                      thiếu những siêu mẫu vừa sinh con được vài tháng thậm chí
                      vài tuần, nhưng những cô đào đang mang thai thì cực kì
                      hiếm. Bạn gái mới của <strong>Kanye West</strong> -{" "}
                      <strong>Irina Shayk</strong> cũng đã từng đi catwalk với
                      chiếc bụng bầu đã nhô lên khá rõ. Cô nàng đã diện 1 bộ đồ
                      nội y khá kín đáo để che vòng eo nhưng vẫn bị người xem
                      phát hiện.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--20-679097.jpg")
                          .default
                      }
                      alt="8, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Dù đã diện bộ đồ che hết bụng nhưng siêu mẫu Iriana vẫn bị khán giả phát hiện"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--19-816050.jpg")
                          .default
                      }
                      alt="15, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Bà bầu Irina gây bất ngờ khi xuất hiện với thân hình đầy đặn, đi giày cao gót dù đang mang thai"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--21-790877.jpg")
                          .default
                      }
                      alt="9, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note=""
                    />
                    <p>
                      Sau màn trình diễn của <strong>Taylor Swift</strong> năm
                      2013, siêu mẫu Jessica Hart đã đưa ra nhận xét: "Chúa sẽ
                      phù hộ cho trái tim của Taylor Swift. Tôi nghĩ cô ấy tuyệt
                      vời. Nhưng tôi không hiểu sao đối với tôi, cô ấy không hề
                      phù hợp". Điều này đã khiến cho nàng mẫu không thể tham dự{" "}
                      <strong>Victoria's Secret</strong> Fashion Show vì chọc
                      nhầm "rắn chúa". Hành động trả đũa của Taylor khiến cô bị
                      một bộ phận dân tình chỉ trích vì sự ích kỉ và nhỏ nhen.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--23-560761.jpg")
                          .default
                      }
                      alt="11, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Siêu mẫu nội y sở hữu thân hình bốc lửa cùng vòng 1 khủng nóng bỏng, nhưng cô đã không thể tham dự show diễn kể từ năm 2014 sau phát ngôn nhận xét màn trình diễn của Taylor Swift"
                    />
                    <p>
                      Đứng trên sàn diễn nội y, Taylor cũng "chặt chém" quyến rũ
                      không thua kém gì các người mẫu
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--25-14785.jpeg")
                          .default
                      }
                      alt="12, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note="Nữ ca sĩ gây ngỡ ngàng khi o ép vòng 1 đầy đặn trên sân khấu Victoria's Secret Fashion Show"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215845--22-584647.jpg")
                          .default
                      }
                      alt="10, gigi hadid,sao us uk,sao hollywood,victoria's secret,bella hadid,taylor swift,Ariana Grande,The Weeknd,irina shayk,Kanye West,"
                      note=""
                    />
                    <p>Nguồn: RadarOnline</p>
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

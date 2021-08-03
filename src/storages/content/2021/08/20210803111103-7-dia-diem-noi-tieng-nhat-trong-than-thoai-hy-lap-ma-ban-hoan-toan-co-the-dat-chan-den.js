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
"timestamp": '03/08/2021 11:11 AM',
"title": '7 địa điểm nổi tiếng nhất trong Thần thoại Hy Lạp mà bạn hoàn toàn có thể đặt chân đến',
"description": 'Ít ai biết rằng, có rất nhiều địa điểm trong thần thoại Hy Lạp được dựa trên những nơi có thật ngoài đời.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/altar-of-zeus-at-mount-ida-ancient-anatolia-1627888102763439783445.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,',
"category": 'travel',
"date": '03/08/2021',
"time": '11:11 AM',
"link": '/7-dia-diem-noi-tieng-nhat-trong-than-thoai-hy-lap-ma-ban-hoan-toan-co-the-dat-chan-den',
"zcomponent": 'page_20210803111103',
"filepath": './20210803111103-7-dia-diem-noi-tieng-nhat-trong-than-thoai-hy-lap-ma-ban-hoan-toan-co-the-dat-chan-den.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "travel";
const categoryLink = "/travel";
const title =
  "7 địa điểm nổi tiếng nhất trong Thần thoại Hy Lạp mà bạn hoàn toàn có thể đặt chân đến";
const author = "Jessie Mai";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:11 AM";
const description =
  "Ít ai biết rằng, có rất nhiều địa điểm trong thần thoại Hy Lạp được dựa trên những nơi có thật ngoài đời.";
const link =
  "7-dia-diem-noi-tieng-nhat-trong-than-thoai-hy-lap-ma-ban-hoan-toan-co-the-dat-chan-den";
const tagparam = ["KHÁM PHÁ", "THẦN THOẠI HY LẠP", "TRUYỀN THUYẾT"];
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

export default function page_20210803111103() {
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
                      Những câu chuyện thần thoại thường khiến chúng ta tò mò,
                      mê mẩn, dù chúng bắt nguồn từ đất nước nào đi nữa. Tuy
                      nhiên, <strong>thần thoại Hy Lạp</strong> lại phổ biến hơn
                      tất cả, được sử dụng rộng rãi trong thơ ca, kịch, tiểu
                      thuyết, truyện tranh, phim ảnh và thậm chí cả game.
                    </p>
                    <p>
                      Gắn liền với các câu chuyện nổi tiếng nhất trong thần
                      thoại, đây là một số địa điểm mà bạn hoàn toàn có thể ghé
                      thăm.
                    </p>
                    <h5>1. Đỉnh Olympus</h5>
                    <p>
                      Núi Olympus được xem là địa điểm quan trọng nhất trong{" "}
                      <strong>thần thoại Hy Lạp</strong>. Trong thần thoại, ngọn
                      núi này được tạo ra sau cuộc chiến giữa các thần Olympians
                      và các thần Titan (Titanomachy). Sau khi chiến thắng các
                      thần Titan, ngọn núi này trở thành ngôi nhà mới của chư
                      thần, đứng đầu là Zeus.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/e0f4e6a35b8e4f5c45f2a1091505aa2c-1627887931552365041395.jpg"
                      alt="1, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note="Đền thờ thần Zeus trên núi Ida"
                    />
                    <p>
                      Ngọn núi này hoàn toàn có thật và nằm tại Hy Lạp, cao hơn
                      3000m và là ngọn núi cao nhất ở đất nước này. Những câu
                      chuyện thơ mộng về mật hoa, các giai điệu du dương từ
                      chiếc đàn lia của thần Apollo vẫn được người leo núi kể
                      lại. Không chỉ tượng trưng cho nền văn hóa Hy Lạp, núi
                      Olympus còn đại diện cho chốn thiên đường không thể chạm
                      tới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/43903wide-16278879825131445438505.jpg"
                      alt="2, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note="Đền thờ nữ thần Aphaea trên đảo Aegina"
                    />
                    <h5>2. Núi Ida (Crete)</h5>
                    <p>
                      Nhắc đến <strong>thần thoại Hy Lạp</strong>, ai cũng ngay
                      lập tức nhớ tới Zeus, vị thần có lẽ là cha của một nửa số
                      nhân vật trong thần thoại Hy Lạp. Bên cạnh các câu chuyện
                      nổi tiếng với tình nhân của mình, Zeus còn là một chiến
                      thần, người đã đánh bại Titan Cronos.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/altar-of-zeus-at-mount-ida-ancient-anatolia-1627888102763439783445.jpg"
                      alt="3, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Cronos là một thần Titan hùng mạnh, sợ rằng con cái hắn sẽ
                      lật đổ ngai vị nên đã nuốt chửng hết lũ trẻ. Mẹ của Zeus,
                      Rhea, đã giấu Zeus ở động Ideon trên một ngọn núi. Đây là
                      nơi Zeus được nuôi lớn cho đến khi ông có thể đánh bại cha
                      mình. Hiện nay, nơi này là một địa điểm leo núi và{" "}
                      <strong>khám phá</strong> vô cùng nổi tiếng ở Hy Lạp.
                    </p>
                    <h5>3. Đảo Delos</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/gamek-2-1627888400294158929999.jpg"
                      alt="4, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Ngoài việc được UNESCO công nhận là Di sản Thế giới, hòn
                      đảo này còn có ý nghĩa quan trọng trong{" "}
                      <strong>thần thoại Hy Lạp</strong>. Chắc ai cũng đã từng
                      nghe đến câu chuyện nổi tiếng về Leto, người tình của
                      Zeus, sau khi hứng chịu cơn ghen tuông khủng khiếp của
                      Hera đã phiêu dạt đến hòn đảo này để sinh ra hai vị thần,
                      Artemis và Apollo. Hiện này, đảo Delos còn là nơi lưu trữ
                      những cổ vật có giá trị gắn liền với văn hóa, thần thoại
                      Hy Lạp cổ xưa.
                    </p>
                    <h5>4. Sông Acheron</h5>
                    <p>
                      Dòng sông chết chóc Acheron nằm ở thế giới ngầm dành cho
                      người đã khuất. Đây là con sông âm phủ duy nhất trong thần
                      thoại mà có thật ngoài đời và chạy dọc khắp lãnh thổ Hy
                      Lạp. Nó gắn liền với nhiều hẻm núi hoang vắng và thậm chí
                      là chảy dưới lòng đất ở một vài nơi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/gamek-3-16278886804531434383857.jpg"
                      alt="5, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Khu di tích Necromanteion hay Oracle of the Dead cũng năm
                      gần sông Acheron, từng là đền thờ của các vị thần Hades và
                      Persephone. Tuy mang tiếng là sông âm phủ, cảnh vật quanh
                      Acheron rất xanh tươi và giàu sức sống.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>5. Ithaca</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/gamek-4-16278888270091723755136.jpg"
                      alt="6, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Câu chuyện hùng tráng về cuộc hành trình 10 năm trở về nhà
                      của Odesseus đã được kể lại trong sử thi Odyssey. Sau cuộc
                      chiến thành Troy, Odesseus tìm đường trở về nhà, vượt qua
                      nhiều trở ngại trên đường đi. Hòn đảo huyền bí có tên
                      Ithaca xuất hiện, là một thiên đường của thần thánh để
                      Odesseus nghỉ ngơi sau cuộc chiến khốc liệt. Ngoài đời thì
                      Ithaca là một địa điểm có thật, sở hữu cảnh quan đẹp chẳng
                      kém gì trong thần thoại.
                    </p>
                    <h5>6. Kommos</h5>
                    <p>
                      Sự tích về loài minotaur (nhân ngưu) trong{" "}
                      <strong>thần thoại Hy Lạp</strong> khá thú vị. Chuyện kể
                      rằng Knossos là thủ đô của vương quốc thống trị bởi vua
                      Minos. Nhà vua có một đứa con kỳ lạ với nửa dưới là cơ thể
                      người, còn cái đầu lại là đầu trâu. Nha vua sau đó đã nhốt
                      nó vào một mê cung, và mang người đến để hiến dâng cho đứa
                      trẻ quái vật này ăn thịt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/gamek-5-1627888924782673153411.jpg"
                      alt="7, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Cuối cùng, nhân ngưu đã bị giết bởi hoàng tử xứ Athens và
                      con gái vua Minos. Vị trí chính xác của mê cung nhốt con
                      quái vật là ở đâu thì không ai biết. Nhưng nhiều người tin
                      rằng Kommos chính là nơi mà năm xưa vua Minos thống trị,
                      từ đó, địa điểm này gắn liền với câu chuyện thần thoại
                      trên.
                    </p>
                    <h5>7. Aegina</h5>
                    <p>
                      Được đặt tên theo tình nhân của Zeus, đảo Aegina nằm ở
                      vịnh Saronic. Chuyện kể rằng con gái của Thần sông Asopos
                      và Metope là Aegina đã bị thần Zeus bắt đến hòn đảo
                      Oenone. Ở đây, cô sinh ra Aeacus, người trở thành vua của
                      hòn đảo này, và từ đó hòn đảo mang tên của Aegina.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/gamek-6-16278894688901334853657.jpg"
                      alt="8, KHÁM PHÁ,THẦN THOẠI HY LẠP,TRUYỀN THUYẾT,"
                      note=""
                    />
                    <p>
                      Do sự ghen tuông của Hera, hòn đảo hứng chịu một bệnh dịch
                      khủng khiếp. Zeus đã phải biến loài kiến sống thành con
                      người để gia tăng dân số trên đảo. Trên thực tế, Aegina
                      cũng là một hòn đảo đẹp có cảnh vật thơ mộng, thu hút vô
                      số khách thăm quan mỗi năm.
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

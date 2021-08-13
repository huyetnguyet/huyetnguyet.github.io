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
"timestamp": '11/08/2021 10:56 AM',
"title": 'Những xà thần nổi tiếng trong thần thoại: Hydra còn xếp sau Tương Liễu Thị của Trung Hoa',
"description": 'Hydra trong thần thoại Hy Lạp và Tương Liễu Thị trong thần thoại Trung Hoa, xà thần nào đáng sợ hơn?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/quainhan-10-1628517629913322917197.jpg',
"alt": 'THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,',
"category": 'news',
"date": '11/08/2021',
"time": '10:56 AM',
"link": '/nhung-xa-than-noi-tieng-trong-than-thoai-hydra-con-xep-sau-tuong-lieu-thi-cua-trung-hoa',
"zcomponent": 'page_20210811105619',
"filepath": './20210811105619-nhung-xa-than-noi-tieng-trong-than-thoai-hydra-con-xep-sau-tuong-lieu-thi-cua-trung-hoa.js'
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
  "Những xà thần nổi tiếng trong thần thoại: Hydra còn xếp sau Tương Liễu Thị của Trung Hoa";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:56 AM";
const description =
  "Hydra trong thần thoại Hy Lạp và Tương Liễu Thị trong thần thoại Trung Hoa, xà thần nào đáng sợ hơn?";
const link =
  "nhung-xa-than-noi-tieng-trong-than-thoai-hydra-con-xep-sau-tuong-lieu-thi-cua-trung-hoa";
const tagparam = [
  "THẦN THOẠI HY LẠP",
  "THẦN THOẠI TRUNG HOA",
  "HYDRA",
  "TƯƠNG LIỄU THỊ",
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

export default function page_20210811105619() {
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
                      Rắn vẫn luôn là loài vật xuất hiện nhiều trong các truyền
                      thuyết và thần thoại trên khắp thế giới. Tuy nhiên, vai
                      trò của chúng không cố định, đôi khi chúng là những thần
                      thú, đôi khi lại là quái vật. Hôm nay mình sẽ giới thiệu
                      đến mọi người một vài chiếc rắn nổi tiếng trong thần
                      thoại.
                    </p>
                    <h5>
                      1.<strong>Tương Liễu Thị</strong> - 相柳氏 (Trung Hoa)
                    </h5>
                    <p>
                      Theo sách Sơn Hải Kinh – Đại Hoang Bắc kinh,{" "}
                      <strong>Tương Liễu Thị</strong> là bề tôi của thủy thần
                      Cộng Công. Tương Liễu Thị có chín cái đầu, mỗi cái đầu đều
                      có một mặt người, thân rắn, cơ thể màu xanh lam. Nơi nào
                      Tương Liễu Thị đi qua, đều sẽ bị tổn hại, hóa thành đầm
                      lầy hoặc dòng suối. Tương Liễu Thị thường kiếm ăn trên
                      chín ngọn núi. Đại Vũ Đế được Ứng Long và rồng giúp đỡ mà
                      diệt được Cộng Công. Tương Liễu Thị cũng bị giết, máu tanh
                      hôi chảy đến đâu thì đất đai đều không thể trồng ngũ cốc
                      được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/quainhan-10-1628517629913322917197.jpg"
                      alt="1, THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,"
                      note=""
                    />
                    <p>
                      Đại Vũ Đế đành phải đào đất đai ở đó lên rồi đổ đất nơi
                      khác vào, nhưng ba lần lấp thì cả ba lần đều sụp. Cuối
                      cùng ông bèn đem đất này đắp thành các đế vương đài ở phía
                      bắc núi Côn Luân.
                    </p>
                    <h5>
                      2. <strong>Hydra</strong> xứ Lerna (Hy Lạp)
                    </h5>
                    <p>
                      Thường được gọi ngắn gọn là <strong>Hydra</strong>. Theo
                      Theogony của Hesiod, Hydra là con của Typhon và Echidna,
                      một quái vật khổng lồ có hình dạng giống rắn nước với chín
                      cái đầu, một trong chín cái đầu này bất tử. Hydra ám ở các
                      đầm lầy tại Lerna, gần thành Árgos. Quái vật thường trồi
                      lên bắt người và gia súc của ở Lerna. Truyền thuyết kể
                      rằng cứ mỗi cái đầu bị chém xuống, từ vết thương sẽ mọc ra
                      hai cái đầu mới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/nhan-vien-bi-duoi-lam-lo-hinh-tuong-moi-lien-minh-huyen-thoai-hydra-16285178468822116391387.jpg"
                      alt="2, THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,"
                      note=""
                    />
                    <p>
                      Tiêu diệt <strong>Hydra</strong> là một trong 12 kỳ công
                      của Herakles. Người anh hùng được cháu trai mình là Iolaus
                      trợ giúp. Mỗi khi Herakles chém một cái đầu, Iolaus sẽ
                      khâu vết thương lại. Nhờ đó Hydra không thể mọc được thêm
                      đầu. Cuối cùng, khi còn một cái đầu bất tử, Herakles chém
                      đứt và chôn xuống dưới tảng đá nặng. Sau đấy người anh
                      hùng nhúng đầu mũi tên của mình vào máu (hoặc nọc độc) để
                      tăng độ sát thương.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Tiamat (Lưỡng Hà)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/magictiamat-16285181923121552683861.jpg"
                      alt="3, THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,"
                      note=""
                    />
                    <p>
                      Trong thần thoại Lưỡng Hà, Tiamat là vị thần khởi thủy,
                      cai quản nước biển. Ở phần đầu trong thần thoại, bà được
                      xem là vị thần sáng tạo. Ở phần sau của thần thoại, bà trở
                      thành hiện thân tà ác của hỗn mang nguyên thủy. Sử thi
                      sáng thế của người Babylon kể rằng sau khi Tiamat sinh ra
                      các vị thần thuộc thế hệ đầu tiên, Apsu – chồng của Tiamat
                      – cho rằng các con muốn lật đổ mình nên đến gây chiến.
                      Apsu qua đời, Tiamat nổi giận nên đã tiến hành một cuộc
                      chiến trong hình dạng rồng/rắn biển khổng lồ.
                    </p>
                    <h5>4. Balaur (Rumani)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/lwfzd3euw4t61-16285182875151244309095.jpg"
                      alt="4, THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,"
                      note=""
                    />
                    <p>
                      Balaur là quái vật rắn/rồng khổng lồ có cánh, chúng có bảy
                      hoặc mười hai đầu. Balaur thường xuất hiện trong các
                      truyện dân gian của Rumani. Nó gắn liền với những vụ bắt
                      cóc các thiếu nữ hoặc công chúa, và lúc nào cũng bị anh
                      hùng như Fat-Frumos hoặc Thánh Geogre.
                    </p>
                    <h5>5. Jormungandr (Bắc Âu)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/jormungandr-1280x720-16285184508081906752164.png"
                      alt="5, THẦN THOẠI HY LẠP,THẦN THOẠI TRUNG HOA,HYDRA,TƯƠNG LIỄU THỊ,"
                      note=""
                    />
                    <p>
                      Jormungandr là con mãng xà trong thần thoại Bắc Âu, một
                      trong ba đứa con của nữ khổng lồ Angrboda với thần Loki.
                      Thần Odin đã ném Jormungandr xuống đại dương bao quanh
                      Midgard. Con mãng xà lớn đến mức cuốn quanh một vòng thế
                      giới và tự ngậm đuôi của mình. Jormungandr là kẻ thù nhiều
                      duyên nợ với thần sấm Thor. Cả hai sẽ chạm trán với nhau
                      lần cuối cùng trong Ragnarok, thần sấm Thor sẽ hạ được
                      Jormungandr, nhưng bản thân chàng cũng bị trúng độc và qua
                      đời.
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

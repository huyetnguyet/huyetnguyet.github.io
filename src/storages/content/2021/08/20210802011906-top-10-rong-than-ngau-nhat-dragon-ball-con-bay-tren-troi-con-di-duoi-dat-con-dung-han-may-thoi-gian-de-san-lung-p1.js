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
"timestamp": '02/08/2021 01:19 AM',
"title": 'Top 10 Rồng thần "ngầu" nhất Dragon Ball: Con bay trên trời, con đi dưới đất, con dùng hẳn máy thời gian để "săn lùng" (P1)',
"description": 'Dragon Ball xuất hiện vô số phiên bản Rồng thần, mỗi con đều có những hình dạng và sức mạnh đặc biệt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-1-16278005780421511752096.jpg',
"alt": 'DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,',
"category": 'games',
"date": '02/08/2021',
"time": '01:19 AM',
"link": '/top-10-rong-than-ngau-nhat-dragon-ball-con-bay-tren-troi-con-di-duoi-dat-con-dung-han-may-thoi-gian-de-san-lung-p1',
"zcomponent": 'page_20210802011906',
"filepath": './20210802011906-top-10-rong-than-ngau-nhat-dragon-ball-con-bay-tren-troi-con-di-duoi-dat-con-dung-han-may-thoi-gian-de-san-lung-p1.js'
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
  'Top 10 Rồng thần "ngầu" nhất Dragon Ball: Con bay trên trời, con đi dưới đất, con dùng hẳn máy thời gian để "săn lùng" (P1)';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:19 AM";
const description =
  "Dragon Ball xuất hiện vô số phiên bản Rồng thần, mỗi con đều có những hình dạng và sức mạnh đặc biệt.";
const link =
  "top-10-rong-than-ngau-nhat-dragon-ball-con-bay-tren-troi-con-di-duoi-dat-con-dung-han-may-thoi-gian-de-san-lung-p1";
const tagparam = [
  "DRAGON BALL",
  "7 VIÊN NGỌC RỒNG",
  "RỒNG THẦN",
  "SERIES DRAGON BALL",
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

export default function page_20210802011906() {
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
                      Việc thu thập ngọc rồng để triệu hồi một con rồng có khả
                      năng ban cho bất kỳ điều ước nào mà người dùng mong muốn
                      là một điều không xa lạ trong thế giới{" "}
                      <strong>Dragon Ball</strong>. Theo thời gian, suốt{" "}
                      <strong>series Dragon Ball</strong> đã giới thiệu rất
                      nhiều phiên bản của sinh vật thần thoại này và mỗi con đều
                      có những ngoài hình, tính cách và sức mạnh khác nhau.
                    </p>
                    <p>
                      Dưới đây chính là 10 <strong>Rồng thần</strong> được đánh
                      giá "ngầu" nhất series.
                    </p>
                    <h5>
                      Mr. Poko Poko (<strong>Dragon Ball</strong> Online)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-1-16278005780421511752096.jpg"
                      alt="1, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,"
                      note=""
                    />
                    <p>
                      Có thể nhiều người chưa nghe thấy tên{" "}
                      <strong>Rồng thần</strong> này bao giờ. Đối với những
                      người không chơi <strong>Dragon Ball</strong> Online, con
                      rồng bí ẩn này được tạo ra bởi Dark Namekians. Mr. Poko
                      Poko trông hơi giống Porunga, nhưng không bay mà lại có
                      chân. Kỳ lạ là, điều này làm cho nó bớt đáng sợ và thần
                      bí, khiến Rồng thần này có vẻ giống người hơn.
                    </p>
                    <h5>
                      Shadows Dragons (<strong>Dragon Ball</strong> GT)
                    </h5>
                    <p>
                      Shadow Dragons là 1 loạt các con rồng được sinh ra từ
                      nguồn năng lượng tà ác của những viên ngọc rồng, chỉ xuất
                      hiện trong <strong>Dragon Ball</strong> GT. The Shadow
                      Dragon là hậu quả của việc lạm dụng ngọc rồng. Mỗi khi con
                      người thực hiện điều ước, sẽ có những năng lượng tiêu cực
                      được sinh ra và hấp thụ lại vào ngọc rồng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-2-16278005780631384497197.png"
                      alt="2, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,"
                      note=""
                    />
                    <p>
                      Những năng lượng này qua nhiều năm sẽ bị phân tán hết, tuy
                      nhiên với việc con người chế tạo ra{" "}
                      <strong>Dragon Ball</strong> Radar làm cho việc thu thập
                      ngọc rồng trở nên dễ dàng và nhanh chóng, năng lượng tà ác
                      đã tích tụ hình thành nên các con rồng xấu xa. Và rồng
                      phản diện được xem là mạnh mẽ nhất trong nhóm này chính là
                      Omega Shenron.
                    </p>
                    <h5>
                      Ultimate Shenron (<strong>Dragon Ball</strong> GT)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-3-1627800578084491148769.jpg"
                      alt="3, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,"
                      note=""
                    />
                    <p>
                      Ultimate Shenron là con rồng vĩnh cửu thứ 3 được giới
                      thiệu trong series <strong>Dragon Ball</strong>, trước đó
                      là rồng trái đất Shenron và rồng Namek Porunga. Ultimate
                      Shenron được triệu hồi khi người dùng thu thập đủ{" "}
                      <strong>7 viên ngọc rồng</strong> sao đen.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ultimate Shenron được triệu hồi từ Black Star{" "}
                      <strong>Dragon Ball</strong>s trong GT. Về bản chất, con
                      rồng này là một Shenron đã thay đổi pallet, có khả năng
                      ban điều ước mà không có bất kỳ giới hạn nào. Nhìn bề
                      ngoài, một sự hoán đổi màu sắc đơn thuần nghe có vẻ choáng
                      ngợp, ngay cả khi Shenron này mang một luồng khí ác độc.
                    </p>
                    <h5>
                      Black Smoke Shenron (<strong>Dragon Ball</strong> GT)
                    </h5>
                    <p>
                      Black Smoke Shenron là một con rồng trong{" "}
                      <strong>Dragon Ball</strong> GT được tạo ra từ một tập hợp
                      năng lượng tiêu cực do sử dụng quá nhiều Dragon Ball. Con
                      rồng này chịu trách nhiệm cho sự ra đời của bảy con Rồng
                      bóng tối, nhóm kẻ thù cuối cùng trong{" "}
                      <strong>series Dragon Ball</strong> GT.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/anh-4-162780057809581194562.jpg"
                      alt="4, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,"
                      note=""
                    />
                    <p>
                      Nó không muốn đáp ứng yêu cầu của bất kỳ ai nên cư xử
                      thiếu tôn trọng với bất cứ ai gọi mình. Cho đến nay Black
                      Smoke Shenron là con rồng duy nhất có thể được triệu tập
                      với cùng một viên ngọc rồng được sử dụng để triệu tập
                      những con rồng khác trong <strong>Dragon Ball</strong>.
                    </p>
                    <h5>
                      Rồng ở thành phố Conton (<strong>Dragon Ball</strong>{" "}
                      Xenoverse 2)
                    </h5>
                    <p>
                      Con rồng này được tạo ra bởi Chronoa - Kaioshin Thước thời
                      gian, 1 cách vô tình khi có ý định thể hiện khả năng của
                      mình. Vào thời điểm đó, Chronoa đã thể hiện khả năng của
                      mình bởi vì người dân thành phố Toki Toki (tên của Thành
                      phố Conton trong quá khứ) đã đặt câu hỏi về uy tín và sức
                      mạnh của Chronoa với tư cách là Kaioshin Chúa tể thời
                      gian.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/anh-5-1627800578110493200033.jpg"
                      alt="5, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,SERIES DRAGON BALL,"
                      note=""
                    />
                    <p>
                      Thật không may, Chronoa đã hơi quá tay khi thể hiện sức
                      mạnh, đến mức con rồng này trở nên to lớn và di chuyển để
                      tiêu diệt thành phố Toki Toki. Cho đến bây giờ, con rồng
                      này có thể được nhìn thấy ở phía bắc của Conton, trôi nổi
                      trên bầu trời. Theo một người kiểm soát thời gian ở đó,
                      rồng của thành phố Conton không có khả năng ban điều ước
                      như những người anh em khác của mình.
                    </p>
                    <p>Còn tiếp....</p>
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

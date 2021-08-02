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
"timestamp": '30/07/2021 12:18 PM',
"title": 'Hòa mình cùng Thế vận hội 2020 với những bộ anime thể thao nổi tiếng',
"description": 'Thế vận hội Tokyo 2020 cuối cùng cũng đang diễn ra tại Nhật Bản và khán giả có thể cùng học cùng chơi với một số anime thể thao sau.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-162758385936526249098.jpg',
"alt": 'ANIME,OLYMPIC,',
"category": 'games',
"date": '30/07/2021',
"time": '12:18 PM',
"link": '/hoa-minh-cung-the-van-hoi-2020-voi-nhung-bo-anime-the-thao-noi-tieng',
"zcomponent": 'page_20210730121828',
"filepath": './20210730121828-hoa-minh-cung-the-van-hoi-2020-voi-nhung-bo-anime-the-thao-noi-tieng.js'
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
  "Hòa mình cùng Thế vận hội 2020 với những bộ anime thể thao nổi tiếng";
const author = "Giang Gamek";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:18 PM";
const description =
  "Thế vận hội Tokyo 2020 cuối cùng cũng đang diễn ra tại Nhật Bản và khán giả có thể cùng học cùng chơi với một số anime thể thao sau.";
const link =
  "hoa-minh-cung-the-van-hoi-2020-voi-nhung-bo-anime-the-thao-noi-tieng";
const tagparam = ["ANIME", "OLYMPIC"];
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

export default function page_20210730121828() {
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
                    Sau một năm trì hoãn do đại dịch COVID-19, người hâm mộ từ
                    khắp nơi trên thế giới cuối cùng cũng được chứng kiến những
                    trận đấu đầy kịch tích của Thế vận hội Tokyo 2020.
                  </p>
                  <p>
                    Nếu bạn là một người hâm mộ của Thế vận hội{" "}
                    <strong>Olympic</strong> và muốn xem các sự kiện yêu thích
                    của mình dưới một góc nhìn mới, thì đây là một số cái tên{" "}
                    <strong>anime</strong> thể thao không thể bỏ qua.
                  </p>
                  <h5>Haikyuu !!</h5>
                  <p>
                    {" "}
                    Đây không còn là cái tên xa lạ với giới manga-
                    <strong>anime</strong>. Gần đây, bài hát mở đầu của anime
                    còn được phát trong những trận đấu của Thế vận hội Tokyo
                    2020 càng làm tăng "độ nóng" của sàn đấu lẫn series bóng
                    chuyền này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-162758385936526249098.jpg"
                    alt="1, ANIME,OLYMPIC,"
                    note=""
                  />
                  <p>
                    Tác giả Furudate không chỉ tạo nên những nhân vật thú vị, mà
                    còn giúp độc giả hiểu thêm về bóng chuyền. Những quy tắc, vị
                    trí người chơi, kỹ thuật và phương pháp huấn luyện của môn
                    bóng chuyền được tác giả khéo léo đưa vào bộ truyện. Điều
                    này khiến việc xem các trận đấu bóng chuyền ngoài đời thực
                    trở nên thú vị hơn.
                  </p>
                  <h5>Slam Dunk</h5>
                  <p>
                    {" "}
                    Bóng rổ là một trong những môn thể thao được mong chờ nhất ở
                    Thế vận hội, và nhắc tới bóng rổ thì Slam Dunk là cái tên
                    không thể không nhắc tới.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627583843819400558413.jpg"
                    alt="2, ANIME,OLYMPIC,"
                    note=""
                  />
                  <p>
                    Chỉ riêng tại Nhật Bản, Slam Dunk đã được tiêu thụ 100 triệu
                    bản - một con số đáng ngưỡng mộ với bất kỳ bộ manga nào. Sau
                    khi Slam Dunk được phát hành, đã có rất nhiều bạn trẻ Nhật
                    Bản chuyển dần từ bóng chày sang chơi bóng rổ. Về nội dung,
                    Slam Dunk vẫn đi theo hướng kinh điển, vốn là 1 dạng chuẩn
                    của truyện manga Nhật Bản không ẩn quá nhiều sự phá vỡ bài
                    hát thành công mang lại danh từ xưa cho đến nay của Slam
                    Dunk không ai quay lại phủ nhận.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Những trận đấu của Slam Dunk luôn cuốn hút đối với người đọc
                    không chỉ vì tính kịch tính của sự đối kháng, giành giật
                    bóng, ghi điểm mà còn bởi sự đoàn kết của các thành viên
                    trong đội, bởi chiến thuật, bởi kỹ thuật và tình yêu bóng
                    rổ.
                  </p>
                  <h5>Free!</h5>
                  <p>
                    {" "}
                    Free! là một bộ <strong>anime</strong> lý tưởng cho những
                    người hâm mộ môn bơi lội. Anime không chỉ có hình ảnh mãn
                    nhãn với tài năng của studio KyoAni mà còn đi sâu vào chi
                    tiết đào tạo và luyện tập nghiêm ngặt để trở thành một vận
                    động viên bơi lội.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16275838286351522942268.jpg"
                    alt="3, ANIME,OLYMPIC,"
                    note=""
                  />
                  <p>
                    Khi xem một bộ <strong>anime</strong> đầy hình ảnh vui nhộn
                    thế này, khán giả có thể trở nên yêu thích bộ môn bơi lội và
                    quan tâm hơn tới buổi đấu thực tế hiện đang diễn ra của Thế
                    vận hội 2020.
                  </p>
                  <h5>Sk8 The Infinity</h5>
                  <p>
                    {" "}
                    Trượt ván cuối cùng đã được chọn góp mặt vào Thế vận hội
                    Tokyo 2020, nên Sk8 The Infinity là bộ{" "}
                    <strong>anime</strong> hoàn hảo để ăn mừng sự xuất hiện của
                    môn thể thao này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627583807558913270140.jpg"
                    alt="4, ANIME,OLYMPIC,"
                    note=""
                  />
                  <p>
                    Bộ <strong>anime</strong> theo chân Reki Kyan, một học sinh
                    trung học thường xuyên tham gia các cuộc đua trượt ván ngầm.
                    Cậu sau đó đã lôi kéo người bạn cùng lớp của mình, Langa,
                    vào thế giới trượt ván đầy bí ẩn này. Các cuộc đối đầu càng
                    tăng thêm phần kịch tính và hồi hộp khi những vận động viên
                    khác cũng đang cố gắng thể hiện tài năng và chứng minh thực
                    lực của mình.
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

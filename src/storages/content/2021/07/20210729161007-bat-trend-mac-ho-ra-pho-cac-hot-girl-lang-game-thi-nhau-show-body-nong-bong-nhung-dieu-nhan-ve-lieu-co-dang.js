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
"timestamp": '29/07/2021 04:10 PM',
"title": 'Bắt trend mặc hở ra phố, các hot girl làng game thi nhau “show body" nóng bỏng nhưng điều nhận về liệu có đáng?',
"description": 'Với sự nóng bỏng của đường cong, những nàng hot girl thu hút được ánh nhìn của cánh mày râu nhưng đằng sau đó là nhiều nguy cơ phiền phức.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-1625242658517157726884.jpg',
"alt": 'STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,',
"category": 'images',
"date": '29/07/2021',
"time": '04:10 PM',
"link": '/bat-trend-mac-ho-ra-pho-cac-hot-girl-lang-game-thi-nhau-show-body-nong-bong-nhung-dieu-nhan-ve-lieu-co-dang',
"zcomponent": 'page_20210729161007',
"filepath": './20210729161007-bat-trend-mac-ho-ra-pho-cac-hot-girl-lang-game-thi-nhau-show-body-nong-bong-nhung-dieu-nhan-ve-lieu-co-dang.js'
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
  'Bắt trend mặc hở ra phố, các hot girl làng game thi nhau “show body" nóng bỏng nhưng điều nhận về liệu có đáng?';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:10 PM";
const description =
  "Với sự nóng bỏng của đường cong, những nàng hot girl thu hút được ánh nhìn của cánh mày râu nhưng đằng sau đó là nhiều nguy cơ phiền phức.";
const link =
  "bat-trend-mac-ho-ra-pho-cac-hot-girl-lang-game-thi-nhau-show-body-nong-bong-nhung-dieu-nhan-ve-lieu-co-dang";
const tagparam = ["STREAMER", "HOT GIRL", "GAME", "CỘNG ĐỒNG MẠNG", "HỞ BẠO"];
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

export default function page_20210729161007() {
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
                    Thời tiết oi bức của những đợt nắng nóng cao như hiện nay là
                    cái cớ thuận lợi để nhiều cô nàng ăn mặc “mát mẻ” đi hóng
                    gió khi nền nhiệt hạ. Dạo một vòng phố phường, các chị em
                    biến mọi con đường thành sàn catwalk, lăng xê mốt hở
                    “online" trên Facebook, tự tin mặc trang phục thiếu vải chưa
                    bao giờ lỗi thời.
                  </p>
                  <h5>Linh Chichan</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-1625242658517157726884.jpg"
                    alt="1, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Hoàng Nguyễn Linh Chi hay thường được gọi là Linh Chichan
                    (sinh năm 2002, quê Lạng Sơn), cô là lính mới của giới{" "}
                    <strong>streamer</strong>. Sinh sau đẻ muộn nhưng ngay khi
                    gia nhập thế giới <strong>game</strong> thủ, Linh Chichan
                    nhanh chóng thu hút được lượng người theo dõi lớn nhờ sở hữu
                    gương mặt xinh xắn, ngoại hình nóng bỏng, đặc biệt là vòng 1
                    khủng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/base64-16252430110351141040426.png"
                    alt="2, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Mặc đồ khoe trọn "tâm hồn" dạo phố, cô nàng lập tức chiếm
                    spotlight với hai luồng ý kiến. Người trầm trồ, khen ngợi
                    body cuốn hút, số khác bày tỏ "nhức mắt" với phong cách mặc
                    cũng như không của cô gái trẻ.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/-1625242779601651008506.jpg"
                    alt="3, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/-1625242780703839630146.jpg"
                    alt="4, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Trước đó, khi còn là nữ sinh THPT, cô nàng đã được biết đến
                    là "<strong>hot girl</strong> ảnh thẻ". Với lợi thế ngoại
                    hình, hiện tại ngoài công việc <strong>streamer</strong>{" "}
                    Linh Chichan còn tham gia làm mẫu ảnh, đóng phim ngắn, sexy
                    là phong cách mà cô nàng theo đuổi.
                  </p>
                  <h5>Quỳnh Alee</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-1625242779620961344632.jpg"
                    alt="5, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-16252427796391846254950.jpg"
                    alt="6, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Cô gái xinh đẹp Bùi Thị Quỳnh, là <strong>hot girl</strong>{" "}
                    livestream nổi tiếng với <strong>game</strong> Truck
                    Simulator. Trong một lần live, cô nàng đã khóc và vô tình
                    khoảnh khắc đã khiến hot girl nổi tiếng hơn trước. Quỳnh
                    Alee sở hữu gương mặt nhỏ nhắn, đáng yêu nhưng điều thực sự
                    thu hút fan của cô là ngoại hình nóng bỏng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Từng chia sẻ trước truyền thông, Quỳnh Alee cho biết cô bị
                    chú ý và “body shaming" rất nhiều bởi vòng 1 size “khủng"
                    thế nhưng có lẽ nữ <strong>streamer</strong> cũng biết đây
                    là thế mạnh của mình nên nhiều lần táo bạo mặc đồ hở hoặc bó
                    sát, tôn đường cong cơ thể.
                  </p>
                  <h5>Quỳnh Ami</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-16252427796691009532858.jpg"
                    alt="7, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/-16252427801772053261002.jpg"
                    alt="8, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Quỳnh Ami nữ <strong>streamer</strong> sexy hay còn được
                    biết đến với tên gọi Diễm Quỳnh. Cô nàng{" "}
                    <strong>hot girl</strong> 2k1 không chỉ sở hữu gương mặt
                    xinh đẹp như búp bê, mà còn có một thân hình nóng bỏng thuộc
                    hàng top gái xinh 18+ hiện nay.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-16252427796862006116161.jpg"
                    alt="9, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/2/-16252409398521317018002.jpg"
                    alt="10, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Với lợi thế ngoại hình gợi cảm, thì không có gì là khó hiểu
                    khi Diễm Quỳnh dễ dàng thu hút mọi ánh nhìn ngay từ lần gặp
                    đầu tiên. Hiện tại, các trang cá nhân Facebook, Instagram
                    của cô nàng gái xinh Nghệ An đang có hàng trăm nghìn người
                    theo dõi, khá lớn đối với một cô nàng{" "}
                    <strong>hot girl</strong> còn trẻ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/2/-16252409378161589097654.jpg"
                    alt="11, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Xu hướng mặc đồ "mát mẻ" xuống phố nhận phải nhiều ý kiến
                    trái chiều.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/2/-16252409393511730894117.jpg"
                    alt="12, STREAMER,HOT GIRL,GAME,CỘNG ĐỒNG MẠNG,HỞ BẠO,"
                    note=""
                  />
                  <p>
                    Một trong những xu hướng thời trang được nhiều bạn trẻ yêu
                    thích là nội y, áo bra, áo yếm... bởi giúp các cô gái khoe
                    lưng trần nõn nà. Tuy nhiên, cần lưu ý rằng, việc các cô gái
                    mặc quá gợi cảm xuống phố là một trong những yếu tố gây nên
                    vấn nạn quấy rối tình dục.
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

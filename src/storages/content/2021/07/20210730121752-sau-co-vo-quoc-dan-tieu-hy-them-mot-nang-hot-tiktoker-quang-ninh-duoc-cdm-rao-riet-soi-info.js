import React from "react";
import "components/page.css";
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
"timestamp": '30/07/2021 12:17 PM',
"title": 'Sau “cô vợ quốc dân" Tiểu Hý, thêm một nàng hot TikToker Quảng Ninh được CĐM ráo riết “soi info"',
"description": 'Mới đây, một hot TikToker sinh năm 2004, quê ở Quảng Ninh bất ngờ được tìm kiếm nhiều trên các diễn đàn.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16276393073501722962601.jpg',
"alt": 'TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,',
"category": 'images',
"date": '30/07/2021',
"time": '12:17 PM',
"link": '/sau-co-vo-quoc-dan-tieu-hy-them-mot-nang-hot-tiktoker-quang-ninh-duoc-cdm-rao-riet-soi-info',
"zcomponent": 'page_20210730121752',
"filepath": './20210730121752-sau-co-vo-quoc-dan-tieu-hy-them-mot-nang-hot-tiktoker-quang-ninh-duoc-cdm-rao-riet-soi-info.js'
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
  'Sau “cô vợ quốc dân" Tiểu Hý, thêm một nàng hot TikToker Quảng Ninh được CĐM ráo riết “soi info"';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:17 PM";
const description =
  "Mới đây, một hot TikToker sinh năm 2004, quê ở Quảng Ninh bất ngờ được tìm kiếm nhiều trên các diễn đàn.";
const link =
  "sau-co-vo-quoc-dan-tieu-hy-them-mot-nang-hot-tiktoker-quang-ninh-duoc-cdm-rao-riet-soi-info";
const tagparam = [
  "TIKTOKER",
  "STREAMER",
  "LỘ CLIP",
  "NHẠY CẢM",
  "DUY NHỎ",
  "CỘNG ĐỒNG MẠNG",
  "LINH NGỌC ĐÀM",
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

export default function page_20210730121752() {
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
                <div className="contentBody">
                  <p>
                    Thời gian gần đây, cư dân mạng không ngừng xôn xao về một
                    cái tên - Lê Thị Khánh Huyền. Được biết, cô nàng này là một{" "}
                    <strong>TikToker</strong>, người Quảng Ninh, nổi tiếng với
                    7,7 triệu lượt theo dõi dù cho chỉ mới 17 tuổi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16276393073501722962601.jpg"
                    alt="1, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Khánh Huyền được nhiều người tìm kiếm với “cú đúp” tin sốc:
                    vừa là bạn gái tin đồn của <strong>Duy Nhỏ</strong> (người
                    yêu cũ của <strong>Linh Ngọc Đàm</strong>), đồng thời cũng
                    bị cho là nữ chính mới <strong>lộ clip</strong>{" "}
                    <strong>nhạy cảm</strong> trong thời gian gần đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/photo-1-16276394084771636100706.jpg"
                    alt="2, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Theo đó, gái xinh này chính là bạn gái tin đồn mới mà người
                    yêu cũ <strong>streamer</strong>{" "}
                    <strong>Linh Ngọc Đàm</strong> liên tục “thả thính” trong
                    thời gian gần đây. Thiếu gia nhà giàu này còn công khai bình
                    luận vào bài đăng của cô.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627639541211825475459.jpg"
                    alt="3, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Mới nhất, trên story của mình, Bụt đã đăng tải ảnh một cô
                    gái lạ được làm mờ với chữ “peaceful” (tạm dịch là bình
                    yên). Đây là một trong những lần hiếm hoi nam{" "}
                    <strong>streamer</strong> đăng tải hình ảnh người con gái
                    khác trên trang cá nhân của mình. Dù chỉ đăng một bức ảnh
                    nhẹ trên story cũng như không nhìn rõ mặt nhưng bằng những
                    động thái thời gian gần đây, có lẽ cái tên không ai khác
                    chính là hot girl Khánh Huyền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/h2-1627639532929977627857.jpeg"
                    alt="4, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Trước đó, cuối năm 2017 là khoảng thời gian đầu tiên cô nổi
                    tiếng rộng rãi trong giới học đường. Khi đó, Khánh Huyền sở
                    hữu gương mặt vô cùng xinh đẹp với sống mũi cao, nụ cười
                    duyên dáng và đôi mắt to tròn.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/photo-1-1627620133559324334691-16276395329521842443934.jpeg"
                    alt="5, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, hot girl này không theo đuổi hình tượng ngây thơ
                    đáng yêu quá lâu, cô lựa chọn phong cách gợi cảm, sexy,
                    chững chạc hơn so với lứa tuổi của mình để theo đuổi. Thậm
                    chí, chỉ mới 16 tuổi, cô đã táo bạo hơn khi chụp ảnh theo
                    concept “người lớn”.
                  </p>
                  <p></p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Cô nàng cũng chính là nữ <strong>TikToker</strong> xui xẻo
                    khi mới đây bị <strong>lộ clip</strong>{" "}
                    <strong>nhạy cảm</strong>. Giữa thời điểm nóng, cô không
                    ngần ngại mà lên tiếng thẳng thắn thừa nhận rằng, clip được
                    lan truyền này đã được quay từ tháng 3/2019, hình ảnh trong
                    clip khá bình thường.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627639600985956959262.jpg"
                    alt="6, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Qua đó, cô nàng cũng không giấu giếm bản thân từng dính vào
                    một vụ lùm xùm không đáng có khi một đoạn clip{" "}
                    <strong>nhạy cảm</strong> từ năm 15 tuổi. Nữ{" "}
                    <strong>TikToker</strong> đính chính rằng đó chỉ là trò đùa
                    của cô cùng một bạn nữ khác chứ không phải cảnh nóng giữa cô
                    và người yêu như mọi người vẫn nhầm tưởng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/h4-1627639717456791831915.jpeg"
                    alt="7, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/h5-16276397174831911867328.jpeg"
                    alt="8, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/h6-1627639717490944045309.jpeg"
                    alt="9, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/30/h7-1627639717498336431639.jpeg"
                    alt="10, TIKTOKER,STREAMER,LỘ CLIP,NHẠY CẢM,DUY NHỎ,CỘNG ĐỒNG MẠNG,LINH NGỌC ĐÀM,"
                    note=""
                  />
                  <p>
                    Trên Facebook cá nhân, cô nàng này không ngại đăng tải nhiều
                    hình ảnh gợi cảm của mình. Hiện, cái tên này vẫn đang thu
                    hút được sự quan tâm lớn.
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

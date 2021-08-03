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
"timestamp": '29/07/2021 04:11 PM',
"title": 'Vạch áo khoe “tâm hồn”, dân mạng "bối rối" trước trào lưu mới của các nữ streamer',
"description": 'Khoe vòng một lấp ló, các nữ streamer bước đầu thu hút được sự chú ý của fan hâm mộ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/-16254118675411949617776.jpg',
"alt": 'STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/vach-ao-khoe-tam-hon-dan-mang-boi-roi-truoc-trao-luu-moi-cua-cac-nu-streamer',
"zcomponent": 'page_20210729161159',
"filepath": './20210729161159-vach-ao-khoe-tam-hon-dan-mang-boi-roi-truoc-trao-luu-moi-cua-cac-nu-streamer.js'
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
  'Vạch áo khoe “tâm hồn”, dân mạng "bối rối" trước trào lưu mới của các nữ streamer';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:11 PM";
const description =
  "Khoe vòng một lấp ló, các nữ streamer bước đầu thu hút được sự chú ý của fan hâm mộ.";
const link =
  "vach-ao-khoe-tam-hon-dan-mang-boi-roi-truoc-trao-luu-moi-cua-cac-nu-streamer";
const tagparam = ["STREAMER", "HỞ BẠO", "GÁI XINH", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210729161159() {
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
                      Trong thời gian gần đây, mạng xã hội của các nữ{" "}
                      <strong>streamer</strong> đã liên tục khiến người hâm mộ
                      "ngỡ ngàng", "ngã ngửa" khi thường xuyên cập nhật những
                      hình ảnh đã không ngần ngại vạch áo quá ngực để lộ vòng 1
                      lấp ló của mình.{" "}
                    </p>
                    <p>
                      Cụ thể, khi chiếc áo được vén lên thì dường như không có
                      một tấm “lá chắn" bảo hộ nào bên trong, do đó khuôn ngực
                      của các cô nàng phô ra trước mắt người xem theo kiểu “nửa
                      kín nửa hở".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/4/-1625411867011830069116.jpg"
                      alt="1, STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                      note="Có vẻ như các cô nàng đã khá chiều fan của mình khi không ngần ngại vạch áo lên trên ngực để lộ vòng 1. Chắc chắn rất nhiều người sẽ lưu lại bức ảnh của cô nàng này."
                    />
                    <p>
                      Ở góc chụp mới mẻ này, các cô nàng ngoài thể hiện được vẻ
                      đẹp ngọt ngào, dễ thương của mình thì còn khiến cho fan
                      được phen "bỏng mắt".
                    </p>
                    <p>
                      Bên cạnh như ý kiến khen ngợi của người hâm mộ dành cho
                      những cô nàng chịu chơi, diện đồ “<strong>hở bạo</strong>"
                      thì cũng có fan phàn nàn về hiện tượng “show thân" quá đà.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cụ thể, dân mạng cho rằng, đối với nhiều nữ{" "}
                      <strong>streamer</strong> ở thời điểm hiện tại, sự ám ảnh
                      của việc phải nổi tiếng cũng như được nhiều người biết tới
                      đã làm lu mờ đi những suy nghĩ đúng đắn của họ thì phải.
                      Thay vì đầu tư vào chất lượng nội dung cũng như cải thiện
                      khả năng tương tác, cuốn hút người xem, rất nhiều cô nàng
                      lại lựa chọn cách cực kỳ phản cảm đó là tạo ra các chiêu
                      trò giật gân, thậm chí sẵn sàng để hở các bộ phận trên cơ
                      thể để kiếm thêm các chỉ số tương tác cũng như lượng
                      donate từ phía người xem.{" "}
                    </p>
                    <p>
                      Đồng thời khẳng định, nếu có phải nhận “gạch đá" thì những
                      cô nàng này cũng chẳng biết kêu oan với ai.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/-16254118675411949617776.jpg"
                      alt="2, STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/-16254118680271141357519.jpg"
                      alt="3, STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/4/-16254118631681829831468.jpg"
                      alt="4, STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/4/photo-1-1625413031135533424082.jpg"
                      alt="5, STREAMER,HỞ BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
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

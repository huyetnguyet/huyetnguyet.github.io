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
"timestamp": '13/08/2021 09:29 AM',
"title": 'Bị fan chê “tâm hồn" màn hình phẳng, nữ streamer vừa nhún nhảy vừa kéo áo khoe khéo vòng 1 phập phồng',
"description": 'Rất ít lần xuất hiện với phong cách sexy, nữ streamer thu hút người xem.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288450560971743268108.jpg',
"alt": 'STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,',
"category": 'images',
"date": '13/08/2021',
"time": '09:29 AM',
"link": '/bi-fan-che-tam-hon-man-hinh-phang-nu-streamer-vua-nhun-nhay-vua-keo-ao-khoe-kheo-vong-1-phap-phong',
"zcomponent": 'page_20210813092920',
"filepath": './20210813092920-bi-fan-che-tam-hon-man-hinh-phang-nu-streamer-vua-nhun-nhay-vua-keo-ao-khoe-kheo-vong-1-phap-phong.js'
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
  'Bị fan chê “tâm hồn" màn hình phẳng, nữ streamer vừa nhún nhảy vừa kéo áo khoe khéo vòng 1 phập phồng';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:29 AM";
const description =
  "Rất ít lần xuất hiện với phong cách sexy, nữ streamer thu hút người xem.";
const link =
  "bi-fan-che-tam-hon-man-hinh-phang-nu-streamer-vua-nhun-nhay-vua-keo-ao-khoe-kheo-vong-1-phap-phong";
const tagparam = [
  "STREAMER",
  "THẢO NGUYÊN",
  "CỘNG ĐỒNG MẠNG",
  "TÂM HỒN",
  "SEXY",
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

export default function page_20210813092920() {
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
                      Đang livestream với cái tên Ghiền{" "}
                      <strong>Thảo Nguyên</strong>, nữ <strong>streamer</strong>{" "}
                      sinh năm 1997 gây ấn tượng với ngoại hình nhỏ nhắn, xinh
                      đẹp thu hút người xem bởi phong cách lên sóng nhí nhảnh,
                      đáng yêu. Thế nhưng nếu là những thế hệ chơi game của 3
                      năm trước hẳn fan đã rất quen mặt với cô nàng này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288450205591108694786.jpg"
                      alt="1, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note="Nhiều fan bày tỏ sự bất ngờ."
                    />
                    <p>
                      Có tên thật Lê Hoàng <strong>Thảo Nguyên</strong>, biệt
                      danh Thảo Chíp, là một nữ <strong>streamer</strong> quen
                      thuộc của làng game Việt. Nổi tiếng khá sớm, từ năm 2018,
                      cô nàng nổi danh với kỹ năng chơi game có tiếng trong làng
                      Liên Minh Huyền Thoại và thu hút được nhiều người theo dõi
                      trang cá nhân facebook của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288450560971743268108.jpg"
                      alt="2, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <p>
                      Trở lại try-hard gần đây, cô nàng chuyển sang livestream
                      với tựa game Đấu Trường Chân Lý. Bên cạnh việc tập trung
                      leo rank, cô nàng còn thường xuyên “chém gió", tâm sự,
                      giao lưu với người hâm mộ theo phong cách gần gũi, thoải
                      mái, tự nhiên nhất. Vậy nên chuyện cô nàng bị fan trêu đùa
                      ngoại hình “thiếu nhi" hay “tivi màn hình phẳng" không
                      phải là chuyện lạ.
                    </p>
                    <p>
                      Mới đây, để “đập tan" tin đồn thất thiệt về “
                      <strong>tâm hồn</strong>" khiêm tốn, nữ stream này đã đầu
                      tư chuẩn bị một bộ trang phục <strong>sexy</strong>, quyến
                      rũ. Với thiết kế bộ váy, vòng một của người mặc sẽ được
                      tôn lên và phô ra đáng kể. Có lẽ mục đích của cô nàng này
                      là chứng minh cho người xem thấy, cô cũng sở hữu vóc dáng
                      “rất gì và này nọ" chỉ là bình thường không thích khoe mà
                      thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/anh-chup-man-hinh-2021-08-13-luc-155845-1628845339567732439654.png"
                      alt="3, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/anh-chup-man-hinh-2021-08-13-luc-155905-16288453395901026172640.png"
                      alt="4, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/anh-chup-man-hinh-2021-08-13-luc-155958-1628845339603159995217.png"
                      alt="5, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/anh-chup-man-hinh-2021-08-13-luc-155941-1628845339596746693752.png"
                      alt="6, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <p>
                      Không chỉ chụp hình bình thường,{" "}
                      <strong>Thảo Nguyên</strong> còn vừa nhảy{" "}
                      <strong>sexy</strong> vừa quay clip. Trong lúc cúi xuống,
                      thấy chiếc áo có khả năng hớ hênh, nữ{" "}
                      <strong>streamer</strong> kéo phần vải che ngực lên, khéo
                      léo khoe được vòng 1 không quá ngồn ngộn nhưng cũng nở
                      nang bất ngờ khiến cho cư dân mạng hào hứng bình luận dành
                      nhiều lời khen. Tất nhiên cũng có nhiều ý kiến ngờ vực.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/base64-1628845438505941029846.png"
                      alt="7, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <p>“Chị tải video của ai vậy?”,</p>
                    <p>“Pts chắc luôn!”,</p>
                    <p>
                      “<strong>Tâm hồn</strong> lớn bất ngờ"...
                    </p>
                    <p></p>

                    <p>
                      Từng chia sẻ muốn thay đổi từ phong cách trẻ trung, nhí
                      nhảnh sang trưởng thành và gợi cảm hơn, có lẽ đây là bước
                      đi đầu tiên để thực hiện mục đích ấy của{" "}
                      <strong>Thảo Nguyên</strong> chăng?
                    </p>
                    <p></p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288454736661646570216.jpg"
                      alt="8, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288455579111762394451.jpg"
                      alt="9, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/19329957130265876407996638932690935687170297n-16288455771631914183181.jpeg"
                      alt="10, STREAMER,THẢO NGUYÊN,CỘNG ĐỒNG MẠNG,TÂM HỒN,SEXY,"
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

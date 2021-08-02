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
"timestamp": '29/07/2021 04:13 PM',
"title": 'Sở hữu số đo ba vòng 88-62-91, hot girl "Nóng cùng Euro" khiến dân mạng đứng hình vì đôi gò bồng đảo gợi cảm',
"description": 'Cô nàng hot girl này vốn dĩ cũng đã là gương mặt rất quen thuộc với cộng đồng mạng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625460294647880712999.jpg',
"alt": 'CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,',
"category": 'images',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/so-huu-so-do-ba-vong-88-62-91-hot-girl-nong-cung-euro-khien-dan-mang-dung-hinh-vi-doi-go-bong-dao-goi-cam',
"zcomponent": 'page_20210729161301',
"filepath": './20210729161301-so-huu-so-do-ba-vong-88-62-91-hot-girl-nong-cung-euro-khien-dan-mang-dung-hinh-vi-doi-go-bong-dao-goi-cam.js'
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
  'Sở hữu số đo ba vòng 88-62-91, hot girl "Nóng cùng Euro" khiến dân mạng đứng hình vì đôi gò bồng đảo gợi cảm';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:13 PM";
const description =
  "Cô nàng hot girl này vốn dĩ cũng đã là gương mặt rất quen thuộc với cộng đồng mạng.";
const link =
  "so-huu-so-do-ba-vong-88-62-91-hot-girl-nong-cung-euro-khien-dan-mang-dung-hinh-vi-doi-go-bong-dao-goi-cam";
const tagparam = ["CỘNG ĐỒNG MẠNG", "HẰNG HABI", "GÁI XINH", "HOT GIRL"];
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

export default function page_20210729161301() {
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
                    Những ngày gần đây, bên cạnh không khí sôi nổi, kịch tính
                    của các trận đấu trên thế giới, chương trình "Nóng cùng
                    Euro" cũng đồng thời nhận được vô số sự chú ý từ phía{" "}
                    <strong>cộng đồng mạng</strong>, chủ yếu là do sự xuất hiện
                    của vô số những cô nàng <strong>hot girl</strong> xinh đẹp.
                    Và nổi bật trong những cái tên ấy chính là{" "}
                    <strong>Hằng Habi</strong> - người đẹp đại diện cho đội
                    tuyển Đức và cũng là gương mặt gây bão mạng với vẻ ngoài khả
                    ái và trên hết là thân hình siêu quyến rũ của mình.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254593965842100579664.jpg"
                    alt="1, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Hằng Habi - cô nàng hot girl đang gây bão mạng với vẻ ngoài của mình"
                  />
                  <p>
                    Xuất thân từ một gymer có tiếng tại Hà thành, cô nàng{" "}
                    <strong>hot girl</strong> sở hữu chiều cao 1,68m với số đo 3
                    vòng lý tưởng 88-62-91 - niềm mơ ước của không biết bao
                    nhiêu người. Với những đường nét hài hòa, thanh tú và trên
                    hết là dáng người cực kỳ nóng bỏng với đôi gò bồng đảo căng
                    tràn sức sống, nàng hot girl nhanh chóng khiến cho các đấng
                    mày râu ấn tượng mạnh mẽ ngay từ phút giây đầu tiên nhìn
                    thấy.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254594676801043377191.jpg"
                    alt="2, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Cô nàng hot girl không ngại khoe thân hình gợi cảm trên trang cá nhân"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625459504112297631738.jpg"
                    alt="3, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Thậm chí còn khiến không ít người phải trầm trồ trước nhan sắc tuyệt hảo của mình"
                  />
                  <p>
                    Xinh, gợi cảm lại nói chuyện tương đối khéo léo,{" "}
                    <strong>Hằng Habi</strong> nhận được mưa lời khen từ phía{" "}
                    <strong>cộng đồng mạng</strong>. Và mặc dù đội tuyển Đức đã
                    bị loại sớm, cũng như chương trình bị tạm hoãn do ảnh hưởng
                    của dịch bệnh thế nhưng không vì vậy mà tên tuổi của cô nàng
                    giảm nhiệt những ngày gần đây. Hiện tại, trang cá nhân của
                    cô nàng đang thu hút tới hơn 70.000 người theo dõi.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254598405501583443907.jpg"
                    alt="4, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Vẻ ngoài xinh xắn, đáng yêu của cô nàng hot girl"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254600032321985417540.jpg"
                    alt="5, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Tuy nhiên, sự gợi cảm của nàng hot girl sinh năm 1996 này đôi lúc cũng đi kèm với không ít phiền toái"
                  />
                  <p>
                    Tất nhiên, cũng như bao cô nàng <strong>hot girl</strong>{" "}
                    khác, việc sở hữu một thân hình gợi cảm đôi khi cũng mang
                    lại một số rắc rối cho <strong>Hằng Habi</strong>. Cụ thể,
                    cô nàng từng phải nhận khá nhiều những tin nhắn khiếm nhã,
                    đôi khi còn mang tính quấy rối trên mạng xã hội. Với trường
                    hợp này, cô nàng thường không quá quan tâm, đặc biệt là
                    trước những bình luận mà nàng hot girl cho rằng vô văn hoá,
                    thiếu tôn trọng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254600797411193916549.jpg"
                    alt="6, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Bên cạnh nhan sắc gây chú ý của mình"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625460120774568588959.jpg"
                    alt="7, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
                    note="Hằng Habi cũng đang rất thành công trong sự nghiệp"
                  />
                  <p>
                    Ngoài đời, bên cạnh công việc người mẫu ảnh,{" "}
                    <strong>Hằng Habi</strong> cũng đang là giám đốc hình ảnh
                    cho một viện thẩm mỹ ở Hà Nội.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625460294647880712999.jpg"
                    alt="8, CỘNG ĐỒNG MẠNG,HẰNG HABI,GÁI XINH,HOT GIRL,"
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

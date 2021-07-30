import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:03 PM",
"title": Hướng dẫn bảo vệ sức khỏe đi kèm ảnh bikini gợi cảm, nữ bác sĩ xinh đẹp khiến CĐM phát sốt",
"description": Nữ bác sĩ trong câu chuyện bỗng chốc trở nên vô cùng nổi tiếng chỉ sau ít ngày.",
"src": https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231381931681875170061-16231383504341365539882.jpg",
"alt": Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, ",
"category": images",
"date": 08/06/2021",
"time": 02:03 PM",
"link": "/huong-dan-bao-ve-suc-khoe-di-kem-anh-bikini-goi-cam-nu-bac-si-xinh-dep-khien-cdm-phat-sot",
"zcomponent": page_20210608140350",
"filepath": ./20210608140350-huong-dan-bao-ve-suc-khoe-di-kem-anh-bikini-goi-cam-nu-bac-si-xinh-dep-khien-cdm-phat-sot.js"
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
  "Hướng dẫn bảo vệ sức khỏe đi kèm ảnh bikini gợi cảm, nữ bác sĩ xinh đẹp khiến CĐM phát sốt";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:03 PM";
const description =
  "Nữ bác sĩ trong câu chuyện bỗng chốc trở nên vô cùng nổi tiếng chỉ sau ít ngày.";
const link =
  "huong-dan-bao-ve-suc-khoe-di-kem-anh-bikini-goi-cam-nu-bac-si-xinh-dep-khien-cdm-phat-sot";
const tagparam = ["gai-xinh", "hot-girl", "nu-bac-si", "cong-dong-mang"];
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

export default function page_20210608140350() {
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
                <div className="contentBody">
                  <p>
                    Trong bối cảnh dịch bệnh vẫn còn diễn biến phức tạp như hiện
                    tại, việc bảo vệ sức khỏe luôn là ưu tiên hàng đầu của mỗi
                    người. Để giữ cho mình một trạng thái sức khỏe tốt nhất, có
                    người chọn cách tập luyện tại nhà, cũng có người thì tìm tới
                    những chuyên gia về sức khỏe, bác sĩ nhằm xin lời khuyên. Và
                    trường hợp của nữ bác sĩ có tên là LanFei trong câu chuyện
                    cũng không phải ngoại lệ khi cô nhận được rất nhiều câu hỏi
                    về vấn đề sức khỏe trong thời gian gần đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-1623137835617609170895.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note="LanFei - Nữ nhân vật chính trong câu chuyện"
                  />
                  <p>
                    Vì vậy mà cách đây ít ngày, LanFei đã đăng một bài viết khá
                    dài trên trang cá nhân để hướng dẫn mọi người những cách đơn
                    giản nhất để bảo vệ sức khỏe. Theo chia sẻ của LanFei, bạn
                    chỉ cần uống thật nhiều nước và luôn đeo khẩu trang khi đi
                    ra ngoài là đã có thể đảm bảo được sức khỏe luôn ở mức ổn
                    định rồi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231379344731791620573.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note="Nghề nghiệp chính của LanFei đó là bác sĩ"
                  />
                  <p>
                    Thậm chí cô còn trấn an mọi người rằng việc tiêm vaccine là
                    phương pháp hiệu quả nhất để chống lại dịch bệnh. LanFei
                    cũng chia sẻ rằng sau khi mình được tiêm vaccine thì cơ thể
                    sẽ có dấu hiệu của đau nhức toàn thân hay đau đầu. Tuy nhiên
                    đó chỉ là một dạng "báo động giả", các triệu chứng trên sẽ
                    hết rất nhanh sau đó, vì vậy nếu có cơ hội thì bạn hãy cứ đi
                    tiêm vaccine mà không phải lo ngại bất kỳ điều gì.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/gai-1623137975735574929240.png"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note="Cô cũng có niềm đam mê với các chuyến đi du lịch"
                  />
                  <p>
                    Bên cạnh công việc chính là bác sĩ, LanFei cũng có sở thích
                    là đi du lịch và cô luôn làm điều này khi có cơ hội. Vì vậy
                    nữ bác sĩ này mới đăng hình ảnh mình đi du lịch trong quá
                    khứ cùng với bài viết kể trên để hy vọng rằng dịch bệnh sẽ
                    nhanh chóng kết thúc và cô lại có cơ hội "đi đây đi đó".
                    Chính bức hình gợi cảm đó đã khiến LanFei trở nên vô cùng
                    nổi tiếng khi nó được chia sẻ khắp các diễn đàn. Có người
                    đùa rằng ngoại hình xuất sắc của cô nàng đã làm lu mờ bài
                    viết hữu ích kia mất rồi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-1623138441452298019537-16231384693621754402450.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note="LanFei nhanh chóng trở thành chủ đề hot trên mạng nhờ vào ngoại hình xuất sắc của mình"
                  />
                  <p>
                    Hệ quả là nữ bác sĩ của chúng ta bỗng chốc trở thành "
                    <strong>hot girl</strong> vạn người mê" chỉ sau ít ngày.
                    Thậm chí số lượng người theo dõi LanFei trên mạng xã hội đã
                    tăng vọt từ con số 2 nghìn lên thành 46,5 nghìn. Có bình
                    luận còn khuyên LanFei nên theo đuổi sự nghiệp YouTuber để
                    có thể chia sẻ các kiến thức về sức khỏe tới mọi người một
                    cách trực quan hơn.
                  </p>
                  <p>
                    LanFei đã trở thành nàng "<strong>hot girl</strong> vạn
                    người mê" chỉ sau một thời gian ngắn
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231381931681875170061-16231383504341365539882.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-1623138178794334342818-162313836240256407794.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231382122791366014216-1623138375788833414389.jpg"
                    alt="Gai Xinh, Hot Girl, Nu Bac Si, Cong Dong Mang, "
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

import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Sau lùm xùm “hở bạo”, nữ coser Việt lên tiếng: Đó là nghệ thuật chứ không phải khoe thân phản cảm!"\description="Nữ coser cho biết trước khi đăng tải bức hình có tính chất sexy lên đã hỏi ý kiến của gia đình." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228455339111476917907.jpg" 
alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, " 
category="images" 
time="05/06/2021 09:04 AM" 
link="/sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam"/>

{title:"Sau lùm xùm “hở bạo”, nữ coser Việt lên tiếng: Đó là nghệ thuật chứ không phải khoe thân phản cảm!",\description:"Nữ coser cho biết trước khi đăng tải bức hình có tính chất sexy lên đã hỏi ý kiến của gia đình." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228455339111476917907.jpg" ,
alt:"Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, " ,
category:"images" ,
time:"05/06/2021 09:04 AM" ,
link:"/sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam",component:"page_20210605090443",
filepath:"../storages/content/20210605090443-sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam.js"},

Sau lùm xùm “hở bạo”, nữ coser Việt lên tiếng: Đó là nghệ thuật chứ không phải khoe thân phản cảm!
Nữ coser cho biết trước khi đăng tải bức hình có tính chất sexy lên đã hỏi ý kiến của gia đình.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228455339111476917907.jpg
Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, 
images
05/06/2021
09:04 AM
/sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam
page_20210605090443
../storages/content/20210605090443-sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam.js




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
  "Sau lùm xùm “hở bạo”, nữ coser Việt lên tiếng: Đó là nghệ thuật chứ không phải khoe thân phản cảm!";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:04 AM";
const description =
  "Nữ coser cho biết trước khi đăng tải bức hình có tính chất sexy lên đã hỏi ý kiến của gia đình.";
const link =
  "sau-lum-xum-ho-bao-nu-coser-viet-len-tieng-do-la-nghe-thuat-chu-khong-phai-khoe-than-phan-cam";
const tagparam = ["coser", "cosplay", "ho-bao", "nghe-thuat", "phan-cam"];
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

export default function page_20210605090443() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                    Nổi lên trong cộng đồng cosplay sau khi giành được danh hiệu
                    Coser Queen của một sự kiện Cosplay đêm Halloween hồi năm
                    ngoái, Lê Ngọc Như (25 tuổi) ngày càng nhận được nhiều sự
                    quan tâm và ủng hộ của các bạn trong giới, qua đó lượng
                    follow cũng tăng lên đáng kể. Điều này tạo tiền đề cho cô
                    nàng nhận được nhiều lời mời hợp tác.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228455339111476917907.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <p>
                    “Trở về sau khi đạt giải Coser Queen, mình quay trở lại với
                    công việc chính của mình là diễn viên, tham gia đóng phim
                    ngắn và một số MV. Cũng từ giải thưởng này mà nhiều người
                    cũng biết đến mình với vai trò là một người mẫu ảnh và là
                    một cosplayer nên đã may mắn có cơ hội được hợp tác với
                    Garena trong cuộc thi cosplay tướng Natalya, cùng với Phương
                    Thảo và chị Trang Đỗ”.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622845565541183182265.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622845620993610004289.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=" Tuy nhiên, cộng đồng game biết đến Như Lê nhiều hơn khi gần
                    đây, cô nàng dính phải lùm xùm ăn mặc táo bạo, khoe da thịt
                    đến bất ngờ."
                  />
                  <p>
                    Nhắc về sự việc, nữ coser không hề né tránh, mà còn thoải
                    mái chia sẻ: “Thật ra những bức ảnh đó đơn thuần là mình và
                    anh nhiếp ảnh ngẫu hứng nghĩ ra concept rồi sau đó thực hiện
                    luôn chứ không chuẩn bị trước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622845690867115514957.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <p>
                    Trước khi đăng, mình cũng nghĩ rằng có thể nhiều người cũng
                    sẽ thấy lạ và ngạc nhiên với hình ảnh mới của mình, bởi từ
                    trước đến giờ mình chỉ đăng một vài hình với phong cách sexy
                    chút, hở bạo như bộ ảnh vừa rồi thì chưa bao giờ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622845727111252030778.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <p>
                    Để đăng những bức hình đó lên, mình có hỏi qua những người
                    bạn thân thiết và gia đình, xem liệu đăng ảnh này có được
                    không và có bị phản cảm không. Mẹ mình nói rằng những ảnh đó
                    không nhạy cảm và nó mang tính nghệ thuật, mẹ mình thấy
                    không có vấn đề gì cả và còn bảo mình đăng lên đi”.
                  </p>
                  <p>
                    Việc có nhiều phản ứng trái chiều cũng là điều dễ hiểu khi
                    trên không gian mạng thì 9 người 10 ý. Cô nàng cảm thông với
                    những người chỉ trích mình: “Theo mình thì mỗi người một
                    quan điểm và nếu ai có suy nghĩ những bức hình đó nhạy cảm
                    thì mình cũng tôn trọng ý kiến đó vì có thể họ chưa quen với
                    hình ảnh mới này của mình”.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228457895201707018996.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <p>
                    Khi được hỏi, sexy có phải là phong cách mà trong thời gian
                    tới bản thân muốn định hình hay không thì cô nàng tâm sự:
                    “Thật ra mình không cố định hình bản thân phải đi theo hướng
                    sexy quyến rũ hay thế nào. Mình luôn muốn là chính mình.
                  </p>
                  <p>
                    Có thể trước kia mình hay xuất hiện với hình ảnh nhẹ nhàng
                    ngây thơ hoặc cá tính nhưng mình nghĩ ai cũng phải lớn và
                    phải thay đổi, không thể lúc nào cũng trẻ con mãi hoặc nhẹ
                    nhàng mãi được. Mình luôn muốn bản thân có thể đa phong cách
                    để đặc sắc, mới mẻ hơn”.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228458035121497760050.jpg"
                    alt="Coser, Cosplay, Ho Bao, Nghe Thuat, Phan Cam, "
                    note=""
                  />
                  <p>
                    Định hướng này là hoàn toàn phù hợp với kế hoạch duy trì
                    công việc làm diễn viên và người mẫu ảnh. Như Lê thừa nhận
                    rằng được tham gia làm nhiều dự án phim, được diễn xuất
                    chính là niềm đam mê lớn nhất mà cô đang theo đuổi. Và
                    khoảng thời gian này cũng là thời điểm để cô nàng tập luyện,
                    rèn giũa nhiều hơn để giúp ích cho công việc của chính mình.
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

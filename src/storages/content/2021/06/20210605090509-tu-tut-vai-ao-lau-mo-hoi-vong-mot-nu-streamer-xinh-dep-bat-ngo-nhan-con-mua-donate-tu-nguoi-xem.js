import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Tự tụt vai áo, lau mồ hôi vòng một, nữ streamer xinh đẹp bất ngờ nhận cơn mưa donate từ người xem"\description="Những hình ảnh siêu gợi cảm từ phía cô nàng streamer này." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622610944851179501104.gif" 
alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, " 
category="images" 
time="05/06/2021 09:05 AM" 
link="/tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem"/>

{title:"Tự tụt vai áo, lau mồ hôi vòng một, nữ streamer xinh đẹp bất ngờ nhận cơn mưa donate từ người xem",\description:"Những hình ảnh siêu gợi cảm từ phía cô nàng streamer này." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622610944851179501104.gif" ,
alt:"Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, " ,
category:"images" ,
time:"05/06/2021 09:05 AM" ,
link:"/tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem",component:"page_20210605090509",
filepath:"../storages/content/20210605090509-tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem.js"},

Tự tụt vai áo, lau mồ hôi vòng một, nữ streamer xinh đẹp bất ngờ nhận cơn mưa donate từ người xem
Những hình ảnh siêu gợi cảm từ phía cô nàng streamer này.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622610944851179501104.gif
Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, 
images
05/06/2021
09:05 AM
/tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem
page_20210605090509
../storages/content/20210605090509-tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem.js




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
  "Tự tụt vai áo, lau mồ hôi vòng một, nữ streamer xinh đẹp bất ngờ nhận cơn mưa donate từ người xem";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const date = "05/06/2021";
const time = "09:05 AM";
const description = "Những hình ảnh siêu gợi cảm từ phía cô nàng streamer này.";
const link =
  "tu-tut-vai-ao-lau-mo-hoi-vong-mot-nu-streamer-xinh-dep-bat-ngo-nhan-con-mua-donate-tu-nguoi-xem";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "streamer",
  "nu-streamer",
  "cong-dong-mang",
  "moon-wol",
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

export default function page_20210605090509() {
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
                    Nhân vật chính trong câu chuyện lần này là Moon-wol, một nữ
                    streamer theo đuổi phong cách gợi cảm, nóng bỏng ngay từ
                    trang phục khi lên sóng cho tới định hướng nội dung của
                    mình. Và đó cũng là lý do mà mới đây thôi, cô nàng lại vướng
                    vào một ồn ào, lùm xùm cũng như gặp vô số ý kiến trái chiều
                    vì các hành động có phần hơi quá táo bạo của mình trên sóng.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622610944851179501104.gif"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Moon-wol, cô nàng streamer vốn đã quá nổi tiếng với vòng một
                      cùng những bộ trang phục bắt mắt khi lên sóng của mình"
                    />
                  </p>
                  <p>
                    Theo đó, trong lần lên sóng gần đây, Moon-wol còn khiến
                    nhiều người phải đỏ mắt hơn với một bộ trang phục truyền
                    thống nhưng rất hờ hững và gợi cảm của mình. Đó là chưa kể
                    trong suốt phiên livestream, cô nàng hot girl này còn gần
                    như chẳng bao giờ chịu để cho bộ quần áo của mình được để
                    yên. Cụ thể, hết tụt vai áo, lau vòng một, Moon-wol còn thực
                    hiện vô số những động tác gợi cảm khác.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/photo-1-16226106919121066752207.gif"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Từ việc hết tụt rồi lại kéo vai áo lên"
                    />
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/photo-1-16226107114481114374004.gif"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Đồng thời còn liên tục lấy khăn giấy lau vòng một của mình"
                    />
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622610880992216169258.png"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Hành động che chắn có phần lấy lệ của nữ streamer này"
                    />
                  </p>
                  <p>
                    Thực tế, cái tên Moon-wol cũng chỉ mới nổi lên trong giai
                    đoạn gần đây, sau khi cô nàng chuyển dịch kênh livestream
                    sang AfreecaTV. Còn trước đó, khi lên sóng trên Twitch,
                    Moon-wol gần như chẳng tạo ra được quá nhiều tầm ảnh hưởng.
                    Và nếu để bàn về độ phủ sóng của nữ streamer này thì chỉ cần
                    một chi tiết thôi là đủ hiểu. Ngay ngày đầu tiên debut trên
                    AfreecaTV, Moon-wol đã nhận được số tiền donate lên tới hơn
                    300 triệu chỉ trong 6 tiếng.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/photo-1-1622611291439917278694.gif"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                    Cô nàng streamer nhanh chóng nổi tiếng sau khi chuyển sang
                    AfreecaTV"
                    />
                  </p>
                  <p>
                    Tuy nhiên, Moon-wol cũng không phải là bình hoa di động. Cụ
                    thể, cô nàng cũng sở hữu cho mình khả năng vũ đạo tương đối
                    tuyệt vời. Chỉ có điều, bên cạnh tài năng, nàng hot girl
                    cũng từng dính vào không ít ồn ào chỉ bởi thói vạ miệng của
                    mình. Theo đó, trong một lần phát biểu mới nhất, Moon-wol
                    thậm chí còn bị anti-fan gửi thư đe dọa, đồng thời yêu cầu
                    cô nàng phải tự lên sóng thanh minh, xin lỗi sau khi trót đề
                    cập tới một chủ đề khá nhạy cảm.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226112394791185226530.jpg"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Cô nàng hot girl cũng từng gặp phải không ít thị phi"
                    />
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226110822771710586778.png"
                      alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
                      note="
                      Cũng như những ý kiến trái chiều liên quan tới phong cách
                      livestream của mình"
                    />
                  </p>
                  <p>
                    Theo đuổi hình tượng gợi cảm gây tranh cãi, thế nên không lạ
                    khi bên cạnh lượng người hâm mộ đông đảo, nữ streamer cũng
                    sở hữu rất nhiều anti-fan - những người thường xuyên chỉ
                    trích Moon-wol vì cách hành động khoe thân thiếu chừng mực,
                    phản cảm. Tuy nhiên, điều này cũng không làm cô nàng
                    streamer cảm thấy quá bận tâm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/photo-1-16226114024711208113736.gif"
                    alt="Gai Xinh, Hot Girl, Streamer, Nu Streamer, Cong Dong Mang, Moon Wol, "
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

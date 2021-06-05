import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Loạt khoảnh khắc quên tắt camera trên sóng và các sự cố khó đỡ của những nữ streamer nổi tiếng"
content="Quên tắt camera là một trong những sai lầm cơ bản của không ít các streamer." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-1-16167481645331042568720.jpg" 
alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, " 
category="images" 
time="04/06/2021 04:42 PM" 
link="/loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng"/>

{title="Loạt khoảnh khắc quên tắt camera trên sóng và các sự cố khó đỡ của những nữ streamer nổi tiếng",
content="Quên tắt camera là một trong những sai lầm cơ bản của không ít các streamer." ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-1-16167481645331042568720.jpg" ,
alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, " ,
category="images" ,
time="04/06/2021 04:42 PM" ,
link="/loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng",component="page_20210604044225",
filepath="../storages/content/20210604044225-loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng.js"},

Loạt khoảnh khắc quên tắt camera trên sóng và các sự cố khó đỡ của những nữ streamer nổi tiếng
Quên tắt camera là một trong những sai lầm cơ bản của không ít các streamer.
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-1-16167481645331042568720.jpg
Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, 
images
04/06/2021
04:42 PM
/loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng
page_20210604044225
../storages/content/20210604044225-loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng.js




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
  "Loạt khoảnh khắc quên tắt camera trên sóng và các sự cố khó đỡ của những nữ streamer nổi tiếng";
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const date = "04/06/2021";
const time = "04:42 PM";
const description =
  "Quên tắt camera là một trong những sai lầm cơ bản của không ít các streamer.";
const link =
  "loat-khoanh-khac-quen-tat-camera-tren-song-va-cac-su-co-kho-do-cua-nhung-nu-streamer-noi-tieng";
const tagparam = [
  "streamer",
  "camera",
  "su-co",
  "noi-am-anh",
  "hinh-anh-phan-chieu",
  "hinh-anh-nhay-cam",
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

export default function page_20210604044225() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
                    Những sự cố về chiếc "camera tai hại" vẫn luôn là một trong
                    những nỗi ám ảnh của không biết bao nhiêu các cô nàng
                    streamer trong quá khứ. Và thậm chí danh sách này còn kéo
                    dài nhiều hơn nữa - điều minh chứng cho thấy rằng bài học vỡ
                    lòng với những chiếc camera vẫn rất ít khi được các nữ
                    streamer lưu tâm tới.
                  </p>
                  <p>
                    Có thể kể tới trường hợp của Yuan Yuan - một nữ streamer
                    siêu xinh đẹp và gợi cảm. Trong suốt sự nghiệp của mình, cô
                    nàng gần như không có bất kỳ scandal hay lùm xùm nào đáng
                    nói ngoại trừ dăm ba lần khoe ảnh mặc bikini hoặc tham gia
                    các gameshow với tạo hình gợi cảm vừa phải. Tuy nhiên, có
                    một sự cố suýt chút nữa đã khiến cho Yuan Yuan suy sụp. Đó
                    là khi mà nữ streamer này hồn nhiên tắm trong phòng kính
                    trong suốt, không hay biết rằng camera vẫn đang bật và phản
                    chiếu hình ảnh nhạy cảm của cô nàng qua gương.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-1-16167481645331042568720.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Yuan Yuan - cô nàng streamer trong câu chuyện"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-1-16167481674131170982083.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Cô nàng cũng từng dính lùm xùm khi quên tắt camera lúc tắm"
                  />
                  <p>
                    Cũng may cho Yuan Yuan là khoảnh khắc ấy đã được các fan của
                    cô nàng ngăn chặn việc phát tán bằng cách đua nhau spam
                    donate để hiện chữ kín trên màn hình livestream như một cách
                    bảo vệ cho thần tượng của mình. Ngoài ra, trong năm qua, cô
                    nàng cũng từng một lần khiến không ít fan rụng rời khi xuất
                    hiện với chiếc khăn tắm gợi cảm trong lúc bị những người
                    đồng nghiệp YouTuber khác đột nhập vào nhà theo cách bất ngờ
                    nhất.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-2-16167481675172044353709.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Yuan Yuan đang là cái tên rất nổi tiếng ở thời điểm hiện tại"
                  />
                  <p>
                    Tiếp đó, một nữ streamer khác cũng gặp sự cố tương tự như
                    Yuan Yuan khi vô tình livestream y nguyên khung cảnh tắm bồn
                    của mình một cách trực tiếp, không qua hình ảnh phản chiếu
                    hay gì. Sự khác biệt cũng như điều vớt vát có lẽ là việc ít
                    ra, khung cảnh chỉ bị giới hạn trong khe hở nhỏ nhoi của một
                    cánh cửa phòng tắm đang khép hờ hững mà thôi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-3-1616748167610486098790.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Hình ảnh hớ hênh của cô nàng streamer bị ghi lại"
                  />
                  <p>
                    Một trường hợp khác cũng khá đáng chú ý là của cô nàng
                    streamer có biệt danh là "Nấm". Xinh xắn, dễ thương và đáng
                    yêu, thế nhưng cô nàng lại bất ngờ gặp phải sự cố khó đỡ khi
                    quên tắt camera mà đã vội vàng thay đồ ngay trên sóng. Nhưng
                    cũng may, ít ra khi chưa quá hớ hênh thì nữ streamer này đã
                    nhận ra sự cố và vội vàng khắc phục. Nếu không chẳng biết
                    hậu quả để lại còn to lớn tới mức nào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-4-16167481676822013316530.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Cô nàng streamer xinh đẹp"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/26/photo-5-1616748167763691975381.jpg"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note="Và sự cố khó đỡ khi thay đồ vào lúc hết game"
                  />
                  <ContentImage
                    src="https://nv.vi-serve.com/vis-media/922/1823/FNE9jHkBB4amCadClX_Q_720p.mp4"
                    alt="Streamer, Camera, Su Co, Noi Am Anh, Hinh Anh Phan Chieu, Hinh Anh Nhay Cam, "
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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

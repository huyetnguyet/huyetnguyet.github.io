import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Thiếu nữ Sài Gòn sinh năm 2001: Vòng 1 lớn giúp tôn dáng và khiến mình trông nữ tính hơn"\description="Cô bạn sinh năm 2001 cảm thấy tự tin với số đo cơ thể hiện tại." 
src="https://s.vi-serve.com/vi_logo.svg" 
alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, " 
category="images" 
time="06/06/2021 08:44 AM" 
link="/nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3"/>

{title:"Thiếu nữ Sài Gòn sinh năm 2001: Vòng 1 lớn giúp tôn dáng và khiến mình trông nữ tính hơn",\description:"Cô bạn sinh năm 2001 cảm thấy tự tin với số đo cơ thể hiện tại." ,
src:"https://s.vi-serve.com/vi_logo.svg" ,
alt:"Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, " ,
category:"images" ,
time:"06/06/2021 08:44 AM" ,
link:"/nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3",component:"page_20210606084411",
filepath:"./20210606084411-nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3.js"},

Thiếu nữ Sài Gòn sinh năm 2001: Vòng 1 lớn giúp tôn dáng và khiến mình trông nữ tính hơn
Cô bạn sinh năm 2001 cảm thấy tự tin với số đo cơ thể hiện tại.
https://s.vi-serve.com/vi_logo.svg
Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, 
images
06/06/2021
08:44 AM
/nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3
page_20210606084411
./20210606084411-nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3.js




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
  "Thiếu nữ Sài Gòn sinh năm 2001: Vòng 1 lớn giúp tôn dáng và khiến mình trông nữ tính hơn";
const author = "CÔ HÀNG XÓM,";
const source = "";
const date = "06/06/2021";
const time = "08:44 AM";
const description =
  "Cô bạn sinh năm 2001 cảm thấy tự tin với số đo cơ thể hiện tại.";
const link =
  "nu-sinh-sai-gon-sinh-nam-2001-tiet-lo-ly-do-co-vong-1-khung-minh-uong-sua-dau-nanh-tu-nam-lop-3";
const tagparam = [
  "nu-sinh",
  "vong-1",
  "cong-dong-mang",
  "gioi-tre",
  "lam-dep",
  "thoi-trang",
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

export default function page_20210606084411() {
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
                    Với những bạn gái ở lứa tuổi đang lớn, vóc dáng cơ thể là
                    một trong những khía cạnh cực kỳ được quan tâm. Bạn nữ nào
                    mà chẳng muốn mình trông xinh xắn hay có một điểm mạnh nào
                    đó ở ngoại hình ai nhìn một lần cũng ấn tượng, ví như: Gương
                    mặt xinh xắn, một chiếc mũi cao thanh toát, làn da trắng như
                    trứng gà bóc. Và điểm mạnh ngoại hình ấy cũng có thể là...
                    số đo vòng 1. Một nét đẹp rất nữ tính!
                  </p>
                  <p>
                    Cô bạn Thiên Di (sinh năm 2001, học sinh trường THPT Bạch
                    Đằng, TP.HCM) đang trở thành cái tên thu hút sự chú ý của
                    dân mạng nhờ vòng 1 khủng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/2018/10/17/screen-shot-2018-10-17-at-10202-pm-15397561305891476080685.png"
                    alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                    note=""
                  />
                  <p>
                    Đặc điểm về ngoại hình này khiến Thiên Di thường xuyên bị
                    mọi người so sánh với nữ sinh Hải Dương có vòng 1 hơn 110
                    cm. Cũng vì lý do đó mà cô bạn quyết định không tiết lộ số
                    đo vòng 1 của mình: "Mình không muốn bị gắn chặt với những
                    con số như vậy", Di nói.
                  </p>
                  <p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/2018/10/17/screen-shot-2018-10-17-at-10142-pm-15397561366331782841332.png"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note=" Hình ảnh của Thiên Di đang gây sốt MXH."
                    />
                  </p>
                  <p>
                    Thiên Di chia sẻ mình gặp khá nhiều câu chuyện bi hài cũng
                    như những lời nhận xét khen-chê của dân mạng, song những
                    "comment" ấy đều không ảnh hưởng nhiều đến cuộc sống hiện
                    tại của Di. Nữ sinh 17 tuổi luôn nhìn vào những điều tích
                    cực khi nói về vóc dáng hiện tại. "Vòng 1 đầy đặn giúp tôn
                    dáng cho mình và cũng khiến mình trông nữ tính hơn nữa", Di
                    nói.
                  </p>
                  <p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/2018/10/17/screen-shot-2018-10-17-at-10134-pm-1539756168132186519687.png"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note=" Thiên Di không muốn bị so sánh với nữ sinh Hải Dương - Thu
                      Trang, có vòng 1 hơn 110cm."
                    />
                  </p>
                  <p>
                    Nữ sinh cho biết số đo vòng 1 "khủng" của mình chẳng hề thừa
                    hưởng từ ai trong gia đình. Lý do chỉ đơn giản là: "Hồi bé,
                    cụ thể là năm lớp 3, mình bắt đầu uống sữa đậu nành mỗi
                    ngày. Đây là lý do khiến ngực mình phát triển chứ không phải
                    do gen di truyền đâu".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/2018/10/17/screen-shot-2018-10-17-at-10306-pm-1539756229309689684729.png"
                    alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                    note=""
                  />
                  <p>
                    "Mình không có ý định thu nhỏ vòng 1 vì mình hài lòng với
                    những gì đang có trên cơ thể. Mình cao 1m61, nặng 45kg. Hiện
                    tại, mình đã không còn uống sữa đậu nành mà áp dụng chế độ
                    ăn uống lành mạnh giữ gìn vóc dáng đẹp", Thiên Di chia sẻ.
                  </p>
                  <p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/2018/10/17/screen-shot-2018-10-17-at-10222-pm-15397562353191293559101.png"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note=" Nữ sinh Sài Gòn hài lòng với kích cỡ vòng 1 của mình."
                    />
                  </p>
                  <p>
                    {" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/2018/10/17/screen-shot-2018-10-17-at-10255-pm-1539756232354344860934.png"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note="
                      Cô bạn có hơn 44,4k follower trên Instagram."
                    />
                  </p>
                  <p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/2018/10/17/screen-shot-2018-10-17-at-10400-pm-15397562483211090701246.png"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/2018/10/17/169917542133023224781231907412646961379153o-15397563109131094882268.jpg"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note=""
                    />
                    <ContentImage
                      src="https://nv.vi-serve.com/vis-media/472/931/gejQOG8BsAhKjBq4_jRc_720p.MP4"
                      alt="Nu Sinh, Vong 1, Cong Dong Mang, Gioi Tre, Lam Dep, Thoi Trang, "
                      note="
                      Những hình ảnh đang được lan truyền chóng mặt trên MXH."
                    />
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

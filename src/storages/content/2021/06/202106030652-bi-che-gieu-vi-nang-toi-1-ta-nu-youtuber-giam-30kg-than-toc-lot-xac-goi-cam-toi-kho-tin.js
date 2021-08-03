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
 <ContentItem
 title="Bị chế giễu vì nặng tới 1 tạ, nữ YouTuber giảm 30kg thần tốc, lột xác gợi cảm tới khó tin"
content="Hành trình biến đổi nhan sắc của cô nàng YouTuber này không khỏi khiến cho các đấng mày râu phải lác mắt." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-1-1621763998246465890053.png" 
alt="Nayoon" 
category="images" 
time="03/06/2021 06:52 PM" 
link="/bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin"/>

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
  "Bị chế giễu vì nặng tới 1 tạ, nữ YouTuber giảm 30kg thần tốc, lột xác gợi cảm tới khó tin";
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const date = "03/06/2021";
const time = "06:52 PM";
const description =
  "Hành trình biến đổi nhan sắc của cô nàng YouTuber này không khỏi khiến cho các đấng mày râu phải lác mắt.";
const link =
  "bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin";
const tagparam = [
  "youtuber",
  "nayoon",
  "bien-doi-nhan-sac",
  "phau-thuat-tham-my",
  "nguoi-mau-anh",
  "co-gai-xinh-dep",
  "qua-trinh-giam-can",
  "co-hoi-nghe-nghiep",
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

export default function page_20210603065223() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Phẫu thuật thẩm mỹ có thể khiến một người con gái lột xác,
                      thậm chí là thay đổi cuộc đời nhưng đôi khi không cần nhờ
                      tới sự can thiệp của dao kéo, các cô gái vẫn hoàn toàn có
                      thể trở nên xinh xắn, gợi cảm hơn rất nhiều. Cô nàng
                      YouTuber Nayoon là một ví dụ như vậy, khi mà chỉ nhờ việc
                      ăn kiêng, từ chỗ là một cô nàng mập mạp, nặng tới 1 tạ,
                      Nayoon giờ đây xinh đẹp, quyến rũ không khác gì một hot
                      girl hay người mẫu ảnh có tiếng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-1-1621763998246465890053.png"
                      alt="Nayoon"
                      note="Nayoon - cô nàng YouTuber vừa khiến CĐM lác mắt với màn lột
                    xác khó tin"
                    />
                    <p></p>
                    <p>
                      Cụ thể, cách đây không lâu, CĐM bất ngờ xôn xao trước câu
                      chuyện về màn thay đổi tới chóng mặt của một cô gái xinh
                      đẹp - chính là YouTuber Nayoon được nhắc tới ở trên. Theo
                      đó, cô nàng đã khiến khá nhiều người bất ngờ khi tường
                      thuật lại một góc nhỏ câu chuyện của đời mình, hay chính
                      xác hơn là quá trình giảm cân đầy nghị lực. Được biết,
                      trong quá khứ, Nayoon là một cô gái có thời điểm cân nặng
                      còn lên tới 1 tạ vì lối sống có phần buông thả và thường
                      xuyên dùng đồ ăn nhanh.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-1-16217640009571308004302.png"
                      alt="Nayoon"
                      note="
                    Nayoon chia sẻ hình ảnh của bản thân trước và sau khi giảm
                    cân"
                    />
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-2-1621764001084380552654.png"
                      alt="Nayoon"
                      note="
                    Còn đây là hình ảnh ngọt ngào, siêu quyến rũ của nữ YouTuber
                    ở thời điểm hiện tại"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/5/23/photo-3-1621764001030425364426.gif"
                      alt="Nayoon"
                      note="Vẻ đẹp đầy đặn, gợi cảm của Nayoon"
                    />
                    <p>
                      Điều này khiến cho lòng tự trọng của Nayoon bị tổn thương
                      khi cô thường xuyên nhận phải những lời trêu chọc, chế
                      giễu cũng như cảm thấy bản thân bị ì ạch, sức khỏe giảm
                      sút. Do đó, với nghị lực của mình, nàng YouTuber đã giảm
                      một mạch 30kg trong thời gian ngắn. Hiện tại, thông số của
                      Nayoon là cao 1m72 và nặng 73kg - con số vẫn trên mức
                      trung bình, lý tưởng nhưng cô nàng lại khá tự hào khi cho
                      biết cơ thể thật sự rắn chắc lên nhờ luyện tập.
                    </p>{" "}
                    <ContentImage
                      src="https://media2.giphy.com/media/AddyiUIzQIYOCGsXVJ/giphy.gif?cid=790b7611f4c6861449f09d38631708113d6a5e12aa84f413&rid=giphy.gif&ct=g.mp4"
                      alt="Nayoon"
                      note="
                    Cô nàng cũng không ngại chia sẻ những góc nhìn gợi cảm sau
                    màn lột xác"
                    />
                    <p>
                      Tất nhiên, không thể đòi hỏi Nayoon phải gầy gò và có vòng
                      eo như những cô nàng người mẫu chuyên nghiệp. Tuy nhiên,
                      vẻ đẹp đầy đặn, đẫy đà và vô cùng quyến rũ của cô nàng
                      YouTuber vẫn đủ sức làm động lòng không biết bao nhiêu
                      đấng mày râu. Bằng chứng là bên dưới phần bình luận, đa số
                      đều dành rất nhiều lời khen ngợi cho cô nàng YouTuber, cả
                      về nghị lực lẫn thân hình bốc lửa của cô nàng ở thời điểm
                      hiện tại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-5-1621764001320683400406.png"
                      alt="Nayoon"
                      note="
                    Nayoon nhận được rất nhiều lời khen ngợi về nhan sắc ở thời
                    điểm hiện tại"
                    />
                    <p>
                      Thậm chí, màn giảm cân này còn mở ra vô số cơ hội nghề
                      nghiệp cho Nayoon, khi nữ YouTuber hiện gờ đang nhận được
                      rất nhiều lời mời làm mẫu ảnh. Bản thân cô nàng cũng rất
                      tự tin vào vóc dáng của bản thân, thậm chí sẵn sàng thực
                      hiện những shoot hình nóng bỏng.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-6-16217640015641470784385.jpg"
                      alt="Nayoon"
                      note=""
                    />
                    <p>
                      Cô nàng YouTuber không ngại thực hiện những bức hình nóng
                      bỏng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-7-1621764001468184197606.jpg"
                      alt="Nayoon"
                      note=""
                    />
                    <p>Nayoon cũng rất tự tin với nhan sắc hiện tại</p>
                    <p>Ảnh: Internet</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

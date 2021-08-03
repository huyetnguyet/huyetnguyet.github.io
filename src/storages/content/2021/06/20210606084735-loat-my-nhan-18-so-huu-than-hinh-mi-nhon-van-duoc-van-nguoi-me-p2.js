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

 <ContentItem title="Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.2)"\description="Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229236895341716459232.jpg" 
alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, " 
category="images" 
time="06/06/2021 08:47 AM" 
link="/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2"/>

{title:"Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.2)",\description:"Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229236895341716459232.jpg" ,
alt:"Idol, Himari Asada, Natsu Tojo, Rikka Ono, " ,
category:"images" ,
time:"06/06/2021 08:47 AM" ,
link:"/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2",component:"page_20210606084735",
filepath:"./20210606084735-loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2.js"},

Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.2)
Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo.
https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229236895341716459232.jpg
Idol, Himari Asada, Natsu Tojo, Rikka Ono, 
images
06/06/2021
08:47 AM
/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2
page_20210606084735
./20210606084735-loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2.js




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
  "Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.2)";
const author = "DS";
const source = "Pháp luật và bạn đọc";
const date = "06/06/2021";
const time = "08:47 AM";
const description =
  "Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo.";
const link =
  "loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p2";
const tagparam = ["idol", "himari-asada", "natsu-tojo", "rikka-ono"];
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

export default function page_20210606084735() {
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
                    <p>4. Rikka Ono </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229236895341716459232.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      Rikka Ono sinh năm 2002, mới chỉ gia nhập ngành giải trí
                      vào tháng 4/2020 với tư cách diễn viên phim người lớn.
                      Hiện tại, cô nàng đang là diễn viên độc quyền của công ty
                      Moodyz và là 1 trong những cái tên trẻ nhất trong lịch sử
                      tham gia vào ngành công nghiệp này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-162292369082871766503.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      Ngay từ khi mới xuất hiện, Rikka Ono đã tạo nên ấn tượng
                      mạnh với nhan sắc xinh đẹp, mong manh, trong sáng và vô
                      cùng đáng yêu. Cô nàng chỉ cao có 148 cm, với số đo 3 vòng
                      lần lượt là 81 - 58 - 82. Dù vậy, điều này cũng không quá
                      ảnh hưởng tới tình cảm của fan hâm mộ dành cho cô nàng.
                    </p>
                    <p>
                      Sau khi trình làng, Rikka Ono đã ngay lập tức leo lên top
                      1 bảng xếp hạng trong vòng 3 ngày liên tiếp. Cô nàng cũng
                      được giới chuyên môn đánh giá khá cao, khi được xếp thứ 2
                      trong số các tân binh phim 18+ trình làng trong năm 2020,
                      còn sản phẩm trình làng cũng nằm trong top 5 những sản
                      phẩm bán chạy nhất của năm.
                    </p>
                    <p>5. Natsu Tojo</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229235552961459509266.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      {" "}
                      Natsu Tojo sinh năm 1999 tại tỉnh Tochigi, Nhật Bản. Cô
                      nàng gia nhập ngành giải trí vào tháng 2/2020 với tư cách
                      diễn viên phim 18+ và trình làng với công ty Faleno. Cô
                      nàng được biết đến với nhan sắc tươi trẻ, đáng yêu và nhí
                      nhảnh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229235571051744672048.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      Sở hữu một gương mặt cực kỳ xinh xắn, không thua kém gì
                      các hot girl ở thời điểm hiện tại, thế nhưng ít ai biết
                      rằng cô nàng Tojo Natsu lại sinh ra trong một gia đình cực
                      kỳ nghiêm khắc và gia giáo. Trong một bài phỏng vấn gần
                      đây nhất, nàng hot girl không ngại ngần chia sẻ câu chuyện
                      về gia đình của mình. Cụ thể, Tojo cho rằng mẹ mình rất
                      khó tính: "Mẹ sẽ không bao giờ hài lòng, thậm chí là tức
                      giận nếu tôi mặc quần áo mà để lộ dây áo lót hay hở ngực".
                    </p>
                    <p>
                      Với vẻ ngoài quyến rũ, không khó để Natsu nhận được những
                      lời mời làm phim. Chỉ trong vòng 2 tháng, cô nàng sinh năm
                      1999 đã ra mắt liên tục gần 30 phim khác nhau trong vòng 2
                      tháng. Cũng nhờ điều này, cô nàng hiện đang "phóng như
                      bay" trên bảng xếp hạng doanh số hàng tháng của các hệ
                      thống bán lẻ, đồng thời nhận được không ít sự chú ý của
                      khán giả.
                    </p>
                    <p>6. Himari Asada</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/-1622958371494226916400.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      {" "}
                      Himari Asada sinh ngày 20/3/2002, chỉ vừa mới trình làng
                      vào tháng 3 vừa qua. Dù vậy, cô nàng đã ngay lập tức được
                      tuyển chọn thành diễn viên độc quyền của hãng Soft on
                      Demand. Nhìn qua hình ảnh thì có thể không quá chân thực,
                      nhưng có một chỉ số khiến cho rất nhiều người phải bất ngờ
                      từ phía Himari, đó là cô nàng chỉ cao có 1m47, bé hơn rất
                      nhiều người tưởng tượng. Dù vậy, Himari vẫn là cái tên đầy
                      triển vọng cũng là nhờ thân hình siêu gợi cảm và gương mặt
                      xinh đẹp của mình.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229583857851852682444.jpg"
                      alt="Idol, Himari Asada, Natsu Tojo, Rikka Ono, "
                      note=""
                    />
                    <p>
                      {" "}
                      Thật vậy, các con số không biết nói dối, cô nàng sinh năm
                      2002 được đánh giá rất cao. Mới chỉ debut được hơn 2
                      tháng, thế nhưng tới nay, cô nàng đã ngay lập tức lọt vào
                      top 10 cái tên ăn khách nhất. Dĩ nhiên, đây mới là những
                      con số có thể chưa quá đáng kể nhưng trong giai đoạn mà
                      ngành công nghiệp AV đang có dấu hiệu đóng băng như thời
                      điểm hiện tại thì chỉ số của Himari thật sự là đáng để
                      khen ngợi.
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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

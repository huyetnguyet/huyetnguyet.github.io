import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import {RandomFeature} from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";


/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.1)"\description="Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228818803121054981855.jpg" 
alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " 
category="images" 
time="05/06/2021 09:03 AM" 
link="/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1"/>

{title:"Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.1)",\description:"Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228818803121054981855.jpg" ,
alt:"Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " ,
category:"images" ,
time:"05/06/2021 09:03 AM" ,
link:"/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1",component:"page_20210605090338",
filepath:"../storages/content/20210605090338-loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1.js"},

Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.1)
Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo.
https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228818803121054981855.jpg
Idol, Yui Nagase, Yura Kano, Mia Nanasawa, 
images
05/06/2021
09:03 AM
/loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1
page_20210605090338
../storages/content/20210605090338-loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1.js




<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title = "Loạt mỹ nhân 18+ sở hữu thân hình mi nhon vẫn được vạn người mê (P.1)";
const author = "DS";
const source = "Trí Thức Trẻ";
const date = "05/06/2021";
const time = "09:03 AM";
const description = "Không thuộc dạng sở hữu thân hình bốc lửa, thế nhưng những cô gái này vẫn có lượng fan hâm mộ đông đảo.";
const link = "loat-my-nhan-18-so-huu-than-hinh-mi-nhon-van-duoc-van-nguoi-me-p1";
const tagparam = ["idol","yui-nagase","yura-kano","mia-nanasawa"];
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

export default function page_20210605090338() {
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
                <div className="contentBody"><p>1. Mia Nanasawa</p>
<p>Mia Nanasawa sinh năm 1998, gia nhập ngành giải trí vào tháng 11/2017 với tư cách diễn viên phim người lớn. Hiện tại, cô nàng đang là diễn viên của công ty Moodyz trong suốt 3 năm vừa qua. Cô thường được các fan gọi với biệt danh thân thiết Mya-chan.</p>
<p>Cô nàng khá là "thấp bé nhẹ cân" khi chỉ cao 145 cm, với số đo 3 vòng là 79-54-80 cm. Tuy nhiên, Mia sở hữu nhan sắc khá bắt mắt, đáng yêu cùng nụ cười tỏa nắng nên được rất nhiều người hâm mộ yêu thích. Vào năm 2019, Mia Nanasawa đã được đề cử ở hạng mục tân binh xuất sắc tại giải thưởng phim 18+ Fanza Adult Award.</p>
<p>Ở ngoài đời, Mia là  người rất yêu thích nấu ăn và cosplay. Theo cô nàng chia sẻ, hồi còn học ở trường, cô nàng đã tham gia vào 1 câu lạc bộ "chỉ suốt ngày ăn và ăn". Dù vậy, Mia cũng tự tin cho rằng khả năng nấu nướng của mình cũng không hề tồi chút nào.</p>
<p>Một trong những sở thích khác của cô nàng này là chơi game. Nhưng theo Mia chia sẻ, hồi còn nhỏ thì cô nàng không quá dư dả, thế nên cô nàng thường hay làm người mẫu và cosplay để có thể kiếm tiền trang trải cho sở thích này. Dù vậy, cô nàng đã khám phá sở thích mời của mình - được mọi người chú ý và ngắm nhìn.</p>
<p>2. Yui Nagase</p>
<p>Yui Nagase sinh ngày 30/11/1999 tại Nhật Bản, gia nhập vào ngành công nghiệp 18+ vào tháng 5/2019. Hiện tại cô đang là diễn viên tự do không thuộc sự quản lý của bất kỳ studio phim 18+ nào cả. Yui Nagase tham gia "đánh thuê" cho nhiều studio khác nhau.</p>
<p>Lúc mới xuất hiện, Yui Nagase đã ngay lập tức lọt vào top đầu trong BXH các nữ diễn viên ăn khách nhất trong nửa đầu năm 2019. Với gương mặt dễ thương và cuốn hút, nữ diễn viên sinh năm 1999 đã nhanh chóng lấy được cảm tình của người hâm mộ tại xứ sở hoa anh đào. Cô nàng cũng nhanh chóng gây được ấn tượng mạnh sau đó bởi cho ra mắt lượng sản phẩm khổng lồ. Được biết, trong năm 2019, Yui đã tham gia tới hơn 150 sản phẩm khác nhau. </p>
<p>3. Yura Kano</p>
<p>Yura Kano sinh năm 1998 tại tỉnh Okoyama, Nhật Bản, gia nhập ngành giải trí vào giữa năm 2017 với tư cách 1 người mẫu gravure. Tới cuối năm 2017, cô nàng quyết định chuyển sang gia nhập ngành phim người lớn khi đầu quân cho công ty S1 và trở thành một trong những trụ cột thế hệ mới của công ty này trong suốt vài năm qua.</p>
<p>Cô nàng có biệt danh Yuraran sở hữu nhan sắc xinh đẹp cùng thân hình nóng bỏng với chiều cao là 156 cm, chỉ số 3 vòng là 84 - 55 - 86 cm. Thứ khiến cô nàng được chú ý nhất chính là khuôn mặt ngây thơ và cùng biểu cảm có phần "ngơ ngác" khiến cho nhiều chàng trai phải rung động ngay từ cái nhìn đầu tiên. </p>
<p> </p>
<p> Được biết, Yura đã tham gia vào câu lạc bộ diễn kịch từ hồi cấp 3. Cô nàng cũng Hiện tại, cô nàng đang là 1 trong những thành viên chính thức của nhóm Ebisu Muscats bên cạnh Yua Mikami, Kana Momonogi...</p>
<p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
<ContentImage src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228818803121054981855.jpg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
<ContentImage src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228818832671912622129.jpg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
<ContentImage src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/1618148741938100754989383619890846738542218n-1622884536814895715030.jpg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
<ContentImage src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/8723788029536037813556553928268941915921518n-1622884536900193633038.jpg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
<ContentImage src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-1622884333414892181401.jpeg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
<ContentImage src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/5/18/photo-1-1589786781860338080913.jpeg" alt="Idol, Yui Nagase, Yura Kano, Mia Nanasawa, " note=""/>
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

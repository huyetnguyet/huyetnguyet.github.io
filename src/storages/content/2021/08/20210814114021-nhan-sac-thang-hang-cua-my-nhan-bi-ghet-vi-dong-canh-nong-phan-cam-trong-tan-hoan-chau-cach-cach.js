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
"timestamp": '14/08/2021 11:40 AM',
"title": 'Nhan sắc thăng hạng của mỹ nhân bị ghét vì đóng cảnh nóng phản cảm trong Tân Hoàn Châu Cách Cách',
"description": 'Năm xưa nữ diễn viên này từng chịu chỉ trích "bất chấp thủ đoạn để nổi tiếng" vì cảnh nóng trong Tân Hoàn Châu Cách Cách.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-9-16289321889752056026119.jpg',
"alt": 'hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,',
"category": 'stars',
"date": '14/08/2021',
"time": '11:40 AM',
"link": '/nhan-sac-thang-hang-cua-my-nhan-bi-ghet-vi-dong-canh-nong-phan-cam-trong-tan-hoan-chau-cach-cach',
"zcomponent": 'page_20210814114021',
"filepath": './20210814114021-nhan-sac-thang-hang-cua-my-nhan-bi-ghet-vi-dong-canh-nong-phan-cam-trong-tan-hoan-chau-cach-cach.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Nhan sắc thăng hạng của mỹ nhân bị ghét vì đóng cảnh nóng phản cảm trong Tân Hoàn Châu Cách Cách";
const author = "XỬ NỮ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "14/08/2021 11:40 AM";
const description =
  'Năm xưa nữ diễn viên này từng chịu chỉ trích "bất chấp thủ đoạn để nổi tiếng" vì cảnh nóng trong Tân Hoàn Châu Cách Cách.';
const link =
  "nhan-sac-thang-hang-cua-my-nhan-bi-ghet-vi-dong-canh-nong-phan-cam-trong-tan-hoan-chau-cach-cach";
const tagparam = [
  "hám thanh tử",
  "tân hoàn châu cách cách",
  "ngày ấy bây giờ",
  "cảnh nóng",
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

export default function page_20210814114021() {
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
                      Năm xưa nữ diễn viên này từng chịu chỉ trích "bất chấp thủ
                      đoạn để nổi tiếng" vì <strong>cảnh nóng</strong> trong Tân
                      Hoàn Châu Cách Cách.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-8-1628932188989560871665.jpg"
                      alt="1, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <p>
                      Trong phim Tân Hoàn Châu Cách Cách, vai diễn Hân Vinh Cách
                      Cách do <strong>Hám Thanh Tử</strong> thủ vai là người thứ
                      ba xen vào cuộc tình của Ngũ A Ca và Tiểu Yến Tử. Mặc dù
                      vai diễn này giúp nữ diễn viên tạo được chú ý nhưng cũng
                      khiến cô bị khán giả "ném đá". Trong phim có một phân cảnh
                      Hân Vinh Cách Cách tìm đủ mọi cách để quyến rũ Ngũ A Ca.
                      Sau cùng cô đã bỏ thuốc khiến Ngũ A Ca tưởng rằng cô chính
                      là Tiểu Yến Tử và động phòng cùng mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-9-16289321889752056026119.jpg"
                      alt="2, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-14-1628932188823374974294.jpg"
                      alt="3, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-13-16289321889322050392977.jpg"
                      alt="4, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <p>
                      Thậm chí những hình ảnh hậu trường khi đạo diễn chỉ đạo
                      hai diễn viên chính đóng cảnh động phòng cũng bị phát tán.
                      Rất nhiều phụ huynh cho rằng cảnh quay và lời thoại nhạy
                      cảm trong phim có thể gây ảnh hưởng xấu đến các em nhỏ.{" "}
                      <strong>Hám Thanh Tử</strong> còn chịu chỉ trích "bất chấp
                      thủ đoạn để nổi tiếng".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-6-1628932189018210403607.jpg"
                      alt="5, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/hamthanhtu-7-1628932189004465554400.jpg"
                      alt="6, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <p>
                      <strong>Hám Thanh Tử</strong> sinh năm 1988, sở hữu gương
                      mặt thanh tú, đôi mắt long lanh, làn da mịn màng cùng
                      chiều cao 1m65. Cô tốt nghiệp khoa biểu diễn Học viện điện
                      ảnh Bắc Kinh. Năm 2009, cô nhận được vai diễn đầu tiên
                      trong phim Nương Thê và chính thức gia nhập ngành giải
                      trí. Ngoài Tân Hoàn Châu Cách Cách, cô còn gây chú ý khi
                      góp mặt trong nhiều tác phẩm như Giấc Mộng Lầu Hồng, Tân
                      Kinh Hoa Yên Vân, Người Thừa Kế Tỷ Phú, Nếu Paris Không
                      Vui Vẻ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-10-1628932188962610494281.jpg"
                      alt="7, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-11-1628932188952711885418.jpg"
                      alt="8, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Mặc dù sở hữu nhan sắc gợi cảm cùng khả năng diễn xuất tốt
                      nhưng sự nghiệp của <strong>Hám Thanh Tử</strong> khá lận
                      đận. Nữ diễn viên đóng phim đều đặn nhưng không thể bật
                      lên. Cô chỉ được nhớ đến với những bộ ảnh sexy khoe khuôn
                      ngực đầy đặn và thân hình đẹp.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-3-16289321890582138240290.jpg"
                      alt="9, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-2-162893218906965689181.jpg"
                      alt="10, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-1-1628932189079982216839.jpg"
                      alt="11, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/148688004588788300a700xh-1628932542266792699319.jpg"
                      alt="12, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <p>
                      Tác phẩm mới nhất đang lên sóng của{" "}
                      <strong>Hám Thanh Tử</strong> là Kỳ Nghỉ Bất Ngờ. Trong
                      phim cô vào vai Lưu Liên - một cô gái độc thân 30 tuổi hài
                      hước vui vẻ. Một ngày mẹ cô bất ngờ qua đời. Đối mặt với
                      biến cố bất thình lình, Lưu Liên không biết làm sao để ứng
                      phó, liền sắp xếp cho bản thân một kỳ nghỉ ngắn. Ngoài mặt
                      cô dùng thái độ hài hước khinh thường nhạo báng cuộc sống,
                      nhưng sâu trong ký ức nội tâm, cô vẫn không thể nào ngừng
                      nhớ về người mẹ quá cố của mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/hamthanhtu-15-1628932229400955637916.jpg"
                      alt="13, hám thanh tử,tân hoàn châu cách cách,ngày ấy bây giờ,cảnh nóng,"
                      note=""
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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

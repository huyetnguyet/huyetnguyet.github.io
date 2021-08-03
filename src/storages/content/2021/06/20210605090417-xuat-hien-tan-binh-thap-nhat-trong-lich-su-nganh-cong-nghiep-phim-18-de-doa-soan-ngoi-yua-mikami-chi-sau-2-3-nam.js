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

 <ContentItem title="Xuất hiện tân binh 'thấp' nhất trong lịch sử ngành công nghiệp phim 18+, đe dọa soán ngôi Yua Mikami chỉ sau 2-3 năm"\description="Đa số các tân binh tiềm năng ngày nay đều được mang ra để so sánh với Yua Mikami thì phải." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226903340271764166493.jpg" 
alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, " 
category="images" 
time="05/06/2021 09:04 AM" 
link="/xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam"/>

{title:"Xuất hiện tân binh 'thấp' nhất trong lịch sử ngành công nghiệp phim 18+, đe dọa soán ngôi Yua Mikami chỉ sau 2-3 năm",\description:"Đa số các tân binh tiềm năng ngày nay đều được mang ra để so sánh với Yua Mikami thì phải." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226903340271764166493.jpg" ,
alt:"Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, " ,
category:"images" ,
time:"05/06/2021 09:04 AM" ,
link:"/xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam",component:"page_20210605090417",
filepath:"../storages/content/20210605090417-xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam.js"},

Xuất hiện tân binh 'thấp' nhất trong lịch sử ngành công nghiệp phim 18+, đe dọa soán ngôi Yua Mikami chỉ sau 2-3 năm
Đa số các tân binh tiềm năng ngày nay đều được mang ra để so sánh với Yua Mikami thì phải.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226903340271764166493.jpg
Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, 
images
05/06/2021
09:04 AM
/xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam
page_20210605090417
../storages/content/20210605090417-xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam.js




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
  "Xuất hiện tân binh 'thấp' nhất trong lịch sử ngành công nghiệp phim 18+, đe dọa soán ngôi Yua Mikami chỉ sau 2-3 năm";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:04 AM";
const description =
  "Đa số các tân binh tiềm năng ngày nay đều được mang ra để so sánh với Yua Mikami thì phải.";
const link =
  "xuat-hien-tan-binh-thap-nhat-trong-lich-su-nganh-cong-nghiep-phim-18-de-doa-soan-ngoi-yua-mikami-chi-sau-2-3-nam";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "phim-av",
  "av",
  "cong-dong-mang",
  "phim-18",
  "himari-asada",
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

export default function page_20210605090417() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Mỗi năm, ngành công nghiệp AV Nhật Bản lại đón nhận thêm
                      hàng nghìn những cô nàng diễn viên mới. Ai trong số họ
                      cũng đều mơ ước sẽ trở thành những Yua Mikami 2.0, với ước
                      mơ giàu sang, danh vọng. Nhưng thực tế đôi khi lại khắc
                      nghiệt, khi mà theo thống kê, có khoảng 1/3 những cô nàng
                      tân binh thậm chí còn chẳng thể trụ được hết một năm đầu
                      mà đã vội vàng xin rút hoặc bị đào thải. Tất nhiên, vẫn có
                      những điểm nhấn ngoại lệ, đơn cử như trường hợp của Himari
                      Asada - một tân binh được chú ý nhất trong năm nay và được
                      mệnh danh là diễn viên thấp nhất trong lịch sử ngành công
                      nghiệp AV Nhật Bản.
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226903340271764166493.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Himari Asada - nhân vật đang được nhắc tới trong câu chuyện"
                      />
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226896626592076175254.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Đồng thời cũng đang là nữ diễn viên thấp nhất trong lịch sử
                      ngành công nghiệp AV Nhật Bản"
                      />
                    </p>
                    <p>
                      Sinh ngày 20/3/2002, tức là tính tới thời điểm hiện tại,
                      nàng hot girl của chúng ta mới chỉ 19 tuổi. Và cũng phải
                      tới đầu tháng 3 năm nay thì Himari mới chính thức debut,
                      trở thành diễn viên độc quyền cực kỳ triển vọng của SOD.
                      Nhìn qua hình ảnh thì có thể không quá chân thực, nhưng có
                      một chỉ số khiến cho rất nhiều người phải bất ngờ từ phía
                      Himari, đó là cô nàng chỉ cao có 1m47 mà thôi - con số
                      thấp kỷ lục trong lịch sử. Thế nhưng, cô nàng vẫn được
                      đánh giá là cái tên đầy triển vọng cũng là nhờ thân hình
                      siêu gợi cảm và gương mặt xinh đẹp của mình. Thậm chí,
                      theo nhiều người, Himari trông ra còn gợi cảm hơn cả Yua
                      Mikami nữa.
                    </p>
                    <RelationNewsInPage />
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226900327231528637787.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Tuy chỉ sở hữu chiều cao 1m47"
                      />
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226900445811578606377.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Thế nhưng Himari lại nhận được rất nhiều những bình luận
                      tích cực"
                      />
                    </p>
                    <p>
                      Chưa kể, Himari còn được các fan và giới chuyên môn đánh
                      giá rất cao ở sự chịu khó của mình. Mới chỉ debut được hơn
                      2 tháng, thế nhưng tới nay, cô nàng đã cho ra mắt tới 3 bộ
                      phim mới - một con số có thể chưa quá đáng kể nhưng trong
                      giai đoạn mà ngành công nghiệp AV đang có dấu hiệu đóng
                      băng như thời điểm hiện tại thì sự chăm chỉ của Himari
                      thật sự là đáng để khen ngợi.{" "}
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226902316301845373244.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Himari làm việc rất chăm chỉ ngay từ khi mới debut"
                      />
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622690356255842568452.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Himari hiện là diễn viên nữ độc quyền của SOD Studio"
                      />
                    </p>
                    <p>
                      Cũng phải dành một lời khen ngợi cho Himari, khi mà dù vừa
                      mới vào nghề chưa lâu, nhưng cô nàng đã bắt trend của các
                      đàn chị một cách cực kỳ nhanh nhạy. Theo đó, bên cạnh việc
                      rất chăm chỉ tương tác, update những thông tin mới trên
                      trang cá nhân, Himari đồng thời cũng đang lấn sân sang sự
                      nghiệp streamer và chăm chỉ lên sóng mỗi khi có thời gian
                      rảnh. Nhiều người thậm chí còn cho rằng, chỉ khoảng 2-3
                      năm nữa thôi, cô nàng hot girl này hoàn toàn có vươn tới
                      đẳng cấp của những diễn viên top đầu như Yua Mikami.
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622690581056716992271.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Rất nhiều fan của Himari tự tin cho rằng"
                      />
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622690565001124543984.jpg"
                        alt="Gai Xinh, Hot Girl, Phim Av, images, Cong Dong Mang, Phim 18, Himari Asada, "
                        note="
                      Thần tượng của mình có thể vươn tầm như Yua Mikami chỉ sau
                      2-3 năm"
                      />
                    </p>
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

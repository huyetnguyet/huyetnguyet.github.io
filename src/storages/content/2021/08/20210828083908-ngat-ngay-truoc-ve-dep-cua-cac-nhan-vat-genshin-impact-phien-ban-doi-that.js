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
"timestamp": '28/08/2021 08:39 AM',
"title": 'Ngất ngây trước vẻ đẹp của các nhân vật Genshin Impact phiên bản đời thật',
"description": 'Một vẻ đẹp lạ lùng đến từ các nhân vật Genshin Impact.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299772701609973263.jpg',
"alt": 'GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,',
"category": 'images',
"date": '28/08/2021',
"time": '08:39 AM',
"link": '/ngat-ngay-truoc-ve-dep-cua-cac-nhan-vat-genshin-impact-phien-ban-doi-that',
"zcomponent": 'page_20210828083908',
"filepath": './20210828083908-ngat-ngay-truoc-ve-dep-cua-cac-nhan-vat-genshin-impact-phien-ban-doi-that.js'
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
  "Ngất ngây trước vẻ đẹp của các nhân vật Genshin Impact phiên bản đời thật";
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:39 AM";
const description = "Một vẻ đẹp lạ lùng đến từ các nhân vật Genshin Impact.";
const link =
  "ngat-ngay-truoc-ve-dep-cua-cac-nhan-vat-genshin-impact-phien-ban-doi-that";
const tagparam = [
  "GENSHIN IMPACT",
  "NHÀ PHÁT TRIỂN",
  "KHO ỨNG DỤNG",
  "TẠO HÌNH NHÂN VẬT",
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

export default function page_20210828083908() {
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
                      Ra mắt vào cuối tháng 9 năm 2020,{" "}
                      <strong>Genshin Impact</strong> đã trở thành tựa game
                      mobile có doanh thu cao nhất năm 2020 khi mà{" "}
                      <strong>nhà phát triển</strong> miHoYo và Genshin Impact
                      đã thành công ngoài sức tưởng tượng. Tựa game nhanh chóng
                      trở lên cực kỳ phổ biến với lượng người chơi không chỉ ở
                      quê nhà Trung Quốc mà còn trên toàn cầu vào thời điểm đó.
                      Thậm chí Genshin Impact còn được hai ông lớn là Apple và
                      Google đánh giá cao khi đạt giải Game of the Year 2020 của
                      hai <strong>kho ứng dụng</strong> App Store và Google Play
                      Store.
                    </p>
                    <p>
                      Thành công của <strong>Genshin Impact</strong> không chỉ
                      nằm ở phần gameplay, cốt truyện mà chính là dàn nhân vật
                      cực kỳ trai tài gái sắc của game,{" "}
                      <strong>tạo hình nhân vật</strong> lung linh, đậm chất
                      anime. <strong>Nhà phát triển</strong> miHoYo khéo léo tạo
                      ra rất nhiều nhân vật với đủ tính cách, ngoại hình và kỹ
                      năng khác nhau nhưng đều mang vẻ đẹp "Waifu" khiến rất
                      nhiều game thủ mêm mẩn tựa game này. Đã có nhiều nhân vật
                      tạo nên cơn sốt trong cộng đồng game thủ Genshin Impact vì
                      ngoại hình xinh đẹp của mình. Thậm chí nhiều game thủ còn
                      chết mê chết mệt, nạp rất nhiều tiền để có được nhân vật
                      mà mình yêu thích.
                    </p>
                    <p>
                      Với tạo hình anime vô cùng đẹp mắt, chắc chắn dàn nhân vật
                      của <strong>Genshin Impact</strong> đã đủ làm cộng đồng
                      game thủ vô cùng say đắm, tuy nhiên đã bao giờ game thủ
                      tưởng tượng rằng, hình ảnh ngoài đời thật của các nhân vật
                      trong Genshin Impact sẽ như thế nào chưa. Cụ thể, một game
                      thủ trong group Genshin Impact Việt Nam Official mới đây
                      đã chia sẻ hình ảnh ngoài đời thật về các nhân vật trong
                      Genshin Impact được lấy từ trang web hình ảnh khuôn mặt
                      nghệ thuật ArtBreeder. Cho chúng ta cái nhìn về phiên bản
                      ngoài đợi thật của các nhân vật trong Genshin Impact.
                    </p>
                    <p>Mời bạn đọc cùng chiêm ngưỡng:</p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299772701609973263.jpg"
                      alt="1, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299791051884299001.jpg"
                      alt="2, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-2-1629729979128458158456.jpg"
                      alt="3, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-3-16297299793631499191861.jpg"
                      alt="4, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-4-16297299795541670409843.jpg"
                      alt="5, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-5-1629729979147197421235.jpg"
                      alt="6, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-6-16297299804501172187186.jpg"
                      alt="7, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-7-16297299795711308895670.jpg"
                      alt="8, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-8-16297299792471413590094.jpg"
                      alt="9, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-9-16297299820151686751373.jpg"
                      alt="10, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-10-16297299793451782084751.jpg"
                      alt="11, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-11-16297299819211955855975.jpg"
                      alt="12, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-12-1629729981080271710049.jpg"
                      alt="13, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-13-16297299806751041863639.jpg"
                      alt="14, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-14-1629729980056652468894.jpg"
                      alt="15, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-15-1629729981929134260674.jpg"
                      alt="16, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-16-1629729981095992383139.jpg"
                      alt="17, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-17-16297299811611206555952.jpg"
                      alt="18, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-18-1629729980718525508792.jpg"
                      alt="19, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-19-1629729979394217077723.jpg"
                      alt="20, GENSHIN IMPACT,NHÀ PHÁT TRIỂN,KHO ỨNG DỤNG,TẠO HÌNH NHÂN VẬT,"
                      note=""
                    />
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

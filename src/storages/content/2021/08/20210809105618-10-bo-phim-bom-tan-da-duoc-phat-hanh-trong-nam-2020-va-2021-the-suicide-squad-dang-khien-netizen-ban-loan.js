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
"timestamp": '09/08/2021 10:56 AM',
"title": '10 bộ phim bom tấn đã được phát hành trong năm 2020 và 2021, The Suicide Squad đang khiến netizen "bấn loạn"',
"description": 'Mặc dù được phát hành trong tình hình đại dịch căng thẳng, những bộ phim này vẫn gặt hái được thành công nhất định.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-1628477882307314683247.jpg',
"alt": 'BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,',
"category": 'news',
"date": '09/08/2021',
"time": '10:56 AM',
"link": '/10-bo-phim-bom-tan-da-duoc-phat-hanh-trong-nam-2020-va-2021-the-suicide-squad-dang-khien-netizen-ban-loan',
"zcomponent": 'page_20210809105618',
"filepath": './20210809105618-10-bo-phim-bom-tan-da-duoc-phat-hanh-trong-nam-2020-va-2021-the-suicide-squad-dang-khien-netizen-ban-loan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  '10 bộ phim bom tấn đã được phát hành trong năm 2020 và 2021, The Suicide Squad đang khiến netizen "bấn loạn"';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "09/08/2021 10:56 AM";
const description =
  "Mặc dù được phát hành trong tình hình đại dịch căng thẳng, những bộ phim này vẫn gặt hái được thành công nhất định.";
const link =
  "10-bo-phim-bom-tan-da-duoc-phat-hanh-trong-nam-2020-va-2021-the-suicide-squad-dang-khien-netizen-ban-loan";
const tagparam = [
  "BAD BOYS FOR LIFE",
  "PHIM CHIẾU RẠP",
  "PHIM ĐIỆN ẢNH",
  "PHIM BOM TẤN 2021",
  "TOP PHIM",
  "BIRDS OF PREY",
  "THE SUICIDE SQUAD",
  "FAST 9",
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

export default function page_20210809105618() {
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
                      Năm 2020, nhiều bộ <strong>phim điện ảnh</strong> đã bị
                      hoãn chiếu do tình hình đại dịch COVID-19 xảy ra trên khắp
                      thế giới. Tuy nhiên, có một số bộ phim đã được ra mắt vào
                      cuối năm 2020 và năm 2021. Bên cạnh sự thành công của một
                      số cái tên, cũng có những bộ phim không đạt được doanh thu
                      như kỳ vọng.
                    </p>
                    <p>
                      Và bây giờ, hãy cùng điểm qua những bom tấn điện ảnh nào
                      đã được phát hành vào năm 2020 và 2021 cho đến nay nhé!
                    </p>
                    <h5>1. Bad Boys for Life</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-1628477879467650129880.jpg"
                      alt="1, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Kể từ phần II công chiếu vào năm 2003, loạt phim Bad Boys
                      đã lỡ hẹn với người hâm mộ trung thành ngót nghét 17 năm.
                      Mãi đến 2020, thương hiệu phim hành động hài ăn khách ấy
                      mới chịu tái xuất đường đua phòng vé qua phần III mang tên{" "}
                      <strong>Bad Boys For Life</strong> (Những gã trai hư trọn
                      đời). Bad Boys for Life là một trong hai bộ phim thuộc
                      danh sách này được phát sóng trước khi đại dịch COVID-19
                      "bùng bổ" trên toàn cầu.{" "}
                    </p>
                    <h5>2. Birds of Prey</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-1628477882307314683247.jpg"
                      alt="2, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Sau thành công bất ngờ của Suicide Squad (2016), DC Comics
                      quyết định thực hiện phần phim ăn theo về nhóm "nữ quái"{" "}
                      <strong>Birds of Prey</strong>. Tuy nhiên, những lùm xùm
                      hậu trường cùng thất bại của Justice League (2017) khiến
                      thông tin về dự án gần như bị đình trệ. Nhưng cuối cùng,
                      Harley Quinn và "hội chị em" đã chính thức ra rạp trong
                      năm 2020. Birds of Prey cũng là một bộ phim của DC được
                      phát sóng trước đại dịch, lấy bối cảnh ngay sau Suicide
                      Squad.
                    </p>
                    <h5>3. Mulan</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-2-1628477883817870184984.png"
                      alt="3, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Mulan (tựa Việt: Hoa Mộc Lan) là live action chuyển thể từ
                      bộ phim hoạt hình cùng tên được phát sóng trong tình hình
                      đại dịch nên sẽ bỏ qua giai đoạn phát hành tại rạp để trực
                      tiếp lên sóng trên Disney+ theo hình thức chiếu thu phí
                      sau nhiều lần dời lịch công chiếu. Ở những quốc gia không
                      có nền tảng này, bộ phim vẫn phải chờ ngày ra rạp.
                    </p>
                    <h5>4. Wonder Woman 1984</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-3-1628477884345979513688.jpg"
                      alt="4, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Sau thời gian dài các rạp chiếu phim phải đóng cửa do tình
                      hình dịch bệnh, cuối năm 2020, một số rạp chiếu phim ở một
                      số quốc gia đã bắt đầu mở cửa trở lại và Wonder Woman 1984
                      cũng được phát sóng cùng lúc trên HBO Max.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>5. Godzilla vs Kong</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-4-162847788330487271081.jpg"
                      alt="5, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Godzilla vs Kong là một trong những bom tấn được chờ đợi
                      nhất trong năm 2021, Ra mắt hồi tháng Ba, bộ phim đã công
                      phá màn ảnh rộng và gặt hái được nhiều thành công vang dội
                      giữa thị trường phim đang ảm đạm vì đại dịch.
                    </p>
                    <h5>6. Raya and the Last Dragon</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-5-1628477882803354713900.jpg"
                      alt="6, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />

                    <p>
                      Trong những năm trở lại đây, Disney tập trung phần lớn
                      thời gian để phát triển loạt các phiên bản người đóng
                      (live-action) cho các tác phẩm hoạt hình kinh điển của
                      hãng. Nhưng thật may mắn, vào đầu năm 2021, 5 năm kể từ
                      thời điểm Moana ra mắt, Disney cuối cùng cũng trình làng
                      bộ phim hoạt hình gốc mới mang tên Raya and the Last
                      Dragon (tựa Việt: Raya Và Rồng Thần Cuối Cùng)
                    </p>
                    <h5>7. A Quiet Place 2</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-6-16284778824011589029937.jpg"
                      alt="7, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Trong năm 2021, khi bộ phim kinh dị A Quiet Place 2 được
                      công chiếu, nó đã xô đổ hàng loạt kỷ lục phòng vé, trở
                      thành tác phẩm ăn khách nhất ở Hollywood từ khi đại dịch
                      bắt đầu.
                    </p>
                    <h5>8. Black Widow</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-7-16284778828192084627237.png"
                      alt="8, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Trong năm 2021, Black Widow là bộ phim đầu tiên của Marvel
                      Studios phát hành ở ngoài màn ảnh rộng sau gần hai năm
                      vắng bóng. Black Widow cũng vinh dự trở thành bộ phim đầu
                      tiên của nhà Chuột được công bố doanh thu từ Disney+.
                    </p>
                    <h5>9. Fast 9</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-8-16284778833371175237646.jpg"
                      alt="9, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Không có nhiều tác phẩm điện ảnh có thể duy trì chuỗi
                      thành công liên tục sau nhiều phần khác nhau, và Fast &
                      Furious là một trong số những cái tên ít ỏi đó. Sau 16
                      năm, thương hiệu Fast & Furious đã trở thành một gã khổng
                      lồ đầy uy lực. Và trong năm nay, Fast & Furious 9 đã trở
                      lại, đây vẫn sẽ là một bom tấn giải trí đúng nghĩa mà các
                      fan chờ đợi.
                    </p>
                    <h5>10. The Suicide Squad</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-9-1628477882422939374975.jpg"
                      alt="10, BAD BOYS FOR LIFE,PHIM CHIẾU RẠP,PHIM ĐIỆN ẢNH,PHIM BOM TẤN 2021,TOP PHIM,BIRDS OF PREY,THE SUICIDE SQUAD,FAST 9,"
                      note=""
                    />
                    <p>
                      Mới đây, sau nhiều ngày khiến khán giả khắp thế giới phải
                      chờ đợi, cuối cùng thì bom tấn{" "}
                      <strong>The Suicide Squad</strong> cũng đã được ra mắt.
                      Mặc dù rạp chiếu tại Việt Nam chưa mở, khá nhiều khán giả
                      vẫn có cơ hội thưởng thức bộ phim thông qua nền tảng trực
                      tuyến HBO Max. The Suicide Squad có thể được coi là phiên
                      bản "reboot nhẹ" của bom tấn Suicide Squad năm 2016. Đúng
                      như kỳ vọng của khán giả, The Suicide Squad được đánh giá
                      là một trong những bom tấn xuất sắc hàng đầu của DC.
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

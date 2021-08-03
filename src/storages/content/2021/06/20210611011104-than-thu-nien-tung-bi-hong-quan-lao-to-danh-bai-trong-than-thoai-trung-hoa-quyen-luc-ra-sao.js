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
"timestamp": '11/06/2021 01:11 AM',
"title": 'Thần thú Niên từng bị Hồng Quân Lão Tổ đánh bại trong thần thoại Trung Hoa quyền lực ra sao?',
"description": 'Theo truyền thuyết Trung Hoa, Niên đã bị Hồng Quân Lão Tổ đánh bại và chấp nhận trở thành vật cưỡi của ông.',
"src": '',
"alt": 'Kham Pha, Than Thoai, Van Hoa, Nien, Truyen Thuyet Dan Gian, ',
"category": 'news',
"date": '11/06/2021',
"time": '01:11 AM',
"link": '/than-thu-nien-tung-bi-hong-quan-lao-to-danh-bai-trong-than-thoai-trung-hoa-quyen-luc-ra-sao',
"zcomponent": 'page_20210611011104',
"filepath": './20210611011104-than-thu-nien-tung-bi-hong-quan-lao-to-danh-bai-trong-than-thoai-trung-hoa-quyen-luc-ra-sao.js'
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
  "Thần thú Niên từng bị Hồng Quân Lão Tổ đánh bại trong thần thoại Trung Hoa quyền lực ra sao?";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "11/06/2021 01:11 AM";
const description =
  "Theo truyền thuyết Trung Hoa, Niên đã bị Hồng Quân Lão Tổ đánh bại và chấp nhận trở thành vật cưỡi của ông.";
const link =
  "than-thu-nien-tung-bi-hong-quan-lao-to-danh-bai-trong-than-thoai-trung-hoa-quyen-luc-ra-sao";
const tagparam = [
  "kham-pha",
  "than-thoai",
  "van-hoa",
  "nien",
  "truyen-thuyet-dan-gian",
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

export default function page_20210611011104() {
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
                      Nếu như ngày tết của người Việt Nam gắn liền với thời điểm
                      gieo trồng, canh tác nông nghiệp thì tết Nguyên Đán của
                      người Hoa lại liên quan đến một truyền thuyết xa xưa về
                      thần thú có tên Niên. Thần thú này có sức mạnh phi thường,
                      xong ưa tìm về các ngôi làng để phá phách, quấy nhiễu
                      người dân.
                    </p>
                    <h4>Thần thoại về Niên</h4>
                    <p>
                      Theo các câu chuyện và truyền thuyết, tết Nguyên Đán của
                      người Hoa bắt đầu khi cuộc chiến giữa thần thú{" "}
                      <strong>Nien</strong> và Hồng Quân Lão Tổ diễn ra. Niên
                      được miêu tả là sinh vật có thần hình bò được và đầu là
                      đầu sư tử. Niên rất hung dữ, nó sống trên núi và thường
                      kiếm ăn bằng cách đi săn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/11/thelegendarynian0-16233835237231846806261.jpg"
                      alt="Kham Pha, Than Thoai, Van Hoa, Nien, Truyen Thuyet Dan Gian, "
                      note="Niên được miêu tả là loài có mình trâu, đầu sư tử, tính khí hung hãn thường đến quấy rầy người dân vào thời điểm cuối mùa đông để kiếm ăn"
                    />
                    <p>
                      Vào cuối đông đầu xuân, khi không còn gì để ăn, Niên sẽ
                      đến các ngôi làng để ăn gia súc, hoa màu, thậm chí cả con
                      người, nhất là trẻ em. Vì vậy, để tự bảo vệ bản thân, hằng
                      năm vào những ngày đầu tiên của năm mới, người dân sẽ đặt
                      thức ăn ở ngoài cửa. Quan niệm dân gian cho rằng sau khi
                      ăn số thức ăn mà họ đã chuẩn bị thì Niên sẽ không phá
                      phách nữa.
                    </p>
                    <p>
                      Dù Niên là loài hung hãn, nhưng nó sợ ba thứ: màu đỏ, lửa
                      và tiếng ồn. Do đó, mỗi khi năm mới về, dân làng sẽ treo
                      đèn lồng đỏ cũng những bức tranh tết màu đỏ lên cửa sổ và
                      cửa ra vào. Họ còn đốt pháo, tạo tiếng nổ lớn để Niên sợ.
                      Kể từ đó Niên không bao giờ tìm đến làng nữa. Truyền
                      thuyết còn kể rằng cuối cùng Niên bị Hồng Quân Lão Tổ thu
                      phục và trở thành vật cưỡi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/11/12661344822231266134482223r-1623383677667940933642.jpg"
                      alt="Kham Pha, Than Thoai, Van Hoa, Nien, Truyen Thuyet Dan Gian, "
                      note="Sau này Niên đã bị Hồng Quân Lão Tổ thu phục và trở thành vật cưỡi của ông"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi Niên bị thu phục, dân chúng mở tiệc lớn ăn mừng và
                      nghi lễ trục xuất Niên vẫn được các thế hệ sau thực hiện,
                      rồi dần trở thành phong tục đón năm mới của người Hoa.
                    </p>
                    <h4>Niên trong văn hóa hiện đại</h4>
                    <p>
                      Đối với người Hoa, có rất nhiều phong tục bắt nguồn từ
                      huyền thoại về Niên. Điển hình có thể kể đến là nghệ thuật
                      cắt giấy với những chủ đề may mắn, hạnh phúc, giàu có và
                      trường thọ. Giấy được dùng thường là giấy đỏ và sau khi
                      cắt xong sản phẩm sẽ được dán lên cửa sổ hoặc cửa ra vào.
                      Màu đỏ cũng trở thành màu chủ đạo trong dịp năm mới, tượng
                      trưng cho niềm vui, sự chân thành, nhiệt huyết. Trên sân
                      khấu kinh kịch, nhân vật vẽ mặt đỏ thường là nhân vật có
                      tính linh thiêng, trung thành hoặc thậm chí là một vị
                      hoàng đế nào đó. Vào năm mới, người ta cũng sẽ tặng quà và
                      lì xì cho bạn bè, người thân… bằng bao lì xì đỏ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/14b8ba1d281e46db9e3f7f81cut800x50010-1623383805142326002142.jpg"
                      alt="Kham Pha, Than Thoai, Van Hoa, Nien, Truyen Thuyet Dan Gian, "
                      note="Để đuổi Niên, người ta thường dán giấy đỏ, đốt nhiều pháo để tạo tiếng ồn đuổi Niên đi."
                    />
                    <p>
                      Ngoài việc sử dụng các loại giấy màu đỏ và treo đèn lồng
                      để trang trí nhà cửa vào ngày tết, người Hoa còn giữ phong
                      tục đốt pháo hoa, đốt thanh tre… miễn sao tạo ra được
                      nhiều tiếng ồn và lửa để đuổi Niên.
                    </p>
                    <p>
                      Theo thời gian và sự giao thoa văn hóa, các phong tục đón
                      năm mới của người Hoa dần được lan truyền đến một số nước
                      trong khu vực, trong đó có cả Việt Nam.
                    </p>
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

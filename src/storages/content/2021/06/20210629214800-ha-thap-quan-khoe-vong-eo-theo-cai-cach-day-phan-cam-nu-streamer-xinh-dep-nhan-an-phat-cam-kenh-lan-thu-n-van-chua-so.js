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
"timestamp": '29/06/2021 09:48 PM',
"title": 'Hạ thấp quần, khoe vòng eo theo cái cách đầy phản cảm, nữ streamer xinh đẹp nhận án phạt cấm kênh lần thứ n vẫn chưa sợ',
"description": 'Hành động của cô nàng streamer đang làm dấy lên làn sóng lo ngại trước thực trạng ngày càng táo bạo của các kênh phát sóng ngày nay.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214800--16-190302.gif',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '29/06/2021',
"time": '09:48 PM',
"link": '/ha-thap-quan-khoe-vong-eo-theo-cai-cach-day-phan-cam-nu-streamer-xinh-dep-nhan-an-phat-cam-kenh-lan-thu-n-van-chua-so',
"zcomponent": 'page_20210629214800',
"filepath": './20210629214800-ha-thap-quan-khoe-vong-eo-theo-cai-cach-day-phan-cam-nu-streamer-xinh-dep-nhan-an-phat-cam-kenh-lan-thu-n-van-chua-so.js'
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
  "Hạ thấp quần, khoe vòng eo theo cái cách đầy phản cảm, nữ streamer xinh đẹp nhận án phạt cấm kênh lần thứ n vẫn chưa sợ";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:48 PM";
const description =
  "Hành động của cô nàng streamer đang làm dấy lên làn sóng lo ngại trước thực trạng ngày càng táo bạo của các kênh phát sóng ngày nay.";
const link =
  "ha-thap-quan-khoe-vong-eo-theo-cai-cach-day-phan-cam-nu-streamer-xinh-dep-nhan-an-phat-cam-kenh-lan-thu-n-van-chua-so";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "PADAK",
  "STREAMER",
  "NỮ STREAMER",
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

export default function page_20210629214800() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Càng ngày, YouTuber cũng như nhiều nền tảng livestream khác
                    ngày càng biến tướng với vô số những nội dung thiếu đi sự
                    kiểm soát về mặt chất lượng. Và một trong những dạng clip
                    đang ngày càng trở nên phổ biến ở thời điểm hiện tại chính
                    là những màn chiêu trò, khoe thân của không ít các cô nàng{" "}
                    <strong>streamer</strong>, YouTuber nóng bỏng. Nội dung đôi
                    khi rất nhạt nhẽo, đơn thuần là lên sóng chém gió, hay thực
                    hiện một công việc bình thường nào đó nhưng với điểm nhấn về
                    trang phục, động tác, những nữ YouTuber, streamer này vẫn
                    hút cả triệu lượt theo dõi. Điển hình như trường hợp của cô
                    nàng <strong>Padak</strong> dưới đây.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--10-421596.gif")
                        .default
                    }
                    alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="Padak - cô nàng streamer trong câu chuyện"
                  />
                  <p>
                    Nổi bật với vẻ ngoài gợi cảm cùng phong cách phát sóng táo
                    bạo không lẫn đi đâu được của mình, cô nàng{" "}
                    <strong>streamer</strong> xinh đẹp này thường xuyên mang tới
                    cho người xem những màn biểu diễn cực kỳ nóng bỏng. Thậm
                    chí, ngay cả khi AfreecaTV - nền tảng mà{" "}
                    <strong>Padak</strong> lựa chọn phát sóng có những động thái
                    cảnh cáo, đôi khi là "dằn mặt" thì điều này cũng chẳng thể
                    làm cô nàng nao núng. Bị cấm kênh không ít lần, thế nhưng
                    mỗi khi trở lại, Padak lại càng "lợi hại hơn xưa" và luôn
                    không ngại phô diễn những đường cong trên cơ thể của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--11-379274.png")
                        .default
                    }
                    alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="Cô nàng từng phải nhận không ít những án phạt cấm kênh"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--12-751430.jpg")
                        .default
                    }
                    alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="Nhưng đối với Padak, chúng dường như trở nên vô dụng"
                  />
                  <p>
                    Cụ thể, trong phiên livestream mới đây, cô nàng lại tiếp tục
                    có một chuỗi những hành động đầy gợi cảm, đôi khi là phản
                    cảm và thêm một lần nữa đối diện với viễn cảnh tiếp tục bị
                    cấm sóng của mình. Theo đó, lên sóng với bộ trang phục đã
                    nóng bỏng, cắt trên hở dưới thì chớ, cô nàng lại tiếp tục có
                    màn đưa tay kéo thấp quần xuống một cách rất khêu gợi để
                    khoe vòng eo nóng bỏng của mình. Khoảnh khắc "ấn tượng" ấy
                    của <strong>Padak</strong> nhanh chóng được các fan chụp
                    lại, đồng thời gây ra rất nhiều những bình luận tiêu cực.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--13-136272.gif")
                        .default
                    }
                    alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="Hình ảnh trên sóng của Padak đang gây ra tranh cãi"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--14-674099.jpg")
                        .default
                    }
                    alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="Khoảnh khắc cực kỳ gợi cảm mới đây trên sóng livestream của cô nàng Padak"
                  />
                  <p>
                    Cụ thể, có lẽ chỉ một bộ phận nhỏ fan trung thành của cô
                    nàng <strong>streamer</strong> là cảm thấy bình thường, còn
                    phần đồng đều tỏ ra khá khó chịu trước hành động nhạy cảm
                    quá đà này của <strong>Padak</strong>. Một số thậm chí còn
                    không ngần ngại bày tỏ ý kiến cho rằng sẽ report lên nền
                    tảng để có những án phạt dành cho{" "}
                    <strong>nữ streamer</strong> này. Tuy nhiên, liệu có hiệu
                    quả không thì còn là chuyện của tương lai, khi nên nhớ, số
                    lần bị cấm kênh của Padak có lẽ đã chẳng ai còn đếm nổi. Bản
                    thân AfreecaTV cũng đang khá đau đầu sau khi bị cô nàng
                    "outplay" với phát ngôn: "Không mặc nội y thì không lo bị
                    lộ, và cũng không có án phạt".
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--15-019435.gif")
                        .default
                    }
                    alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note="AfreecaTV cấm các nữ streamer để lộ nội y, Padak outplay luôn bằng cách không bao giờ mặc khi lên sóng"
                  />
                  <p>
                    Thậm chí cô nàng còn "bày trò" lách luật cho nhiều nữ đồng
                    nghiệp khác
                  </p>
                  <p>
                    Có lẽ, trừ khi AfreecaTV chấp nhận để mất nữ{" "}
                    <strong>streamer</strong> này mà cấm kênh vĩnh viễn. Còn
                    không, những câu chuyện tương tự như vậy rồi vẫn sẽ diễn ra
                    tiếp trong tương lai mà thôi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214800--16-190302.gif")
                        .default
                    }
                    alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,PADAK,STREAMER,NỮ STREAMER,"
                    note=""
                  />
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

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
"timestamp": '02/08/2021 01:21 AM',
"title": 'Thả rông vòng một rồi bôi dầu bóng loáng khi lên sóng, nữ streamer khiến người xem sốc nặng khi cố tình hớ hênh "điểm nhạy cảm"',
"description": 'Số lượng án phạt cấm kênh mà cô nàng streamer này phải nhận chắc cũng chẳng thể đếm nổi nữa rồi.',
"src": '',
"alt": 'thả rông vòng một,điểm nhạy cảm,ứng cử viên,đồng nghiệp nam,phòng khách sạn,áo hai dây,Khoe thân phản cảm,streamer,',
"category": 'images',
"date": '02/08/2021',
"time": '01:21 AM',
"link": '/tha-rong-vong-mot-roi-boi-dau-bong-loang-khi-len-song-nu-streamer-khien-nguoi-xem-soc-nang-khi-co-tinh-ho-henh-diem-nhay-cam',
"zcomponent": 'page_20210802012128',
"filepath": './20210802012128-tha-rong-vong-mot-roi-boi-dau-bong-loang-khi-len-song-nu-streamer-khien-nguoi-xem-soc-nang-khi-co-tinh-ho-henh-diem-nhay-cam.js'
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
  'Thả rông vòng một rồi bôi dầu bóng loáng khi lên sóng, nữ streamer khiến người xem sốc nặng khi cố tình hớ hênh "điểm nhạy cảm"';
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "02/08/2021 01:21 AM";
const description =
  "Số lượng án phạt cấm kênh mà cô nàng streamer này phải nhận chắc cũng chẳng thể đếm nổi nữa rồi.";
const link =
  "tha-rong-vong-mot-roi-boi-dau-bong-loang-khi-len-song-nu-streamer-khien-nguoi-xem-soc-nang-khi-co-tinh-ho-henh-diem-nhay-cam";
const tagparam = [
  "thả rông vòng một",
  "điểm nhạy cảm",
  "ứng cử viên",
  "đồng nghiệp nam",
  "phòng khách sạn",
  "áo hai dây",
  "Khoe thân phản cảm",
  "streamer",
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

export default function page_20210802012128() {
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
                      Nếu để nói về một trong những nữ <strong>streamer</strong>{" "}
                      gây ra nhiều tai tiếng nhất tại Hàn Quốc, cái tên Dahee
                      dường như sẽ là một trong những{" "}
                      <strong>ứng cử viên</strong> sáng giá được nhiều netizen
                      của xứ sở nhân sâm nghĩ tới nhất.
                    </p>

                    <p>
                      Không ai có thể phủ nhận rằng cô nàng này cũng rất xinh
                      đẹp, gợi cảm và thậm chí là cả thông minh nữa. Thế nhưng,
                      thay vì tập trung vào những nội dung bình thường và phát
                      triển kênh, Dahee lại tận dụng trí óc của mình để tạo ra
                      vô số những chiêu trò, gợi cảm có mà phản cảm cũng không
                      thiếu.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/photo-1-1627876511023130087944.jpg"
                      alt="1, thả rông vòng một,điểm nhạy cảm,ứng cử viên,đồng nghiệp nam,phòng khách sạn,áo hai dây,Khoe thân phản cảm,streamer,"
                      note="Dahee - cô nàng streamer xinh đẹp luôn dính vào những lùm xùm phản cảm"
                    />
                    <p>
                      Lần này cũng không phải ngoại lệ, trong suốt những buổi
                      livestream gần đây, Dahee luôn khiến người xem phải bất
                      ngờ khi thường xuyên "gạ gẫm", rủ rê một cách rất mạnh dạn
                      những người <strong>đồng nghiệp nam</strong> khác tiến
                      hành lên sóng chung với mình.
                    </p>

                    <p>
                      Câu chuyện nghe qua thì có vẻ đơn giản đúng không, thế
                      nhưng, như Dahee thừa nhận, bối cảnh mà cô nàng lựa chọn
                      sẽ là một <strong>phòng khách sạn</strong> hoặc nhà nghỉ
                      nào đó - nội dung mà Dahee luôn muốn được làm một lần.
                    </p>

                    <p>
                      Tất nhiên, sẽ chẳng có mấy người đồng ý với phương án này
                      dẫu cho Dahee luôn được coi là một trong những{" "}
                      <strong>streamer</strong> gợi cảm bậc nhất trên AfreecaTV.
                      Dẫu cho không có ai đồng ý, dường như nữ streamer này cũng
                      không nản lòng mà thay đổi ý định thì phải.
                    </p>

                    <p>
                      Thậm chí, cô nàng còn khiến cho fan phải một phen choáng
                      váng hơn nữa, khi tự bôi dầu bóng loáng lên khắp cơ thể
                      của mình, xuất hiện trong trang phục nhìn rõ là{" "}
                      <strong>thả rông vòng một</strong>. Nói một cách khác,
                      Dahee mang tới một nội dung mà theo nhiều người, nó xứng
                      đáng được liệt vào danh sách 18+.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Nữ <strong>streamer</strong> bôi dầu bóng loáng lên cơ thể
                      trong lần xuất hiện mới nhất
                    </p>
                    <p>
                      Đáng nói hơn, trong phiên phát sóng, không ít fan tinh mắt
                      còn ghi lại được một khoảnh khắc mà ở đó, cô nàng{" "}
                      <strong>streamer</strong> xinh đẹp dường như đang quá hớ
                      hênh vòng một của mình do chiếc{" "}
                      <strong>áo hai dây</strong> có phần tụt quá sâu rồi, qua
                      đó để lộ ra phần rất nhạy cảm.
                    </p>

                    <p>
                      Đây cũng không phải lần đầu tiên cô nàng vướng vào những
                      rắc rối tương tự
                    </p>
                    <p>
                      Trên thực tế, đây cũng không phải là lần đầu tiên mà cô
                      nàng <strong>streamer</strong> này có những màn{" "}
                      <strong>khoe thân phản cảm</strong> như vậy. Thậm chí, có
                      lẽ cũng chẳng ai có thể đếm hết được số án phạt cấm kênh
                      mà Dahee từng phải nhận kể từ khi debut làm công việc
                      streamer tới giờ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/photo-1-1627876511023130087944.jpg"
                      alt="2, thả rông vòng một,điểm nhạy cảm,ứng cử viên,đồng nghiệp nam,phòng khách sạn,áo hai dây,Khoe thân phản cảm,streamer,"
                      note="Cô nàng gần đây thường nửa đùa nửa thật khi mời những người đồng nghiệp nam lên sóng chung ở phòng khách sạn"
                    />
                    <p>
                      Thế nhưng, dường như án phạt và sự chỉ trích càng là động
                      lực để cô nàng phát triển thì phải khi tới giờ phút này,
                      Dahee đã được nhìn nhận như một trong những nữ{" "}
                      <strong>streamer</strong> có tiếng nhất trên AfreecaTV
                      không ai không biết.
                    </p>

                    <p>Những ồn ào của Dahee diễn ra như cơm bữa</p>
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

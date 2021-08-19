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
"timestamp": '15/08/2021 04:06 PM',
"title": '5 năm chỉ chơi 1 tướng, Girl 1 Champ Hoàng Yến Chibi đập tan lời đồn ác ý khi khoe trọn cơ thể cực kỳ sexy',
"description": 'Mới đây, Hoàng Yến Chibi lại khiến cho tất cả phải ngỡ ngàng khi khoe trọn cơ thể vô cùng gợi cảm của mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290271793201232598381.jpg',
"alt": 'LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,',
"category": 'stars',
"date": '15/08/2021',
"time": '04:06 PM',
"link": '/5-nam-chi-choi-1-tuong-girl-1-champ-hoang-yen-chibi-dap-tan-loi-don-ac-y-khi-khoe-100-co-the-cuc-ky-sexy',
"zcomponent": 'page_20210815160619',
"filepath": './20210815160619-5-nam-chi-choi-1-tuong-girl-1-champ-hoang-yen-chibi-dap-tan-loi-don-ac-y-khi-khoe-100-co-the-cuc-ky-sexy.js'
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
  "5 năm chỉ chơi 1 tướng, Girl 1 Champ Hoàng Yến Chibi đập tan lời đồn ác ý khi khoe trọn cơ thể cực kỳ sexy";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "15/08/2021 04:06 PM";
const description =
  "Mới đây, Hoàng Yến Chibi lại khiến cho tất cả phải ngỡ ngàng khi khoe trọn cơ thể vô cùng gợi cảm của mình.";
const link =
  "5-nam-chi-choi-1-tuong-girl-1-champ-hoang-yen-chibi-dap-tan-loi-don-ac-y-khi-khoe-100-co-the-cuc-ky-sexy";
const tagparam = [
  "LIÊN QUÂN MOBILE",
  "LIÊN QUÂN",
  "CỘNG ĐỒNG LIÊN QUÂN MOBILE",
  "HOÀNG YẾN CHIBI",
  "HOÀNG YẾN",
  "GIRL 1 CHAMP",
  "GAME THỦ",
  "GÁI XINH",
  "SEXY",
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

export default function page_20210815160619() {
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
                      Vốn nổi tiếng là một trong những nữ ca sĩ –{" "}
                      <strong>game thủ</strong> <strong>Liên Quân</strong> nổi
                      tiếng,{" "}
                      <strong>
                        <strong>Hoàng Yến</strong> Chibi
                      </strong>{" "}
                      được mệnh danh là “<strong>girl 1 champ</strong>” khi
                      trong suốt 5 năm vừa qua, vị tướng mà nữ ca sĩ này chơi
                      nhiều nhất là Điêu Thuyền. Còn nhớ vào tháng 9/2020, Hoàng
                      Yến đã từng khoe chỉ số thông thạo cũng như số trận chơi
                      Điêu Thuyền của mình trong Liên Quân lên tới gần 2.000 với
                      tỉ lệ thắng đạt hơn 50%.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-16290271793201232598381.jpg"
                      alt="1, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <p>
                      Cụ thể, với tổng số trận tính đến tháng 9/2020 là 1822 và
                      tỉ lệ thắng 51.7%, con số này chắc chắn đã tăng lên ở thời
                      điểm hiện tại, chứng minh kinh nghiệm chơi game của{" "}
                      <strong>
                        <strong>Hoàng Yến</strong> Chibi
                      </strong>{" "}
                      là “cũng kinh đấy”.
                    </p>
                    <p></p>
                    <p>
                      Không chỉ có thế,{" "}
                      <strong>
                        <strong>Hoàng Yến</strong> Chibi
                      </strong>{" "}
                      còn liên tục rủ fan của mình chơi{" "}
                      <strong>Liên Quân</strong> cùng mỗi khi có cơ hội và được
                      xem là một trong số những người nổi tiếng rất gần gũi với
                      người hâm mộ và <strong>game thủ</strong> Liên Quân. Vừa
                      qua, trong những ngày giãn cách xã hội, nữ ca sĩ đã làm
                      một bộ ảnh du lịch vòng quanh thế giới… tại nhà.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p>
                      Đáng chú ý,{" "}
                      <strong>
                        <strong>Hoàng Yến</strong> Chibi
                      </strong>{" "}
                      đã khoe trọn vẹn ba vòng của mình để thấy rằng cô nàng
                      cũng sở hữu những đường cong không thua kém gì ai. Nữ ca
                      sĩ đã gián tiếp khẳng định rằng, mình cũng có “tâm hồn”
                      tròn đầy chứ không hề màn hình phẳng như những lời đồn
                      đoán ác ý về ngoại hình của mình.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-1629027360615724723297.jpg"
                      alt="2, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-1629027370380933504855.jpg"
                      alt="3, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-162902737862264458938.jpg"
                      alt="4, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-1629027391587480018642.jpg"
                      alt="5, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-16290274029411502766166.jpg"
                      alt="6, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-16290274081931235526839.jpg"
                      alt="7, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-1629027412651560766043.jpg"
                      alt="8, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/15/photo-1-1629027420690429516630.jpg"
                      alt="9, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,HOÀNG YẾN CHIBI,HOÀNG YẾN,GIRL 1 CHAMP,GAME THỦ,GÁI XINH,SEXY,"
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

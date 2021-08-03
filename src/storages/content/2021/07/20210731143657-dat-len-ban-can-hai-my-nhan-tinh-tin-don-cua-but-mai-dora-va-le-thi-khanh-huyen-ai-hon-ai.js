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
"timestamp": '31/07/2021 02:36 PM',
"title": 'Đặt lên bàn cân hai mỹ nhân "tình tin đồn" của Bụt: Mai Dora và Lê Thị Khánh Huyền, ai hơn ai?',
"description": '"Mai Dora và Lê Thị Khánh Huyền cùng đặt lên bàn cân, ai hơn ai?" đang là câu hỏi được rất nhiều fan thắc mắc.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/220150bl2-16277347799851740530346.jpg',
"alt": 'người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,',
"category": 'images',
"date": '31/07/2021',
"time": '02:36 PM',
"link": '/dat-len-ban-can-hai-my-nhan-tinh-tin-don-cua-but-mai-dora-va-le-thi-khanh-huyen-ai-hon-ai',
"zcomponent": 'page_20210731143657',
"filepath": './20210731143657-dat-len-ban-can-hai-my-nhan-tinh-tin-don-cua-but-mai-dora-va-le-thi-khanh-huyen-ai-hon-ai.js'
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
  'Đặt lên bàn cân hai mỹ nhân "tình tin đồn" của Bụt: Mai Dora và Lê Thị Khánh Huyền, ai hơn ai?';
const author = "NGOCLONG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "31/07/2021 02:36 PM";
const description =
  '"Mai Dora và Lê Thị Khánh Huyền cùng đặt lên bàn cân, ai hơn ai?" đang là câu hỏi được rất nhiều fan thắc mắc.';
const link =
  "dat-len-ban-can-hai-my-nhan-tinh-tin-don-cua-but-mai-dora-va-le-thi-khanh-huyen-ai-hon-ai";
const tagparam = [
  "người yêu tin đồn",
  "làng giải trí",
  "bạn trai cũ",
  "người yêu mới",
  "chuyện tình cổ tích",
  "bạn gái mới",
  "cộng đồng mạng",
  "Mai Dora",
  "streamer",
  "nữ streamer",
  "TikToker",
  "lê thị khánh huyền",
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

export default function page_20210731143657() {
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
                      Chuyện chàng Bụt - <strong>bạn trai cũ</strong> của nữ{" "}
                      <strong>streamer</strong> Linh Ngọc Đàm bất ngờ công khai{" "}
                      <strong>người yêu mới</strong> đã trở thành tâm điểm chú ý
                      trong những ngày qua. Điều khiến fan vô cùng bất ngờ không
                      chỉ bởi "<strong>chuyện tình cổ tích</strong>" chưa thành
                      với nàng "Tí Hon" mà còn vì danh tính của cô{" "}
                      <strong>bạn gái mới</strong>.
                    </p>
                    <p>
                      Trước đó, đã rất nhiều đồn đoán Bụt đang quen nữ{" "}
                      <strong>streamer</strong> <strong>Mai Dora</strong>. Điều
                      này hoàn toàn có cơ sở vì 2 người (cùng với sự trợ giúp
                      của Rambo) thường xuyên xuất hiện, cười đùa trên mạng xã
                      hội. Thế nhưng, sau story bí ẩn và đoạn status của Bụt,
                      nhiều người lại cho rằng cô gái trong ảnh chính là hot{" "}
                      <strong>TikToker</strong>{" "}
                      <strong>Lê Thị Khánh Huyền</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-1627452692015612241273-1627480636801378489715-16275449428201995112266-16277346803682055277648.jpg"
                      alt="2, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Rất nhiều người đã nghĩ rằng Bụt và{" "}
                      <strong>Mai Dora</strong> sẽ trở thành một cặp đôi mới
                    </p>
                    <p>
                      Cũng chính vì pha "tưởng chừng" nhầm lẫn này của người hâm
                      mộ mà giờ đây đã có rất nhiều các fan tự hỏi, liệu nếu
                      cùng đặt <strong>Mai Dora</strong> và{" "}
                      <strong>Lê Thị Khánh Huyền</strong> lên cùng một bàn cân,
                      ai sẽ hơn ai?
                    </p>
                    <p>
                      Dù chênh lệch nhau 9 tuổi thế nhưng cả hai cô nàng hot
                      girl đều theo đuổi phong cách quyến rũ chẳng kém cạnh ai.
                    </p>
                    <p>
                      Với <strong>Mai Dora</strong>, ngay từ những ngày đầu lên
                      sóng, cô nàng đã tận dụng rất tốt thế mạnh là thân hình
                      căng tròn, trắng nuột làm các fan chỉ muốn "xem mãi không
                      thôi". Trong những buổi livestream, Mai Dora luôn tự tin
                      diện những chiếc áo ngắn hoặc những bộ bộ đồ bó "lấp lửng"
                      để lộ ra vòng một cực quyến rũ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/1400418712110662506921594300135957357524006n-16114859913211954745195-16277347799862087845478.jpg"
                      alt="4, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m2-16277355526021552858183.jpg"
                      alt="5, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m1-1627735552567820074019.jpg"
                      alt="6, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m3-16277355526091536306777.jpg"
                      alt="7, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m4-16277355526161296002247.jpg"
                      alt="8, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m5-1627735552622594313656.jpg"
                      alt="9, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Thậm chí đến cả khi trở thành nữ MC của VCS,{" "}
                      <strong>Mai Dora</strong> cũng diện phong cách như vậy lên
                      sóng phỏng vấn làm các fan hay tuyển thủ không thể tập
                      trung vào câu hỏi.
                    </p>
                    <p>
                      Không chịu kém cạnh đàn chị,{" "}
                      <strong>Lê Thị Khánh Huyền</strong> dù chỉ mới 17 tuổi thế
                      nhưng cũng sở hữu những đường cong quyến rũ đúng chất "mặt
                      học sinh, thân hình phụ huynh". Cô nàng thường xuyên
                      "chiều lòng" người hâm mộ bằng những tấm ảnh diện bikini
                      hay bộ đồ lót ngắn lên mạng xã hội. Thậm chí, có nhiều tấm
                      ảnh Khánh Huyền còn tạo dáng "bạo" chẳng thua kém gì các
                      hot girl tiền bối.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/h7-16277356671881123804120.jpg"
                      alt="10, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/h13-16277356674552021446182.jpg"
                      alt="11, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/h2-16277356670661440679617.jpg"
                      alt="12, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Nhìn Khánh Huyền đăng ảnh đâu ai nghĩ cô nàng mới chỉ 17
                      tuổi
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Không có gì phải bàn cãi về độ nổi tiếng và sức ảnh hưởng
                      của hai cô nàng này trên mạng xã hội.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/1-1-16277362073991293738538.jpg"
                      alt="13, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Với <strong>Mai Dora</strong>, cô là một hot girl rất "đa
                      năng" khi vừa có thể theo đuổi nghiệp diễn xuất, vừa đam
                      mê với công việc dancer lại vô cùng có duyên mỗi khi lên
                      sóng livestream. Sau khi bị mất trang Facebook cũ, cô nàng
                      cũng đã dần quay trở lại với fanpage đạt hơn 160.000 lượt
                      theo dõi. Ngoài ra, cô nàng cũng sở hữu trang Instagram cá
                      nhân đạt hơn 350.000 follower và hơn 70.000 fan đăng ký
                      trên nền tảng NimoTV.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/base64-1627735982486545984678.png"
                      alt="14, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Ngoài học giỏi, <strong>Mai Dora</strong> khá đa tài
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/mai5-1627735961067705030574.jpg"
                      alt="15, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/mai3-16277359610151654270955.jpg"
                      alt="16, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Không những vậy, <strong>Mai Dora</strong> còn là gương
                      mặt quen thuộc của làng LMHT Việt Nam sau khi cô trở thành
                      MC cho giải đấu này từ đầu năm 2020. Trong mỗi trận đấu
                      đạt hàng trăm nghìn lượt xem tại VCS, Mai Dora đều góp mặt
                      và tạo ấn tượng sâu đậm cho các fan. Nhiều người còn cho
                      rằng nếu cứ đà lên sóng này, Mai Dora sẽ dần thay thế vị
                      trí "MC số một" của Minh Nghi để lại từ trước.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/mai1-16277358549911546558531.jpg"
                      alt="17, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/mai2-1627735855099799352399.jpg"
                      alt="18, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Còn với Khánh Huyền, ngay từ những ngày đầu lên sóng, hình
                      tượng cô nữ sinh ngây thơ, dễ thương đã tạo ra "cơn sốt"
                      trên khắp mạng xã hội.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/huyen1-16277366790791025020315.png"
                      alt="19, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Sức ảnh hưởng "khủng khiếp" của Khánh Huyền trên mạng xã
                      hội
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/hu2-1627736156338891492108.jpg"
                      alt="20, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Hiện tại, "hot girl 2k4" đang sở hữu kênh TikTok với gần 8
                      triệu người theo dõi, lọt vào top 10{" "}
                      <strong>TikToker</strong> nổi tiếng nhất Việt Nam, một con
                      số rất đáng ngưỡng mộ. Không những vậy, trang Instagram
                      của Khánh Huyền còn đạt hơn 2,2 triệu follower. Tất cả đều
                      đến từ công việc sản xuất nội dung trên TikTok và làm
                      người mẫu ảnh.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/hu3-1627736156343281952389.jpg"
                      alt="21, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, Khánh Huyền cũng đã từng không ít lần làm "dậy
                      sóng" <strong>cộng đồng mạng</strong>. Ngay từ khi mới nổi
                      trên mạng xã hội, cô nàng đã phải gặp không ít chỉ trích
                      vì có phát ngôn tiêu cực, thiếu văn hóa trên mạng xã hội
                      dù chỉ vừa mới nghỉ học cấp 3.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/base64-16277364417461312619564.png"
                      alt="22, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>
                      Chưa dừng lại ở đó, nữ <strong>TikToker</strong> này còn
                      khiến <strong>cộng đồng mạng</strong> "chao đảo" vì để lộ
                      ra clip nhạy cảm, quảng cáo cho trang web cờ bạc online và
                      nhiều drama đời tư... Tất cả tiếng xấu trên đã ảnh hưởng
                      ít nhiều đến hình ảnh của Khánh Huyền trong mắt người hâm
                      mộ.
                    </p>
                    <p>
                      Tổng kết, cả <strong>Mai Dora</strong> và{" "}
                      <strong>Lê Thị Khánh Huyền</strong> đều là những gương mặt
                      vô cùng nổi tiếng trên mạng xã hội. Tuy rằng không hoạt
                      động trong cùng một nhóm cộng đồng thế nhưng cả hai cô
                      nàng đều có sức ảnh hưởng rất lớn và đều "ghi điểm" trong
                      mắt người hâm mộ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/h7-16277367339871627212312.jpg"
                      alt="23, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/m3-16277367339921353449623.jpg"
                      alt="24, người yêu tin đồn,làng giải trí,bạn trai cũ,người yêu mới,chuyện tình cổ tích,bạn gái mới,cộng đồng mạng,Mai Dora,streamer,nữ streamer,TikToker,lê thị khánh huyền,"
                      note=""
                    />
                    <p>Bạn nghĩ trong hai mỹ nữ này, ai sẽ hơn ai?</p>
                    <p>Ảnh: Internet</p>
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

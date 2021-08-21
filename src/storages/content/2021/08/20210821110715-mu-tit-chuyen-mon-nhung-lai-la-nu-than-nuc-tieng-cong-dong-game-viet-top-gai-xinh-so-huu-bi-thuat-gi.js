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
"timestamp": '21/08/2021 11:07 AM',
"title": '“Mù tịt" chuyên môn nhưng lại là “nữ thần" nức tiếng cộng đồng game Việt, top gái xinh sở hữu bí thuật gì?',
"description": 'Không biết chơi game, các hot girl này vẫn chiếm trọn được tình cảm anh em game thủ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-16295469292511817028554.jpg',
"alt": 'HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,',
"category": 'images',
"date": '21/08/2021',
"time": '11:07 AM',
"link": '/mu-tit-chuyen-mon-nhung-lai-la-nu-than-nuc-tieng-cong-dong-game-viet-top-gai-xinh-so-huu-bi-thuat-gi',
"zcomponent": 'page_20210821110715',
"filepath": './20210821110715-mu-tit-chuyen-mon-nhung-lai-la-nu-than-nuc-tieng-cong-dong-game-viet-top-gai-xinh-so-huu-bi-thuat-gi.js'
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
  '“Mù tịt" chuyên môn nhưng lại là “nữ thần" nức tiếng cộng đồng game Việt, top gái xinh sở hữu bí thuật gì?';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "21/08/2021 11:07 AM";
const description =
  "Không biết chơi game, các hot girl này vẫn chiếm trọn được tình cảm anh em game thủ.";
const link =
  "mu-tit-chuyen-mon-nhung-lai-la-nu-than-nuc-tieng-cong-dong-game-viet-top-gai-xinh-so-huu-bi-thuat-gi";
const tagparam = ["HOT GIRL", "GAME", "GÁI XINH", "BÀI VIẾT ĐÁNG CHÚ Ý"];
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

export default function page_20210821110715() {
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
                    <h5>Hằng Phan</h5>
                    <p>
                      Sở hữu ngoại hình được nhận định giống đến 90% với Yena -
                      tướng nữ quyến rũ trong Liên Quân Mobile,{" "}
                      <strong>hot girl</strong> Phan Thị Minh Hằng được anh em{" "}
                      <strong>game</strong> thủ tìm liên tục kiếm nhiều trong
                      một thời gian dài. Được biết, nữ sinh trường Đại học Kinh
                      tế Quốc dân không biết gì về tựa game này và khi được bạn
                      bè tag tên vào các bài viết so sánh trên diễn đàn mạng cô
                      không khỏi bất ngờ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-1629546913186578887630.jpg"
                      alt="1, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note="Xinh đẹp, đáng yêu, cô nàng này là mẫu ảnh Hà Thành có tiếng."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-16295469292511817028554.jpg"
                      alt="2, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Sau khi nổi tiếng trong cộng đồng Liên Quân một cách quá
                      bất ngờ, nữ chính cũng chẳng tin được lại có sự trùng hợp
                      đến vậy. Tuy nhiên, sự nhiệt tình của cộng đồng fan{" "}
                      <strong>game</strong> khiến cô nàng thêm tò mò và muốn thử
                      sức với tựa game này. Thậm chí, nàng{" "}
                      <strong>hot girl</strong> còn bông đùa rằng sẽ "bỏ nghề
                      mẫu ảnh để chuyển sang làm streamer".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-1629546948814539724043.jpg"
                      alt="3, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-16295469647711279250565.jpg"
                      alt="4, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />
                    <h5>Xoài Non</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-1629547079997132417959.png"
                      alt="5, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Cũng xuất thân từ làng mẫu ảnh, Chan Chan (Phạm Thuỳ
                      Trang) sở hữu một nhan sắc xinh đẹp, cực phẩm, được ví như
                      con lai, khiến nhiều người yêu mến ngay từ cái nhìn đầu
                      tiên. Cô nàng này sớm đã tự chủ tài chính nhờ vào việc
                      giới thiệu sản phẩm cho các nhãn hàng.{" "}
                      <strong>Hot girl</strong> mạng này còn tham gia showbiz,
                      góp mặt trong các bộ phim sitcom và MV âm nhạc…
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/21/photo-1-16295471244751386019750.png"
                      alt="6, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-16295471970851277719248.jpg"
                      alt="7, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Năm 2019 là lúc cái tên Trang Phạm với nickname Xoài Non
                      được biết đến rộng rãi làng <strong>game</strong> vì cô
                      công khai hẹn hò và rồi kết hôn với streamer giàu nhất
                      Việt Nam - Xemesis (tên thật Hiếu Nghiêm).
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Dù lập gia đình khi tuổi đời còn trẻ thế nhưng fan cũng
                      thấy được rằng, cô nàng không ngừng cố gắng hoàn thiện bản
                      thân mỗi ngày, xây dựng hình ảnh đẹp hơn. Đặc biệt, cô
                      từng bước xoá nhoà định kiến tin đồn cô lấy chồng đại gia
                      vì tài sản, phụ thuộc kinh tế.
                    </p>
                    <h5>Helia Bảo Hân</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-162954735087525084798.jpg"
                      alt="8, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Nguyễn Ngọc Bảo Hân (sinh năm 2000) còn được biết đến với
                      biệt danh Bảo Hân Helia. <strong>Hot girl</strong> Lâm
                      Đồng không phải là cái tên xa lạ, cô nàng đã nổi tiếng
                      cách đây nhiều năm, từ thời vẫn còn là một học sinh THPT
                      nhờ những đoạn rap bắt tai cùng ngoại hình xinh xắn, trắng
                      trẻo tựa búp bê.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-1629547365563349543014.jpg"
                      alt="9, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Ở tuổi trưởng thành, Bảo Hân tích cực theo đuổi phong cách
                      thời trang quyến rũ, phóng thoáng và hiện đại. Nhờ lợi thế
                      về ngoại hình, cô nàng trở thành mẫu ảnh có tiếng tại
                      TP.HCM.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-16295473823211743545654.jpg"
                      alt="10, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
                      note=""
                    />

                    <p>
                      Bảo Hân được ví như “chị em song sinh" với Linh Ngọc Đàm.
                      Cô có khuôn mặt với nhiều đường nét tương đồng, cùng phong
                      cách cá tính nên không ít người đã lầm tưởng họ là 2 chị
                      em ruột. Cả hai cũng không ít lần khiến dân tình "lú" vì
                      nhiều khoảnh khắc trông rất giống nhau về thần thái hay
                      cách tạo dáng. Ngoài đời, Helia và Đàm tổng có mối quan hệ
                      rất thân thiết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/21/photo-1-16295472484271401423473.jpg"
                      alt="11, HOT GIRL,GAME,GÁI XINH,BÀI VIẾT ĐÁNG CHÚ Ý,"
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

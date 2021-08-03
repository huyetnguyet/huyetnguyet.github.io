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
"timestamp": '02/08/2021 01:18 AM',
"title": 'Giật mình khi thấy các mỹ nhân anime bất ngờ đi độ ngực, ai cũng có tâm hồn ngồn ngộn nhức mắt',
"description": 'Dù phụ nữ có da trắng đến cỡ nào, da mặt đẹp và dáng chuẩn đến bao nhiêu thì trong mắt đàn ông, vòng 1 vẫn là điểm họ dừng mắt đầu tiên và lâu nhất.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383453661718633477.jpg',
"alt": 'ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,',
"category": 'games',
"date": '02/08/2021',
"time": '01:18 AM',
"link": '/giat-minh-khi-thay-cac-my-nhan-anime-bat-ngo-di-do-nguc-ai-cung-co-tam-hon-ngon-ngon-nhuc-mat',
"zcomponent": 'page_20210802011846',
"filepath": './20210802011846-giat-minh-khi-thay-cac-my-nhan-anime-bat-ngo-di-do-nguc-ai-cung-co-tam-hon-ngon-ngon-nhuc-mat.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Giật mình khi thấy các mỹ nhân anime bất ngờ đi độ ngực, ai cũng có tâm hồn ngồn ngộn nhức mắt";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:18 AM";
const description =
  "Dù phụ nữ có da trắng đến cỡ nào, da mặt đẹp và dáng chuẩn đến bao nhiêu thì trong mắt đàn ông, vòng 1 vẫn là điểm họ dừng mắt đầu tiên và lâu nhất.";
const link =
  "giat-minh-khi-thay-cac-my-nhan-anime-bat-ngo-di-do-nguc-ai-cung-co-tam-hon-ngon-ngon-nhuc-mat";
const tagparam = [
  "ANIME",
  "MỸ NHÂN ANIME",
  "VÒNG 1",
  "TÂM HỒN PHỤ NỮ",
  "MỸ NHÂN NGỰC KHỦNG",
  "FAN ART",
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

export default function page_20210802011846() {
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
                      Từ xưa đến nay quan niệm phụ nữ muốn sexy là phải có ngực
                      khủng đã ăn sâu vào tiềm thức của mọi người. Đó là lý do
                      mà chị em luôn cố gắng tìm mọi cách để biến hóa bộ ngực
                      của mình, ai ngực nhỏ thì làm cho nó to ra, ai ngực to rồi
                      thì làm cho nó to hơn. Thậm chí có một nghiên cứu đã chỉ
                      ra rằng ngực là bộ phận đầu tiên trên cơ thể phụ nữ mà đàn
                      ông chú ý tới. Đồng thời cũng có nhiều người cho rằng sự
                      khác biệt rõ ràng nhất để phân biệt một người đàn ông và
                      phụ nữ là ở bộ ngực. Một người phụ nữ có bộ ngực đầy đặn
                      luôn có nét quyến rũ, ma mị mà cánh đàn ông không thể nào
                      cưỡng lại được.
                    </p>
                    <p>
                      Không chỉ ở đời thực, ngay cả đối với thế giới ảo điều này
                      cũng không thay đổi. Ví dụ hầu hết các fan đều mê mệt
                      những cô nàng ngực khủng trong <strong>anime</strong>
                      /manga. Ai có tâm hồn lớn càng dễ được chú ý và có nhiều
                      người hâm mộ hơn, bởi các mỹ nhân sở hữu{" "}
                      <strong>vòng 1</strong> bốc lửa tự nhiên đã có thêm một
                      điểm mạnh và giúp vẻ ngoài của họ hoàn hảo hơn.
                    </p>
                    <p>
                      Nắm bắt được tâm lý này của đa số phái mạnh, một nghệ sĩ
                      đã tạo ra loạt <strong>fan art</strong> lấy tâm điểm là{" "}
                      <strong>vòng 1</strong> của các mỹ nhân manga/
                      <strong>anime</strong>. Nghệ sĩ này đã thổi làn gió mới
                      vào tâm hồn của rất nhiều nàng waifu quốc dân khiến người
                      xem không khỏi lác mắt vì vòng 1 căng đét.
                    </p>
                    <p>
                      Dưới đây mời các bạn cùng ngắm loạt{" "}
                      <strong>fan art</strong> khi các mỹ nhân{" "}
                      <strong>anime</strong> đều sở hữu tâm hồn đầy đặn nhé!
                      Liệu các bạn có thích nó không?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277382969461821959968.jpg"
                      alt="1, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note="Vòng 1 luôn là tâm điểm chú ý của đàn ông mỗi khi gặp và nhìn phụ nữ."
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383035691185233733.jpg"
                      alt="2, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note="Nghiên cứu cho thấy, 80% cái nhìn đầu tiên của đàn ông thường tập trung vào vòng một và cơ hoành của chị em phụ nữ."
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383271872025572452.jpg"
                      alt="3, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note="Và bạn biết không, phái mạnh luôn tìm cách để mắt ở vòng 1 của chị em lâu hơn các bộ phận khác trên cơ thể đấy nhé!"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383453661718633477.jpg"
                      alt="4, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383368921121141711.jpg"
                      alt="5, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627738364033756009799.jpg"
                      alt="6, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383902852001546530.jpg"
                      alt="7, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277383971361440340798.jpg"
                      alt="8, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627738429036367332342.jpg"
                      alt="9, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277384343821551673350.jpg"
                      alt="10, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277384407601546985961.jpg"
                      alt="11, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277384762021474644208.jpg"
                      alt="12, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277384926251155783732.jpg"
                      alt="13, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277386181231482933925.jpg"
                      alt="14, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627738627525710368921.jpg"
                      alt="15, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277386416641575355277.jpg"
                      alt="16, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627738652462256221494.jpg"
                      alt="17, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277386643001881358539.jpg"
                      alt="18, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277386790872032174715.jpg"
                      alt="19, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277386893351291121701.jpg"
                      alt="20, ANIME,MỸ NHÂN ANIME,VÒNG 1,TÂM HỒN PHỤ NỮ,MỸ NHÂN NGỰC KHỦNG,FAN ART,"
                      note=""
                    />
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

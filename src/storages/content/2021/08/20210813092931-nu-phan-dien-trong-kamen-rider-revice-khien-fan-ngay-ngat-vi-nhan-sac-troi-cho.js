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
"timestamp": '13/08/2021 09:29 AM',
"title": 'Nữ phản diện trong Kamen Rider Revice khiến fan ngây ngất vì nhan sắc trời cho',
"description": 'Tuy Kamen Rider Revice vẫn chưa ra mắt nhưng nữ diễn viên Yui Asakura đã khiến cho nhiều fan đứng ngồi không yên nhờ nhan sắc trời cho của mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi1-16288340857632120564090.jpg',
"alt": 'BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,',
"category": 'games',
"date": '13/08/2021',
"time": '09:29 AM',
"link": '/nu-phan-dien-trong-kamen-rider-revice-khien-fan-ngay-ngat-vi-nhan-sac-troi-cho',
"zcomponent": 'page_20210813092931',
"filepath": './20210813092931-nu-phan-dien-trong-kamen-rider-revice-khien-fan-ngay-ngat-vi-nhan-sac-troi-cho.js'
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
  "Nữ phản diện trong Kamen Rider Revice khiến fan ngây ngất vì nhan sắc trời cho";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:29 AM";
const description =
  "Tuy Kamen Rider Revice vẫn chưa ra mắt nhưng nữ diễn viên Yui Asakura đã khiến cho nhiều fan đứng ngồi không yên nhờ nhan sắc trời cho của mình.";
const link =
  "nu-phan-dien-trong-kamen-rider-revice-khien-fan-ngay-ngat-vi-nhan-sac-troi-cho";
const tagparam = [
  "BỘ ẢNH COSPLAY",
  "COSPLAY",
  "KAMEN RIDER REVICE",
  "KAMEN RIDER",
  "CHÙM ẢNH COSPLAY",
  "NỮ COSER",
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

export default function page_20210813092931() {
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
                      Như các bạn đã biết thì <strong>Kamen Rider</strong> là
                      một trong những series tokusatsu lâu đời và nổi tiếng nhất
                      của Nhật Bản. Sau thành công của phần Saber, thế hệ Kamen
                      Rider tiếp theo tiếp nối thương hiệu đình đám này sẽ là{" "}
                      <strong>Kamen Rider Revice</strong>. Đây là series Kamen
                      Rider thứ 32 đồng thời cũng là series đánh dấu 50 năm
                      thành lập của Kamen Rider. Đây cũng là lý do khiến Revice
                      rất được các fan trên khắp thế giới quan tâm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi1-16288340857632120564090.jpg"
                      alt="1, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <p>
                      Ngoài việc là series kỷ niệm nửa thế kỷ hình thành của{" "}
                      <strong>Kamen Rider</strong>, Revice còn đặc biệt thu hút
                      người hâm mộ bởi dàn diễn viên toàn trai xinh gái đẹp.
                      Trong số đó, nổi bật nhất là nữ diễn viên Yui Asakura -
                      người thủ vai phản diện Aguilera trong phim.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi10-1628834089834357460640.jpg"
                      alt="2, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <p>
                      Yui Asakura tên thật là Mei Hanakawa (biệt danh Meimei,
                      Mei2). Cô sinh ngày 8 tháng 6 năm 1996 và bắt đầu hoạt
                      động trong giới showbiz từ năm 2016 - 2019 với vai trò là
                      thành viên nhóm seiyuu trực tuyến 22/7 trong vai Nicole
                      Sato. Sau khi rời nhóm, Mei tiếp tục sự nghiệp diễn xuất
                      và làm người mẫu ảnh. Năm 2020, cô lấy nghệ danh mới là
                      Yui Asakura.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/hoi8-1628834125975822995926.png"
                      alt="3, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <p>
                      Với chiều cao 157cm, số đo ba vòng lần lượt là 85-56-82
                      cùng nhan sắc tươi tắn đáng yêu, Yui Asakura được khán giả
                      vô cùng yêu thích. Sau khi tham gia{" "}
                      <strong>
                        <strong>Kamen Rider</strong> Revice
                      </strong>
                      , Yui đã khiến tác phẩm được rất nhiều khán giả quan tâm
                      đồng thời đưa tên tuổi của bản thân lên một tầm cao mới.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong{" "}
                      <strong>
                        <strong>Kamen Rider</strong> Revice
                      </strong>
                      , nhân vật chính Ikki của chúng ta sẽ phải đối đầu với tổ
                      chức Deadmans, một tổ chức thờ phụng ma quỷ. Để đối đầu
                      với chúng, Ikki đã lập khế ước với Vice, con quỷ sống bên
                      trong cơ thể mình. Cả hai sau đó biến thành Kamen Revi và
                      Kamen Rider Vice. Điều đặc biệt là họ có thể kết hợp với
                      nhau và biến thành Kamen Rider Revice. Yui Asakura sẽ vào
                      vai Aguilera, một phản diện thuộc tổ chức Deadmans. Các
                      bạn thấy sao về nhan sắc của nữ phản diện trong Kamen
                      Rider Revice? Hãy để lại ý kiến của mình nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi7-1628834119569327515243.jpg"
                      alt="4, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi6-16288341151081481167763.jpg"
                      alt="5, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi5-16288341106241384999026.png"
                      alt="6, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/hoi2-16288340946341349316681.jpg"
                      alt="7, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/hoi9-16288341311421401208332.png"
                      alt="8, BỘ ẢNH COSPLAY,COSPLAY,KAMEN RIDER REVICE,KAMEN RIDER,CHÙM ẢNH COSPLAY,NỮ COSER,"
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

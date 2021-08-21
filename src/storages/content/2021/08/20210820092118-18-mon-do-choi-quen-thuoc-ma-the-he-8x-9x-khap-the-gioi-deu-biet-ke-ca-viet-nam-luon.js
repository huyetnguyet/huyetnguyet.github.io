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
"timestamp": '20/08/2021 09:21 AM',
"title": '18 món đồ chơi quen thuộc mà thế hệ 8x, 9x khắp thế giới đều biết, kể cả Việt Nam luôn',
"description": 'Hóa ra những món đồ chơi này đều rất nổi tiếng ở trên thế giới, chứ không chỉ ở nước mình đâu nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-1629436770307546739656.jpg',
"alt": 'ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,',
"category": 'games',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/18-mon-do-choi-quen-thuoc-ma-the-he-8x-9x-khap-the-gioi-deu-biet-ke-ca-viet-nam-luon',
"zcomponent": 'page_20210820092118',
"filepath": './20210820092118-18-mon-do-choi-quen-thuoc-ma-the-he-8x-9x-khap-the-gioi-deu-biet-ke-ca-viet-nam-luon.js'
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
  "18 món đồ chơi quen thuộc mà thế hệ 8x, 9x khắp thế giới đều biết, kể cả Việt Nam luôn";
const author = "Đức 2 Xích";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "20/08/2021 09:21 AM";
const description =
  "Hóa ra những món đồ chơi này đều rất nổi tiếng ở trên thế giới, chứ không chỉ ở nước mình đâu nhé!";
const link =
  "18-mon-do-choi-quen-thuoc-ma-the-he-8x-9x-khap-the-gioi-deu-biet-ke-ca-viet-nam-luon";
const tagparam = ["ĐỒ CHƠI", "TRẺ NHỎ", "TUỔI THƠ"];
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

export default function page_20210820092118() {
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
                      Không thể phủ nhận rằng mỗi một thế hệ đều có kí ức thật
                      đẹp với những món <strong>đồ chơi</strong>{" "}
                      <strong>tuổi thơ</strong>. Bi ve, gà ảo và một bộ sưu tập
                      siêu nhân Gao cũng đủ để khiến bạn trở thành một trong
                      những nhân vật cộm cán nhất xóm.
                    </p>
                    <h5>
                      Không chần chừ nữa, hãy cùng ngồi xuống và lên chuyến xe
                      trở về kí ức thôi nào!
                    </h5>
                    <p>Cái vẽ này mà quẹt một phát sang trái là coi như bỏ!</p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-1629436770307546739656.jpg"
                      alt="1, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />
                    <p>Có ai còn nhớ thẻ bài Pokemon không?</p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-16294367721221305668044.jpg"
                      alt="2, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />
                    <p>Tôi học cách sống màu mè từ những chiếc bút này đây</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-2-16294367721611531638249.jpg"
                      alt="3, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>
                      Nhìn thứ này bay lên rồi rơi xuống có lẽ là điều tuyệt vời
                      nhất của tuổi thơ
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-3-16294367722001571271106.jpg"
                      alt="4, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Gao Ranger rút điện thoại ra nào!</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-4-1629436772678370753220.jpg"
                      alt="5, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Câu cá xong thò ngón tay vào để nó đớp</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-5-16294367722491935206343.jpg"
                      alt="6, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Ôi chiếc Gameboy cùng siêu phẩm săn Pokemon</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-6-16294367723181414734411.jpg"
                      alt="7, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Chiến tích sau những ngày đập thẻ bài tan tành</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-7-16294367723451425192835.jpg"
                      alt="8, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Lego thì chắc chẳng ai lạ nhỉ?</p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-8-1629436772406535255793.jpg"
                      alt="9, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Súng phun nước cũng dã man lắm!</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-9-16294367724421741849144.jpg"
                      alt="10, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>
                      Chiếc này với trò bắn vịt đã khiến{" "}
                      <strong>tuổi thơ</strong> tôi điên đảo!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-10-1629436772480310519779.jpg"
                      alt="11, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Cái này giờ vẫn còn đầy người chơi</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-11-16294367725211466268361.jpg"
                      alt="12, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>
                      Barbie thì thôi, không cần phải bàn về độ nổi tiếng rồi
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-12-1629436772972745269973.jpg"
                      alt="13, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Ôi, nhìn mà nhớ về những ngày ngây thơ quá!</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-13-16294367725711532174484.jpg"
                      alt="14, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Gà ảo nhưng tôi toàn quên cho ăn...</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-14-16294367726101909934429.jpg"
                      alt="15, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Ngày xưa cầm cái này lên lớp cũng thú vị lắm</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-1629436834313810630066.gif"
                      alt="16, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Cái này bôi lên tóc thì gội 7 ngày không sạch!</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-1629436823570247875043.gif"
                      alt="17, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
                      note=""
                    />

                    <p>Cái này mà trêu bọn con gái thì vui phải biết</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-16294368111262129286003.gif"
                      alt="18, ĐỒ CHƠI,TRẺ NHỎ,TUỔI THƠ,"
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

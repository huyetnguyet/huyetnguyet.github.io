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
"timestamp": '13/08/2021 10:40 PM',
"title": 'BLACKPINK "đại náo" sự kiện PUBG: Từ sang chảnh hóa "bánh bèo" xinh xỉu, nhưng sao cả 4 lộ cẳng chân chẳng đẹp như mơ thế này',
"description": 'Trong sự kiện mới, BLACKPINK thật sự khiến dân tình xỉu ngang vì nhan sắc xinh đẹp hút hồn, nhưng phải thở dài khi kéo xuống đôi chân của cả 4 thành viên.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qtbvpucamcwwf-16288724275191988611193.jpg',
"alt": 'Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,',
"category": 'stars',
"date": '13/08/2021',
"time": '10:40 PM',
"link": '/blackpink-dai-nao-su-kien-pubg-tu-sang-chanh-hoa-banh-beo-xinh-xiu-nhung-sao-ca-4-lo-cang-chan-chang-dep-nhu-mo-the-nay',
"zcomponent": 'page_20210813224013',
"filepath": './20210813224013-blackpink-dai-nao-su-kien-pubg-tu-sang-chanh-hoa-banh-beo-xinh-xiu-nhung-sao-ca-4-lo-cang-chan-chang-dep-nhu-mo-the-nay.js'
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
  'BLACKPINK "đại náo" sự kiện PUBG: Từ sang chảnh hóa "bánh bèo" xinh xỉu, nhưng sao cả 4 lộ cẳng chân chẳng đẹp như mơ thế này';
const author = "SON,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 10:40 PM";
const description =
  "Trong sự kiện mới, BLACKPINK thật sự khiến dân tình xỉu ngang vì nhan sắc xinh đẹp hút hồn, nhưng phải thở dài khi kéo xuống đôi chân của cả 4 thành viên.";
const link =
  "blackpink-dai-nao-su-kien-pubg-tu-sang-chanh-hoa-banh-beo-xinh-xiu-nhung-sao-ca-4-lo-cang-chan-chang-dep-nhu-mo-the-nay";
const tagparam = [
  "Blackpink",
  "lisa (black pink)",
  "lisa (blackpink)",
  "lisa",
  "jennie",
  "Jennie (BlackPink)",
  "jisoo (blackpink)",
  "jisoo",
  "rosé (blackpink)",
  "Rosé",
  "nhan sắc của blackpink",
  "body của blackpink",
  "body của sao",
  "body của sao Hàn",
  "nhan sắc sao",
  "nhan sắc của sao",
  "nhan sắc của sao Hàn",
  "đôi chân của sao",
  "sao lộ khuyết điểm",
  "PUBG",
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

export default function page_20210813224013() {
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
                      Trong sự kiện mới, <strong>BLACKPINK</strong> thật sự
                      khiến dân tình xỉu ngang vì nhan sắc xinh đẹp hút hồn,
                      nhưng phải thở dài khi kéo xuống đôi chân của cả 4 thành
                      viên.
                    </p>
                    <p>
                      Vào ngày 13/8, cả 4 thành viên <strong>BLACKPINK</strong>{" "}
                      đã cùng nhau xuất hiện tại buổi livestream của game{" "}
                      <strong>PUBG</strong> mobile. Ngay lập tức, visual đỉnh
                      cao của các thành viên đã trở thành chủ đề hot trên mạng
                      xã hội. Visual của cả 4 hợp lại quả là "bữa tiệc" nhan sắc
                      khiến người ta phải trầm trồ dù chỉ được chiêm ngưỡng qua
                      sóng livestream.
                    </p>
                    <p>
                      Chị cả <strong>Jisoo</strong> đúng là tâm điểm ở mọi sự
                      kiện, loạt khoảnh khắc xinh đẹp dịu dàng, khoe góc nghiêng
                      đẹp đến mức câm nín và thần thái chuẩn Hoa hậu của nữ idol
                      lên top trending thế giới suốt tối ngày 13/8. Khác với vẻ
                      "chặt chém" mọi khi, <strong>Jennie</strong> và{" "}
                      <strong>Rosé</strong> lại F5 với phong cách dịu dàng, đáng
                      yêu nhưng "thở" ra khí chất sang chảnh như tiểu thư tài
                      phiệt. Đặc biệt, em út <strong>Lisa</strong> "gây thương
                      nhớ" với diện mạo như bạn gái nhà bên, để lộ xương quai
                      xanh gợi cảm.
                    </p>
                    <p>
                      Tuy nhan sắc hoàn mỹ là vậy nhưng girlgroup nhà YG lại
                      không may để lộ khuyết điểm lồ lộ ngay khi màn hình zoom
                      ra xa ở... cẳng chân. Không thẳng tắp và trắng nõn, hoàn
                      mỹ như hình tạp chí hay quảng cáo, 3 "mẩu"{" "}
                      <strong>BLACKPINK</strong> lộ chân cong và đầu gối củ lạc,{" "}
                      <strong>Rosé</strong> và <strong>Lisa</strong> thậm chí
                      còn lộ cẳng chân gầy nhẳng, nhỏ xíu như sắp gãy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qtec1uyaqwx47-1628872427493328210338.jpg"
                      alt="1, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note="Cả 4 thành viên BLACKPINK đều vô cùng xinh đẹp và rạng rỡ tại sự kiện livestream game"
                    />
                    <p>
                      Sự kết hợp visual của 4 cô nàng nhà YG khiến dân tình được
                      phen "rửa mắt". Đáng nói, các thành viên đều thay đổi
                      phong cách dịu dàng, nữ tính, không "chặt chém" như thường
                      ngày. Mặc dù vậy, <strong>Jennie</strong> và{" "}
                      <strong>Rosé</strong> vẫn ngút ngàn khí chất như tiểu thư
                      tài phiệt, trong khi <strong>Jisoo</strong> và{" "}
                      <strong>Lisa</strong> lại đáng yêu đúng kiểu "girlfriend
                      material"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/base64-1628872496956450895513.png"
                      alt="2, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note="Tuy nhiên, cả 4 thành viên trông như người tí hon khi đứng cạnh MC. Dù xinh đẹp là thế nhưng BLACKPINK lại không may để lộ khuyết điểm chân gầy khẳng khiu và không đẹp hoàn mỹ như trên hình đã chỉnh sửa và như lời truyền thông nói. Đáng lo ngại nhất là Rosé và Lisa với cặp chân gầy như sắp gãy, còn chân Jisoo và Jennie có da có thịt hơn nhưng không hề thẳng tắp nuột nà như trên tạp chí"
                    />
                    <p>
                      Bình thường, các thành viên <strong>BLACKPINK</strong> đều
                      khiến netizen mê mẩn với đôi chân cực phẩm
                    </p>
                    <p>
                      <strong>Jennie</strong> rũ bỏ vẻ lạnh lùng, "chặt chém"
                      trên sân khấu và khiến fan phát sốt với vẻ ngoài gần gũi,
                      đáng yêu
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/1-1586926406521394478164-1628875426045321314837.jpg"
                      alt="3, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/1c3c8534d660ab155b5081d600f01271-16126664069431440598829-1628875365049309222256.jpg"
                      alt="4, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/rosesarerosie18532977641811370619250764105786135678768235n-16288753649932141181024.jpg"
                      alt="5, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8q-yvjwqai-ldw-1628872782047518758833.jpg"
                      alt="6, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qqaubvkam8ou1-1628872705798958313602.jpg"
                      alt="7, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <p>
                      <strong>Rosé</strong> vẫn mỹ miều, sang chảnh như thường
                      lệ. Suối tóc vàng dài thướt tha càng tôn lên khuôn mặt
                      xinh xắn của "đóa hồng nước Úc"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8rkbaaviaigh5y-1628872581905331267713.jpg"
                      alt="8, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8rzhjzveamxn4s-162887258171265980893.jpg"
                      alt="9, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qo5d0x0aenmwp-16288728132501361504351.jpg"
                      alt="10, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8rk8efxsa8mreg-1628872813259100704879.jpg"
                      alt="11, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qomc8wqaeybmd-16288730218971187471015.jpg"
                      alt="12, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note="Gương mặt búp bê của Lisa vẫn đẹp hoàn hảo kể cả qua ảnh chụp màn hình chất lượng thấp"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qtbvpucamcwwf-16288724275191988611193.jpg"
                      alt="13, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/base64-16288754566731483046662.png"
                      alt="14, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qtowkvcbaamhe-16288727058721888193824.jpg"
                      alt="15, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8rybs9vcam-wl--16288730220171570825780.jpg"
                      alt="16, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qyzvhuuaeffaj-1628873021964607462191.jpg"
                      alt="17, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/e8qyzvhuuaeffaj-1628873021964607462191.jpg"
                      alt="18, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/14/savetweetvide8rstnnvgambos--16288756214441230698399.gif"
                      alt="19, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/14/298246dbd0b9b9d806afc3db5f733532c008c229-16288755626992030889918.gif"
                      alt="20, Blackpink,lisa (black pink),lisa (blackpink),lisa,jennie,Jennie (BlackPink),jisoo (blackpink),jisoo,rosé (blackpink),Rosé,nhan sắc của blackpink,body của blackpink,body của sao,body của sao Hàn,nhan sắc sao,nhan sắc của sao,nhan sắc của sao Hàn,đôi chân của sao,sao lộ khuyết điểm,PUBG,"
                      note=""
                    />
                    <p>Nguồn: Twitter</p>
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

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
"timestamp": '28/08/2021 08:44 AM',
"title": 'Jennie thân hình chuẩn nhất, nhưng Lisa mới là thành viên body sang nhất BLACKPINK và đây là lý do!',
"description": 'Đến netizen khó tính nhất cũng không thể chê bai body cực phẩm của Lisa (BLACKPINK).',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/lalalalisam2405567842054567149545175623479004395616732n-16299425978411956553044.jpg',
"alt": 'lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:44 AM',
"link": '/jennie-than-hinh-chuan-nhat-nhung-lisa-moi-la-thanh-vien-body-sang-nhat-blackpink-va-day-la-ly-do',
"zcomponent": 'page_20210828084453',
"filepath": './20210828084453-jennie-than-hinh-chuan-nhat-nhung-lisa-moi-la-thanh-vien-body-sang-nhat-blackpink-va-day-la-ly-do.js'
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
  "Jennie thân hình chuẩn nhất, nhưng Lisa mới là thành viên body sang nhất BLACKPINK và đây là lý do!";
const author = "HỒNG HẢI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:44 AM";
const description =
  "Đến netizen khó tính nhất cũng không thể chê bai body cực phẩm của Lisa (BLACKPINK).";
const link =
  "jennie-than-hinh-chuan-nhat-nhung-lisa-moi-la-thanh-vien-body-sang-nhat-blackpink-va-day-la-ly-do";
const tagparam = [
  "lisa",
  "lisa (blackpink)",
  "Blackpink",
  "jennie",
  "Jennie (BlackPink)",
  "body sao Hàn",
  "idol Kpop",
  "sao Hàn",
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

export default function page_20210828084453() {
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
                      <strong>Jennie</strong> là đại diện cho trường phái body
                      sexy, còn <strong>Lisa</strong> có body sang nhất nhóm,
                      mọi đường nét đều đẹp đến ngỡ ngàng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/137587915262892323771171673279-6765feda-1629942597825651053763.jpg"
                      alt="1, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="1 trong những lợi thế hình thể đẹp nhất của Lisa đó chính là bờ vai vuông góc 90 độ hoàn hảo. Có lợi thế bờ vai ngọc ngà, Lisa thường xuyên diện đồ hở vai, đẹp đến mê đắm lòng người"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/56c44de59ffd8882cb8b0417b7e494c3-16299439146871419554403.jpg"
                      alt="2, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Dù là trên sân khấu..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/669buusq2g451-16299439291431391431092.jpg"
                      alt="3, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="... hay là ở ngoài đời, vai của Lisa vẫn đẹp hết chỗ chê, khiến cả vạn cô gái vừa ngưỡng mộ vừa ghen tỵ"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/e43tfexvgaqxizo-1624770406994853302992-16248733676781784233080-1-16299440460891439983295.jpg"
                      alt="4, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Chiếc váy xẻ sâu hoắm đã được may lại để kín đáo hơn nhưng Lisa vẫn khoe khéo được vòng 1 e ấp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/l3-16102059041921847272661-16248733661781762202039-1629944045935540452887.jpg"
                      alt="5, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="E ấp vòng 1 sang chảnh đến nhường này, có ai làm được như Lisa?"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/tempe50e90676dc31f5bd174b1ea155376c5-16242391295461993381533-1629944210211178535839.jpg"
                      alt="6, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Trong BLACKPINK, Rosé có vòng eo 48cm trứ danh, thế nhưng eo Lisa cũng nhỏ chẳng kém. Số đo vòng 2 của em út chỉ 51cm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/cff4ca0480a349748d52abcf0a431d11-1-16299442102231956551363.jpg"
                      alt="7, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Nhờ lợi thế eo con kiến thon nhỏ, Lisa thường xuyên diện crop top khoe dáng trên sân khấu. Vóc dáng chuẩn thắt đáy lưng ong của cô khiến netizen không thể rời mắt ngắm nhìn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/2-15536811666781880887539-16299443401461652507210.jpg"
                      alt="8, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Đôi chân của Lisa hoàn hảo cứ như thể đó là chân của búp bê"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/5d9301a2ea5b6-16053667882122031279665-16299455720971550844110.jpeg"
                      alt="9, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note="Trong những tấm ảnh chụp toàn thân, nhờ tỉ lệ cơ thể siêu thực và đôi chân ảo diệu, trông Lisa như thể cao hơn 1m70"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/lalalalisam2405567842054567149545175623479004395616732n-16299425978411956553044.jpg"
                      alt="10, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/1-1586926406521394478164-1-16299425977291838731730.jpg"
                      alt="11, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/newscontent155411529247-16299439147051042638400.jpg"
                      alt="12, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/eidnstxyay-5mz-16299439293331399296221.jpg"
                      alt="13, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/l4-682x1024-16299442102421630979221.jpg"
                      alt="14, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/tumblrpsxna8mocy1vz2c9uo11280-16299442099832022569700.jpg"
                      alt="15, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/26/8af6d3ff59ff39691f3486480be030cd-16251144177241474352872-16299443401731432309674.jpg"
                      alt="16, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/mac-lisa-co-doi-chan-bac-ty-3-mau-blackpink-van-dien-do-ngan-ngon-o-8c2f24-1629944339959504138303.gif"
                      alt="17, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/26/41rt4l-8888f6-1629944339937714885221.gif"
                      alt="19, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/ezgif-3-fbff020eed23-162477288799633343418-1624873367605732037686-1629943858482144396388.gif"
                      alt="20, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/26/ezgif-3-68e58c97e2b9-162477288769264474459-16248733674511792589276-16299438584851143978233.gif"
                      alt="21, lisa,lisa (blackpink),Blackpink,jennie,Jennie (BlackPink),body sao Hàn,idol Kpop,sao Hàn,"
                      note=""
                    />
                    <p>Nguồn ảnh: Sưu tầm</p>
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

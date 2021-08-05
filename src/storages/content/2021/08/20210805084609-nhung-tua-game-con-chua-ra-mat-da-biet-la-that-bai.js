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
"timestamp": '05/08/2021 08:46 AM',
"title": 'Những tựa game còn chưa ra mắt đã biết là thất bại',
"description": 'Công bằng mà nói thì các tựa game này có chất lượng không đến nỗi tệ, thậm chí là khá tốt nhưng cuối cùng vẫn "hỏng việc" vì những sai lầm khác nhau.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280898648651601284701.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '05/08/2021',
"time": '08:46 AM',
"link": '/nhung-tua-game-con-chua-ra-mat-da-biet-la-that-bai',
"zcomponent": 'page_20210805084609',
"filepath": './20210805084609-nhung-tua-game-con-chua-ra-mat-da-biet-la-that-bai.js'
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
const title = "Những tựa game còn chưa ra mắt đã biết là thất bại";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:46 AM";
const description =
  'Công bằng mà nói thì các tựa game này có chất lượng không đến nỗi tệ, thậm chí là khá tốt nhưng cuối cùng vẫn "hỏng việc" vì những sai lầm khác nhau.';
const link = "nhung-tua-game-con-chua-ra-mat-da-biet-la-that-bai";
const tagparam = ["GAME"];
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

export default function page_20210805084609() {
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
                    <h5>1. Metal Gear Survive</h5>

                    <p>
                      Nhắc đến Metal Gear, người ta sẽ nghĩ ngay đến tượng đài
                      của làng <strong>game</strong> - nhà thiết kế lừng danh
                      Hideo Kojima. Ông được coi như kiến trúc sư trưởng của
                      dòng game Metal Gear, cũng là người định hình cho dòng
                      game stealth action nói riêng và tạo ảnh hưởng to lớn đến
                      làng game thế giới nói chung. Dù vậy, Hideo Kojima và
                      Konami đã bất ngờ nói lời chia tay sau vụ lùm xùm liên
                      quan tới tựa game Metal Gear Solid 5.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280898648651601284701.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Không còn Kojima, Konami vẫn quyết định độc lập phát triển
                      dòng <strong>game</strong> này với sản phẩm mới có tên
                      Metal Gear Survive. Dù vậy, Metal Gear Survive chẳng hề
                      giống chút nào so với những gì fan hâm mộ từng thấytrước
                      đó. Điều này dẫn đến việc họ chẳng có chút hứng thú nào
                      với việc chơi game được nữa.{" "}
                    </p>
                    <h5>2. Titanfall 2</h5>
                    <p>
                      Titanfall là một sản phẩm không tệ, nếu không muốn nói là
                      rất hay và được rất nhiều <strong>game</strong> thủ ưa
                      thích bởi sự sáng tạo và độc đáo của nó trong thể loại bắn
                      súng. Đến khi Titanfall 2 được công bố, nhiều game thủ kỳ
                      vọng rằng đây sẽ là tựa game bắn súng xuất sắc và đình đám
                      nhất mọi thời đại. Tuy nhiên, mọi thứ lại không được như
                      các game thủ kỳ vọng, bởi sự "bóp team" của EA.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280898875261627964320.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Titanfall 2 nhận được điểm số không hề tệ và cũng không
                      mắc những lỗi <strong>game</strong> nghiệm trọng, vấn đề
                      khiến cho nó bị "bóp nghẹt" là bởi kế hoạch phát hành của
                      Electronic Arts. Thật vậy, tựa game này được phát hành xen
                      kẽ giữa 2 bom tấn FPS đình đám khác là Battlefield và Call
                      of Duty: Infinite Warfare. Điều này đã khiến cho nó trở
                      nên yếu thế và được game thủ chọn mua hơn 2 dòng game đã
                      có danh tiếng kia. Đáng ra, Titanfall 2 đã có thể được đối
                      xử tốt hơn như là một đứa con ghẻ vậy.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Mad Max</h5>
                    <p>
                      Mad Max: Fury Road là bom tấn điện ảnh lấy bối cảnh hậu
                      tận thế ra đời vào năm 2015, và Warner Bros muốn "thừa
                      thắng" xông lên khi tiếp tục cho ra đời Mad Max phiên bản{" "}
                      <strong>game</strong>. Nhà phát triển được chọn để làm
                      game là Avalanche Studios, cũng là một trong những cái tên
                      có tên tuổi trong ngành khi từng ra cho ra mắt các sản
                      phẩm có chất lượng cao như Just Cause hay Renegade Ops.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/-16280899183721095062370.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Mad Max dù vẫn mắc phải một vài lỗi nhỏ, nhưng vẫn được
                      khá nhiều reviewer đánh giá là một tựa{" "}
                      <strong>game</strong> đáng để thử qua. Dù vậy, Warner Bros
                      cũng giống như EA, đã quá tự tin vào việc tựa game mới ra
                      mắt này có thể so kè được với các ông lớn. Đối thủ của Max
                      điên ở đây là Metal Gear Solid V, tựa game xuất sắc nhất
                      của năm 2015 và được chỉ đạo bởi Hideo Kojima. Vậy thì, có
                      cửa nào cho Mad Max khi phải đối chọi với tượng đài này?{" "}
                    </p>
                    <h5>4. Anthem</h5>
                    <p>
                      Sau thất bại của Mass Effect: Andromeda, nhà sản xuất
                      Bioware hướng tới một sản phẩm mới hoàn toàn - Anthem. Dù
                      vậy, chẳng ai ngờ rằng, đây lại là thất bại tiếp theo của
                      hãng <strong>game</strong> nổi đình nổi đám này. Được ra
                      mắt 2 năm chỉ sau khi Andromeda ra mắt, nhiều game thru
                      cảm thấy rằng Anthem đã được làm ra quá gấp và vẫn có quá
                      nhiều thiếu sót, như thể chỉ được làm để "trả bài" cho kịp
                      vây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/-1628089939548380656776.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      <strong>Game</strong>play của Anthem khá kỳ quặc, mặc dù ý
                      tưởng của nó khá tốt nhưng cách triển khai gặp quá nhiều
                      vấn đề. Người chơi không hề được combat trong bộ giáp mà
                      chỉ được múa may một chút và cuối cùng vẫn phải dùng súng.
                      Về cuối game, game thủ chẳng có gì nhiều để làm ngoài việc
                      cày cuốc. Trải nghiệm ban đầu thì rất tuyệt, nhưng cuối
                      cùng chẳng có nhiều điều đọng lại trong đầu cùng Anthem.{" "}
                    </p>
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
